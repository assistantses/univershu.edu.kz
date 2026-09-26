// Демонстрационный контент (структура повторяет типовой сайт вуза).
// Изображения централизованы в src/images.js — там же их можно заменить.
// Тексты переведены на 3 языка: kk (қазақша), ru (русский), en (English).
import { images } from '../images.js'

// Возвращает текст на нужном языке с откатом на русский, если перевода нет.
export function localize(item, lang) {
  return item[lang] || item.ru
}

export const news = [
  {
    id: 'graduates-2026',
    date: '2026-09-08',
    image: images.news['graduates-2026'],
    kk: {
      tag: 'Іс-шара',
      title: 'Түлектер — 2026',
      excerpt:
        'Бакалавриат пен магистратура түлектеріне дипломдарды салтанатты түрде табыстау рәсімі өтті. 1 200-ден астам жас маман кәсіби өмірге жолдама алды.',
      body: [
        'Aqniet University акт залында 2026 жылғы түлектерге диплом табыстаудың салтанатты рәсімі өтті.',
        'Ректор түлектерді құттықтап, кәсіби қызметте табыс тіледі. Үздік студенттерге үздіктік дипломдары табысталды.',
        'Биыл университет бакалавриаттың 29 бағыты мен магистратураның 9 бағдарламасы бойынша мамандар шығарды.',
      ],
    },
    ru: {
      tag: 'Событие',
      title: 'Выпускники — 2026',
      excerpt:
        'Торжественное вручение дипломов выпускникам бакалавриата и магистратуры. Более 1 200 молодых специалистов получили путёвку в профессиональную жизнь.',
      body: [
        'В актовом зале Aqniet University состоялась торжественная церемония вручения дипломов выпускникам 2026 года.',
        'Ректор поздравил выпускников и пожелал им успехов в профессиональной деятельности. Лучшим студентам были вручены дипломы с отличием.',
        'В этом году университет выпустил специалистов по 29 направлениям бакалавриата и 9 программам магистратуры.',
      ],
    },
    en: {
      tag: 'Event',
      title: 'Graduates — 2026',
      excerpt:
        'A ceremonial diploma presentation for bachelor\'s and master\'s graduates. Over 1,200 young professionals received their send-off into working life.',
      body: [
        'A ceremonial diploma presentation for the class of 2026 was held in the Aqniet University assembly hall.',
        'The rector congratulated the graduates and wished them success in their professional careers. The top students received diplomas with honors.',
        'This year the university graduated specialists across 29 bachelor\'s tracks and 9 master\'s programs.',
      ],
    },
  },
  {
    id: 'vacancy-fair-2026',
    date: '2026-09-08',
    image: images.news['vacancy-fair-2026'],
    kk: {
      tag: 'Мансап',
      title: 'Вакансиялар жәрмеңкесі — 2026',
      excerpt:
        'Өңірдің 40-тан астам жұмыс берушісі студенттер мен түлектермен кездесті. Әңгімелесулер өтті және алдын ала уағдаластықтарға қол жеткізілді.',
      body: [
        'Университет алаңында өңірдің жетекші компаниялары қатысқан жыл сайынғы вакансиялар жәрмеңкесі өтті.',
        'Студенттер экспресс-сұхбаттан өтіп, тағылымдамалар мен жұмыс берушілердің талаптары туралы біле алды.',
      ],
    },
    ru: {
      tag: 'Карьера',
      title: 'Ярмарка вакансий — 2026',
      excerpt:
        'Более 40 работодателей региона встретились со студентами и выпускниками. Проведены собеседования и заключены предварительные договорённости.',
      body: [
        'На площадке университета прошла ежегодная ярмарка вакансий с участием ведущих компаний региона.',
        'Студенты смогли пройти экспресс-собеседования, узнать о стажировках и требованиях работодателей.',
      ],
    },
    en: {
      tag: 'Career',
      title: 'Job Fair — 2026',
      excerpt:
        'More than 40 regional employers met with students and graduates. Interviews were held and preliminary agreements were reached.',
      body: [
        'The university hosted its annual job fair featuring leading companies from the region.',
        'Students took part in express interviews and learned about internships and employer requirements.',
      ],
    },
  },
  {
    id: 'regional-vacancies',
    date: '2026-09-08',
    image: images.news['regional-vacancies'],
    kk: {
      tag: 'Мансап',
      title: 'Өңірлік вакансиялар жәрмеңкесі',
      excerpt:
        'Университеттің мансап орталығы облыс әкімдігімен бірлесіп жоғары курс студенттеріне арналған көшпелі жәрмеңке ұйымдастырды.',
      body: [
        'Өңірлік серіктестермен бірлесіп университет түлек курс студенттеріне арналған вакансиялар жәрмеңкесін өткізді.',
      ],
    },
    ru: {
      tag: 'Карьера',
      title: 'Региональная ярмарка вакансий',
      excerpt:
        'Центр карьеры университета организовал выездную ярмарку для студентов старших курсов совместно с акиматом области.',
      body: [
        'Совместно с региональными партнёрами университет провёл ярмарку вакансий для студентов выпускных курсов.',
      ],
    },
    en: {
      tag: 'Career',
      title: 'Regional Job Fair',
      excerpt:
        'The university\'s career center, together with the regional administration, organized an outreach fair for senior students.',
      body: [
        'Together with regional partners, the university held a job fair for graduating students.',
      ],
    },
  },
  {
    id: 'qs-stars-2026',
    date: '2026-06-29',
    image: images.news['qs-stars-2026'],
    kk: {
      tag: 'Мойындау',
      title: 'Халықаралық мойындау: 3 жұлдызды QS Stars',
      excerpt:
        'Университет негізгі қызмет бағыттары бойынша үш жұлдызбен бағаланған халықаралық QS Stars рейтингін растады.',
      body: [
        'Aqniet University халықаралық QS Stars бағасын — үш жұлдызды алды.',
        'Баға оқыту сапасын, түлектердің жұмысқа орналасуын және инфрақұрылымның дамуын көрсетеді.',
      ],
    },
    ru: {
      tag: 'Признание',
      title: 'Международное признание: 3 звезды QS Stars',
      excerpt:
        'Университет подтвердил международный рейтинг QS Stars с оценкой в три звезды по ключевым направлениям деятельности.',
      body: [
        'Aqniet University получил международную оценку QS Stars — три звезды.',
        'Оценка отражает качество преподавания, трудоустройство выпускников и развитие инфраструктуры.',
      ],
    },
    en: {
      tag: 'Recognition',
      title: 'International Recognition: 3 QS Stars',
      excerpt:
        'The university confirmed its international QS Stars rating, earning three stars across key performance areas.',
      body: [
        'Aqniet University received an international QS Stars rating of three stars.',
        'The rating reflects teaching quality, graduate employability, and infrastructure development.',
      ],
    },
  },
  {
    id: 'summer-school-2026',
    date: '2026-07-15',
    image: images.news['summer-school-2026'],
    kk: {
      tag: 'Ғылым',
      title: 'Абитуриенттерге арналған жазғы мектеп',
      excerpt:
        '200-ден астам оқушы университеттің цифрлық технологиялар мен кәсіпкерлікке арналған жазғы ғылыми мектебіне қатысты.',
      body: [
        'Aqniet University жазғы мектебі елдің әртүрлі өңірлерінен оқушыларды жинады.',
        'Қатысушылар бағдарламалау, дизайн және кәсіпкерліктің негіздері бойынша курстардан өтті.',
      ],
    },
    ru: {
      tag: 'Наука',
      title: 'Летняя школа для абитуриентов',
      excerpt:
        'Более 200 школьников приняли участие в летней научной школе университета, посвящённой цифровым технологиям и предпринимательству.',
      body: [
        'Летняя школа Aqniet University собрала школьников из разных регионов страны.',
        'Участники прошли курсы по программированию, дизайну и основам предпринимательства.',
      ],
    },
    en: {
      tag: 'Science',
      title: 'Summer School for Applicants',
      excerpt:
        'More than 200 school students took part in the university\'s summer science school on digital technology and entrepreneurship.',
      body: [
        'The Aqniet University summer school brought together school students from across the country.',
        'Participants completed courses in programming, design, and the basics of entrepreneurship.',
      ],
    },
  },
  {
    id: 'international-agreement-2026',
    date: '2026-06-10',
    image: images.news['international-agreement-2026'],
    kk: {
      tag: 'Ынтымақтастық',
      title: 'Шетелдік университетпен жаңа келісім',
      excerpt:
        'Академиялық мобильділік және бірлескен зерттеулер саласында ынтымақтастық туралы меморандумға қол қойылды.',
      body: [
        'Aqniet University шетелдік жоғары оқу орнымен серіктестік туралы келісім жасады.',
        'Құжат студенттер алмасуын және бірлескен ғылыми жобаларды көздейді.',
      ],
    },
    ru: {
      tag: 'Сотрудничество',
      title: 'Новое соглашение с зарубежным университетом',
      excerpt:
        'Подписан меморандум о сотрудничестве в области академической мобильности и совместных исследований.',
      body: [
        'Aqniet University заключил соглашение о партнёрстве с зарубежным вузом.',
        'Документ предусматривает обмен студентами и совместные научные проекты.',
      ],
    },
    en: {
      tag: 'Cooperation',
      title: 'New Agreement With a Foreign University',
      excerpt:
        'A memorandum of cooperation was signed covering academic mobility and joint research.',
      body: [
        'Aqniet University signed a partnership agreement with a foreign university.',
        'The document provides for student exchange and joint research projects.',
      ],
    },
  },
]

