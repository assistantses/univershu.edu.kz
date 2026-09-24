// Контент для страниц-заглушек всех разделов навигации, которые раньше вели на "#".
// Реальный сайт-образец для многих таких страниц (Структура, Программа развития,
// Политика качества, СМК, Отчёт ректора) тоже не публикует текст, кроме заголовка —
// мы сохраняем эту особенность (пустой paragraphs[]) там, где это уместно.
// p = абзацы, list = список (если раздел представляет собой перечень, а не текст).

export const pageContent = {
  // --- "Главная" (о структуре управления) ---
  board: {
    kk: { p: ['Байқаушы кеңес — университеттің дамуына жәрдемдесетін және оның қызметіне қоғамдық бақылауды жүзеге асыратын алқалы орган.'] },
    ru: { p: ['Наблюдательный совет — коллегиальный орган, содействующий развитию университета и осуществляющий общественный контроль за его деятельностью.'] },
    en: { p: ['The Board of Trustees is a collegial body that supports the university\'s development and provides public oversight of its activities.'] },
  },
  structure: { kk: { p: [] }, ru: { p: [] }, en: { p: [] } },
  devProgram: { kk: { p: [] }, ru: { p: [] }, en: { p: [] } },
  qualityPolicy: { kk: { p: [] }, ru: { p: [] }, en: { p: [] } },
  sms: { kk: { p: [] }, ru: { p: [] }, en: { p: [] } },
  rectorReport: { kk: { p: [] }, ru: { p: [] }, en: { p: [] } },
  academicCouncil: {
    kk: { p: ['Ғылыми кеңес — университеттің сайланбалы алқалы басқару органы. Кеңес оқу процесін ұйымдастыру мәселелерін қарайды, оқу жоспарларын бекітеді және дамудың стратегиялық бағыттарын айқындайды.'] },
    ru: { p: ['Учёный совет — выборный коллегиальный орган управления университета. Совет рассматривает вопросы организации учебного процесса, утверждает учебные планы и определяет стратегические направления развития.'] },
    en: { p: ['The Academic Council is the university\'s elected collegial governing body. It addresses matters of academic process organization, approves curricula, and defines strategic directions for development.'] },
  },
  policy: {
    kk: { p: [], list: ['Тәуекелдерді басқару саясаты', 'Қайырымдылық және тұрақты даму саясаты', 'Заманауи құлдыққа қарсы саясат', 'Білім алушылардың қауіпсіздігі саясаты'] },
    ru: { p: [], list: ['Политика управления рисками', 'Политика в области благотворительности и устойчивого развития', 'Политика в отношении современного рабства', 'Политика безопасности обучающихся'] },
    en: { p: [], list: ['Risk management policy', 'Charitable giving and sustainable development policy', 'Modern slavery policy', 'Student safety policy'] },
  },

  // --- Подразделения ---
  deptAcademic: {
    kk: { p: ['Департамент оқу процесін ұйымдастыруды, білім беру бағдарламаларының әдістемелік қолдауын және оқыту сапасын бақылауды үйлестіреді.'] },
    ru: { p: ['Департамент курирует организацию учебного процесса, методическое сопровождение образовательных программ и контроль качества преподавания.'] },
    en: { p: ['The department oversees the organization of the academic process, methodological support for educational programs, and quality control of teaching.'] },
  },
  deptStrategic: {
    kk: { p: ['Департамент университеттің даму стратегиясын әзірлейді және білім сапасын ішкі қамтамасыз ету жүйесіне жауап береді.'] },
    ru: { p: ['Департамент разрабатывает стратегию развития университета и отвечает за внутреннюю систему обеспечения качества образования.'] },
    en: { p: ['The department develops the university\'s development strategy and is responsible for the internal education quality assurance system.'] },
  },
  deptQuality: {
    kk: { p: ['Департамент білім беру бағдарламаларын еңбек нарығы талаптары мен аккредитация стандарттарына сай талдайды және жетілдіреді.'] },
    ru: { p: ['Департамент анализирует и совершенствует образовательные программы в соответствии с требованиями рынка труда и стандартами аккредитации.'] },
    en: { p: ['The department analyzes and improves educational programs in line with labor market demands and accreditation standards.'] },
  },
  deptHR: {
    kk: { p: ['Департамент университет қызметкерлерін іріктеу, дамыту және әлеуметтік қолдау мәселелерімен айналысады.'] },
    ru: { p: ['Департамент отвечает за подбор, развитие и социальную поддержку сотрудников университета.'] },
    en: { p: ['The department is responsible for recruiting, developing, and providing social support to university staff.'] },
  },
  registrarOffice: {
    kk: { p: ['Тіркеу офисі үлгерімді есепке алуды, сабақ кестесін және білім туралы құжаттарды беруді жүргізеді.'] },
    ru: { p: ['Офис регистратора ведёт учёт успеваемости, расписание занятий и выдачу документов об образовании.'] },
    en: { p: ['The registrar\'s office manages academic records, class schedules, and the issuance of educational documents.'] },
  },
  studentCenter: {
    kk: { p: ['Орталық — студенттердің әкімшілік және оқу мәселелері бойынша жүгінетін бірыңғай нүктесі.'] },
    ru: { p: ['Центр — единая точка обращения студентов по административным и учебным вопросам.'] },
    en: { p: ['The center is a single point of contact for students on administrative and academic matters.'] },
  },
  deptDigital: {
    kk: { p: ['Департамент университеттің цифрлық инфрақұрылымын дамытады: оқу порталын, желілерді және ақпараттық жүйелерді.'] },
    ru: { p: ['Департамент развивает цифровую инфраструктуру университета: учебный портал, сети и информационные системы.'] },
    en: { p: ['The department develops the university\'s digital infrastructure: the learning portal, networks, and information systems.'] },
  },
  deptFinance: {
    kk: { p: ['Департамент университеттің қаржылық жоспарлауын, бюджеттеуін және экономикалық қызметін жүзеге асырады.'] },
    ru: { p: ['Департамент отвечает за финансовое планирование, бюджетирование и экономическую деятельность университета.'] },
    en: { p: ['The department is responsible for the university\'s financial planning, budgeting, and economic activity.'] },
  },
  deptIntl: {
    kk: { p: ['Департамент шетелдік жоғары оқу орындарымен серіктестікті, академиялық мобильділік пен бірлескен бағдарламаларды дамытады.'] },
    ru: { p: ['Департамент развивает партнёрство с зарубежными вузами, академическую мобильность и совместные программы.'] },
    en: { p: ['The department develops partnerships with foreign universities, academic mobility, and joint programs.'] },
  },
  deptScience: {
    kk: { p: ['Департамент университеттің ғылыми-зерттеу қызметін және ғылыми жобаларды қолдауды үйлестіреді.'] },
    ru: { p: ['Департамент координирует научно-исследовательскую деятельность и поддержку научных проектов университета.'] },
    en: { p: ['The department coordinates the university\'s research activity and support for research projects.'] },
  },
  careerCenter: {
    kk: { p: ['Орталық студенттердің тәжірибесін ұйымдастырады және түлектердің жұмысқа орналасуына көмектеседі.'] },
    ru: { p: ['Центр организует практику студентов и помогает выпускникам с трудоустройством.'] },
    en: { p: ['The center organizes student internships and helps graduates find employment.'] },
  },
  deptYouth: {
    kk: { p: ['Департамент студенттік бастамаларды, клубтар мен жастар жобаларын қолдайды.'] },
    ru: { p: ['Департамент поддерживает студенческие инициативы, клубы и молодёжные проекты.'] },
    en: { p: ['The department supports student initiatives, clubs, and youth projects.'] },
  },
  archive: {
    kk: { p: ['Мұрағат университеттің оқу және ғылыми қызметіне қатысты құжаттарды сақтайды.'] },
    ru: { p: ['Архив хранит документы об учебной и научной деятельности университета.'] },
    en: { p: ['The archive stores documents related to the university\'s academic and research activity.'] },
  },
  library: {
    kk: { p: ['Кітапхана оқу-әдістемелік, ғылыми әдебиетке және электрондық ресурстарға қолжетімділік береді.'] },
    ru: { p: ['Библиотека предоставляет доступ к учебной, научной литературе и электронным ресурсам.'] },
    en: { p: ['The library provides access to educational and scholarly literature as well as digital resources.'] },
  },
  deptMarketing: {
    kk: { p: ['Департамент университетті таныту, БАҚ пен әлеуметтік желілермен жұмысты жүзеге асырады.'] },
    ru: { p: ['Департамент отвечает за продвижение университета, работу со СМИ и социальными сетями.'] },
    en: { p: ['The department is responsible for university promotion and work with media and social networks.'] },
  },
  deptInfrastructure: {
    kk: { p: ['Департамент кампус ғимараттарын пайдалануды, абаттандыруды және инфрақұрылымды дамытуды қамтамасыз етеді.'] },
    ru: { p: ['Департамент обеспечивает эксплуатацию зданий, благоустройство и развитие инфраструктуры кампуса.'] },
    en: { p: ['The department ensures building operations, landscaping, and campus infrastructure development.'] },
  },
  postgradCenter: {
    kk: { p: ['Орталық магистратура және жоғары оқу орнынан кейінгі білім беру бағдарламаларын ұйымдастырады.'] },
    ru: { p: ['Центр организует программы магистратуры и послевузовского образования.'] },
    en: { p: ['The center organizes master\'s degree and postgraduate education programs.'] },
  },
  medicalService: {
    kk: { p: ['Медициналық қызмет студенттер мен қызметкерлерге алғашқы медициналық көмек көрсетеді.'] },
    ru: { p: ['Медицинская служба обеспечивает первичную медицинскую помощь студентам и сотрудникам.'] },
    en: { p: ['The medical service provides primary healthcare to students and staff.'] },
  },

  // --- Образование ---
  programs: {
    kk: { p: ['Университет еңбек нарығы талаптары мен Болон процесі қағидаттарына сай бакалавриат және магистратура бағдарламаларын жүзеге асырады.'] },
    ru: { p: ['Университет реализует образовательные программы бакалавриата и магистратуры, соответствующие требованиям рынка труда и принципам Болонского процесса.'] },
    en: { p: ['The university offers bachelor\'s and master\'s programs that meet labor market demands and the principles of the Bologna Process.'] },
  },
  calendar: {
    kk: { p: ['Академиялық күнтізбе ағымдағы оқу жылындағы семестрлер, сессиялар, демалыстар және қорытынды аттестаттау мерзімдерін белгілейді.'] },
    ru: { p: ['Академический календарь определяет сроки семестров, сессий, каникул и итоговой аттестации на текущий учебный год.'] },
    en: { p: ['The academic calendar sets the dates for semesters, exam sessions, breaks, and final assessment for the current academic year.'] },
  },
  academicPolicy: {
    kk: { p: ['Университеттің академиялық саясаты оқу процесін ұйымдастыруды, білімді бағалауды және академиялық адалдықты реттейді.'] },
    ru: { p: ['Академическая политика университета регулирует организацию учебного процесса, оценивание знаний и академическую честность.'] },
    en: { p: ['The university\'s academic policy governs the organization of the learning process, assessment, and academic integrity.'] },
  },
  guide: {
    kk: { p: ['Жолкөрсеткіш анықтамалықта студенттерге қажетті негізгі ақпарат бар: оқу ережелері, қызметтер және бөлімшелердің байланыстары.'] },
    ru: { p: ['Справочник-путеводитель содержит основную информацию для студентов: правила обучения, сервисы и контакты подразделений.'] },
    en: { p: ['The guidebook contains essential information for students: study rules, services, and department contacts.'] },
  },
  eduDocs: {
    kk: { p: ['Бөлімде университет беретін диплом, қосымша және басқа да білім туралы құжаттар үлгілері көрсетілген.'] },
    ru: { p: ['Раздел содержит образцы дипломов, приложений и других документов об образовании, выдаваемых университетом.'] },
    en: { p: ['This section contains sample diplomas, transcripts, and other educational documents issued by the university.'] },
  },
  internalDocs: {
    kk: { p: ['Бөлімде университет қызметін реттейтін ішкі нормативтік құжаттар орналасқан.'] },
    ru: { p: ['Раздел содержит внутренние нормативные документы, регулирующие деятельность университета.'] },
    en: { p: ['This section contains internal regulatory documents governing the university\'s operations.'] },
  },
  graduateModel: {
    kk: { p: ['Түлектің моделі университет түлегі иеленуі тиіс негізгі құзыреттер, білім мен дағдыларды сипаттайды.'] },
    ru: { p: ['Модель выпускника описывает ключевые компетенции, знания и навыки, которыми должен обладать выпускник университета.'] },
    en: { p: ['The graduate model describes the key competencies, knowledge, and skills a university graduate should possess.'] },
  },

  // --- Наука ---
  science: {
    kk: { p: ['Университет басым бағыттар бойынша ғылыми-зерттеу қызметін дамытады, студенттердің ғылыми жобаларын және оқытушылардың халықаралық басылымдардағы жарияланымдарын қолдайды.'] },
    ru: { p: ['Университет развивает научно-исследовательскую деятельность по приоритетным направлениям, поддерживает студенческие научные проекты и публикации преподавателей в международных изданиях.'] },
    en: { p: ['The university develops research activity in priority areas, supporting student research projects and faculty publications in international journals.'] },
  },

  // --- Факультеты ---
  facultyScienceHum: {
    kk: { p: ['Факультет жаратылыстану және гуманитарлық бағыттарды біріктіреді, құрамында жаратылыстану ғылымдары, құқық және тарих, бизнес және басқару, математика және информатика кафедралары бар.'] },
    ru: { p: ['Факультет объединяет естественнонаучные и гуманитарные направления подготовки, включает кафедры естественных наук, права и истории, бизнеса и управления, математики и информатики.'] },
    en: { p: ['The faculty combines natural science and humanities fields, comprising the chairs of natural sciences, law and history, business and management, and mathematics and IT.'] },
  },
  facultyPedagogy: {
    kk: { p: ['Факультет мектепке дейінгі, мектеп және арнайы білім беру жүйесі үшін педагог кадрлар даярлайды.'] },
    ru: { p: ['Факультет готовит педагогические кадры для системы дошкольного, школьного и специального образования.'] },
    en: { p: ['The faculty trains teaching staff for preschool, school, and special education systems.'] },
  },

  // --- Кафедры ---
  chairNaturalSci: {
    kk: { p: ['Кафедра биология, экология және жаратылыстану ғылымдары бойынша мамандар даярлайды, профильдік бағыттар бойынша ғылыми зерттеулер жүргізеді.'] },
    ru: { p: ['Кафедра готовит специалистов в области биологии, экологии и естественных наук, ведёт научные исследования по профильным направлениям.'] },
    en: { p: ['The chair trains specialists in biology, ecology, and natural sciences, and conducts research in its core areas.'] },
  },
  chairMathIT: {
    kk: { p: ['Кафедра математика, информатика және ақпараттық технологиялар бойынша мамандар даярлайды.'] },
    ru: { p: ['Кафедра готовит специалистов по математике, информатике и информационным технологиям.'] },
    en: { p: ['The chair trains specialists in mathematics, computer science, and information technology.'] },
  },
  chairLawHistory: {
    kk: { p: ['Кафедра құқық және тарих ғылымдары бойынша мамандар даярлайды.'] },
    ru: { p: ['Кафедра готовит специалистов в области права и исторических наук.'] },
    en: { p: ['The chair trains specialists in law and historical sciences.'] },
  },
  chairBusiness: {
    kk: { p: ['Кафедра экономика, бизнес және басқару бойынша мамандар даярлайды.'] },
    ru: { p: ['Кафедра готовит специалистов по экономике, бизнесу и управлению.'] },
    en: { p: ['The chair trains specialists in economics, business, and management.'] },
  },
  chairPhilology: {
    kk: { p: ['Кафедра қазақ, орыс және шетел тілдері мен әдебиеті бойынша мамандар даярлайды.'] },
    ru: { p: ['Кафедра готовит специалистов по казахскому, русскому и иностранным языкам и литературе.'] },
    en: { p: ['The chair trains specialists in Kazakh, Russian, and foreign languages and literature.'] },
  },
  chairPedagogy: {
    kk: { p: ['Кафедра мектепке дейінгі және бастауыш білім беру педагогтерін, психология саласы мамандарын даярлайды.'] },
    ru: { p: ['Кафедра готовит педагогов дошкольного и начального образования, специалистов в области психологии.'] },
    en: { p: ['The chair trains preschool and primary education teachers, as well as psychology specialists.'] },
  },
  chairPhysEd: {
    kk: { p: ['Кафедра дене шынықтыру және спорт саласы бойынша мамандар даярлайды.'] },
    ru: { p: ['Кафедра готовит специалистов в области физической культуры и спорта.'] },
    en: { p: ['The chair trains specialists in physical education and sport.'] },
  },

  // --- Студентам ---
  youthOrg: {
    kk: { p: ['Жастар ұйымы университеттің студенттік активін біріктіреді және әлеуметтік, мәдени бастамаларды іске асыруға көмектеседі.'] },
    ru: { p: ['Молодёжная организация объединяет студенческий актив университета и помогает реализовывать социальные и культурные инициативы.'] },
    en: { p: ['The youth organization brings together the university\'s active students and helps implement social and cultural initiatives.'] },
  },
  clubs: {
    kk: { p: ['Университетте волонтёрліктен бастап кәсіпкерлік пен шығармашылыққа дейінгі бірнеше студенттік клуб пен үйірме жұмыс істейді.'] },
    ru: { p: ['В университете работает несколько студенческих клубов и кружков — от волонтёрства до предпринимательства и творчества.'] },
    en: { p: ['The university runs several student clubs and societies — from volunteering to entrepreneurship and the arts.'] },
  },
  academicHelp: {
    kk: { p: ['Академиялық көмек қызметі студенттерге оқу процесі бойынша кеңес береді және қосымша қолдау қажет болғандарға жәрдемдеседі.'] },
    ru: { p: ['Служба академической помощи консультирует студентов по вопросам учебного процесса и поддерживает тех, кому нужна дополнительная помощь в учёбе.'] },
    en: { p: ['The academic support service advises students on the learning process and helps those who need extra academic assistance.'] },
  },
  anticorruption: {
    kk: { p: ['Университет кез келген нысандағы сыбайлас жемқорлыққа қарсы нөлдік төзімділік саясатын ұстанады.'] },
    ru: { p: ['Университет проводит политику нулевой терпимости к коррупции в любых формах.'] },
    en: { p: ['The university maintains a zero-tolerance policy toward corruption in any form.'] },
  },
  ethics: {
    kk: { p: ['Этикалық кодекс университет қауымдастығындағы академиялық адалдық пен өзара құрмет нормаларын белгілейді.'] },
    ru: { p: ['Этический кодекс определяет нормы академической честности и взаимного уважения в университетском сообществе.'] },
    en: { p: ['The code of ethics sets standards of academic integrity and mutual respect within the university community.'] },
  },
  mobility: {
    kk: { p: ['Академиялық мобильділік бағдарламасы студенттер мен оқытушыларға серіктес жоғары оқу орындарында білім алу және тағылымдамадан өту мүмкіндігін береді.'] },
    ru: { p: ['Программа академической мобильности позволяет студентам и преподавателям обучаться и стажироваться в вузах-партнёрах.'] },
    en: { p: ['The academic mobility program lets students and faculty study and intern at partner universities.'] },
  },
  mooc: {
    kk: { p: ['MOOC AqU — барлық мамандықтар студенттеріне қолжетімді университеттің онлайн курстар платформасы.'] },
    ru: { p: ['MOOC AqU — платформа онлайн-курсов университета, доступная студентам всех направлений подготовки.'] },
    en: { p: ['MOOC AqU is the university\'s online course platform, available to students across all fields of study.'] },
  },
  electives: {
    kk: { p: ['Каталогта студенттерге жеке білім беру траекториясын қалыптастыруға мүмкіндік беретін элективті пәндер тізімі берілген.'] },
    ru: { p: ['Каталог содержит перечень элективных дисциплин, доступных студентам для формирования индивидуальной образовательной траектории.'] },
    en: { p: ['The catalogue lists elective courses that let students shape their own individual study path.'] },
  },
  dormApplication: {
    kk: { p: ['Студенттік үйден орын алу үшін университеттің студенттік бөліміне жүгініңіз — толығырақ ақпарат «Байланыс» бөлімінде.'] },
    ru: { p: ['Чтобы подать заявку на место в студенческом доме, обратитесь в студенческий отдел университета — подробности в разделе «Контакты».'] },
    en: { p: ['To apply for a place in the student residence, contact the university\'s student affairs office — see the Contacts section for details.'] },
  },

  // --- Абитуриенту ---
  bachelor: {
    kk: {
      p: ['{{name}} бакалавриатта заманауи еңбек нарығы талаптарына сай бірнеше бағыт бойынша оқытады.'],
      list: ['Педагогика және психология', 'Бастауышта оқыту педагогикасы мен әдістемесі', 'Дене шынықтыру және спорт', 'Математика', 'Информатика', 'Химия', 'Биология', 'Тарих', 'Қазақ тілі мен әдебиеті', 'Шетел тілі: екі шетел тілі', 'Экономика', 'Қаржы', 'Құқық', 'Есептеу техникасы және бағдарламалық қамтамасыз ету'],
    },
    ru: {
      p: ['{{name}} обучает по бакалавриату по нескольким направлениям, отвечающим требованиям современного рынка труда.'],
      list: ['Педагогика и психология', 'Педагогика и методика начального обучения', 'Физическая культура и спорт', 'Математика', 'Информатика', 'Химия', 'Биология', 'История', 'Казахский язык и литература', 'Иностранный язык: два иностранных языка', 'Экономика', 'Финансы', 'Право', 'Вычислительная техника и программное обеспечение'],
    },
    en: {
      p: ['{{name}} offers bachelor\'s degrees in several fields aligned with today\'s labor market.'],
      list: ['Pedagogy and Psychology', 'Primary Education Pedagogy and Methodology', 'Physical Education and Sport', 'Mathematics', 'Computer Science', 'Chemistry', 'Biology', 'History', 'Kazakh Language and Literature', 'Foreign Language: Two Foreign Languages', 'Economics', 'Finance', 'Law', 'Computer Engineering and Software'],
    },
  },
  master: {
    kk: {
      p: ['Магистратура бағдарламалары бакалавриат түлектеріне ғылыми-педагогикалық немесе бейіндік бағытта білімін тереңдетуге мүмкіндік береді.'],
      list: ['Педагогика және психология', 'Экономика', 'Құқық', 'Информатика', 'Биология', 'Филология'],
    },
    ru: {
      p: ['Программы магистратуры позволяют выпускникам бакалавриата углубить знания по научно-педагогическому или профильному направлению.'],
      list: ['Педагогика и психология', 'Экономика', 'Право', 'Информатика', 'Биология', 'Филология'],
    },
    en: {
      p: ['Master\'s programs allow bachelor\'s graduates to deepen their knowledge along a research, teaching, or professional track.'],
      list: ['Pedagogy and Psychology', 'Economics', 'Law', 'Computer Science', 'Biology', 'Philology'],
    },
  },
  foreignApplicants: {
    kk: { p: ['Шетелдік азаматтар университетке жалпы негізде немесе арнайы квота бойынша түсе алады — толығырақ ақпаратты қабылдау комиссиясынан алуға болады.'] },
    ru: { p: ['Иностранные граждане могут поступить в университет на общих основаниях или по отдельной квоте — подробности уточняйте в приёмной комиссии.'] },
    en: { p: ['International citizens may enroll on general terms or under a separate quota — please check with the admissions committee for details.'] },
  },
  admissionRules: {
    kk: { p: ['{{name}}-ге қабылдау ҰБТ/қабылдау емтихандарының нәтижелері мен аттестат конкурсы негізінде жүзеге асырылады. Толық қабылдау ережелері әр жылғы қабылдау науқаны алдында жарияланады.'] },
    ru: { p: ['Приём в {{name}} осуществляется на основании результатов ЕНТ/вступительных экзаменов и конкурса аттестатов. Подробные правила приёма публикуются ежегодно перед началом приёмной кампании.'] },
    en: { p: ['Admission to {{name}} is based on UNT/entrance exam results and GPA competition. Detailed admission rules are published annually ahead of the admissions campaign.'] },
  },
  applicantInfo: {
    kk: { p: ['Мұнда түсу үшін қажетті барлық ақпаратты табасыз: құжат тапсыру мерзімдері, бағдарламалар тізімі және қабылдау комиссиясының байланыстары.'] },
    ru: { p: ['Здесь вы найдёте всю необходимую информацию для поступления: сроки подачи документов, перечень программ и контакты приёмной комиссии.'] },
    en: { p: ['Here you\'ll find everything you need to apply: application deadlines, the list of programs, and admissions committee contacts.'] },
  },

  // --- Отдельные разделы ---
  anticorruptionService: {
    kk: { p: ['Қызмет университетте сыбайлас жемқорлыққа қарсы заңнаманың сақталуын және тәуекелдерді мониторингтеуді қамтамасыз етеді. Сыбайлас жемқорлық фактілері туралы қоғамдық қабылдау бөлмесі арқылы хабарлауға болады (қараңыз «Байланыс»).'] },
    ru: { p: ['Служба обеспечивает соблюдение антикоррупционного законодательства и мониторинг рисков в университете. О фактах коррупции можно сообщить через общественную приёмную (см. раздел «Контакты»).'] },
    en: { p: ['The service ensures compliance with anti-corruption legislation and monitors related risks at the university. Corruption incidents can be reported through the public reception office (see the Contacts section).'] },
  },
  tour3d: {
    kk: { p: ['Виртуалды 3D-тур арқылы үйден шықпай-ақ университет кампусымен, аудиториялармен және инфрақұрылыммен алдын ала танысуға болады.'] },
    ru: { p: ['Виртуальный 3D-тур позволяет заранее познакомиться с кампусом, аудиториями и инфраструктурой университета, не выходя из дома.'] },
    en: { p: ['The virtual 3D tour lets you explore the campus, classrooms, and infrastructure in advance, from anywhere.'] },
  },
  psychSupport: {
    kk: { p: ['Психологиялық қолдау қызметі студенттер мен қызметкерлерге тегін кеңес беру көмегін көрсетеді.'] },
    ru: { p: ['Служба психологической поддержки оказывает бесплатную консультационную помощь студентам и сотрудникам университета.'] },
    en: { p: ['The psychological support service offers free counseling to students and staff.'] },
  },
  microquals: {
    kk: { p: ['Микроквалификация бағдарламалары — сертификатпен расталатын, еңбек нарығының өзекті талаптарын ескеретін қысқа мерзімді, практикаға бағытталған курстар.'] },
    ru: { p: ['Программы микроквалификации — краткосрочные практико-ориентированные курсы с выдачей сертификата, разработанные с учётом актуальных требований рынка труда.'] },
    en: { p: ['Micro-credential programs are short, practice-oriented courses that award a certificate and are designed around current labor market needs.'] },
  },
  rectorBlog: {
    kk: { p: ['Ректор блогы — университет басшылығының студенттер мен қызметкерлерге жаңалықтар, бастамалар мен өтініштерді жариялайтын ашық алаңы.'] },
    ru: { p: ['Блог ректора — открытая площадка для новостей, инициатив и обращений руководства университета к студентам и сотрудникам.'] },
    en: { p: ['The rector\'s blog is an open platform for news, initiatives, and messages from university leadership to students and staff.'] },
  },
  aiAqu: {
    kk: { p: ['AI-Aqniet University — жасанды интеллект технологияларын білім беруге, ғылымға және студенттік кәсіпкерлікке біріктіруге бағытталған университет бағдарламасы.'] },
    ru: { p: ['AI-Aqniet University — программа университета по интеграции технологий искусственного интеллекта в образование, науку и студенческое предпринимательство.'] },
    en: { p: ['AI-Aqniet University is the university\'s program for integrating artificial intelligence technologies into education, research, and student entrepreneurship.'] },
  },
  sdg: {
    kk: { p: ['Университет БҰҰ-ның Тұрақты даму мақсаттарын қолдайды және олардың қағидаттарын білім беру, ғылыми және әлеуметтік қызметіне енгізеді.'] },
    ru: { p: ['Университет поддерживает Цели устойчивого развития ООН и внедряет их принципы в образовательную, научную и социальную деятельность.'] },
    en: { p: ['The university supports the UN Sustainable Development Goals and applies their principles in its educational, research, and social activity.'] },
  },
}
