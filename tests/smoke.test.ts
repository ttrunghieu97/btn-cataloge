import { describe, test, expect } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const PUBLIC = resolve(ROOT, 'public');
const DIST = resolve(ROOT, 'dist');
const PDF_VIEWER = resolve(ROOT, 'src/components/PdfViewer.astro');

const TOTAL_PAGES = 18;
const LANGS = ['vi', 'en'] as const;
const RESPONSIVE_WIDTHS = [960, 1440];

// ---------------------------------------------------------------------------
// Pre-build: verify source assets exist
// ---------------------------------------------------------------------------
describe('Public assets integrity', () => {
  test.each(LANGS)('%s catalog images (1–18) exist', (lang) => {
    for (let i = 1; i <= TOTAL_PAGES; i++) {
      const file = `catalog/${lang}/page-${String(i).padStart(2, '0')}.webp`;
      expect(existsSync(resolve(PUBLIC, file)), `Missing ${file}`).toBe(true);
    }
  });

  test.each(LANGS)('%s responsive catalog images exist', (lang) => {
    for (let i = 1; i <= TOTAL_PAGES; i++) {
      const page = String(i).padStart(2, '0');
      for (const width of RESPONSIVE_WIDTHS) {
        const file = `catalog/${lang}/page-${page}-${width}.webp`;
        expect(existsSync(resolve(PUBLIC, file)), `Missing ${file}`).toBe(true);
      }
    }
  });

  test('PDF files exist', () => {
    expect(existsSync(resolve(PUBLIC, 'pdf/catalog-vi.pdf'))).toBe(true);
    expect(existsSync(resolve(PUBLIC, 'pdf/catalog-en.pdf'))).toBe(true);
  });

  test('logo and robots.txt exist', () => {
    expect(existsSync(resolve(PUBLIC, 'logo.png'))).toBe(true);
    expect(existsSync(resolve(PUBLIC, 'robots.txt'))).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// SEO config: required fields populated
// ---------------------------------------------------------------------------
describe('SEO config', () => {
  test('required fields populated', async () => {
    const { site } = await import('../src/config/seo.ts');
    expect(site.name).toBeTruthy();
    expect(site.pdf.vi).toBeTruthy();
    expect(site.pdf.en).toBeTruthy();

    for (const lang of LANGS) {
      const seo = site.seo[lang];
      expect(seo.pageTitle, `${lang} pageTitle`).toBeTruthy();
      expect(seo.pageDesc, `${lang} pageDesc`).toBeTruthy();
      expect(seo.keywords.length, `${lang} keywords`).toBeGreaterThan(0);
    }
  });
});

describe('Background music', () => {
  test('attempts autoplay and respects a manual pause', () => {
    const source = readFileSync(PDF_VIEWER, 'utf-8');
    expect(source).toContain('let musicManuallyPaused = false;');
    expect(source).toContain("initAudio().play().then(() => setMusicUI(true)).catch(() => {});");
    expect(source).toContain('if (musicPlaying || musicManuallyPaused) return;');
  });
});

// ---------------------------------------------------------------------------
// Post-build: verify HTML output (skipped when dist/ absent)
// ---------------------------------------------------------------------------
describe.runIf(existsSync(DIST))('Build output', () => {
  const routes = [
    { file: 'index.html', lang: 'vi' },
    { file: 'en/index.html', lang: 'en' },
    { file: '404.html', lang: 'vi' },
  ];

  test.each(routes)('$file exists in dist/', ({ file }) => {
    expect(existsSync(resolve(DIST, file)), `Missing dist/${file}`).toBe(true);
  });

  test('Vietnamese page has required SEO meta', () => {
    const html = readFileSync(resolve(DIST, 'index.html'), 'utf-8');
    expect(html).toContain('<html lang="vi"');
    expect(html).toContain('rel="canonical"');
    expect(html).toContain('hreflang="vi"');
    expect(html).toContain('hreflang="en"');
    expect(html).toContain('og:title');
    expect(html).toContain('og:description');
    expect(html).toContain('application/ld+json');
  });

  test('English page has required SEO meta', () => {
    const html = readFileSync(resolve(DIST, 'en/index.html'), 'utf-8');
    expect(html).toContain('<html lang="en"');
    expect(html).toContain('rel="canonical"');
    expect(html).toContain('og:title');
  });

  test('404 page blocks indexing', () => {
    const html = readFileSync(resolve(DIST, '404.html'), 'utf-8');
    expect(html).toContain('noindex');
  });

  test('all 18 catalog images referenced in Vietnamese page', () => {
    const html = readFileSync(resolve(DIST, 'index.html'), 'utf-8');
    for (let i = 1; i <= TOTAL_PAGES; i++) {
      const num = String(i).padStart(2, '0');
      expect(html, `Missing image ref: page-${num}`).toContain(`page-${num}.webp`);
    }
  });

  test('Vietnamese page references responsive catalog images', () => {
    const html = readFileSync(resolve(DIST, 'index.html'), 'utf-8');
    expect(html).toContain('srcset=');
    for (const width of RESPONSIVE_WIDTHS) {
      expect(html, `Missing ${width}px source`).toContain(`page-01-${width}.webp`);
    }
  });
});