export const announcements = [
  {
    id: 'a1',
    date: '2026-09-05',
    image: images.announcements.a1,
    kk: { title: 'ПОҚ бос лауазымдарына конкурс туралы хабарландыру' },
    ru: { title: 'Объявление о конкурсе на замещение вакантных должностей ППС' },
    en: { title: 'Announcement: competition for vacant faculty positions' },
  },
  {
    id: 'a2',
    date: '2026-09-03',
    image: images.announcements.a2,
    kk: { title: 'Оқытушылардың біліктілігін арттыру бағдарламасы (күз ағыны)' },
    ru: { title: 'Программа повышения квалификации преподавателей (осенний поток)' },
    en: { title: 'Faculty professional development program (autumn intake)' },
  },
  {
    id: 'a3',
    date: '2026-09-01',
    image: images.announcements.a3,
    kk: { title: 'Білім беру гранттарына құжат қабылдау 20 қыркүйекке дейін ұзартылды' },
    ru: { title: 'Приём документов на образовательные гранты продлён до 20 сентября' },
    en: { title: 'Application deadline for education grants extended to September 20' },
  },
]

export const sports = [
  { id: 's1', image: images.sports.s1, kk: { title: 'Футзал құрамасының жеңісі' }, ru: { title: 'Победа сборной по футзалу' }, en: { title: 'Futsal team victory' } },
  { id: 's2', image: images.sports.s2, kk: { title: 'Еркін күрестен чемпионат' }, ru: { title: 'Чемпионат по вольной борьбе' }, en: { title: 'Freestyle wrestling championship' } },
  { id: 's3', image: images.sports.s3, kk: { title: 'Универсиада — 2026' }, ru: { title: 'Универсиада — 2026' }, en: { title: 'Universiade — 2026' } },
  { id: 's4', image: images.sports.s4, kk: { title: 'Шахматтан турнир' }, ru: { title: 'Турнир по шахматам' }, en: { title: 'Chess tournament' } },
  { id: 's5', image: images.sports.s5, kk: { title: 'Жеңіл атлетика кроссы' }, ru: { title: 'Легкоатлетический кросс' }, en: { title: 'Cross-country running' } },
  { id: 's6', image: images.sports.s6, kk: { title: 'Волейболдан ректор кубогы' }, ru: { title: 'Кубок ректора по волейболу' }, en: { title: 'Rector\'s Volleyball Cup' } },
]

