export interface LangSeo {
  lang: 'vi' | 'en';
  pageTitle: string;
  pageDesc: string;
  ogLocale: string;
  keywords: string[];
}

export const site = {
  name: 'Bách Thảo Ngân Tuyên Quang',
  pdf: {
    vi: '/pdf/catalog-vi.pdf',
    en: '/pdf/catalog-en.pdf',
  },
  flipbooks: {
    vi: 'https://heyzine.com/flip-book/4545e51740.html',
    en: 'https://heyzine.com/flip-book/0af751ff71.html',
  },
  ogImage: 'https://bachthaongan.com.vn/wp-content/uploads/2026/07/toan-canh-bach-thao-ngan-1024x576.jpg',
  favicon:
    'https://bachthaongan.com.vn/wp-content/uploads/2025/09/cropped-870f64d6-efa7-40b0-8fb7-e1e767478610-scaled-1-32x32.png',
  appleTouchIcon:
    'https://bachthaongan.com.vn/wp-content/uploads/2025/09/cropped-870f64d6-efa7-40b0-8fb7-e1e767478610-scaled-1-180x180.png',
  phone: '0327.326.326',
  email: 'bachthaongantq@gmail.com',
  address: {
    streetAddress: '465 đường Lê Duẩn, Tổ dân phố Tân Hà 32, Phường Minh Xuân',
    addressLocality: 'Tuyên Quang',
    addressCountry: 'VN',
  },
  social: {
    facebook: 'https://www.facebook.com/bachthaonganTQ',
  },
  seo: {
    vi: {
      lang: 'vi',
      pageTitle: 'Bách Thảo Ngân Tuyên Quang – Catalog Nghỉ Dưỡng & Trung Thu',
      pageDesc:
        'Khám phá catalog Bách Thảo Ngân Tuyên Quang: resort, ẩm thực, đặc sản, ăn gì – chơi gì ở Tuyên Quang và Trung thu Thành Tuyên.',
      ogLocale: 'vi_VN',
      keywords: [
        'Bách Thảo Ngân',
        'Bách Thảo Ngân Tuyên Quang',
        'resort Tuyên Quang',
        'khu nghỉ dưỡng Tuyên Quang',
        'catalog Bách Thảo Ngân',
        'ăn gì ở Tuyên Quang',
        'chơi gì ở Tuyên Quang',
        'công viên nước Tuyên Quang',
        'trung thu Tuyên Quang',
        'Trung thu Thành Tuyên',
        'đặc sản Tuyên Quang',
        'du lịch Tuyên Quang',
        'điểm du lịch Tuyên Quang',
      ],
    },
    en: {
      lang: 'en',
      pageTitle: 'Bách Thảo Ngân Tuyên Quang Catalog – Resort & Mid-Autumn',
      pageDesc:
        'Explore Bách Thảo Ngân Tuyên Quang: resort & dining, what to eat, things to do in Tuyên Quang and the Thành Tuyên Mid-Autumn Festival.',
      ogLocale: 'en_US',
      keywords: [
        'Bach Thao Ngan',
        'Bach Thao Ngan Tuyen Quang',
        'Tuyen Quang resort',
        'things to do in Tuyen Quang',
        'what to eat in Tuyen Quang',
        'Tuyen Quang water park',
        'Tuyen Quang travel',
        'Mid-Autumn Festival Tuyen Quang',
        'Thanh Tuyen lantern festival',
      ],
    },
  },
} as const;
