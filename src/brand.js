// =====================================================================
//  BRAND CONFIG — единая точка ребрендинга.
//  Поменяйте значения здесь + цвета в tailwind.config.js — и весь сайт
//  сменит название, контакты и т.д. Это ВЫМЫШЛЕННЫЙ вуз-шаблон.
//  Переводимые тексты (навигация, лейблы) — в src/i18n/locales/*.json.
// =====================================================================
export const brand = {
  name: 'Aqniet University',
  nameShort: 'AqU',
  nameRu: 'Университет Ақниет',
  founded: 2001,
  phone: '8 (7252) 55-58-61',
  phoneRaw: '+77252555861',
  email: 'info@aqniet-university.example',
  instagram: 'aqniet.university',
  stats: {
    students: '7 000+',
    bachelor: 29,
    master: 9,
    years: 25,
    clubs: 14,
    faculties: 2,
  },
}

// Navigation tree: labels live in i18n under `nav.<key>`, looked up via t().
// Most leaf pages route to /page/<key>, rendered generically by ContentPage.jsx
// from src/data/pageContent.js.
export const nav = [
  {
    key: 'home',
    to: '/',
    children: [
      { key: 'history', to: '/about#history' },
      { key: 'board', to: '/page/board' },
      { key: 'leadership', to: '/about#leadership' },
      { key: 'structure', to: '/page/structure' },
      { key: 'mission', to: '/about#mission' },
      { key: 'devProgram', to: '/page/devProgram' },
      { key: 'qualityPolicy', to: '/page/qualityPolicy' },
      { key: 'licenses', to: '/about#licenses' },
      { key: 'sms', to: '/page/sms' },
      { key: 'academicCouncil', to: '/page/academicCouncil' },
      { key: 'rectorReport', to: '/page/rectorReport' },
      { key: 'contacts', to: '/contacts' },
      { key: 'policy', to: '/page/policy' },
    ],
  },
  {
    key: 'departments',
    to: '#',
    children: [
      { key: 'deptAcademic', to: '/page/deptAcademic' },
      { key: 'deptStrategic', to: '/page/deptStrategic' },
      { key: 'deptQuality', to: '/page/deptQuality' },
      { key: 'deptHR', to: '/page/deptHR' },
      { key: 'registrarOffice', to: '/page/registrarOffice' },
      { key: 'studentCenter', to: '/page/studentCenter' },
      { key: 'deptDigital', to: '/page/deptDigital' },
      { key: 'deptFinance', to: '/page/deptFinance' },
      { key: 'deptIntl', to: '/page/deptIntl' },
      { key: 'deptScience', to: '/page/deptScience' },
      { key: 'careerCenter', to: '/page/careerCenter' },
      { key: 'deptYouth', to: '/page/deptYouth' },
      { key: 'archive', to: '/page/archive' },
      { key: 'library', to: '/page/library' },
      { key: 'deptMarketing', to: '/page/deptMarketing' },
      { key: 'deptInfrastructure', to: '/page/deptInfrastructure' },
      { key: 'postgradCenter', to: '/page/postgradCenter' },
      { key: 'medicalService', to: '/page/medicalService' },
    ],
  },
  {
    key: 'education',
    to: '#',
    children: [
      { key: 'programs', to: '/page/programs' },
      { key: 'calendar', to: '/page/calendar' },
      { key: 'academicPolicy', to: '/page/academicPolicy' },
      { key: 'guide', to: '/page/guide' },
      { key: 'eduDocs', to: '/page/eduDocs' },
      { key: 'internalDocs', to: '/page/internalDocs' },
      { key: 'graduateModel', to: '/page/graduateModel' },
    ],
  },
  { key: 'science', to: '/page/science' },
  {
    key: 'faculties',
    to: '#',
    children: [
      { key: 'facultyScienceHum', to: '/page/facultyScienceHum' },
      { key: 'facultyPedagogy', to: '/page/facultyPedagogy' },
    ],
  },
  {
    key: 'chairs',
    to: '#',
    children: [
      { key: 'chairNaturalSci', to: '/page/chairNaturalSci' },
      { key: 'chairMathIT', to: '/page/chairMathIT' },
      { key: 'chairLawHistory', to: '/page/chairLawHistory' },
      { key: 'chairBusiness', to: '/page/chairBusiness' },
      { key: 'chairPhilology', to: '/page/chairPhilology' },
      { key: 'chairPedagogy', to: '/page/chairPedagogy' },
      { key: 'chairPhysEd', to: '/page/chairPhysEd' },
    ],
  },
  {
    key: 'students',
    to: '#',
    children: [
      { key: 'youthOrg', to: '/page/youthOrg' },
      { key: 'clubs', to: '/page/clubs' },
      { key: 'academicHelp', to: '/page/academicHelp' },
      { key: 'dorm', to: '/about#dorm' },
      { key: 'anticorruption', to: '/page/anticorruption' },
      { key: 'ethics', to: '/page/ethics' },
      { key: 'mobility', to: '/page/mobility' },
      { key: 'mooc', to: '/page/mooc' },
      { key: 'electives', to: '/page/electives' },
      { key: 'dormApplication', to: '/page/dormApplication' },
    ],
  },
  {
    key: 'applicant',
    to: '/#services',
    children: [
      { key: 'bachelor', to: '/page/bachelor' },
      { key: 'master', to: '/page/master' },
      { key: 'foreignApplicants', to: '/page/foreignApplicants' },
      { key: 'admissionRules', to: '/page/admissionRules' },
      { key: 'applicantInfo', to: '/page/applicantInfo' },
      { key: 'dormApplication', to: '/page/dormApplication' },
    ],
  },
  { key: 'inclusiveEducation', to: '/about#inclusive' },
  { key: 'anticorruptionService', to: '/page/anticorruptionService' },
  { key: 'complaints', to: '/contacts' },
  { key: 'tour3d', to: '/page/tour3d' },
  { key: 'psychSupport', to: '/page/psychSupport' },
  { key: 'microquals', to: '/page/microquals' },
  { key: 'rectorBlog', to: '/page/rectorBlog' },
  { key: 'aiAqu', to: '/page/aiAqu' },
  { key: 'sdg', to: '/page/sdg' },
  { key: 'news', to: '/news' },
]