export const features = {
  kk: [
    'Әртүрлі бағыттар бойынша бәсекеге қабілетті мамандарды дайындау',
    'Бакалавриаттың 29 және магистратураның 9 білім беру бағдарламасы бойынша оқыту',
    'Жоғары және жоғары оқу орнынан кейінгі білім беру жүйесінде 25 жылдық тәжірибе',
    'Қуатты инфрақұрылым',
    'Жоғары білікті профессор-оқытушылар құрамы',
    'Ғылыми-зерттеу жұмыстарына жағдай жасалған, 2 ғылыми-зерттеу институты жұмыс істейді',
    'Әлемнің үздік жоғары оқу орындарымен халықаралық ынтымақтастық',
    'Академиялық ұтқырлық',
    'Студенттерге арналған икемді жеңілдіктер жүйесі',
    '7 000-нан астам студент',
    '14 студиялық клуб пен үйірме',
    'Заманауи кітапхана',
    'Жайлы студенттік үй',
    'Студенттерге қызмет көрсету орталығы',
    'Медициналық қызмет',
    'Психологиялық қызмет',
  ],
  ru: [
    'Выпуск конкурентоспособных специалистов разных направлений',
    'Обучение по 29 образовательным программам бакалавриата и 9 образовательных программам магистратуры',
    '25 лет образовательной деятельности в системе высшего и послевузовского образования',
    'Мощная инфраструктура',
    'Высококвалифицированный профессорско-преподавательский состав',
    'Условия для научно-исследовательской работы, функционируют 2 НИИ',
    'Международное сотрудничество с лучшими вузами мира',
    'Академическая мобильность',
    'Гибкая система льгот для студентов',
    'Более 7 000 обучающихся',
    '14 студийных клубов и кружков',
    'Библиотека нового времени',
    'Комфортный студенческий дом',
    'Центр обслуживания студентов',
    'Медицинская служба',
    'Психологическая служба',
  ],
  en: [
    'Training competitive specialists in various fields',
    'Education offered in 29 bachelor\'s and 9 master\'s programs',
    '25 years of experience in higher and postgraduate education',
    'Strong and modern infrastructure',
    'Highly qualified faculty',
    'Conditions for research activities; 2 research institutes operate within the university',
    'International cooperation with leading universities around the world',
    'Academic mobility',
    'Flexible system of benefits for students',
    'More than 7,000 students',
    '14 student clubs and creative studios',
    'A modern library',
    'A comfortable student residence',
    'Student Service Center',
    'Medical service',
    'Psychological service',
  ],
}

