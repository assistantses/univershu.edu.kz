// =====================================================================
//  IMAGES — единый список всех изображений сайта.
//  Чтобы заменить картинку, просто впишите сюда новую ссылку
//  (или путь вида "/имя-файла.jpg" на файл из папки public) —
//  остальной код трогать не нужно. Рядом с каждой строкой — комментарий,
//  где именно это изображение используется на сайте.
// =====================================================================

export const images = {
  // Главная — фон hero-слайдера (2 слайда, сменяются автоматически)
  heroSlide1: '/dsc_2908__6192x3141.jpg',
  heroSlide2: '/dscf9130__3120x1760.jpg',

  // Главная — сертификат QS Stars (увеличивается по клику)
  qsCertificate: '/shymkentuniversityqsstarscertificate2026-1_page-0001__2656x3683__2656x3683.jpg',

  // Главная — фото кампуса в блоке "Почему мы"
  whyUsCampus: 'https://picsum.photos/seed/aqu-why/800/560',

  // /contacts — фото карты/схемы проезда
  contactsMap: 'https://picsum.photos/seed/aqu-map/800/360',

  // /about — Руководство (по порядку: Ректор, проректор по академ. вопросам, проректор по науке, проректор по цифровизации, проректор по соц. работе)
  leadership: [
    '/leader-rector.png',
    '/leader-vr-academic.jpg',
    '/leader-vr-science.jpg',
    '/leader-vr-digital.png',
    '/leader-vr-social.jpg',
  ],

  // Новости (главная + /news + /news/:id) — по id новости
  news: {
    'graduates-2026': '/news1.jpeg', // Выпускники — 2026
    'vacancy-fair-2026': '/news2.jpeg', // Ярмарка вакансий
    'regional-vacancies': '/news3.jpeg', // Региональная ярмарка
    'qs-stars-2026': '/news4.jpeg', // QS Stars
    'summer-school-2026': '/news5.jpeg', // Летняя школа
    'international-agreement-2026': '/news6.jpeg', // Международное соглашение
  },

  // Раздел "Спорт" на главной — по id
  sports: {
    s1: '/sport1.jpeg', // Футзал
    s2: '/sport2.jpg', // Вольная борьба
    s3: '/sport3.jpg', // Универсиада
    s4: '/sport4.jpeg', // Шахматы
    s5: '/sport5.jpeg', // Лёгкая атлетика
    s6: '/sport6.png', // Волейбол
  },

  // Раздел "Объявления" на главной — по id (изображений всего 2, третья карточка переиспользует первое)
  announcements: {
    a1: '/notific1.jpeg',
    a2: '/notific2.jpeg',
    a3: '/notific2.jpeg',
  },

  // Логотипы партнёров на главной — 11 штук
  partnerLogos: ['/p1.png', '/p2.png', '/p3.png', '/p4.png', '/p5.png', '/p6.png', '/p7.png', '/p8.png', '/p9.png', '/p10.png', '/p11.png'],

  // Галерея "Наши достижения" на главной — слайдер по одному изображению
  achievements: ['/a1.jpg', '/a2.jpg'],

  // Страниц транскрипта (/archive/:hash/:certId) здесь нет: они не статика,
  // а лежат в бэкенде и отдаются только после ввода верного кода — см.
  // CertificateController. Адреса страниц приходят в ответе на verify.

  // /page/:key — фото руководителя подразделения/кафедры/факультета (если есть
  // на сайте-образце). Ключ = тот же ключ раздела в pageContent.js. Если фото
  // для ключа нет — карточка руководителя на странице просто не показывается.
  staffPhotos: {
    youthOrg: '/head-youthorg.png', // Студентам — председатель молодёжной организации (студенческий ректор)
    anticorruptionService: '/head-anticorruptionservice.png', // Антикоррупционная служба — руководитель
    academicCouncil: '/head-academiccouncil.png', // Учёный совет — учёный секретарь
    rectorBlog: '/head-rectorblog.png', // Блог ректора — ректор
    facultyScienceHum: '/head-facultyScienceHum.png', // Декан — Джанабаев Даурен Жумагалиевич
    facultyPedagogy: '/head-facultyPedagogy.jpg', // Декан — Турабаева Лаззат Калыкуловна
    chairNaturalSci: '/head-chairNaturalSci.png', // Зав. кафедрой — Тлегенова Кулайша Бейсенбаевна
    chairMathIT: '/head-chairMathIT.png', // Зав. кафедрой — Медетбекова Рыскуль Ашималиевна
    chairLawHistory: '/head-chairLawHistory.jpg', // Зав. кафедрой — Жарылкапова Гульзагира Парменбаевна
    chairBusiness: '/head-chairBusiness.png', // Зав. кафедрой — Калыкулов Куатбек Мухтарбекович
    chairPedagogy: '/head-chairPedagogy.png', // Зав. кафедрой — Ибрагим Кайрат Аменулы
    chairPhysEd: '/head-chairPhysEd.jpg', // Зав. кафедрой — Рустемов Мажит Мусаевич
    deptIntl: '/head-deptintl.jpg', // Директор департамента международного сотрудничества — Кобланова Онгаркуль Нурмухамедовна
    deptScience: '/head-deptscience.jpeg', // Директор департамента науки — Жошибекова Багила Съезбаевна
    careerCenter: '/head-careercenter.jpg', // Руководитель Центра профессиональной практики и карьеры — Кылышбаева Гульмира Дихановна
    deptYouth: '/head-deptyouth.jpg', // Директор департамента молодёжной политики — Төлен Ерсултан Ермекулы
    archive: '/head-archive.jpg', // Заведующая архивом — Жетписбаева Назгуль Абдыхановна
    library: '/head-library.jpg', // Заведующая библиотекой — Раева Гульсим Аскаровна
    deptMarketing: '/head-deptmarketing.jpeg', // Руководитель департамента маркетинга и связей с общественностью — Саипов Фархат Бахадырулы
    deptInfrastructure: '/head-deptinfrastructure.png', // Руководитель департамента хозяйственной деятельности и развития инфраструктуры — Нуркин Мухтар Назарович
    postgradCenter: '/head-postgradcenter.png', // Директор Центра послевузовского образования — Айтенова Динара Оразбаевна
    medicalService: '/head-medicalservice.png', // Руководитель медицинской службы — Баимбетова Кулзахира Дармешевна
    deptAcademic: '/head-deptacademic.jpg', // Директор департамента по академическим вопросам — Мамбетова Ляззат Маратовна
    deptStrategic: '/head-deptstrategic.jpg', // Руководитель департамента стратегического развития и внутреннего обеспечения качества — Айдарова Амангул Амировна
    deptQuality: '/head-deptquality.jpg', // Директор департамента по обеспечению академического качества образовательных программ — Кобланова Онгаркуль Нурмухамедовна
    deptHR: '/head-depthr.png', // Руководитель департамента управления персоналом — Жумагулова Куралай Кадырбаевна
    registrarOffice: '/head-registraroffice.png', // Руководитель офиса регистратора — Менликулова Адеми Бакытовна
    studentCenter: '/head-studentcenter.png', // Руководитель центра обслуживания студентов — Бетиков Руслан Болатұлы
    deptDigital: '/head-deptdigital.jpg', // Руководитель департамента цифровых технологий — Жаппар Алтынбек Мұхтарбекұлы
    deptFinance: '/head-deptfinance.jpg', // Директор департамента, главный бухгалтер — Керимбекова Акерке Адиловна
  },

  // /page/aiAqu — реальные изображения со страницы-образца
  aiSana: {
    title: '/aisana-title.jpeg', // Титульный слайд программы «AI-SANA»
    roadmap: '/aisana-roadmap.png', // Инфографика дорожной карты (4 этапа)
    event: '/aisana-event1.jpeg', // Презентация ИИ-центра Alem.AI на AlmatyFinTechDays
    classPhotos: ['/aisana-class1.jpeg', '/aisana-class2.jpeg', '/aisana-class3.jpeg'], // Презентация программы студентам университета
  },

  // /page/sdg — официальные иконки целей ООН (с сайта-образца)
  sdgIcons: {
    4: '/sdg-4.jpg',
    5: '/sdg-5.jpg',
    8: '/sdg-8.jpg',
    15: '/sdg-15.jpg',
    17: '/sdg-17.jpg',
  },
  sdgWheel: '/sdg-wheel.png',
}
