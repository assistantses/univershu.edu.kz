// =====================================================================
//  IMAGES — единый список всех изображений сайта.
//  Чтобы заменить картинку, просто впишите сюда новую ссылку
//  (или путь вида "/имя-файла.jpg" на файл из папки public) —
//  остальной код трогать не нужно. Рядом с каждой строкой — комментарий,
//  где именно это изображение используется на сайте.
// =====================================================================

export const images = {
  // Главная — фон hero-слайдера (2 слайда, сменяются автоматически)
  heroSlide1: 'https://picsum.photos/seed/aqu-campus/1600/700',
  heroSlide2: 'https://picsum.photos/seed/aqu-campus2/1600/700',

  // Главная — сертификат QS Stars (увеличивается по клику)
  qsCertificate: 'https://picsum.photos/seed/aqu-cert/900/1200',

  // Главная — фото кампуса в блоке "Почему мы"
  whyUsCampus: 'https://picsum.photos/seed/aqu-why/800/560',

  // /contacts — фото карты/схемы проезда
  contactsMap: 'https://picsum.photos/seed/aqu-map/800/360',

  // /about — Руководство (по порядку: Ректор, проректор по учебной работе, проректор по науке)
  leadership: [
    'https://picsum.photos/seed/aqu-l1/300/300',
    'https://picsum.photos/seed/aqu-l2/300/300',
    'https://picsum.photos/seed/aqu-l3/300/300',
  ],

  // Новости (главная + /news + /news/:id) — по id новости
  news: {
    'graduates-2026': 'https://picsum.photos/seed/aqu-grad/800/500', // Выпускники — 2026
    'vacancy-fair-2026': 'https://picsum.photos/seed/aqu-fair/800/500', // Ярмарка вакансий
    'regional-vacancies': 'https://picsum.photos/seed/aqu-region/800/500', // Региональная ярмарка
    'qs-stars-2026': 'https://picsum.photos/seed/aqu-qs/800/500', // QS Stars
    'summer-school-2026': 'https://picsum.photos/seed/aqu-summer/800/500', // Летняя школа
    'international-agreement-2026': 'https://picsum.photos/seed/aqu-agreement/800/500', // Международное соглашение
  },

  // Раздел "Спорт" на главной — по id
  sports: {
    s1: 'https://picsum.photos/seed/aqu-sport1/400/300', // Футзал
    s2: 'https://picsum.photos/seed/aqu-sport2/400/300', // Вольная борьба
    s3: 'https://picsum.photos/seed/aqu-sport3/400/300', // Универсиада
    s4: 'https://picsum.photos/seed/aqu-sport4/400/300', // Шахматы
    s5: 'https://picsum.photos/seed/aqu-sport5/400/300', // Лёгкая атлетика
    s6: 'https://picsum.photos/seed/aqu-sport6/400/300', // Волейбол
  },

  // Логотипы партнёров на главной — 12 штук, i = 1..12
  partnerLogo: (i) => `https://picsum.photos/seed/aqu-partner${i}/200/100?grayscale`,

  // Галерея "Наши достижения" на главной — 8 штук, i = 1..8
  achievementPhoto: (i) => `https://picsum.photos/seed/aqu-achieve${i}/400/400`,
}