export const services = [
  {
    id: 'portal',
    icon: 'portal',
    href: '#',
    kk: { title: 'ПОРТАЛ', desc: 'Оқу процесін басқарудың автоматтандырылған жүйесі' },
    ru: { title: 'ПОРТАЛ', desc: 'Автоматизированная система управления учебным процессом' },
    en: { title: 'PORTAL', desc: 'Automated learning management system' },
  },
  {
    id: 'app',
    icon: 'app',
    href: '#',
    kk: { title: 'Мобильді қосымша', desc: 'Смартфон арқылы оқу порталына қолжетімділік' },
    ru: { title: 'Мобильное приложение', desc: 'Доступ к учебному порталу со смартфона' },
    en: { title: 'Mobile App', desc: 'Access the learning portal from your smartphone' },
  },
  {
    id: 'test',
    icon: 'test',
    href: '#',
    kk: { title: 'Тест-портал', desc: 'Онлайн емтихан және тестілеу жүйесі' },
    ru: { title: 'Тест-портал', desc: 'Система онлайн-экзаменов и тестирования' },
    en: { title: 'Test Portal', desc: 'Online exams and testing system' },
  },
  {
    id: 'lib',
    icon: 'lib',
    href: '#',
    kk: { title: 'Электрондық кітапхана', desc: 'Республикалық жоғары оқу орындары аралық цифрлық кітапхана' },
    ru: { title: 'Электронная библиотека', desc: 'Республиканская межвузовская цифровая библиотека' },
    en: { title: 'E-Library', desc: 'National inter-university digital library' },
  },
]

export const partners = images.partnerLogos.map((logo, i) => ({
  id: `p${i + 1}`,
  logo,
}))

export const achievements = Array.from({ length: 8 }, (_, i) => ({
  id: `ach${i + 1}`,
  image: images.achievementPhoto(i + 1),
}))
