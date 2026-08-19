export interface Faq {
  question: string;
  answer: string;
}

export interface LangSeo {
  lang: 'vi' | 'en';
  pageTitle: string;
  pageDesc: string;
  ogLocale: string;
  keywords: string[];
  introHeading: string;
  intro: string[];
  faqHeading: string;
  faqs: Faq[];
}

export const site = {
  name: 'Bách Thảo Ngân Tuyên Quang',
  flipbooks: {
    vi: 'https://heyzine.com/flip-book/4545e51740.html',
    en: 'https://heyzine.com/flip-book/d9ee7d176e.html',
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
        'trung thu Tuyên Quang',
        'Trung thu Thành Tuyên',
        'đặc sản Tuyên Quang',
        'du lịch Tuyên Quang',
        'điểm du lịch Tuyên Quang',
      ],
      introHeading: 'Tổ Hợp Nghỉ Dưỡng & Giải Trí Sáng Tạo Bách Thảo Ngân Tuyên Quang',
      intro: [
        'Bách Thảo Ngân Tuyên Quang là tổ hợp nghỉ dưỡng, ẩm thực và giải trí tọa lạc tại 465 đường Lê Duẩn, phường Minh Xuân, thành phố Tuyên Quang. Khu phức hợp hội tụ lưu trú, trung tâm sự kiện & tiệc cưới, nhà hàng, thể thao và camping – điểm đến lý tưởng khi du lịch Tuyên Quang.',
        'Bạn đang tìm ăn gì ở Tuyên Quang, chơi gì ở Tuyên Quang hay muốn trải nghiệm Trung thu Thành Tuyên? Xem catalog trực tuyến để khám phá toàn bộ không gian, dịch vụ và đặc sản Bách Thảo Ngân.',
      ],
      faqHeading: 'Câu hỏi thường gặp',
      faqs: [
        {
          question: 'Ăn gì ở Tuyên Quang?',
          answer:
            'Tuyên Quang nổi tiếng với nhiều đặc sản như bánh gai, bánh nếp nhân trứng kiến, chè lam, gà đen, thịt lợn cắp nách, cá bống suối. Tại Bách Thảo Ngân, du khách còn có thể thưởng thức ẩm thực Âu – Á trong không gian nhà hàng của khu nghỉ dưỡng.',
        },
        {
          question: 'Chơi gì ở Tuyên Quang?',
          answer:
            'Du lịch Tuyên Quang gợi ý nhiều điểm đến như hồ Na Hang, khu di tích Tân Trào, thác Bản Ba, đền Đuổm cùng cảnh đẹp sông Lô. Trong khuôn viên Bách Thảo Ngân, du khách có thể vui chơi giải trí, thể thao, camping hoặc tham dự sự kiện tại trung tâm tiệc cưới & hội nghị.',
        },
        {
          question: 'Trung thu Tuyên Quang có gì đặc sắc?',
          answer:
            'Tuyên Quang nổi tiếng cả nước với Lễ hội Thành Tuyên – đêm hội trung thu với những chiếc đèn lồng khổng lồ từng được xác lập kỷ lục. Dịp rằm tháng 8, Bách Thảo Ngân cũng tổ chức các hoạt động vui chơi Trung thu cho gia đình và trẻ em.',
        },
        {
          question: 'Bách Thảo Ngân Tuyên Quang ở đâu?',
          answer:
            'Bách Thảo Ngân tọa lạc tại 465 đường Lê Duẩn, Tổ dân phố Tân Hà 32, phường Minh Xuân, thành phố Tuyên Quang, tỉnh Tuyên Quang. Hotline: 0327.326.326 – Email: bachthaongantq@gmail.com.',
        },
        {
          question: 'Bách Thảo Ngân có những dịch vụ gì?',
          answer:
            'Bách Thảo Ngân gồm các dịch vụ chính: lưu trú, trung tâm sự kiện & tiệc cưới, ẩm thực & nhà hàng, giải trí & thể thao và camping – phù hợp cho nghỉ dưỡng gia đình, team building và tổ chức sự kiện.',
        },
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
        'Tuyen Quang travel',
        'Mid-Autumn Festival Tuyen Quang',
        'Thanh Tuyen lantern festival',
      ],
      introHeading: 'Bách Thảo Ngân Tuyên Quang Resort & Entertainment Complex',
      intro: [
        'Bách Thảo Ngân Tuyên Quang is a resort, dining and entertainment complex located at 465 Lê Duẩn Street, Minh Xuân Ward, Tuyên Quang City. The complex features accommodation, events & weddings, restaurants, sports and camping – an ideal destination for Tuyên Quang travel.',
        'Looking for what to eat in Tuyên Quang, things to do in Tuyên Quang, or the Thành Tuyên Mid-Autumn lantern festival? Browse the online catalog to explore the spaces, services and local specialties of Bách Thảo Ngân.',
      ],
      faqHeading: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'What to eat in Tuyên Quang?',
          answer:
            'Tuyên Quang is famous for local specialties such as bánh gai (black sesame cake), sticky rice with ant eggs, chè lam, black chicken and mountain stream fish. At Bách Thảo Ngân you can also enjoy European and Asian cuisine at the resort restaurants.',
        },
        {
          question: 'Things to do in Tuyên Quang?',
          answer:
            'Tuyên Quang offers highlights like Na Hang lake, the Tân Trào heritage site, Bản Ba Waterfall and the Lô River. Inside Bách Thảo Ngân, guests can enjoy entertainment, sports, camping, or attend events at the wedding & conference center.',
        },
        {
          question: 'Is there a Mid-Autumn Festival in Tuyên Quang?',
          answer:
            'Yes. Tuyên Quang is nationally famous for the Thành Tuyên Festival – a Mid-Autumn celebration featuring giant record-breaking lanterns. Bách Thảo Ngân also hosts Mid-Autumn activities for families and children.',
        },
        {
          question: 'Where is Bách Thảo Ngân Tuyên Quang located?',
          answer:
            'Bách Thảo Ngân is at 465 Lê Duẩn Street, Minh Xuân Ward, Tuyên Quang City, Tuyên Quang Province. Hotline: 0327.326.326 – Email: bachthaongantq@gmail.com.',
        },
        {
          question: 'What services does Bách Thảo Ngân offer?',
          answer:
            'Main services include accommodation, events & weddings, dining & restaurants, entertainment & sports and camping – suitable for family getaways, team building and event hosting.',
        },
      ],
    },
  },
} as const;
