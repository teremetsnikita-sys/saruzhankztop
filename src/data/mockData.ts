import { Family, ProductType, Series, Brand, SKU, Industry, Service } from "../types";

export const INDUSTRIES: Industry[] = [
  {
    id: "ind1",
    slug: "mining",
    title: {
      ru: "Горнодобывающая промышленность",
      en: "Mining Industry",
      kk: "Тау-кен өнеркәсібі"
    },
    description: {
      ru: "Решения для карьерной техники, буровых установок и подземных выработок.",
      en: "Solutions for quarry equipment, drilling rigs and underground mines.",
      kk: "Карьерлік техникаға, бұрғылау қондырғыларына және жер асты қазбаларына арналған шешімдер."
    },
    icon: "Mountain",
    image: "/assets/images/home/Экскаватор_и_карьерные_самосвалы_202608251231.jpeg",
    equipment: [
      { ru: "Карьерные самосвалы", en: "Quarry trucks", kk: "Карьерлік өзі аударғыштар" },
      { ru: "Буровые станки", en: "Drilling rigs", kk: "Бұрғылау станоктары" },
      { ru: "Конвейерные системы", en: "Conveyor systems", kk: "Конвейерлік жүйелер" },
      { ru: "Гидравлические экскаваторы", en: "Hydraulic excavators", kk: "Гидравликалық экскаваторлар" }
    ]
  },
  {
    id: "ind2",
    slug: "agriculture",
    title: {
      ru: "Сельское хозяйство",
      en: "Agriculture",
      kk: "Ауыл шаруашылығы"
    },
    description: {
      ru: "Надежная гидравлика для тракторов, комбайнов и систем орошения.",
      en: "Reliable hydraulics for tractors, combines and irrigation systems.",
      kk: "Тракторларға, комбайндарға және суару жүйелеріне арналған сенімді гидравлика."
    },
    icon: "Sprout",
    image: "/assets/images/home/Combine_harvester_working_in_whe…_202608251241.jpeg",
    equipment: [
      { ru: "Зерноуборочные комбайны", en: "Harvesters", kk: "Астық жинайтын комбайндар" },
      { ru: "Тракторы высокой мощности", en: "High-power tractors", kk: "Жоғары қуатты тракторлар" },
      { ru: "Опрыскиватели", en: "Sprayers", kk: "Бүріккіштер" },
      { ru: "Посевные комплексы", en: "Seeding complexes", kk: "Егу кешендері" }
    ]
  },
  {
    id: "ind3",
    slug: "heavy-industry",
    title: {
      ru: "Тяжелая промышленность",
      en: "Heavy Industry",
      kk: "Ауыр өнеркәсіп"
    },
    description: {
      ru: "Комплексные решения для металлургии, машиностроения и крупных производственных комплексов.",
      en: "Comprehensive solutions for metallurgy, machine building and large production facilities.",
      kk: "Металлургия, машина жасау және ірі өндірістік кешендерге арналған кешенді шешімдер."
    },
    icon: "Factory",
    image: "/assets/images/home/Steel_mill_pouring_molten_metal_202608251241.jpeg",
    equipment: [
      { ru: "Металлургические станы", en: "Rolling mills", kk: "Металлургиялық стандар" },
      { ru: "Прессовое оборудование", en: "Press equipment", kk: "Пресс жабдықтары" },
      { ru: "Литейные линии", en: "Casting lines", kk: "Құю желілері" },
      { ru: "Станочные парки", en: "Machine tool fleets", kk: "Станок парктері" }
    ]
  }
];

export const BRANDS: Brand[] = [
  { 
    id: "b1", 
    name: "Parker Hannifin", 
    slug: "parker",
    description: {
      ru: "Мировой лидер в области технологий движения и контроля.",
      en: "The global leader in motion and control technologies.",
      kk: "Қозғалыс және бақылау технологиялары саласындағы әлемдік көшбасшы."
    },
    fullDescription: {
      ru: "Parker Hannifin — американская компания, мировой лидер в области технологий движения и контроля. Она предоставляет прецизионные инженерные решения для широкого спектра мобильных, промышленных и аэрокосмических рынков. Мы являемся официальным дистрибьютором Parker в Казахстане, предлагая полный спектр гидравлических компонентов.",
      en: "Parker Hannifin is an American corporation and the global leader in motion and control technologies. It provides precision engineering solutions for a wide range of mobile, industrial and aerospace markets. We are an official distributor of Parker in Kazakhstan, offering a full range of hydraulic components.",
      kk: "Parker Hannifin — американдық компания, қозғалыс және бақылау технологиялары саласындағы әлемдік көшбасшы. Ол мобильді, өнеркәсіптік және аэроғарыштық нарықтардың кең спектрі үшін дәл инженерлік шешімдерді ұсынады. Біз Қазақстандағы Parker-дің ресми дистрибьюторымыз, гидравликалық компоненттердің толық спектрін ұсынамыз."
    },
    founded: "1917",
    headquarters: {
      ru: "Кливленд, Огайо, США",
      en: "Cleveland, Ohio, USA",
      kk: "Кливленд, Огайо, АҚШ"
    },
    specialization: [
      { ru: "Гидравлика", en: "Hydraulics", kk: "Гидравлика" },
      { ru: "Пневматика", en: "Pneumatics", kk: "Пневматика" },
      { ru: "Фильтрация", en: "Filtration", kk: "Фильтрация" },
      { ru: "Уплотнения", en: "Sealing", kk: "Тығыздағыштар" }
    ],
    image: "/assets/images/distributor/parker_202608251627.jpeg"
  },
  { 
    id: "b2", 
    name: "Hydro Leduc", 
    slug: "hydro-leduc",
    description: {
      ru: "Французский производитель высококачественного гидравлического оборудования.",
      en: "French manufacturer of high-quality hydraulic equipment.",
      kk: "Жоғары сапалы гидравликалық жабдықтардың француз өндірушісі."
    },
    fullDescription: {
      ru: "Hydro Leduc — французская компания, специализирующаяся на проектировании и производстве поршневых насосов, гидравлических двигателей и гидропневматических аккумуляторов. Известна своими инновационными решениями и высочайшей надежностью оборудования.",
      en: "Hydro Leduc is a French company specializing in the design and manufacture of piston pumps, hydraulic motors, and hydro-pneumatic accumulators. Known for its innovative solutions and supreme equipment reliability.",
      kk: "Hydro Leduc — поршеньді сорғыларды, гидравликалық қозғалтқыштарды және гидропневматикалық аккумуляторларды жобалау мен өндіруге маманданған француз компаниясы. Өзінің инновациялық шешімдерімен және жабдықтардың жоғары сенімділігімен танымал."
    },
    founded: "1938",
    headquarters: {
      ru: "Азеро, Франция",
      en: "Azerailles, France",
      kk: "Азеро, Франция"
    },
    specialization: [
      { ru: "Насосы", en: "Pumps", kk: "Сорғылар" },
      { ru: "Моторы", en: "Motors", kk: "Моторлар" },
      { ru: "Аккумуляторы", en: "Accumulators", kk: "Аккумуляторлар" },
      { ru: "Микрогидравлика", en: "Microhydraulics", kk: "Микрогидравлика" }
    ],
    image: ""
  },
];

export const FAMILIES: Family[] = [
  { 
    id: "f1", 
    name: {
      ru: "Насос гидравлический",
      en: "Hydraulic Pumps",
      kk: "Гидравликалық сорғы"
    }, 
    slug: "насос-гидравлический", 
    description: {
      ru: "Профессиональные гидравлические насосы Parker.",
      en: "Professional Parker hydraulic pumps.",
      kk: "Кәсіби Parker гидравликалық сорғылары."
    }, 
    image: "/assets/images/products/pumps/Чугунные_насосы_–_Series_PGP610,_202608251256.jpeg" 
  },
  { 
    id: "f2", 
    name: {
      ru: "Гидравлические клапаны",
      en: "Hydraulic Valves",
      kk: "Гидравликалық клапандар"
    }, 
    slug: "hydraulic-valves", 
    description: {
      ru: "Направляющая и регулирующая аппаратура.",
      en: "Directional and pressure control valves.",
      kk: "Бағыттаушы және реттеуші аппаратура."
    }, 
    image: "/assets/images/products/valves/Industrial_hydraulic_valve_mecha…_202608251302.jpeg" 
  },
  { 
    id: "f3", 
    name: {
      ru: "Фильтрация",
      en: "Filtration",
      kk: "Фильтрация"
    }, 
    slug: "фильтрация", 
    description: {
      ru: "Системы очистки рабочих жидкостей.",
      en: "Working fluid cleaning systems.",
      kk: "Жұмыс сұйықтықтарын тазарту жүйелері."
    }, 
    image: "/assets/images/products/filtration/Industrial_filtration_cart_photo…_202608251305.jpeg" 
  },
  { 
    id: "f4", 
    name: {
      ru: "Рукава и соединения",
      en: "Hydraulic Hose",
      kk: "Гидравликалық шлангтар"
    }, 
    slug: "hydraulic-hose", 
    description: {
      ru: "Гидравлические рукава, фитинги, цилиндры и спецтехника.",
      en: "Hydraulic hoses, fittings, cylinders and specialized equipment.",
      kk: "Гидравликалық жеңдер, фитингтер, цилиндрлер және арнайы техника."
    }, 
    image: "/assets/images/products/hoses/Two_metallic_pipe_fittings_202608251307.jpeg" 
  },
  { 
    id: "f5", 
    name: {
      ru: "Моторы Hydro Leduc",
      en: "Hydro Leduc Motors",
      kk: "Hydro Leduc моторлары"
    }, 
    slug: "leduc-motors", 
    description: {
      ru: "Высокоэффективные гидравлические двигатели Hydro Leduc.",
      en: "High-efficiency Hydro Leduc hydraulic motors.",
      kk: "Hydro Leduc жоғары тиімді гидравликалық моторлары."
    },
    image: "/assets/images/products/leduc/motors/С_регулируемым_рабочим_объемом_202609051350.jpeg"
  },
  { 
    id: "f6", 
    name: {
      ru: "Аккумуляторы Hydro Leduc",
      en: "Hydro Leduc Accumulators",
      kk: "Hydro Leduc аккумуляторлары"
    }, 
    slug: "leduc-accumulators", 
    description: {
      ru: "Гидропневматические накопители энергии Hydro Leduc.",
      en: "Hydro Leduc hydro-pneumatic energy storage devices.",
      kk: "Hydro Leduc гидропневматикалық энергия жинақтағыштары."
    },
    image: "/assets/images/products/leduc/accumulators/Баллонные_аккумуляторы_202609051429.jpeg"
  },
  { 
    id: "f7", 
    name: {
      ru: "Микронасосы Hydro Leduc",
      en: "Hydro Leduc Micropumps",
      kk: "Hydro Leduc микросорғылары"
    }, 
    slug: "leduc-micropumps", 
    description: {
      ru: "Компактные микрогидравлические решения Hydro Leduc.",
      en: "Hydro Leduc compact microhydraulic solutions.",
      kk: "Hydro Leduc ықшам микрогидравликалық шешімдері."
    },
    image: "/assets/images/products/leduc/micropumps/Микронасосы_Hydro_Leduc_202609051451.jpeg"
  },
  { 
    id: "f8", 
    name: {
      ru: "Насосы Hydro Leduc",
      en: "Hydro Leduc Pumps",
      kk: "Hydro Leduc сорғылары"
    }, 
    slug: "leduc-pumps", 
    description: {
      ru: "Профессиональные поршневые насосы французского производства.",
      en: "Professional French-made piston pumps.",
      kk: "Француз өндірісіның кәсіби поршеньді сорғылары."
    },
    image: "/assets/images/products/leduc/pumps/Насосы_серии_PA_PAC_202609051540.jpeg"
  },
];

export const PRODUCT_TYPES: ProductType[] = [
  { 
    id: "pt1", 
    familyId: "f1", 
    name: { ru: "Лопастные насосы", en: "Vane Pumps", kk: "Қалақты сорғылар" }, 
    slug: "лопастные-насосы", 
    description: { ru: "Пластинчатые насосы для индустриального применения.", en: "Vane pumps for industrial applications.", kk: "Өнеркәсіптік қолдануға арналған пластиналы сорғылар." }, 
    image: "/assets/images/products/pumps/vane/Series_T6_,_T67__&_T7__202608271453 (1).jpeg" 
  },
  { 
    id: "pt2", 
    familyId: "f1", 
    name: { ru: "Поршневые насосы", en: "Piston Pumps", kk: "Поршеньді сорғылар" }, 
    slug: "piston-pumps", 
    description: { ru: "Аксиально-поршневые насосы высокого давления.", en: "High-pressure axial piston pumps.", kk: "Жоғары қысымды осьтік-поршеньді сорғылар." }, 
    image: "/assets/images/products/pumps/piston/P1_Series_202608271457.jpeg" 
  },
  { 
    id: "pt3", 
    familyId: "f1", 
    name: { ru: "Шестеренные насосы", en: "Gear Pumps", kk: "Тісті сорғылар" }, 
    slug: "gear-pumps", 
    description: { ru: "Шестеренные насосы в чугунном и алюминиевом корпусе.", en: "Gear pumps in cast iron and aluminum housings.", kk: "Шойын және алюминий корпусындағы тісті сорғылар." }, 
    image: "/assets/images/products/pumps/gear/Gear_Pumps_202608271657.jpeg" 
  },
  { 
    id: "pt4", 
    familyId: "f2", 
    name: { ru: "Гидравлические клапаны", en: "Hydraulic Valves", kk: "Гидравликалық клапандар" }, 
    slug: "hydraulic-valves-type", 
    description: { ru: "Клапанная аппаратура Parker.", en: "Parker valve equipment.", kk: "Parker клапан аппаратурасы." }, 
    image: "/assets/images/products/valves/Series_D3W_1_202608271706.jpeg" 
  },
  { 
    id: "pt5", 
    familyId: "f3", 
    name: { ru: "Фильтрация", en: "Filtration", kk: "Фильтрация" }, 
    slug: "hydraulic-filtration", 
    description: { ru: "Решения для фильтрации гидравлических систем.", en: "Filtration solutions for hydraulic systems.", kk: "Гидравликалық жүйелерді фильтрациялау шешімдері." }, 
    image: "/assets/images/products/filtration/Hydraulic_Filtration_202608271714.jpeg" 
  },
  { 
    id: "pt6", 
    familyId: "f4", 
    name: { ru: "Гидравлические шланги", en: "Hydraulic Hose", kk: "Гидравликалық шлангтар" }, 
    slug: "hydraulic-hose-type", 
    description: { ru: "Гидравлические рукава высокого и среднего давления.", en: "High and medium pressure hydraulic hoses.", kk: "Жоғары және орташа қысымды гидравликалық жеңдер." }, 
    image: "/assets/images/products/hoses/Industrial_hydraulic_hoses_arran…_202608271730.jpeg" 
  },
  { 
    id: "pt7", 
    familyId: "f4", 
    name: { ru: "DIN Фитинги", en: "DIN Fittings", kk: "DIN фитингтері" }, 
    slug: "hydraulic-din-fittings", 
    description: { ru: "Трубные соединения Ermeto DIN.", en: "Ermeto DIN tube connections.", kk: "Ermeto DIN түтікті қосылымдары." }, 
    image: "/assets/images/products/hoses/Ermeto_DIN_1_202608271738.jpeg" 
  },
  { 
    id: "pt8", 
    familyId: "f4", 
    name: { ru: "Гидроцилиндры", en: "Cylinders", kk: "Цилиндрлер" }, 
    slug: "hydraulic-cylinders-type", 
    description: { ru: "Промышленные гидроцилиндры.", en: "Industrial hydraulic cylinders.", kk: "Өнеркәсіптік гидравликалық цилиндрлер." }, 
    image: "/assets/images/products/hoses/HMI__1_202608271743.jpeg" 
  },
  { 
    id: "pt9", 
    familyId: "f4", 
    name: { ru: "Теплообменники", en: "Coolers", kk: "Салқындатқыштар" }, 
    slug: "industrial-coolers-type", 
    description: { ru: "Системы теплообмена.", en: "Heat exchange systems.", kk: "Жылу алмасу жүйелері." }, 
    image: "/assets/images/products/hoses/LAC_LAC2_1_202608271749.jpeg" 
  },
  { 
    id: "pt10", 
    familyId: "f4", 
    name: { ru: "Диагностика и Измерения", en: "Diagnostic & Measurement", kk: "Диагностика және өлшеу" }, 
    slug: "diagnostic-equipment-type", 
    description: { ru: "Измерительные приборы.", en: "Measuring instruments.", kk: "Өлшеу аспаптары." }, 
    image: "/assets/images/products/hoses/Diagnostic_Testing_202608271800.jpeg" 
  },
  { 
    id: "pt11", 
    familyId: "f4", 
    name: { ru: "Коробки отбора мощности Chelsea", en: "Chelsea PTO", kk: "Chelsea PTO" }, 
    slug: "pto-type", 
    description: { ru: "Решения для передачи мощности Chelsea.", en: "Chelsea power take-off solutions.", kk: "Chelsea қуат беру шешімдері." }, 
    image: "/assets/images/products/hoses/880_Series_Power_Take-Off_1_202608271834.jpeg" 
  },
  // MOTORS (f5)
  { 
    id: "pt-m1", 
    familyId: "f5", 
    name: { ru: "С фиксированным рабочим объемом", en: "Fixed Displacement", kk: "Тұрақты жұмыс көлемі" }, 
    slug: "fixed-displacement-motors", 
    description: { ru: "Гидравлические двигатели с фиксированным рабочим объемом.", en: "Fixed displacement hydraulic motors.", kk: "Тұрақты жұмыс көлемі бар гидравликалық қозғалтқыштар." },
    image: "/assets/images/products/leduc/motors/С_фиксированным_рабочим_объемом_202609051350.jpeg"
  },
  { 
    id: "pt-m2", 
    familyId: "f5", 
    name: { ru: "С регулируемым рабочим объемом", en: "Variable Displacement", kk: "Реттелетін жұмыс көлемі" }, 
    slug: "variable-displacement-motors", 
    description: { ru: "Гидравлические двигатели с регулируемым рабочим объемом.", en: "Variable displacement hydraulic motors.", kk: "Реттелетін жұмыс көлемі бар гидравликалық қозғалтқыштар." },
    image: "/assets/images/products/leduc/motors/С_регулируемым_рабочим_объемом_202609051350.jpeg"
  },
  { 
    id: "pt-m3", 
    familyId: "f5", 
    name: { ru: "Специфические двигатели", en: "Specific Motors", kk: "Арнайы қозғалтқыштар" }, 
    slug: "specific-motors", 
    description: { ru: "Специализированные гидравлические двигатели.", en: "Specialized hydraulic motors.", kk: "Мамандандырылған гидравликалық қозғалтқыштар." },
    image: "/assets/images/products/leduc/motors/Специфические_двигатели_202609051350.jpeg"
  },
  // PUMPS (f8)
  { 
    id: "pt-p1", 
    familyId: "f8", 
    name: { ru: "С фиксированным рабочим объемом", en: "Fixed Displacement", kk: "Тұрақты жұмыс көлемі" }, 
    slug: "fixed-displacement-pumps", 
    description: { ru: "Насосы с фиксированным рабочим объемом.", en: "Fixed displacement pumps.", kk: "Тұрақты жұмыс көлемі бар сорғылар." },
    image: "/assets/images/products/leduc/pumps/С_фиксированным_рабочим_объемом_202609051459.jpeg"
  },
  { 
    id: "pt-p2", 
    familyId: "f8", 
    name: { ru: "С регулируемым рабочим объемом", en: "Variable Displacement", kk: "Реттелетін жұмыс көлемі" }, 
    slug: "variable-displacement-pumps", 
    description: { ru: "Насосы с регулируемым рабочим объемом.", en: "Variable displacement pumps.", kk: "Реттелетін жұмыс көлемі бар сорғылар." },
    image: "/assets/images/products/leduc/pumps/С_регулируемым_рабочим_объемом_202609051459.jpeg"
  },
  { 
    id: "pt-p3", 
    familyId: "f8", 
    name: { ru: "Мобильные и промышленные насосы", en: "Mobile and Industrial Pumps", kk: "Мобильді және өнеркәсіптік сорғылар" }, 
    slug: "mobile-industrial-pumps", 
    description: { ru: "Насосы для мобильной и промышленной техники.", en: "Pumps for mobile and industrial machinery.", kk: "Мобильді и өнеркәсіптік техникаға арналған сорғылар." },
    image: "/assets/images/products/leduc/pumps/Мобильные_и_промышленные_насосы_202609051459.jpeg"
  },
  { 
    id: "pt-p4", 
    familyId: "f8", 
    name: { ru: "Powerpack", en: "Powerpack", kk: "Powerpack" }, 
    slug: "powerpack", 
    description: { ru: "Компактные гидравлические силовые установки.", en: "Compact hydraulic power units.", kk: "Ықшам гидравликалық қуат қондырғылары." },
    image: "/assets/images/products/leduc/pumps/Powerpack_202609051459.jpeg"
  },
  // ACCUMULATORS (f6)
  { 
    id: "pt-a1", 
    familyId: "f6", 
    name: { ru: "Сварные цилиндрические аккумуляторы", en: "Welded Cylindrical Accumulators", kk: "Дәнекерленген цилиндрлік аккумуляторлар" }, 
    slug: "welded-cylindrical-accumulators", 
    description: { ru: "Сварные аккумуляторы цилиндрической формы.", en: "Welded cylindrical-shaped accumulators.", kk: "Дәнекерленген цилиндр пішінді аккумуляторлар." },
    image: "/assets/images/products/leduc/accumulators/Сварные_цилиндрические_аккумуляторы_202609051430.jpeg"
  },
  { 
    id: "pt-a2", 
    familyId: "f6", 
    name: { ru: "Сферические аккумуляторы", en: "Spherical Accumulators", kk: "Сфералық аккумуляторлар" }, 
    slug: "spherical-accumulators", 
    description: { ru: "Аккумуляторы сферической формы.", en: "Spherical-shaped accumulators.", kk: "Сфера пішінді аккумуляторлар." },
    image: "/assets/images/products/leduc/accumulators/Сферические_аккумуляторы_202609051429.jpeg"
  },
  { 
    id: "pt-a3", 
    familyId: "f6", 
    name: { ru: "Баллонные аккумуляторы", en: "Bladder Accumulators", kk: "Баллонды аккумуляторлар" }, 
    slug: "bladder-accumulators", 
    description: { ru: "Аккумуляторы баллонного типа.", en: "Bladder-type accumulators.", kk: "Баллонды типтегі аккумуляторлар." },
    image: "/assets/images/products/leduc/accumulators/Баллонные_аккумуляторы_202609051429.jpeg"
  },
  { 
    id: "pt-a4", 
    familyId: "f6", 
    name: { ru: "Поршневые аккумуляторы", en: "Piston Accumulators", kk: "Поршеньді аккумуляторлар" }, 
    slug: "piston-accumulators", 
    description: { ru: "Аккумуляторы поршневого типа.", en: "Piston-type accumulators.", kk: "Поршеньді типтегі аккумуляторлар." },
    image: "/assets/images/products/leduc/accumulators/Поршневые_аккумуляторы_202609051429.jpeg"
  },
  // MICROPUMPS (f7)
  { 
    id: "pt-micro1", 
    familyId: "f7", 
    name: { ru: "Микронасосы", en: "Micropumps", kk: "Микросорғылар" }, 
    slug: "micropumps-category", 
    description: { ru: "Микронасосы серии PB.", en: "PB series micropumps.", kk: "PB сериялы микросорғылар." },
    image: "/assets/images/products/leduc/micropumps/Микронасосы_Hydro_Leduc_202609051451.jpeg"
  },
];

export const SERIES: Series[] = [
  {
    id: "s1",
    productTypeId: "pt1",
    brandId: "b1",
    name: {
      ru: "Промышленные лопастные насосы — серии T6*, T67* и T7*",
      en: "Industrial Vane Pumps — T6*, T67* & T7* Series",
      kk: "Өнеркәсіптік қалақты сорғылар — T6*, T67* және T7* сериялары"
    },
    slug: "vane-pumps-t6-t7",
    descriptionHtml: {
      ru: "Серия T6, T67 и T7 — это самые современные пластинчатые насосы с фиксированным рабочим объемом. Они специально разработаны для обеспечения высокого рабочего давления (до 320 бар) и высокого КПД при минимальном уровне шума.",
      en: "T6, T67 and T7 series are state-of-the-art fixed displacement vane pumps. They are specifically designed to provide high operating pressure (up to 320 bar) and high efficiency with minimum noise levels.",
      kk: "T6, T67 және T7 сериялары — бұл тұрақты жұмыс көлемі бар ең заманауи пластиналы сорғылар. Олар жоғары жұмыс қысымын (320 барға дейін) және ең төменгі шу деңгейінде жоғары ПӘК-ті қамтамасыз ету үшін арнайы әзірленген."
    },
    images: ["/assets/images/products/pumps/vane/Series_T6_,_T67__&_T7__202608271453 (1).jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 320 бар", en: "up to 320 bar", kk: "320 барға дейін" }, 
      "Рабочий объем": { ru: "5.8 – 269.0 мл/об", en: "5.8 – 269.0 ml/rev", kk: "5.8 – 269.0 мл/айн" },
      "Частота вращения": { ru: "до 3600 об/мин", en: "up to 3600 rpm", kk: "3600 айн/мин дейін" },
      "Тип монтажа": { ru: "SAE, ISO", en: "SAE, ISO", kk: "SAE, ISO" },
      "Конфигурация": { ru: "Одинарные, двойные, тройные", en: "Single, double, triple", kk: "Бірлік, қос, үштік" }
    },
    features: [
      { ru: "Высокое рабочее давление до 320 бар снижает стоимость установки", en: "High operating pressure up to 320 bar reduces installation cost", kk: "320 барға дейінгі жоғары жұмыс қысымы орнату құнын төмендетеді" },
      { ru: "Высокий объемный КПД (обычно 94%) снижает тепловыделение", en: "High volumetric efficiency (typically 94%) reduces heat generation", kk: "Жоғары көлемдік ПӘК (әдетте 94%) жылу бөлінуін азайтады" },
      { ru: "Широкий диапазон вязкостей от 2000 до 10 сСт", en: "Wide viscosity range from 2000 to 10 cSt", kk: "2000-ден 10 сСт-қа дейінгі тұтқырлықтың кең диапазоны" },
      { ru: "Низкий уровень шума повышает комфорт оператора", en: "Low noise level improves operator comfort", kk: "Төмен шу деңгейі оператордың жайлылығын арттырады" },
      { ru: "Концепция картриджа позволяет легко менять рабочий объем и упрощает ремонт", en: "Cartridge concept allows easy displacement changes and simplifies repair", kk: "Картридж тұжырымдамасы жұмыс көлемін оңай өзгертуге мүмкіндік береді және жөндеуді жеңілдетеді" },
      { ru: "Двухпериферийная конструкция лопастей для отличной устойчивости к загрязнениям", en: "Double-vane design for excellent contamination resistance", kk: "Ластануға тамаша төзімділік үшін екі шеткі қалақша конструкциясы" }
    ],
    benefits: [
      { ru: "Снижение энергопотребления благодаря высокому КПД", en: "Energy consumption reduction due to high efficiency", kk: "Жоғары ПӘК арқасында энергия тұтынуды азайту" },
      { ru: "Длительный срок службы даже при работе на трудновоспламеняемых жидкостях", en: "Long service life even when operating on fire-resistant fluids", kk: "Тіпті қиын тұтанатын сұйықтықтарда жұмыс істегенде де ұзақ қызмет мерзімі" },
      { ru: "Компактность: высокая удельная мощность", en: "Compactness: high power density", kk: "Ықшамдылық: жоғары меншікті қуат" },
      { ru: "Универсальность: возможность установки до 3 насосов на одном валу", en: "Versatility: up to 3 pumps can be mounted on a single shaft", kk: "Әмбебаптық: бір білікке 3 сорғыға дейін орнату мүмкіндігі" },
      { ru: "Минимальное время простоя благодаря быстрой замене картриджа", en: "Minimum downtime due to quick cartridge replacement", kk: "Картриджді жылдам ауыстырудың арқасында тоқтап қалу уақытын азайту" },
      { ru: "Надежность проверенная десятилетиями эксплуатации", en: "Reliability proven by decades of operation", kk: "Ондаған жылдар бойғы пайдаланумен дәлелденген сенімділік" }
    ],
    applications: [
      { ru: "Промышленные прессы и станки", en: "Industrial presses and machine tools", kk: "Өнеркәсіптік престер мен станоктар" },
      { ru: "Литейное оборудование", en: "Die casting equipment", kk: "Құю жабдықтары" },
      { ru: "Мобильная спецтехника и мусоровозы", en: "Mobile equipment and refuse trucks", kk: "Мобильді арнайы техника және қоқыс тасушылар" },
      { ru: "Судовые гидравлические системы", en: "Marine hydraulic systems", kk: "Кеме гидравликалық жүйелері" },
      { ru: "Горно-шахтное оборудование", en: "Mining and tunneling equipment", kk: "Тау-кен жабдықтары" },
      { ru: "Испытательные стенды", en: "Test benches", kk: "Сынақ стендтері" }
    ],
    markets: [
      { ru: "Промышленное производство", en: "Industrial Manufacturing", kk: "Өнеркәсіптік өндіріс" },
      { ru: "Тяжелое машиностроение", en: "Heavy Machinery", kk: "Ауыр машина жасау" },
      { ru: "Морской транспорт", en: "Marine", kk: "Теңіз көлігі" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "Переработка отходов", en: "Waste & Recycling", kk: "Қалдықтарды қайта өңдеу" }
    ]
  },
  {
    id: "s2",
    productTypeId: "pt1",
    brandId: "b1",
    name: {
      ru: "Лопастной насос с регулируемой скоростью вращения – серия Т7",
      en: "Variable Speed Vane Pump – T7 Series",
      kk: "Айнымалы жылдамдықты қалақты сорғы – Т7 сериясы"
    },
    slug: "vane-pumps-t6ccz",
    descriptionHtml: {
      ru: "Насосы серии T6CCZ специально разработаны для мобильных применений, требующих высокой мощности и компактности. Эта серия часто используется в карданных приводах спецтехники благодаря усиленным подшипникам и валам.",
      en: "T6CCZ series pumps are specifically designed for mobile applications requiring high power and compactness. This series is frequently used in truck PTO drives due to reinforced bearings and shafts.",
      kk: "T6CCZ сериялы сорғылары жоғары қуат пен ықшамдылықты қажет ететін мобильді қолданбалар үшін арнайы әзірленген. Бұл серия күшейтілген мойынтіректер мен біліктердің арқасында арнайы техниканың кардандық жетектерінде жиі қолданылады."
    },
    images: ["/assets/images/products/pumps/vane/серия_т7_parker_202608271330.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 275 бар", en: "up to 275 bar", kk: "275 барға дейін" }, 
      "Рабочий объем": { ru: "10 – 100 мл/об", en: "10 – 100 ml/rev", kk: "10 – 100 мл/айн" },
      "Частота вращения": { ru: "400 – 2800 об/мин", en: "400 – 2800 rpm", kk: "400 – 2800 айн/мин" },
      "Корпус": { ru: "Чугун", en: "Cast Iron", kk: "Шойын" },
      "Соединение": { ru: "Фланец SAE B", en: "SAE B Flange", kk: "SAE B фланеці" }
    },
    features: [
      { ru: "Усиленная конструкция вала для работы с карданными приводами", en: "Reinforced shaft design for PTO drives", kk: "Кардандық жетектермен жұмыс істеуге арналған күшейтілген білік конструкциясы" },
      { ru: "Специальные подшипники для компенсации осевых и радиальных нагрузок", en: "Special bearings for axial and radial load compensation", kk: "Осьтік және радиалды жүктемелерді өтеуге арналған арнайы мойынтіректер" },
      { ru: "Компактный двойной насос на одном валу", en: "Compact double pump on a single shaft", kk: "Бір біліктегі ықшам қос сорғы" },
      { ru: "Возможность изменения направления вращения", en: "Reversible rotation capability", kk: "Айналу бағытын өзгерту мүмкіндігі" },
      { ru: "Высокая устойчивость к загрязнению масла", en: "High resistance to oil contamination", kk: "Майдың ластануына жоғары төзімділік" },
      { ru: "Простой доступ к картриджам для обслуживания", en: "Easy access to cartridges for maintenance", kk: "Техникалық қызмет көрсету үшін картридждерге оңай қол жетімділік" }
    ],
    benefits: [
      { ru: "Идеально подходит для монтажа на коробку отбора мощности (PTO)", en: "Ideally suited for Power Take-Off (PTO) mounting", kk: "Қуатты іріктеу қорабына (PTO) орнату үшін өте қолайлы" },
      { ru: "Высокая надежность в суровых мобильных условиях", en: "High reliability in harsh mobile environments", kk: "Қатал мобильді жағдайларда жоғары сенімділік" },
      { ru: "Экономия места благодаря интеграции двух насосов в одном корпусе", en: "Space-saving through integration of two pumps in one housing", kk: "Бір корпуста екі сорғыны біріктіру арқылы орынды үнемдеу" },
      { ru: "Стабильная работа при переменных оборотах двигателя", en: "Stable operation at variable engine speeds", kk: "Қозғалтқыштың айнымалы айналымдарында тұрақты жұмыс" },
      { ru: "Низкие эксплуатационные расходы", en: "Low operating costs", kk: "Төмен пайдалану шығындары" },
      { ru: "Быстрая адаптация под конкретные задачи заказчика", en: "Rapid adaptation to specific customer requirements", kk: "Тапсырыс берушінің нақты тапсырмаларына жылдам бейімделу" }
    ],
    applications: [
      { ru: "Коммунальная техника и мусоровозы", en: "Utility vehicles and refuse trucks", kk: "Коммуналдық техника және қоқыс тасушылар" },
      { ru: "Самосвалы и эвакуаторы", en: "Dump trucks and tow trucks", kk: "Аударылатын жүк көліктері және эвакуаторлар" },
      { ru: "Дорожно-строительная техника", en: "Road construction equipment", kk: "Жол-құрылыс техникасы" },
      { ru: "Лесозаготовительные машины", en: "Logging and forestry machinery", kk: "Орман дайындау машиналары" },
      { ru: "Мобильные краны", en: "Mobile cranes", kk: "Мобильді крандар" },
      { ru: "Бетоносмесители", en: "Concrete mixers", kk: "Бетон араластырғыштар" }
    ],
    markets: [
      { ru: "Транспорт и логистика", en: "Transport & Logistics", kk: "Көлік және логистика" },
      { ru: "Строительство", en: "Construction", kk: "Құрылыс" },
      { ru: "Коммунальное хозяйство", en: "Utilities", kk: "Коммуналдық шаруашылық" },
      { ru: "Лесная промышленность", en: "Forestry", kk: "Орман өнеркәсібі" }
    ]
  },
  {
    id: "s3",
    productTypeId: "pt2",
    brandId: "b1",
    name: {
      ru: "Мобильные насосы среднего давления - P1 Series",
      en: "Mobile Medium Pressure Pumps - P1 Series",
      kk: "Орташа қысымды мобильді сорғылар - P1 сериясы"
    },
    slug: "p1-series",
    descriptionHtml: {
      ru: "Аксиально-поршневые насосы Parker серии P1 предназначены для мобильных гидросистем с открытым контуром. Компактный дизайн, низкий уровень шума и превосходная объемная эффективность делают их стандартом для современной строительной и дорожной техники.",
      en: "Parker P1 series axial piston pumps are designed for open-circuit mobile hydraulic systems. Compact design, low noise and excellent volumetric efficiency make them the standard for modern construction and road machinery.",
      kk: "Parker P1 сериялы осьтік-поршеньді сорғылары ашық контурлы мобильді гидравликалық жүйелерге арналған. Ықшам дизайн, төмен шу деңгейі және тамаша көлемдік тиімділік оларды заманауи құрылыс және жол техникасы үшін стандартқа айналдырады."
    },
    images: ["/assets/images/products/pumps/piston/P1_Series_202608271457.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 280 бар", en: "up to 280 bar", kk: "280 барға дейін" }, 
      "Рабочий объем": { ru: "18 – 140 см³/об", en: "18 – 140 cm³/rev", kk: "18 – 140 см³/айн" },
      "Частота вращения": { ru: "до 3000 об/мин", en: "up to 3000 rpm", kk: "3000 айн/мин дейін" },
      "КПД": { ru: "до 96%", en: "up to 96%", kk: "96%-ға дейін" },
      "Тип": { ru: "Аксиально-поршневой", en: "Axial Piston", kk: "Осьтік-поршеньді" }
    },
    features: [
      { ru: "Аксиально-поршневая технология для открытого контура", en: "Axial piston technology for open circuit", kk: "Ашық контурға арналған осьтік-поршеньді технология" },
      { ru: "Компактная конструкция для экономии места", en: "Compact design for space saving", kk: "Орынды үнемдеуге арналған ықшам конструкция" },
      { ru: "Технология «Ripple Chamber» для снижения пульсаций давления", en: "Ripple Chamber technology to reduce pressure pulsations", kk: "Қысым пульсациясын азайтуға арналған «Ripple Chamber» технологиясы" },
      { ru: "Широкий выбор типов регуляторов (LS, давление, мощность)", en: "Wide choice of control types (LS, pressure, power)", kk: "Реттегіштер түрлерінің кең таңдауы (LS, қысым, қуат)" },
      { ru: "Высокая частота вращения самовсасывания", en: "High self-priming speed", kk: "Жоғары өздігінен сору айналу жиілігі" },
      { ru: "Низкий уровень шума во всем диапазоне работы", en: "Low noise level throughout the operating range", kk: "Барлық жұмыс диапазонында төмен шу деңгейі" }
    ],
    benefits: [
      { ru: "Повышенная производительность мобильной техники", en: "Increased mobile equipment productivity", kk: "Мобильді техниканың өнімділігін арттыру" },
      { ru: "Снижение расхода топлива благодаря высокому КПД", en: "Reduced fuel consumption due to high efficiency", kk: "Жоғары ПӘК арқасында отын шығынын азайту" },
      { ru: "Долгий срок службы в тяжелых условиях эксплуатации", en: "Long service life in heavy-duty environments", kk: "Ауыр пайдалану жағдайларында ұзақ қызмет мерзімі" },
      { ru: "Простота интеграции в существующие гидросистемы", en: "Easy integration into existing hydraulic systems", kk: "Қолданыстағы гидравликалық жүйелерге біріктірудің қарапайымдылығы" },
      { ru: "Высокая удельная мощность", en: "High power density", kk: "Жоғары меншікті қуат" },
      { ru: "Минимальные затраты на техническое обслуживание", en: "Minimum maintenance costs", kk: "Техникалық қызмет көрсетуге арналған ең төменгі шығындар" }
    ],
    applications: [
      { ru: "Фронтальные погрузчики", en: "Front loaders", kk: "Фронтальды тиегіштер" },
      { ru: "Экскаваторы-погрузчики", en: "Backhoe loaders", kk: "Экскаватор-тиегіштер" },
      { ru: "Дорожные катки и фрезы", en: "Road rollers and cold planers", kk: "Жол каткилері мен фрезалары" },
      { ru: "Лесозаготовительная техника", en: "Forestry equipment", kk: "Орман дайындау техникасы" },
      { ru: "Сельскохозяйственные машины", en: "Agricultural machinery", kk: "Ауыл шаруашылығы машиналары" },
      { ru: "Горно-шахтное оборудование", en: "Mining equipment", kk: "Тау-кен жабдықтары" }
    ],
    markets: [
      { ru: "Мобильная техника и спецтранспорт", en: "Mobile Equipment", kk: "Мобильді техника және арнайы көлік" },
      { ru: "Строительство", en: "Construction", kk: "Құрылыс" },
      { ru: "Лесное хозяйство", en: "Forestry", kk: "Орман шаруашылығы" },
      { ru: "Сельское хозяйство", en: "Agriculture", kk: "Ауыл шаруашылығы" },
      { ru: "Горнодобывающая промышленность", en: "Mining", kk: "Тау-кен өнеркәсібі" }
    ]
  },
  {
    id: "s4",
    productTypeId: "pt2",
    brandId: "b1",
    name: {
      ru: "Аксиально-поршневые насосы с регулируемым рабочим объемом - Series Pvplus",
      en: "Variable Displacement Axial Piston Pumps - Pvplus Series",
      kk: "Айнымалы жұмыс көлемі бар осьтік-поршеньді сорғылар - Pvplus сериясы"
    },
    slug: "pvplus-series",
    descriptionHtml: {
      ru: "Насосы серии PVplus — это тяжелая индустриальная гидравлика Parker для самых ответственных применений. Обладая крайне жесткой конструкцией корпуса и оптимизированными внутренними каналами, они обеспечивают максимальную плотность мощности и долговечность.",
      en: "PVplus series pumps are Parker's heavy-duty industrial hydraulics for the most demanding applications. Featuring a very rigid housing design and optimized internal passages, they provide maximum power density and durability.",
      kk: "PVplus сериялы сорғылары — бұл ең жауапты қолданбаларға арналған Parker компаниясының ауыр индустриялық гидравликасы. Корпустың өте қатты конструкциясы мен оңтайландырылған ішкі арналары бар олар максималды қуат тығыздығы мен беріктігін қамтамасыз етеді."
    },
    images: ["/assets/images/products/pumps/piston/Series_Pvplus_202608271635.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 420 бар", en: "up to 420 bar", kk: "420 барға дейін" }, 
      "Рабочий объем": { ru: "16 – 360 см³/об", en: "16 – 360 cm³/rev", kk: "16 – 360 см³/айн" },
      "Номин. давление": { ru: "350 бар", en: "350 bar", kk: "350 бар" },
      "Макс. давление": { ru: "420 бар", en: "420 bar", kk: "420 бар" },
      "Тип": { ru: "Индустриальный", en: "Industrial", kk: "Индустриялық" }
    },
    features: [
      { ru: "Рабочий объем 16-360 см³/об для широкого спектра задач", en: "Displacement 16-360 cm³/rev for a wide range of tasks", kk: "Міндеттердің кең ауқымы үшін 16-360 см³/айн жұмыс көлемі" },
      { ru: "Максимальное рабочее давление до 420 бар", en: "Maximum operating pressure up to 420 bar", kk: "420 барға дейінгі максималды жұмыс қысымы" },
      { ru: "Оптимизированная геометрия корпуса для снижения шума", en: "Optimized housing geometry for noise reduction", kk: "Шуды азайту үшін оңтайландырылған корпус геометриясы" },
      { ru: "Большой выбор компенсаторов давления и расхода", en: "Large selection of pressure and flow compensators", kk: "Қысым мен шығын өтемақыларының үлкен таңдауы" },
      { ru: "Возможность сквозного вала для установки дополнительных насосов", en: "Thru-shaft capability for mounting additional pumps", kk: "Қосымша сорғыларды орнатуға арналған өтпелі білік мүмкіндігі" },
      { ru: "Высокая скорость отклика на изменение нагрузки", en: "High response speed to load changes", kk: "Жүктеменің өзгеруіне жоғары жауап жылдамдығы" }
    ],
    benefits: [
      { ru: "Максимальная производительность в тяжелых условиях (Heavy Duty)", en: "Maximum performance in heavy-duty conditions", kk: "Ауыр жағдайларда максималды өнімділік (Heavy Duty)" },
      { ru: "Исключительная надежность и длительный ресурс", en: "Exceptional reliability and long service life", kk: "Ерекше сенімділік и ұзақ ресурс" },
      { ru: "Экономия энергии за счет точного регулирования параметров", en: "Energy savings through precise parameter control", kk: "Параметрлерді дәл реттеу арқылы энергияны үнемдеу" },
      { ru: "Низкий уровень шума для улучшения условий труда", en: "Low noise level for improved working conditions", kk: "Еңбек жағдайларын жақсарту үшін төмен шу деңгейі" },
      { ru: "Универсальность применения в промышленном секторе", en: "Versatility of application in the industrial sector", kk: "Өнеркәсіп секторында қолданудың әмбебаптығы" },
      { ru: "Простота настройки и ввода в эксплуатацию", en: "Ease of configuration and commissioning", kk: "Баптау мен пайдалануға берудің қарапайымдылығы" }
    ],
    applications: [
      { ru: "Индустриальные прессы", en: "Industrial presses", kk: "Индустриялық престер" },
      { ru: "Литейные машины под давлением", en: "Die casting machines", kk: "Қысыммен құю машиналары" },
      { ru: "Сталелитейное оборудование", en: "Steel industry equipment", kk: "Болат құю жабдықтары" },
      { ru: "Морские лебедки и краны", en: "Marine winches and cranes", kk: "Теңіз шығырлары мен крандары" },
      { ru: "Системы управления шлюзами", en: "Sluice control systems", kk: "Шлюздерді басқару жүйелері" },
      { ru: "Мощные испытательные стенды", en: "High-power test benches", kk: "Қуатты сынақ стендтері" }
    ],
    markets: [
      { ru: "Металлургия и тяжелая промышленность", en: "Metallurgy and Heavy Industry", kk: "Металлургия және ауыр өнеркәсіп" },
      { ru: "Морской сектор", en: "Marine", kk: "Теңіз секторы" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "Машиностроение", en: "Machinery Manufacturing", kk: "Машина жасау" },
      { ru: "Нефтегазовая отрасль", en: "Oil & Gas", kk: "Мұнай-газ саласы" }
    ]
  },
  {
    id: "s5",
    productTypeId: "pt2",
    brandId: "b1",
    name: {
      ru: "Гидростатические насосы Gold Cup Series",
      en: "Gold Cup Series Hydrostatic Pumps",
      kk: "Gold Cup сериялы гидростатикалық сорғылар"
    },
    slug: "gold-cup-series",
    descriptionHtml: {
      ru: "Легендарная серия Gold Cup от Denison представляет собой вершину надежности в мире закрытых гидростатических трансмиссий. Способность выдерживать экстремальное давление и мгновенно менять направление потока делает эти агрегаты незаменимыми для самых суровых задач.",
      en: "Denison's legendary Gold Cup series represents the pinnacle of reliability in the world of closed-loop hydrostatic transmissions. The ability to withstand extreme pressure and instantly reverse flow makes these units indispensable for the harshest tasks.",
      kk: "Denison-нің аңызға айналған Gold Cup сериясы жабық гидростатикалық трансмиссиялар әлеміндегі сенімділіктің шыңы болып табылады. Экстремалды қысымға төтеп беру және ағын бағытын лезде өзгерту мүмкіндігі бұл қондырғыларды ең қиын тапсырмалар үшін таптырмас етеді."
    },
    images: ["/assets/images/products/pumps/piston/Gold_Cup_Series_202608271635.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 420 бар", en: "up to 420 bar", kk: "420 барға дейін" }, 
      "Рабочий объем": { ru: "100 – 500 см³/об", en: "100 – 500 cm³/rev", kk: "100 – 500 см³/айн" },
      "Макс. скорость": { ru: "до 3600 об/мин", en: "up to 3600 rpm", kk: "3600 айн/мин дейін" },
      "Контур": { ru: "Закрытый", en: "Closed loop", kk: "Жабық" },
      "Управление": { ru: "Гидро-электрическое", en: "Hydro-electric", kk: "Гидро-электрлік" }
    },
    features: [
      { ru: "Конструкция с мощными опорными подшипниками барабана", en: "Heavy duty cylinder barrel support bearings", kk: "Барабанның қуатты тірек мойынтіректері бар конструкция" },
      { ru: "Интегрированный насос подпитки (Charge Pump)", en: "Integrated charge pump", kk: "Біріктірілген толтыру сорғысы (Charge Pump)" },
      { ru: "Быстрое время отклика системы управления", en: "Fast control system response time", kk: "Басқару жүйесінің жылдам жауап беру уақыты" },
      { ru: "Встроенные предохранительные клапаны высокого давления", en: "Built-in high pressure relief valves", kk: "Біріктірілген жоғары қысымды сақтандыру клапандары" },
      { ru: "Уникальная система распределения потока для снижения износа", en: "Unique flow distribution system for reduced wear", kk: "Тозуды азайтуға арналған бірегей ағынды бөлу жүйесі" },
      { ru: "Возможность работы на различных типах гидравлических жидкостей", en: "Ability to operate on various types of hydraulic fluids", kk: "Гидравликалық сұйықтықтардың әртүрлі түрлерінде жұмыс істеу мүмкіндігі" }
    ],
    benefits: [
      { ru: "Высочайшая надежность в самых суровых режимах работы", en: "Highest reliability in the harshest operating modes", kk: "Ең қатал жұмыс режимдеріндегі ең жоғары сенімділік" },
      { ru: "Мгновенный реверс и точное управление скоростью", en: "Instant reverse and precise speed control", kk: "Лездік реверс және жылдамдықты дәл басқару" },
      { ru: "Максимальный КПД во всем диапазоне нагрузок", en: "Maximum efficiency across the entire load range", kk: "Жүктемелердің барлық диапазонында максималды ПӘК" },
      { ru: "Продление срока службы всей трансмиссии", en: "Extending the service life of the entire transmission", kk: "Бүкіл трансмиссияның қызмет ету мерзімін ұзарту" },
      { ru: "Сокращение времени цикла в производственных процессах", en: "Cycle time reduction in production processes", kk: "Өндірістік процестердегі цикл уақытын қысқарту" },
      { ru: "Минимальная чувствительность к загрязнениям", en: "Minimum sensitivity to contamination", kk: "Ластануға минималды сезімталдық" }
    ],
    applications: [
      { ru: "Буровые установки", en: "Drilling rigs", kk: "Бұрғылау қондырғылары" },
      { ru: "Морские лебедки и приводы", en: "Marine winches and drives", kk: "Теңіз шығырлары мен жетектері" },
      { ru: "Тяжелые конвейерные системы", en: "Heavy-duty conveyor systems", kk: "Ауыр конвейерлік жүйелер" },
      { ru: "Приводы хода спецтехники", en: "Mobile equipment travel drives", kk: "Арнайы техниканың жүріс жетектері" },
      { ru: "Дробильные установки", en: "Crushers", kk: "Ұсақтағыш қондырғылар" },
      { ru: "Шредеры для переработки лома", en: "Scrap metal shredders", kk: "Сынықтарды қайта өңдеуге арналған шредерлер" }
    ],
    markets: [
      { ru: "Горнодобывающая промышленность", en: "Mining", kk: "Тау-кен өнеркәсібі" },
      { ru: "Нефтегазовый сектор", en: "Oil & Gas", kk: "Мұнай-газ секторы" },
      { ru: "Морское и речное судостроение", en: "Marine", kk: "Теңіз және өзен кеме жасау" },
      { ru: "Строительство инфраструктуры", en: "Infrastructure Construction", kk: "Инфрақұрылым құрылысы" },
      { ru: "Перерабатывающая промышленность", en: "Processing Industry", kk: "Өңдеу өнеркәсібі" }
    ]
  },
  {
    id: "s6",
    productTypeId: "pt2",
    brandId: "b1",
    name: {
      ru: "Аксиально-поршневые насосы Series VP1",
      en: "Axial Piston Pumps - VP1 Series",
      kk: "Осьтік-поршеньді сорғылар - VP1 сериясы"
    },
    slug: "vp1-series",
    descriptionHtml: {
      ru: "Насосы Parker VP1 — это первые в мире аксиально-поршневые насосы с регулируемым объемом, специально созданные для коммерческого транспорта. Они могут устанавливаться непосредственно на коробку отбора мощности (PTO) и обеспечивают высокую эффективность при малых габаритах.",
      en: "Parker VP1 pumps are the world's first variable displacement axial piston pumps specifically designed for commercial vehicles. They can be mounted directly onto a truck's Power Take-Off (PTO) and provide high efficiency in small dimensions.",
      kk: "Parker VP1 сорғылары — бұл коммерциялық көліктер үшін арнайы жасалған әлемдегі алғашқы айнымалы көлемді осьтік-поршеньді сорғылар. Олар тікелей қуатты іріктеу қорабына (PTO) орнатылуы мүмкін және шағын габариттерде жоғары тиімділікті қамтамасыз етеді."
    },
    images: ["/assets/images/products/pumps/piston/Series_VP1_202608271643.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 420 бар", en: "up to 420 bar", kk: "420 барға дейін" }, 
      "Рабочий объем": { ru: "45 – 130 см³/об", en: "45 – 130 cm³/rev", kk: "45 – 130 см³/айн" },
      "Частота вращения": { ru: "до 3000 об/мин", en: "up to 3000 rpm", kk: "3000 айн/мин дейін" },
      "КПД": { ru: "95%", en: "95%", kk: "95%" },
      "Тип": { ru: "Для грузовиков", en: "For Trucks", kk: "Жүк көліктері үшін" }
    },
    features: [
      { ru: "Первый в мире регулируемый насос для PTO грузовиков", en: "World's first variable pump for truck PTOs", kk: "Жүк көліктерінің PTO-ларына арналған әлемдегі алғашқы реттелетін сорғы" },
      { ru: "Высокая частота самовсасывания до 3000 об/мин", en: "High self-priming speed up to 3000 rpm", kk: "3000 айн/мин дейін жоғары өздігінен сору жиілігі" },
      { ru: "Тонкий корпус для установки в ограниченном пространстве", en: "Slim housing for installation in confined spaces", kk: "Шектеулі кеңістікте орнатуға арналған жұқа корпус" },
      { ru: "Низкий уровень шума во всем диапазоне скоростей", en: "Low noise level throughout the speed range", kk: "Барлық жылдамдық диапазонында төмен шу деңгейі" },
      { ru: "Высокая объемная и механическая эффективность", en: "High volumetric and mechanical efficiency", kk: "Жоғары көлемдік және механикалық тиімділік" },
      { ru: "Прочный корпус из высокопрочного чугуна", en: "Durable housing made of high-strength cast iron", kk: "Жоғары берік шойыннан жасалған берік корпус" }
    ],
    benefits: [
      { ru: "Повышенная надежность в тяжелых условиях эксплуатации", en: "Increased reliability in severe operating conditions", kk: "Ауыр пайдалану жағдайларындағы жоғары сенімділік" },
      { ru: "Снижение потребления топлива мобильной техникой", en: "Fuel consumption reduction for mobile equipment", kk: "Мобильді техниканың отын тұтынуын азайту" },
      { ru: "Простой монтаж без дополнительных переходных фланцев", en: "Simple mounting without additional adapter flanges", kk: "Қосымша өтпелі фланецтерсіз қарапайым монтаждау" },
      { ru: "Увеличение межсервисного интервала гидросистемы", en: "Increasing the hydraulic system service interval", kk: "Гидравликалық жүйенің сервисаралық аралығын арттыру" },
      { ru: "Максимальная производительность при малом весе", en: "Maximum performance with low weight", kk: "Төмен салмақтағы максималды өнімділік" },
      { ru: "Устойчивость к резким перепадам давления", en: "Resistance to sudden pressure surges", kk: "Қысымның күрт ауытқуларына төзімділік" }
    ],
    applications: [
      { ru: "Краны-манипуляторы", en: "Cranes and loaders", kk: "Кран-манипуляторлар" },
      { ru: "Мусоровозы и коммунальная техника", en: "Refuse trucks and utility vehicles", kk: "Қоқыс тасушылар және коммуналдық техника" },
      { ru: "Лесовозы с гидроманипуляторами", en: "Log trucks with hydraulic loaders", kk: "Гидроманипуляторлары бар орман тасушылар" },
      { ru: "Пожарные машины", en: "Fire trucks", kk: "Өрт сөндіру машиналары" },
      { ru: "Тяжелые эвакуаторы", en: "Heavy recovery vehicles", kk: "Ауыр эвакуаторлар" },
      { ru: "Снегоуборочная техника", en: "Snow removal equipment", kk: "Қар тазалайтын техника" }
    ],
    markets: [
      { ru: "Грузовой и коммерческий транспорт", en: "Truck and Commercial Transport", kk: "Жүк және коммерциялық көлік" },
      { ru: "Строительство", en: "Construction", kk: "Құрылыс" },
      { ru: "Лесное хозяйство", en: "Forestry", kk: "Орман шаруашылығы" },
      { ru: "Коммунальное хозяйство", en: "Utilities", kk: "Коммуналдық шаруашылық" },
      { ru: "Пожарная безопасность", en: "Fire Safety", kk: "Өрт қауіпсіздігі" }
    ]
  },
  {
    id: "s7",
    productTypeId: "pt2",
    brandId: "b1",
    name: {
      ru: "Аксиальные насосы Series F1, F2, F3, F4",
      en: "Axial Piston Pumps - F1, F2, F3, F4 Series",
      kk: "Осьтік сорғылар - F1, F2, F3, F4 сериялары"
    },
    slug: "f-series-mobile",
    descriptionHtml: {
      ru: "Серия F3 — это первая в мире отключаемая гидравлическая помпа, позволяющая подсоединять и отсоединять насос от двигателя прямо на ходу. Это обеспечивает беспрецедентную топливную эффективность и снижает износ оборудования при длительных переездах спецтехники.",
      en: "The F3 series is the world's first disengageable hydraulic pump, allowing the pump to be engaged and disengaged from the engine while driving. This provides unprecedented fuel efficiency and reduces equipment wear during long transport moves.",
      kk: "F3 сериясы — бұл қозғалыс кезінде сорғыны қозғалтқышқа қосуға және ажыратуға мүмкіндік беретін әлемдегі алғашқы ажыратылатын гидравликалық сорғы. Бұл отынның бұрын-соңды болмаған тиімділігін қамтамасыз етеді және арнайы техниканың ұзақ жүруі кезінде жабдықтың тозуын азайтады."
    },
    images: ["/assets/images/products/pumps/piston/Series_F3_202608271645.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 400 бар", en: "up to 400 bar", kk: "400 барға дейін" }, 
      "Рабочий объем": { ru: "82 – 103 см³/об", en: "82 – 103 cm³/rev", kk: "82 – 103 см³/айн" },
      "Частота вращения": { ru: "до 2300 об/мин", en: "up to 2300 rpm", kk: "2300 айн/мин дейін" },
      "Вес": { ru: "от 12.0 кг", en: "from 12.0 kg", kk: "12.0 кг-нан бастап" },
      "Особенность": { ru: "Отключаемый привод", en: "Disengageable drive", kk: "Ажыратылатын жетек" }
    },
    features: [
      { ru: "Уникальная возможность включения/выключения на ходу", en: "Unique engagement/disengagement on the fly", kk: "Қозғалыс кезінде қосудың/өшірудің бірегей мүмкіндігі" },
      { ru: "Изогнутый вал (Bent-axis) для высокого КПД", en: "Bent-axis design for high efficiency", kk: "Жоғары ПӘК үшін иілген білік (Bent-axis)" },
      { ru: "Компактный дизайн для установки на PTO", en: "Compact design for PTO mounting", kk: "PTO-ға орнатуға арналған ықшам дизайн" },
      { ru: "Высокая надежность благодаря минимальному количеству деталей", en: "High reliability due to minimum number of parts", kk: "Бөлшектердің минималды санының арқасында жоғары сенімділік" },
      { ru: "Усиленные уплотнения для работы в агрессивных средах", en: "Reinforced seals for harsh environments", kk: "Агрессивті ортада жұмыс істеуге арналған күшейтілген нығыздағыштар" },
      { ru: "Специальная конструкция поршней для плавного пуска", en: "Special piston design for smooth start-up", kk: "Бірқалыпты іске қосуға арналған поршеньдердің арнайы конструкциясы" }
    ],
    benefits: [
      { ru: "Существенная экономия топлива (до 0.6 л/100 км)", en: "Significant fuel savings (up to 0.6 l/100 km)", kk: "Отынды айтарлықтай үнемдеу (100 км-ге 0.6 л дейін)" },
      { ru: "Снижение уровня шума при отключенном насосе", en: "Noise level reduction when pump is disengaged", kk: "Сорғы ажыратылған кезде шу деңгейін төмендету" },
      { ru: "Увеличение ресурса двигателя и трансмиссии", en: "Extended engine and transmission life", kk: "Қозғалтқыш пен трансмиссияның ресурсын арттыру" },
      { ru: "Соответствие экологическим стандартам по шуму и выбросам", en: "Compliance with environmental noise and emission standards", kk: "Шу және шығарындылар бойынша экологиялық стандарттарға сәйкестік" },
      { ru: "Простота обслуживания и диагностики", en: "Ease of maintenance and diagnostics", kk: "Техникалық қызмет көрсету мен диагностиканың қарапайымдылығы" },
      { ru: "Длительная гарантия от лидера отрасли", en: "Long-term warranty from an industry leader", kk: "Сала көшбасшысынан ұзақ мерзімді кепілдік" }
    ],
    applications: [
      { ru: "Мусоровозы", en: "Refuse trucks", kk: "Қоқыс тасушылар" },
      { ru: "Самосвалы с прицепами", en: "Dump trucks with trailers", kk: "Тіркемелері бар аударылатын жүк көліктері" },
      { ru: "Бетоносмесители", en: "Concrete mixers", kk: "Бетон араластырғыштар" },
      { ru: "Машины для очистки канализаций", en: "Sewer cleaning vehicles", kk: "Кәріз тазалау машиналары" },
      { ru: "Аэродромная техника", en: "Airport ground support equipment", kk: "Аэродром техникасы" },
      { ru: "Сельскохозяйственные разбрасыватели", en: "Agricultural spreaders", kk: "Ауыл шаруашылығы таратқыштары" }
    ],
    markets: [
      { ru: "Коммунальное хозяйство", en: "Utilities", kk: "Коммуналдық шаруашылық" },
      { ru: "Транспортные перевозки", en: "Transport and Logistics", kk: "Көлік тасымалы" },
      { ru: "Строительство", en: "Construction", kk: "Құрылыс" },
      { ru: "Экология", en: "Environmental Services", kk: "Экология" },
      { ru: "Сельское хозяйство", en: "Agriculture", kk: "Ауыл шаруашылығы" }
    ]
  },
  {
    id: "s8",
    productTypeId: "pt2",
    brandId: "b1",
    name: {
      ru: "Аксиальные насосы Series F10, F11, F12",
      en: "Axial Piston Pumps - F10, F11, F12 Series",
      kk: "Осьтік сорғылар - F10, F11, F12 сериялары"
    },
    slug: "f-series-high-speed",
    descriptionHtml: {
      ru: "Высокопроизводительные насосы и моторы серии F11/F12 предназначены для самых суровых условий эксплуатации. Благодаря уникальной сферической форме поршней и высокой частоте вращения, они обеспечивают исключительную надежность в мобильных и промышленных приводах.",
      en: "F11/F12 high-performance pumps and motors are designed for the harshest operating conditions. Thanks to their unique spherical piston shape and high speeds, they provide exceptional reliability in mobile and industrial drives.",
      kk: "F11/F12 жоғары өнімді сорғылары мен қозғалтқыштары ең қатал пайдалану жағдайларына арналған. Поршеньдердің бірегей сфералық пішіні мен жоғары айналу жиілігінің арқасында олар мобильді және өнеркәсіптік жетектерде ерекше сенімділікті қамтамасыз етеді."
    },
    images: ["/assets/images/products/pumps/piston/Series_F11_202608271647.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 480 бар", en: "up to 480 bar", kk: "480 барға дейін" }, 
      "Рабочий объем": { ru: "5 – 250 см³/об", en: "5 – 250 cm³/rev", kk: "5 – 250 см³/айн" },
      "Частота вращения": { ru: "до 10000 об/мин", en: "up to 10000 rpm", kk: "10000 айн/мин дейін" },
      "КПД": { ru: "до 97%", en: "up to 97%", kk: "97%-ға дейін" }
    },
    features: [
      { ru: "Запатентованная сферическая форма поршней", en: "Patented spherical piston shape", kk: "Патенттелген сфералық поршень пішіні" },
      { ru: "Высокая частота вращения во всем диапазоне объемов", en: "High rotational speed throughout the displacement range", kk: "Көлемдердің барлық диапазонында жоғары айналу жиілігі" },
      { ru: "Устойчивость к резким перепадам температур", en: "Resistance to sudden temperature changes", kk: "Температураның күрт ауытқуына төзімділік" },
      { ru: "Способность работать при крайне высоком давлении", en: "Ability to work at extremely high pressure", kk: "Өте жоғары қысымда жұмыс істеу қабілеті" },
      { ru: "Оптимизированная система смазки подшипников", en: "Optimized bearing lubrication system", kk: "Оңтайландырылған мойынтіректерді майлау жүйесі" },
      { ru: "Компактный корпус при высокой мощности", en: "Compact housing with high power", kk: "Жоғары қуаттағы ықшам корпус" }
    ],
    benefits: [
      { ru: "Исключительная долговечность в экстремальных режимах", en: "Exceptional durability in extreme conditions", kk: "Экстремалды режимдердегі ерекше беріктік" },
      { ru: "Высочайший общий КПД (до 97%)", en: "Highest overall efficiency (up to 97%)", kk: "Ең жоғары жалпы ПӘК (97%-ға дейін)" },
      { ru: "Возможность использования в качестве насоса или мотора", en: "Can be used as either pump or motor", kk: "Сорғы немесь қозғалтқыш ретінде пайдалану мүмкіндігі" },
      { ru: "Устойчивость к значительным вибрациям и ударам", en: "Resistance to significant vibration and shock", kk: "Едәуір діріл мен соққыларға төзімділік" },
      { ru: "Минимальные пульсации потока и давления", en: "Minimum flow and pressure pulsations", kk: "Минималды ағын мен қысым пульсациясы" },
      { ru: "Широкая доступность запасных частей", en: "Wide availability of spare parts", kk: "Қосалқы бөлшектердің кең қолжетімділігі" }
    ],
    applications: [
      { ru: "Гидростатические трансмиссии", en: "Hydrostatic transmissions", kk: "Гидростатикалық трансмиссиялар" },
      { ru: "Пильные механизмы лесозаготовительных головок", en: "Saw mechanisms for harvesting heads", kk: "Орман дайындау бастарының ара механизмдері" },
      { ru: "Приводы вентиляторов охлаждения", en: "Cooling fan drives", kk: "Салқындату желдеткіштерінің жетектері" },
      { ru: "Буровое оборудование", en: "Drilling equipment", kk: "Бұрғылау жабдықтары" },
      { ru: "Морские лебедки и движители", en: "Marine winches and propulsion", kk: "Теңіз шығырлары мен қозғалтқыштары" },
      { ru: "Авиационные пусковые системы", en: "Aviation starting systems", kk: "Авиациялық іске қосу жүйелері" }
    ],
    markets: [
      { ru: "Лесная промышленность", en: "Forestry", kk: "Орман өнеркәсібі" },
      { ru: "Горнодобывающая отрасль", en: "Mining", kk: "Тау-кен саласы" },
      { ru: "Морской сектор", en: "Marine", kk: "Теңіз секторы" },
      { ru: "Аэрокосмическая отрасль", en: "Aerospace", kk: "Аэроғарыш саласы" },
      { ru: "Машиностроение", en: "Machinery Manufacturing", kk: "Машина жасау" }
    ]
  },
  {
    id: "s9",
    productTypeId: "pt3",
    brandId: "b1",
    name: {
      ru: "Series PGP600 Gear Pumps",
      en: "PGP600 Series Gear Pumps",
      kk: "PGP600 сериялы тісті сорғылар"
    },
    slug: "pgp600-series",
    descriptionHtml: {
      ru: "Высоконадежные шестеренные насосы Parker в чугунном корпусе серий PGP610, PGP620, PGP640 и PGP330. Обладают исключительной долговечностью в условиях экстремального давления и предназначены для самых тяжелых мобильных и промышленных систем.",
      en: "Highly reliable Parker cast iron gear pumps of the PGP610, PGP620, PGP640 and PGP330 series. They offer exceptional durability under extreme pressure conditions and are designed for the most demanding mobile and industrial systems.",
      kk: "PGP610, PGP620, PGP640 және PGP330 сериялы шойын корпустағы Parker жоғары сенімді тісті сорғылары. Олар экстремалды қысым жағдайында ерекше беріктікке ие және ең ауыр мобильді және өнеркәсіптік жүйелерге арналған."
    },
    images: ["/assets/images/products/pumps/gear/PGP640_202608271653.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 310 бар", en: "up to 310 bar", kk: "310 барға дейін" }, 
      "Рабочий объем": { ru: "16 – 80 см³/об", en: "16 – 80 cm³/rev", kk: "16 – 80 см³/айн" },
      "Частота вращения": { ru: "до 3300 об/мин", en: "up to 3300 rpm", kk: "3300 айн/мин дейін" },
      "Материал": { ru: "Чугун", en: "Cast Iron", kk: "Шойын" },
      "Тип": { ru: "Шестеренный", en: "Gear Pump", kk: "Тісті" }
    },
    features: [
      { ru: "Разборная конструкция корпуса из двух частей", en: "Two-piece housing design", kk: "Корпустың екі бөліктен тұратын жиналмалы конструкциясы" },
      { ru: "Высокопрочный чугунный корпус для работы под давлением", en: "High-strength cast iron housing for pressure operation", kk: "Қысым астында жұмыс істеуге арналған жоғары берік шойын корпус" },
      { ru: "Валы с высокой несущей способностью", en: "High load-bearing capacity shafts", kk: "Жоғары жүк көтергіштігі бар біліктер" },
      { ru: "Сбалансированные по давлению опорные пластины", en: "Pressure-balanced thrust plates", kk: "Қысым бойынша теңгерілген тірек пластиналары" },
      { ru: "Широкий выбор фланцев и валов по стандартам SAE и ISO", en: "Wide choice of SAE and ISO flanges and shafts", kk: "SAE және ISO стандарттары бойынша фланецтер мен біліктердің кең таңдауы" },
      { ru: "Возможность создания многосекционных насосов", en: "Ability to create multi-section pumps", kk: "Көп секциялы сорғыларды жасау мүмкіндігі" }
    ],
    benefits: [
      { ru: "Исключительная долговечность в тяжелых режимах (Heavy Duty)", en: "Exceptional durability in heavy-duty conditions", kk: "Ауыр режимдердегі ерекше беріктік (Heavy Duty)" },
      { ru: "Высокий КПД при рабочих давлениях до 310 бар", en: "High efficiency at operating pressures up to 310 bar", kk: "310 барға дейінгі жұмыс қысымында жоғары ПӘК" },
      { ru: "Низкий уровень шума по сравнению с аналогами", en: "Low noise level compared to counterparts", kk: "Аналогтармен салыстырғанда төмен шу деңгейі" },
      { ru: "Способность выдерживать пиковые нагрузки", en: "Ability to withstand peak loads", kk: "Шыңдық жүктемелерге төтеп беру қабілеті" },
      { ru: "Универсальность и широкая совместимость", en: "Versatility and wide compatibility", kk: "Әмбебаптық және кең үйлесімділік" },
      { ru: "Снижение затрат на эксплуатацию спецтехники", en: "Reducing operating costs for mobile equipment", kk: "Арнайы техниканы пайдалану шығындарын азайту" }
    ],
    applications: [
      { ru: "Экскаваторы и погрузчики", en: "Excavators and loaders", kk: "Экскаваторлар мен тиегіштер" },
      { ru: "Гидроприводы вентиляторов (Fan Drive)", en: "Fan drives", kk: "Желдеткіштердің гидрожетектері (Fan Drive)" },
      { ru: "Сельскохозяйственные комбайны", en: "Agricultural combines", kk: "Ауыл шаруашылығы комбайндары" },
      { ru: "Дробильное оборудование", en: "Crushing equipment", kk: "Ұсақтау жабдықтары" },
      { ru: "Промышленные силовые агрегаты", en: "Industrial power units", kk: "Өнеркәсіптік қуат агрегаттары" },
      { ru: "Бетононасосы", en: "Concrete pumps", kk: "Бетон сорғылары" }
    ],
    markets: [
      { ru: "Строительная техника", en: "Construction Equipment", kk: "Құрылыс техникасы" },
      { ru: "Сельское хозяйство", en: "Agriculture", kk: "Ауыл шаруашылығы" },
      { ru: "Горнодобывающая промышленность", en: "Mining", kk: "Тау-кен өнеркәсібі" },
      { ru: "Лесозаготовка", en: "Forestry", kk: "Орман дайындау" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" }
    ]
  },
  {
    id: "s10",
    productTypeId: "pt3",
    brandId: "b1",
    name: {
      ru: "Series PGP500 Gear Pumps",
      en: "PGP500 Series Gear Pumps",
      kk: "PGP500 сериялы тісті сорғылар"
    },
    slug: "pgp500-series",
    descriptionHtml: {
      ru: "Компактные шестеренные насосы Parker серии PGP500 в алюминиевом корпусе сочетают в себе малый вес и высокую производительность. Серии PGP505, PGP511 и PGP517 являются стандартом для систем среднего давления, где важна экономия пространства и веса.",
      en: "Parker's PGP500 series compact aluminum gear pumps combine lightweight with high performance. The PGP505, PGP511 and PGP517 series are the standard for medium pressure systems where space and weight savings are important.",
      kk: "Parker-дің PGP500 сериялы ықшам алюминий тісті сорғылары жеңіл салмақ пен жоғары өнімділікті біріктіреді. PGP505, PGP511 және PGP517 сериялары кеңістік пен салмақты үнемдеу маңызды болатын орташа қысымды жүйелер үшін стандарт болып табылады."
    },
    images: ["/assets/images/products/pumps/gear/PGP511_Series_202608271655.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 280 бар", en: "up to 280 bar", kk: "280 барға дейін" }, 
      "Рабочий объем": { ru: "0.8 – 52 см³/об", en: "0.8 – 52 cm³/rev", kk: "0.8 – 52 см³/айн" },
      "Частота вращения": { ru: "до 4000 об/мин", en: "up to 4000 rpm", kk: "4000 айн/мин дейін" },
      "Материал": { ru: "Алюминий", en: "Aluminum", kk: "Алюминий" },
      "Конструкция": { ru: "Втулочная", en: "Bushing-type", kk: "Втулкалы" }
    },
    features: [
      { ru: "Трехсоставная конструкция для гибкости конфигурации", en: "Three-piece construction for configuration flexibility", kk: "Конфигурация икемділігі үшін үш бөліктен тұратын конструкция" },
      { ru: "Алюминиевый корпус с высокой теплоотдачей", en: "Aluminum housing with high heat dissipation", kk: "Жоғары жылу өткізгіштігі бар алюминий корпус" },
      { ru: "Высокоточные шестерни с минимальными зазорами", en: "High-precision gears with minimal clearances", kk: "Минималды саңылаулары бар жоғары дәлдікті тісті дөңгелектер" },
      { ru: "Специальные подшипниковые втулки для долгой службы", en: "Special bearing bushings for long service life", kk: "Ұзақ қызмет ету мерзіміне арналған арнайы подшипник втулкалары" },
      { ru: "Возможность объединения в тандемы до 4 секций", en: "Ability to combine in tandems up to 4 sections", kk: "4 секцияға дейін тандемдерге біріктіру мүмкіндігі" },
      { ru: "Различные варианты задних крышек с клапанами", en: "Various back cover options with valves", kk: "Клапандары бар артқы қақпақтардың әртүрлі нұсқалары" }
    ],
    benefits: [
      { ru: "Высокая плотность мощности при минимальном весе", en: "High power density with minimum weight", kk: "Минималды салмақтағы жоғары қуат тығыздығы" },
      { ru: "Высокий общий КПД (до 95%)", en: "High overall efficiency (up to 95%)", kk: "Жоғары жалпы ПӘК (95%-ға дейін)" },
      { ru: "Надежный пуск в холодное время года", en: "Reliable starting in cold seasons", kk: "Суық мезгілде сенімді іске қосу" },
      { ru: "Низкий уровень пульсаций потока", en: "Low flow pulsations", kk: "Ағын пульсациясының төмен деңгейі" },
      { ru: "Широкая номенклатура присоединительных размеров", en: "Wide range of connection sizes", kk: "Қосылу өлшемдерінің кең номенклатурасы" },
      { ru: "Оптимальное соотношение цена/производительность", en: "Optimal price/performance ratio", kk: "Баға/өнімділік оңтайлы арақатынасы" }
    ],
    applications: [
      { ru: "Насосы гидроусилителя руля (Power Steering)", en: "Power Steering pumps", kk: "Рульдің гидроүдеткіш сорғылары (Power Steering)" },
      { ru: "Вилочные погрузчики и складская техника", en: "Forklifts and warehouse equipment", kk: "Ашалы тиегіштер мен қойма техникасы" },
      { ru: "Тракторы и сельхознавеска", en: "Tractors and agricultural implements", kk: "Тракторлар және ауыл шаруашылығы аспалары" },
      { ru: "Малые промышленные гидростанции", en: "Small industrial power units", kk: "Шағын өнеркәсіптік гидростанциялар" },
      { ru: "Приводы навесного оборудования", en: "Attachment drives", kk: "Аспалы жабдықтардың жетектері" },
      { ru: "Автомобильные гидроборта", en: "Truck tail lifts", kk: "Автомобильдік гидроборттар" }
    ],
    markets: [
      { ru: "Сельское хозяйство и агротехника", en: "Agriculture and Agrotechnics", kk: "Ауыл шаруашылығы және агротехника" },
      { ru: "Материально-техническое снабжение", en: "Logistics and Material Handling", kk: "Материалдық-техникалық жабдықтау" },
      { ru: "Транспорт", en: "Transport", kk: "Көлік" },
      { ru: "Легкая промышленность", en: "Light Industry", kk: "Жеңіл өнеркәсіп" },
      { ru: "Коммунальный сектор", en: "Utilities", kk: "Коммуналдық сектор" }
    ]
  },
    {
    id: "s11",
    productTypeId: "pt4",
    brandId: "b1",
    name: {
      ru: "Гидрораспределители — серии D1VW, D3W",
      en: "Directional Control Valves - D1VW, D3W Series",
      kk: "Гидрораспределитер — D1VW, D3W сериялары"
    },
    slug: "d1vw-d3w-series",
    descriptionHtml: {
      ru: "Промышленные гидрораспределители серий D1VW (NG06) и D3W (NG10) с электромагнитным управлением — это эталон точности и долговечности. Благодаря оптимизированной конструкции каналов, они обеспечивают минимальные потери давления и высокую надежность переключения даже при максимальных расходах.",
      en: "Industrial directional control valves of the D1VW (NG06) and D3W (NG10) series with solenoid control are a benchmark for precision and durability. Thanks to optimized channel design, they provide minimum pressure losses and high switching reliability even at maximum flow rates.",
      kk: "D1VW (NG06) және D3W (NG10) сериялы электромагниттік басқаруы бар өнеркәсіптік гидрораспределитер — бұл дәлдік пен төзімділіктің эталоны. Арналардың оңтайландырылған конструкциясының арқасында олар қысымның минималды шығынын және тіпті максималды шығындарда ауысудың жоғары сенімділігін қамтамасыз етеді."
    },
    images: ["/assets/images/products/valves/Series_D3W_202608271706.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Макс. давление": { ru: "350 бар", en: "350 bar", kk: "350 бар" }, 
      "Макс. расход": { ru: "до 150 л/мин", en: "up to 150 l/min", kk: "150 л/мин дейін" },
      "Типоразмер": { ru: "NG06 / NG10", en: "NG06 / NG10", kk: "NG06 / NG10" },
      "Управление": { ru: "Электромагнитное", en: "Solenoid", kk: "Электромагниттік" },
      "Напряжение": { ru: "12V, 24V DC / 110V, 230V AC", en: "12V, 24V DC / 110V, 230V AC", kk: "12V, 24V DC / 110V, 230V AC" }
    },
    features: [
      { ru: "Прямое управление золотником электромагнитами", en: "Direct solenoid control of the spool", kk: "Электромагниттермен золотникті тікелей басқару" },
      { ru: "Широкий выбор схем распределения (золотников)", en: "Wide range of spool configurations", kk: "Тарату схемаларының (золотниктердің) кең таңдауы" },
      { ru: "Возможность ручного дублирования управления", en: "Manual override capability", kk: "Басқаруды қолмен қайталау мүмкіндігі" },
      { ru: "Высокая степень защиты соленоидов (IP65/IP67)", en: "High protection class for solenoids (IP65/IP67)", kk: "Соленоидтардың жоғары қорғаныс дәрежесі (IP65/IP67)" },
      { ru: "Плавное переключение для снижения гидроударов", en: "Soft-shift option to reduce hydraulic shocks", kk: "Гидросоққыларды азайту үшін бірқалыпты ауысу" },
      { ru: "Компактный дизайн для блочного монтажа", en: "Compact design for manifold mounting", kk: "Блокты монтаждауға арналған ықшам дизайн" }
    ],
    benefits: [
      { ru: "Низкие потери давления и экономия энергии", en: "Low pressure drops and energy savings", kk: "Қысымның төмен шығыны және энергияны үнемдеу" },
      { ru: "Длительный срок службы (до 10 млн циклов)", en: "Long service life (up to 10 million cycles)", kk: "Ұзақ қызмет ету мерзімі (10 млн циклге дейін)" },
      { ru: "Простота диагностики благодаря светодиодной индикации", en: "Ease of diagnostics thanks to LED indication", kk: "Жарықдиодты индикацияның арқасында диагностиканың қарапайымдылығы" },
      { ru: "Быстрая замена электромагнитов без разгерметизации системы", en: "Quick solenoid replacement without system depressurization", kk: "Жүйені герметизациядан шығармай электромагниттерді жылдам ауыстыру" },
      { ru: "Высокая эксплуатационная безопасность", en: "High operational safety", kk: "Жоғары пайдалану қауіпсіздігі" },
      { ru: "Минимальное время отклика на управляющий сигнал", en: "Minimum response time to control signal", kk: "Басқару сигналына жауап берудің минималды уақыты" }
    ],
    applications: [
      { ru: "Общепромышленные гидравлические системы", en: "General industrial hydraulic systems", kk: "Жалпы өнеркәсіптік гидравликалық жүйелер" },
      { ru: "Металлорежущие и деревообрабатывающие станки", en: "Metal and woodworking machine tools", kk: "Металл кесетін иәне ағаш өңдейтін станоктар" },
      { ru: "Термопластавтоматы", en: "Injection molding machines", kk: "Термопластавтоматтар" },
      { ru: "Линии автоматизации производства", en: "Production automation lines", kk: "Өндірісті автоматтандыру желілері" },
      { ru: "Прессовое оборудование", en: "Press equipment", kk: "Пресс жабдықтары" },
      { ru: "Гидравлические подъемники", en: "Hydraulic lifts", kk: "Гидравликалық көтергіштер" }
    ],
    markets: [
      { ru: "Индустриальный сектор", en: "Industrial sector", kk: "Индустриалды сектор" },
      { ru: "Станкостроение", en: "Machine Tool Industry", kk: "Станок жасау" },
      { ru: "Автомобильная промышленность", en: "Automotive Industry", kk: "Автомобиль өнеркәсібі" },
      { ru: "Пищевая промышленность", en: "Food Industry", kk: "Тамақ өнеркәсібі" },
      { ru: "Деревообработка", en: "Woodworking", kk: "Ағаш өңдеу" }
    ]
  },
  {
    id: "s12",
    productTypeId: "pt5",
    brandId: "b1",
    name: {
      ru: "Мобильная фильтрующая станция — GLFTrolley",
      en: "Portable Filtration Trolley - GLFTrolley",
      kk: "Мобильді сүзу станциясы — GLFTrolley"
    },
    slug: "glftrolley",
    descriptionHtml: {
      ru: "Мобильная фильтрующая станция Parker GLFTrolley — это идеальное решение для тонкой очистки гидравлических масел при их заливке в систему или в процессе эксплуатации. Оснащенная высокоэффективными элементами iProtect®, она гарантирует удаление мельчайших частиц загрязнений и продлевает ресурс всех компонентов гидросистемы.",
      en: "The Parker GLFTrolley portable filtration station is the ideal solution for fine filtration of hydraulic oils during filling or operation. Equipped with high-efficiency iProtect® elements, it guarantees removal of the smallest contaminant particles and extends the life of all hydraulic components.",
      kk: "Parker GLFTrolley мобильді сүзу станциясы — бұл гидравликалық майларды жүйеге құю кезінде немесе пайдалану процесінде жұқа тазарту үшін тамаша шешім. Жоғары тиімді iProtect® элементтерімен жабдықталған ол ластаушы заттардың ең ұсақ бөлшектерін жоюға кепілдік береді және барлық гидравликалық жүйе компоненттерінің ресурсын ұзартады."
    },
    images: ["/assets/images/products/filtration/GLFTrolley_202608271712.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Производительность": { ru: "20 / 40 л/мин", en: "20 / 40 l/min", kk: "20 / 40 л/мин" }, 
      "Рабочее давление": { ru: "10 бар", en: "10 bar", kk: "10 бар" },
      "Степень очистки": { ru: "от 2 мкм", en: "from 2 µm", kk: "2 мкм-ден бастап" },
      "Напряжение": { ru: "230V / 400V", en: "230V / 400V", kk: "230V / 400V" },
      "Вес": { ru: "55 кг", en: "55 kg", kk: "55 кг" }
    },
    features: [
      { ru: "Фильтрующий элемент GLF iProtect® с высокой грязеемкостью", en: "GLF iProtect® filter element with high dirt holding capacity", kk: "Кір сыйымдылығы жоғары GLF iProtect® сүзгі элементі" },
      { ru: "Встроенный визуальный индикатор загрязнения", en: "Built-in visual clogging indicator", kk: "Кіріктірілген визуалды ластану индикаторы" },
      { ru: "Легкая и маневренная колесная база", en: "Lightweight and maneuverable wheelbase", kk: "Жеңіл және маневрлі доңғалақ базасы" },
      { ru: "Тихий и надежный шестеренный насос", en: "Quiet and reliable gear pump", kk: "Тыныш және сенімді тісті сорғы" },
      { ru: "Прочный корпус, устойчивый к внешним воздействиям", en: "Durable housing, resistant to external influences", kk: "Сыртқы әсерлерге төзімді берік корпус" },
      { ru: "Система предотвращения проливов масла", en: "Oil spill prevention system", kk: "Май төгілуін болдырмау жүйесі" }
    ],
    benefits: [
      { ru: "Гарантированная чистота масла перед заливкой в бак", en: "Guaranteed oil cleanliness before filling the tank", kk: "Резервуарға құйылғанға дейін майдың кепілдендірілген тазалығы" },
      { ru: "Снижение риска внезапных отказов гидросистемы", en: "Reduced risk of sudden hydraulic system failures", kk: "Гидравликалық жүйенің кенеттен істен шығу қаупін азайту" },
      { ru: "Увеличение срока службы дорогостоящих насосов и клапанов", en: "Extended service life of expensive pumps and valves", kk: "Қымбат сорғылар мен клапандардың қызмет ету мерзімін ұзарту" },
      { ru: "Простота в эксплуатации — не требует специальных навыков", en: "Ease of operation — no special skills required", kk: "Пайдаланудағы қарапайымдылық — арнайы дағдыларды қажет етпейді" },
      { ru: "Быстрая окупаемость за счет снижения затрат на ремонт", en: "Fast payback due to reduced repair costs", kk: "Жөндеу шығындарын азайту есебінен жылдам өтелу" },
      { ru: "Возможность очистки масла без остановки оборудования", en: "Ability to clean oil without stopping equipment", kk: "Майды жабдықты тоқтатпай тазарту мүмкіндігі" }
    ],
    applications: [
      { ru: "Фильтрация нового масла перед использованием", en: "Filtration of new oil before use", kk: "Жаңа майды қолданар алдында сүзу" },
      { ru: "Очистка масла в баках станков и спецтехники", en: "Cleaning oil in machine and equipment tanks", kk: "Станоктар мен арнайы техниканың бактарындағы майды тазарту" },
      { ru: "Периодическое обслуживание гидравлических систем", en: "Periodic maintenance of hydraulic systems", kk: "Гидравликалық жүйелерге мерзімді қызмет көрсету" },
      { ru: "Перекачка масла между емкостями", en: "Oil transfer between containers", kk: "Майды сыйымдылықтар арасында айдау" },
      { ru: "Удаление воды и механических примесей", en: "Removal of water and mechanical impurities", kk: "Суды және механикалық қоспаларды жою" },
      { ru: "Подготовка масла для испытательных стендов", en: "Oil preparation for test benches", kk: "Сынақ стендтері үшін май дайындау" }
    ],
    markets: [
      { ru: "Промышленное производство и заводы", en: "Industrial manufacturing and plants", kk: "Өнеркәсіптік өндіріс және зауыттар" },
      { ru: "Сервисные центры спецтехники", en: "Special equipment service centers", kk: "Арнайы техниканың сервистік орталықтары" },
      { ru: "Энергетические предприятия", en: "Energy enterprises", kk: "Энергетикалық кәсіпорындар" },
      { ru: "Горнодобывающие компании", en: "Mining companies", kk: "Тау-кен компаниялары" },
      { ru: "Транспортные депо", en: "Transport depots", kk: "Көлік деполары" }
    ]
  },
  {
    id: "s13",
    productTypeId: "pt5",
    brandId: "b1",
    name: {
      ru: "Фильтроэлементы — серия CN",
      en: "Filter Elements - CN Series",
      kk: "Сүзгі элементтері — CN сериясы"
    },
    slug: "cn-series",
    descriptionHtml: {
      ru: "Высокоэффективные оригинальные сменные элементы Parker для фильтров серий 15/40/80CN. Использование оригинальных элементов гарантирует сохранение расчетных параметров фильтрации и защищает чувствительные компоненты гидросистемы от преждевременного износа.",
      en: "High-performance genuine Parker replacement elements for 15/40/80CN series filters. Use of genuine elements ensures filter performance parameters are maintained and protects sensitive hydraulic components from premature wear.",
      kk: "15/40/80CN сериялы сүзгілерге арналған Parker жоғары тиімді түпнұсқа ауыстырылатын элементтері. Түпнұсқа элементтерді пайдалану сүзудің есептелген параметрлерінің сақталуына кепілдік береді және гидравликалық жүйенің сезімтал компоненттерін мерзімінен бұрын тозудан қорғайды."
    },
    images: ["/assets/images/products/filtration/CN_Series_202608271713.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 70 бар", en: "up to 70 bar", kk: "70 барға дейін" }, 
      "Макс. расход": { ru: "до 600 л/мин", en: "up to 600 l/min", kk: "600 л/мин дейін" },
      "Фильтроматериал": { ru: "Microglass / Ecoglass", en: "Microglass / Ecoglass", kk: "Microglass / Ecoglass" },
      "Тонкость очистки": { ru: "2, 5, 10, 20 мкм", en: "2, 5, 10, 20 µm", kk: "2, 5, 10, 20 мкм" },
      "Стандарт": { ru: "ISO 16889", en: "ISO 16889", kk: "ISO 16889" }
    },
    features: [
      { ru: "Многослойная структура Microglass III для максимальной эффективности", en: "Multi-layered Microglass III structure for maximum efficiency", kk: "Максималды тиімділікке арналған Microglass III көпқабатты құрылымы" },
      { ru: "Высокая поглощающая способность по отношению к частицам", en: "High dirt holding capacity", kk: "Бөлшектерге қатысты жоғары сіңіру қабілеті" },
      { ru: "Устойчивость к перепадам давления и вибрациям", en: "Resistance to pressure drops and vibrations", kk: "Қысымның төмендеуіне және дірілге төзімділік" },
      { ru: "Экологически безопасные варианты Ecoglass без металлических частей", en: "Eco-friendly Ecoglass options with no metal parts", kk: "Металл бөлшектері жоқ Ecoglass экологиялық қауіпсіз нұсқалары" },
      { ru: "Точная посадка и герметичность соединения", en: "Precision fit and sealed connection", kk: "Дәл қону және қосылымның герметикалығы" },
      { ru: "Интегрированный перепускной клапан (опционально)", en: "Integrated bypass valve (optional)", kk: "Кіріктірілген айналма клапан (міндетті емес)" }
    ],
    benefits: [
      { ru: "Гарантированное качество фильтрации на протяжении всего срока службы", en: "Guaranteed filtration quality throughout the service life", kk: "Қызмет ету мерзімі бойы кепілдендірілген сүзу сапасы" },
      { ru: "Снижение эксплуатационных расходов за счет редкой замены", en: "Reduced operating costs due to less frequent replacement", kk: "Сирек ауыстыру есебінен пайдалану шығындарын азайту" },
      { ru: "Защита гарантии на дорогостоящее гидравлическое оборудование", en: "Warranty protection for expensive hydraulic equipment", kk: "Қымбат гидравликалық жабдықтың кепілдігін қорғау" },
      { ru: "Уменьшение времени простоев из-за поломок", en: "Reduction of downtime due to failures", kk: "Ақауларға байланысты бос тұрып қалу уақытын азайту" },
      { ru: "Простая и чистая процедура замены элемента", en: "Simple and clean element replacement procedure", kk: "Элементті ауыстырудың қарапайым және таза процедурасы" },
      { ru: "Высокий коэффициент фильтрации (Beta ratio > 1000)", en: "High filtration ratio (Beta ratio > 1000)", kk: "Жоғары сүзу коэффициенті (Beta ratio > 1000)" }
    ],
    applications: [
      { ru: "Смазочные системы компрессоров и турбин", en: "Compressor and turbine lubrication systems", kk: "Компрессорлар мен турбиналардың майлау жүйелері" },
      { ru: "Гидросистемы станков и прессов", en: "Machine tool and press hydraulic systems", kk: "Станоктар мен престердің гидрожүйелері" },
      { ru: "Системы управления мобильной техникой", en: "Mobile equipment control systems", kk: "Мобильді техниканы басқару жүйелері" },
      { ru: "Стационарные фильтровальные агрегаты", en: "Stationary filtration units", kk: "Стационарлық сүзгілеу агрегаттары" },
      { ru: "Контуры охлаждения масла", en: "Oil cooling circuits", kk: "Майды салқындату контурлары" },
      { ru: "Испытательные гидравлические стенды", en: "Hydraulic test benches", kk: "Сынақ гидравликалық стендтері" }
    ],
    markets: [
      { ru: "Промышленное производство", en: "Industrial manufacturing", kk: "Өнеркәсіптік өндіріс" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "Нефтегазовая отрасль", en: "Oil and Gas", kk: "Мұнай-газ саласы" },
      { ru: "Транспорт", en: "Transport", kk: "Көлік" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" }
    ]
  },
  {
    id: "s14",
    productTypeId: "pt6",
    brandId: "b1",
    name: {
      ru: "Гидравлический рукав 6000 PSI — GlobalCore 797",
      en: "6000 PSI Hydraulic Hose - GlobalCore 797",
      kk: "6000 PSI гидравликалық шланг — GlobalCore 797"
    },
    slug: "globalcore-797",
    descriptionHtml: {
      ru: "Parker 797 — это флагманский высокопроизводительный шланг линейки GlobalCore, обеспечивающий постоянное рабочее давление 6000 PSI (420 бар) для всех типоразмеров. Уникальная конструкция с четырьмя или шестью слоями стальной оплетки обеспечивает исключительную гибкость и долговечность в самых суровых условиях.",
      en: "Parker 797 is the flagship high performance hose in the GlobalCore range, delivering constant 6000 PSI (420 bar) working pressure across all sizes. The unique construction with four or six layers of steel braid provides exceptional flexibility and durability in the harshest environments.",
      kk: "Parker 797 — бұл GlobalCore желісінің флагмандық жоғары өнімді шлангісі, барлық өлшемдер үшін 6000 PSI (420 бар) тұрақты жұмыс қысымын қамтамасыз етеді. Болат өрімінің төрт немесе алты қабаты бар ерекше конструкция ең қатал жағдайларда ерекше икемділік пен төзімділікті қамтамасыз етеді."
    },
    images: ["/assets/images/products/hoses/6000_PSI_-_GlobalCore_797._202608271721.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "420 бар (константа)", en: "420 bar (constant)", kk: "420 бар (тұрақты)" }, 
      "Радиус изгиба": { ru: "1/2 от стандарта SAE", en: "1/2 SAE standard", kk: "SAE стандартының 1/2 бөлігі" },
      "Диаметр": { ru: "от 1/4\" до 2\"", en: "from 1/4\" to 2\"", kk: "1/4\"-ден 2\"-ге дейін" },
      "Температура": { ru: "-40°C ... +125°C", en: "-40°C ... +125°C", kk: "-40°C ... +125°C" },
      "Стандарт": { ru: "ISO 18752 CC", en: "ISO 18752 CC", kk: "ISO 18752 CC" }
    },
    features: [
      { ru: "Постоянное рабочее давление 6000 PSI во всех размерах", en: "Constant 6000 PSI working pressure in all sizes", kk: "Барлық өлшемдерде тұрақты 6000 PSI жұмыс қысымы" },
      { ru: "Уменьшенный в два раза радиус изгиба по сравнению с SAE", en: "Half the bend radius of SAE standard", kk: "SAE-мен салыстырғанда екі есе азайтылған иілу радиусы" },
      { ru: "Повышенная гибкость для удобства прокладки", en: "Increased flexibility for ease of routing", kk: "Төсеу ыңғайлылығы үшін жоғары икемділік" },
      { ru: "Высокая устойчивость к истиранию (покрытие ToughCover / ST)", en: "High abrasion resistance (ToughCover / ST cover)", kk: "Тозуға жоғары төзімділік (ToughCover / ST жабыны)" },
      { ru: "Совместимость с фитингами серий 43, 77 и 79", en: "Compatible with 43, 77 and 79 series fittings", kk: "43, 77 және 79 сериялы фитингтермен үйлесімділік" },
      { ru: "Длительный импульсный ресурс", en: "Long impulse life", kk: "Ұзақ импульстік ресурс" }
    ],
    benefits: [
      { ru: "Упрощение проектирования и складских запасов", en: "Simplified design and inventory", kk: "Жобалау мен қойма қорларын жеңілдету" },
      { ru: "Снижение веса и габаритов гидролиний", en: "Reduced weight and size of hydraulic lines", kk: "Гидролиниялардың салмағы мен габариттерін азайту" },
      { ru: "Максимальная надежность при пиковых нагрузках", en: "Maximum reliability at peak loads", kk: "Шыңдық жүктемелер кезіндегі максималды сенімділік" },
      { ru: "Простой подбор шланга по давлению, а не по количеству оплеток", en: "Easy hose selection by pressure, not by braid count", kk: "Өрімдер санына емес, қысымға қарай шлангты оңай таңдау" },
      { ru: "Увеличение интервалов технического обслуживания", en: "Increased service intervals", kk: "Техникалық қызмет көрсету аралықтарын ұзарту" },
      { ru: "Высокая безопасность персонала и оборудования", en: "High safety for personnel and equipment", kk: "Персонал мен жабдықтың жоғары қауіпсіздігі" }
    ],
    applications: [
      { ru: "Тяжелая строительная техника и экскаваторы", en: "Heavy construction equipment and excavators", kk: "Ауыр құрылыс техникасы мен экскаваторлар" },
      { ru: "Горно-шахтное оборудование", en: "Mining equipment", kk: "Тау-кен жабдықтары" },
      { ru: "Буровые установки высокого давления", en: "High pressure drilling rigs", kk: "Жоғары қысымды бұрғылау қондырғылары" },
      { ru: "Морские платформы и суда", en: "Offshore platforms and vessels", kk: "Теңіз платформалары мен кемелері" },
      { ru: "Промышленные прессы и станки", en: "Industrial presses and machines", kk: "Өнеркәсіптік престер мен станоктар" },
      { ru: "Лесозаготовительные машины", en: "Forestry machines", kk: "Орман дайындау машиналары" }
    ],
    markets: [
      { ru: "Строительство и инфраструктура", en: "Construction and Infrastructure", kk: "Құрылыс және инфрақұрылым" },
      { ru: "Горнодобывающая промышленность", en: "Mining Industry", kk: "Тау-кен өнеркәсібі" },
      { ru: "Нефтегазовый сектор", en: "Oil and Gas Sector", kk: "Мұнай-газ секторы" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" },
      { ru: "Морской транспорт", en: "Marine Transport", kk: "Теңіз көлігі" }
    ]
  },
  {
    id: "s15",
    productTypeId: "pt6",
    brandId: "b1",
    name: {
      ru: "Компактный шланг Parkrimp No-Skive 462 EVO — EN 857 2SC",
      en: "Parkrimp No-Skive 462 EVO Hose - EN 857 2SC",
      kk: "Parkrimp No-Skive 462 EVO жинақы шлангісі — EN 857 2SC"
    },
    slug: "parkrimp-462-evo",
    descriptionHtml: {
      ru: "Компактный шланг Parker 462 EVO с уменьшенным радиусом изгиба отвечает современным требованиям к компактности и высокой производительности оборудования. Технология No-Skive позволяет производить опрессовку без зачистки наружного слоя, что повышает надежность соединения и защищает армирующую оплетку от коррозии.",
      en: "The compact Parker 462 EVO hose with reduced bend radius meets today's requirements for equipment compactness and high performance. No-Skive technology allows crimping without removing the outer cover, which increases connection reliability and protects the reinforcement braid from corrosion.",
      kk: "Радиусы азайтылған Parker 462 EVO жинақы шлангісі жабдықтың жинақылығы мен жоғары өнімділігіне қойылатын заманауи талаптарға жауап береді. No-Skive технологиясы сыртқы қабатты тазаламай-ақ сығымдауды жүзеге асыруға мүмкіндік береді, бұл қосылымның сенімділігін арттырады және арматуралық өрімді коррозиядан қорғайды."
    },
    images: ["/assets/images/products/hoses/462_ST_TC_EVO_-_EN_857_202608271722.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "70 – 425 бар", en: "70 – 425 bar", kk: "70 – 425 бар" }, 
      "Стандарт": { ru: "EN 857 2SC / ISO 11237", en: "EN 857 2SC / ISO 11237", kk: "EN 857 2SC / ISO 11237" },
      "Радиус изгиба": { ru: "Уменьшенный на 30-50%", en: "Reduced by 30-50%", kk: "30-50%-ға азайтылған" },
      "Усиление": { ru: "Две стальные оплетки", en: "Two steel braids", kk: "Екі болат өрім" },
      "Диаметр": { ru: "от 1/4\" до 1\"", en: "from 1/4\" to 1\"", kk: "1/4\"-ден 1\"-ге дейін" }
    },
    features: [
      { ru: "Технология No-Skive: сборка без зачистки наружного слоя", en: "No-Skive technology: assembly without skiving the outer cover", kk: "No-Skive технологиясы: сыртқы қабатты тазаламай жинау" },
      { ru: "Уменьшенный радиус изгиба для компактной прокладки", en: "Reduced bend radius for compact routing", kk: "Жинақы төсеу үшін азайтылған иілу радиусы" },
      { ru: "Высокое рабочее давление для своего типоразмера", en: "High working pressure for its size", kk: "Өз өлшемі үшін жоғары жұмыс қысымы" },
      { ru: "Устойчивое к истиранию наружное покрытие (ST / TC)", en: "Abrasion resistant outer cover (ST / TC)", kk: "Тозуға төзімді сыртқы жабын (ST / TC)" },
      { ru: "Отличная гибкость даже при низких температурах", en: "Excellent flexibility even at low temperatures", kk: "Тіпті төмен температурада да тамаша икемділік" },
      { ru: "Совместимость с фитингами серии 46", en: "Compatible with 46 series fittings", kk: "46 сериялы фитингтермен үйлесімділік" }
    ],
    benefits: [
      { ru: "Идеально для систем с крайне ограниченным пространством", en: "Ideal for systems with extremely limited space", kk: "Кеңістігі өте шектеулі жүйелер үшін тамаша" },
      { ru: "Снижение времени сборки рукава высокого давления", en: "Reduced hose assembly time", kk: "Жоғары қысымды жеңді жинау уақытын азайту" },
      { ru: "Защита армирующей оплетки от влаги и коррозии", en: "Protection of reinforcement braid from moisture and corrosion", kk: "Арматуралық өрімді ылғалдан және коррозиядан қорғау" },
      { ru: "Увеличение срока службы за счет прочного покрытия", en: "Extended service life due to durable cover", kk: "Берік жабын есебінен қызмет ету мерзімін ұзарту" },
      { ru: "Легкость монтажа в сложных гидравлических узлах", en: "Ease of installation in complex hydraulic units", kk: "Күрделі гидравликалық тораптарда монтаждаудың оңайлығы" },
      { ru: "Надежность, проверенная миллионами циклов", en: "Reliability proven by millions of cycles", kk: "Миллиондаған циклдармен тексерілген сенімділік" }
    ],
    applications: [
      { ru: "Мобильная гидравлика и спецтехника", en: "Mobile hydraulics and specialized equipment", kk: "Мобильді гидравлика және арнайы техника" },
      { ru: "Гидроприводы промышленного оборудования", en: "Industrial equipment hydraulic drives", kk: "Өнеркәсіптік жабдықтардың гидравликалық жетектері" },
      { ru: "Сельскохозяйственные машины", en: "Agricultural machinery", kk: "Ауыл шаруашылығы машиналары" },
      { ru: "Подъемно-транспортные механизмы", en: "Lifting and transport mechanisms", kk: "Көтеру-көлік механизмдері" },
      { ru: "Линии среднего и высокого давления", en: "Medium and high pressure lines", kk: "Орташа және жоғары қысымды желілер" },
      { ru: "Компактные гидростанции", en: "Compact hydraulic power units", kk: "Жинақы гидростанциялар" }
    ],
    markets: [
      { ru: "Общее промышленное производство", en: "General industrial manufacturing", kk: "Жалпы өнеркәсіптік өндіріс" },
      { ru: "Сельское хозяйство", en: "Agriculture", kk: "Ауыл шаруашылығы" },
      { ru: "Строительство", en: "Construction", kk: "Құрылыс" },
      { ru: "Складская логистика", en: "Warehouse logistics", kk: "Қойма логистикасы" },
      { ru: "Машиностроение", en: "Machine building", kk: "Машина жасау" }
    ]
  },
  {
    id: "s16",
    productTypeId: "pt6",
    brandId: "b1",
    name: {
      ru: "Шланги No-Skive 301SN — EN 853 2SN",
      en: "No-Skive 301SN Hoses - EN 853 2SN",
      kk: "No-Skive 301SN шлангтары — EN 853 2SN"
    },
    slug: "no-skive-301sn",
    descriptionHtml: {
      ru: "Шланг Parker 301SN No-Skive соответствует стандартам EN 853 2SN и ISO 1436 Тип 2. Это универсальный шланг среднего давления с двумя стальными оплетками, предназначенный для широкого спектра гидравлических применений в промышленности и строительстве. Технология No-Skive обеспечивает долговечное и надежное соединение с фитингами без повреждения защитного слоя.",
      en: "Parker 301SN No-Skive hose complies with EN 853 2SN and ISO 1436 Type 2 standards. It is a versatile medium pressure hose with two steel braids designed for a wide range of hydraulic applications in industry and construction. No-Skive technology provides a long-lasting and reliable connection with fittings without damaging the protective layer.",
      kk: "Parker 301SN No-Skive шлангісі EN 853 2SN және ISO 1436 2-түрі стандарттарына сәйкес келеді. Бұл өнеркәсіп пен құрылыстағы гидравликалық қолданудың кең ауқымына арналған екі болат өрімі бар әмбебап орташа қысымды шланг. No-Skive технологиясы қорғаныс қабатын зақымдамай, фитингтермен ұзақ және сенімді қосылуды қамтамасыз етеді."
    },
    images: ["/assets/images/products/hoses/853_2SN_-_ISO_1436_202608271724.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "80 – 400 бар", en: "80 – 400 bar", kk: "80 – 400 бар" }, 
      "Стандарт": { ru: "EN 853 2SN / ISO 1436", en: "EN 853 2SN / ISO 1436", kk: "EN 853 2SN / ISO 1436" },
      "Усиление": { ru: "Две стальные оплетки", en: "Two steel braids", kk: "Екі болат өрім" },
      "Диаметр": { ru: "от 1/4\" до 2\"", en: "from 1/4\" to 2\"", kk: "1/4\"-ден 2\"-ге дейін" },
      "Температура": { ru: "-40°C ... +100°C", en: "-40°C ... +100°C", kk: "-40°C ... +100°C" }
    },
    features: [
      { ru: "Конструкция с тонким наружным слоем (thin cover)", en: "Thin cover construction", kk: "Жұқа сыртқы қабаты бар конструкция (thin cover)" },
      { ru: "Технология No-Skive для быстрой и чистой сборки", en: "No-Skive technology for fast and clean assembly", kk: "Жылдам және таза жинауға арналная No-Skive технологиясы" },
      { ru: "Высокая гибкость и малый радиус изгиба", en: "High flexibility and small bend radius", kk: "Жоғары икемділік және кіші иілу радиусы" },
      { ru: "Отличная адгезия между слоями шланга", en: "Excellent adhesion between hose layers", kk: "Шланг қабаттары арасындағы тамаша адгезия" },
      { ru: "Устойчивое к погодным условиям покрытие", en: "Weather-resistant cover", kk: "Ауа райы жағдайларына төзімді жабын" },
      { ru: "Совместимость с фитингами серии 48", en: "Compatible with 48 series fittings", kk: "48 сериялы фитингтермен үйлесімділік" }
    ],
    benefits: [
      { ru: "Идеально для общих гидравлических задач", en: "Ideal for general hydraulic tasks", kk: "Жалпы гидравликалық тапсырмалар үшін тамаша" },
      { ru: "Увеличение срока службы за счет исключения зачистки", en: "Extended service life by eliminating skiving", kk: "Тазалауды болдырмау есебінен қызмет ету мерзімін ұзарту" },
      { ru: "Защита от коррозии армирующего слоя", en: "Corrosion protection of the reinforcement layer", kk: "Арматуралық қабатты коррозиядан қорғау" },
      { ru: "Простота подбора комплектующих", en: "Ease of selecting components", kk: "Компоненттерді таңдаудың қарапайымдылығы" },
      { ru: "Надежность в стандартных промышленных условиях", en: "Reliability in standard industrial conditions", kk: "Стандартты өнеркәсіптік жағдайлардағы сенімділік" },
      { ru: "Экономически эффективное решение", en: "Cost-effective solution", kk: "Экономикалық тиімді шешім" }
    ],
    applications: [
      { ru: "Общие гидравлические системы", en: "General hydraulic systems", kk: "Жалпы гидравликалық жүйелер" },
      { ru: "Гидролинии мобильной техники", en: "Mobile equipment hydraulic lines", kk: "Мобильді техниканың гидролиниялары" },
      { ru: "Сельскохозяйственное оборудование", en: "Agricultural equipment", kk: "Ауыл шаруашылығы жабдықтары" },
      { ru: "Промышленные прессы среднего давления", en: "Medium pressure industrial presses", kk: "Орташа қысымды өнеркәсіптік престер" },
      { ru: "Системы смазки", en: "Lubrication systems", kk: "Майлау жүйелері" },
      { ru: "Воздушные и водяные линии под давлением", en: "Pressurized air and water lines", kk: "Қысым астындағы ауа және су желілері" }
    ],
    markets: [
      { ru: "Строительное оборудование", en: "Construction Equipment", kk: "Құрылыс жабдықтары" },
      { ru: "Сельское хозяйство", en: "Agriculture", kk: "Ауыл шаруашылығы" },
      { ru: "Промышленное производство", en: "Industrial Manufacturing", kk: "Өндірістік өндіріс" },
      { ru: "Транспорт", en: "Transport", kk: "Көлік" },
      { ru: "ЖКХ", en: "Public Utilities", kk: "ТКШ" }
    ]
  },
  {
    id: "s17",
    productTypeId: "pt6",
    brandId: "b1",
    name: {
      ru: "Гидравлический рукав 4000 PSI — GlobalCore 721, 722",
      en: "GlobalCore 721, 722 4000 PSI Hydraulic Hose",
      kk: "4000 PSI гидравликалық шланг — GlobalCore 721, 722"
    },
    slug: "globalcore-721-722",
    descriptionHtml: {
      ru: "Parker 722 серии GlobalCore обеспечивает постоянное рабочее давление 4000 PSI (280 бар) для всех типоразмеров. Этот шланг разработан для обеспечения максимальной производительности в системах высокого давления, обладая при этом в два раза меньшим радиусом изгиба по сравнению со стандартными шлангами SAE. Покрытие ToughCover обеспечивает превосходную защиту от истирания.",
      en: "Parker 722 series GlobalCore provides constant working pressure of 4000 PSI (280 bar) for all sizes. This hose is designed to deliver maximum performance in high pressure systems while featuring half the bend radius of standard SAE hoses. ToughCover provides superior abrasion protection.",
      kk: "GlobalCore сериясының Parker 722 шлангісі барлық өлшемдер үшін 4000 PSI (280 бар) тұрақты жұмыс қысымын қамтамасыз етеді. Бұл шланг стандартты SAE шлангілерімен салыстырғанда иілу радиусы екі есе аз бола отырып, жоғары қысымды жүйелерде максималды өнімділікті қамтамасыз ету үшін жасалған. ToughCover жабыны тозудан тамаша қорғауды қамтамасыз етеді."
    },
    images: ["/assets/images/products/hoses/4000_PSI_-_GlobalCore_722_202608271725.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "280 бар (константа)", en: "280 bar (constant)", kk: "280 бар (тұрақты)" }, 
      "Радиус изгиба": { ru: "1/2 от стандарта SAE", en: "1/2 SAE standard", kk: "SAE стандартының 1/2 бөлігі" },
      "Диаметр": { ru: "от 3/8\" до 2\"", en: "from 3/8\" to 2\"", kk: "3/8\"-ден 2\"-ге дейін" },
      "Температура": { ru: "-40°C ... +125°C", en: "-40°C ... +125°C", kk: "-40°C ... +125°C" },
      "Стандарт": { ru: "ISO 18752 BC / BD", en: "ISO 18752 BC / BD", kk: "ISO 18752 BC / BD" }
    },
    features: [
      { ru: "Постоянное рабочее давление 4000 PSI во всех размерах", en: "Constant 4000 PSI working pressure in all sizes", kk: "Барлық өлшемдерде тұрақты 4000 PSI жұмыс қысымы" },
      { ru: "Радиус изгиба на 50% меньше требований SAE", en: "Bend radius 50% less than SAE requirements", kk: "Иілу радиусы SAE талаптарынан 50%-ға аз" },
      { ru: "Высокая гибкость для плотной компоновки", en: "High flexibility for tight routing", kk: "Тығыз компоновка үшін жоғары икемділік" },
      { ru: "Защитное покрытие ToughCover (TC) против истирания", en: "ToughCover (TC) protective cover against abrasion", kk: "Тозуға қарсы ToughCover (TC) қорғаныс жабыны" },
      { ru: "Четыре слоя высокопрочной стальной проволоки", en: "Four layers of high-strength steel wire", kk: "Жоғары беріктігі бар болат сымның төрт қабаты" },
      { ru: "Совместимость с фитингами 77-й серии", en: "Compatible with 77 series fittings", kk: "77-сериялы фитингтермен үйлесімділік" }
    ],
    benefits: [
      { ru: "Упрощение выбора шланга по давлению", en: "Simplified hose selection by pressure", kk: "Қысым бойынша шланг таңдауды жеңілдету" },
      { ru: "Снижение общего веса гидравлической системы", en: "Reduction in overall hydraulic system weight", kk: "Гидравликалық жүйенің жалпы салмағын азайту" },
      { ru: "Легкость монтажа в труднодоступных местах", en: "Ease of installation in hard-to-reach places", kk: "Қол жетпейтін жерлерде монтаждаудың оңайлығы" },
      { ru: "Исключительная износостойкость в суровых условиях", en: "Exceptional wear resistance in harsh environments", kk: "Қатал жағдайларда ерекше тозуға төзімділік" },
      { ru: "Высокая безопасность и импульсная стойкость", en: "High safety and impulse resistance", kk: "Жоғары қауіпсіздік және импульстік төзімділік" },
      { ru: "Длительный срок службы без утечек", en: "Long leak-free service life", kk: "Ағып кетусіз ұзақ қызмет ету мерзімі" }
    ],
    applications: [
      { ru: "Тяжелая строительная техника", en: "Heavy construction equipment", kk: "Ауыр құрылыс техникасы" },
      { ru: "Лесозаготовительные агрегаты", en: "Forestry units", kk: "Орман дайындау агрегаттары" },
      { ru: "Горно-шахтное оборудование", en: "Mining equipment", kk: "Тау-кен жабдықтары" },
      { ru: "Гидростатические трансмиссии", en: "Hydrostatic transmissions", kk: "Гидростатикалық трансмиссиялар" },
      { ru: "Морские лебедки и краны", en: "Marine winches and cranes", kk: "Теңіз лебедкалары мен крандары" },
      { ru: "Сельскохозяйственные комбайны", en: "Agricultural combines", kk: "Ауыл шаруашылығы комбайндары" }
    ],
    markets: [
      { ru: "Строительство и инфраструктура", en: "Construction and Infrastructure", kk: "Құрылыс және инфрақұрылым" },
      { ru: "Лесная промышленность", en: "Forestry Industry", kk: "Орман өнеркәсібі" },
      { ru: "Горнодобывающая отрасль", en: "Mining Industry", kk: "Тау-кен саласы" },
      { ru: "Морской транспорт", en: "Marine Transport", kk: "Теңіз көлігі" },
      { ru: "Сельское хозяйство", en: "Agriculture", kk: "Ауыл шаруашылығы" }
    ]
  },
  {
    id: "s18",
    productTypeId: "pt6",
    brandId: "b1",
    name: {
      ru: "Шланги No-Skive — серии 421SN, 421TC, 421RH, 421WC",
      en: "No-Skive 421SN, 421TC, 421RH, 421WC Hose",
      kk: "No-Skive шлангтары — 421SN, 421TC, 421RH, 421WC сериялары"
    },
    slug: "no-skive-421",
    descriptionHtml: {
      ru: "Шланги Parker серии 421 среднего давления No-Skive соответствуют стандартам EN 853 1SN и ISO 1436 Тип 1. Это надежные универсальные шланги с одной стальной оплеткой, доступные с различными типами наружного покрытия: стандартное (SN), устойчивое к истиранию (TC), пожаробезопасное (RH) или с металлической оплеткой (WC) для защиты от брызг металла.",
      en: "Parker 421 series medium pressure No-Skive hoses comply with EN 853 1SN and ISO 1436 Type 1 standards. These are reliable universal hoses with a single steel braid, available with various types of outer cover: standard (SN), abrasion resistant (TC), fire resistant (RH) or with wire braid (WC) for protection against metal splashes.",
      kk: "Орташа қысымды Parker 421 No-Skive сериялы шлангтары EN 853 1SN және ISO 1436 1-түрі стандарттарына сәйкес келеді. Бұл сыртқы жабынның әртүрлі түрлерімен қолжетімді болат өрімі бар сенімді әмбебап шлангтар: стандартты (SN), тозуға төзімді (TC), өртке төзімді (RH) немесе металл шашырандыларынан қорғау үшін металл өрімі (WC)."
    },
    images: ["/assets/images/products/hoses/421SN,_421TC,_421RH_,_421WC_202608271727.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "40 – 225 бар", en: "40 – 225 bar", kk: "40 – 225 бар" }, 
      "Стандарт": { ru: "EN 853 1SN / ISO 1436", en: "EN 853 1SN / ISO 1436", kk: "EN 853 1SN / ISO 1436" },
      "Усиление": { ru: "Одна стальная оплетка", en: "One steel braid", kk: "Бір болат өрім" },
      "Диаметр": { ru: "от 3/16\" до 2\"", en: "from 3/16\" to 2\"", kk: "3/16\"-ден 2\"-ге дейін" },
      "Температура": { ru: "-40°C ... +100°C", en: "-40°C ... +100°C", kk: "-40°C ... +100°C" }
    },
    features: [
      { ru: "Технология No-Skive: сборка без зачистки наружного слоя", en: "No-Skive technology: assembly without skiving the outer cover", kk: "No-Skive технологиясы: сыртқы қабатты тазаламай жинау" },
      { ru: "Широкий выбор типов наружного покрытия", en: "Wide selection of outer cover types", kk: "Сыртқы жабын түрлерінің кең таңдауы" },
      { ru: "Отличная гибкость для мобильной техники", en: "Excellent flexibility for mobile equipment", kk: "Мобильді техника үшін тамаша икемділік" },
      { ru: "Высокая устойчивость к озону и погодным воздействиям", en: "High resistance to ozone and weather influences", kk: "Озонға және ауа райы әсеріне жоғары төзімділік" },
      { ru: "Совместимость с фитингами 48-й серии", en: "Compatible with 48 series fittings", kk: "48-сериялы фитингтермен үйлесімділік" },
      { ru: "Стабильные характеристики во всем диапазоне температур", en: "Stable performance across entire temperature range", kk: "Барлық температура диапазонындағы тұрақты сипаттамалар" }
    ],
    benefits: [
      { ru: "Расширенная совместимость с рабочими жидкостями", en: "Extended fluid compatibility", kk: "Жұмыс сұйықтықтарымен кеңейтілген үйлесімділік" },
      { ru: "Повышенная безопасность эксплуатации", en: "Enhanced operational safety", kk: "Пайдалану қауіпсіздігінің жоғарылауы" },
      { ru: "Снижение времени на изготовление шланга", en: "Reduced hose fabrication time", kk: "Шланг дайындау уақытын азайту" },
      { ru: "Защита от коррозии армирующего слоя", en: "Protection against reinforcement corrosion", kk: "Арматуралық қабатты коррозиядан қорғау" },
      { ru: "Универсальность применения в различных отраслях", en: "Versatility across various industries", kk: "Әртүрлі салаларда қолданудың әмбебаптығы" },
      { ru: "Надежное соединение Parker", en: "Reliable Parker connection", kk: "Сенімді Parker қосылымы" }
    ],
    applications: [
      { ru: "Мобильная и промышленная гидравлика", en: "Mobile and industrial hydraulics", kk: "Мобильді және өнеркәсіптік гидравлика" },
      { ru: "Системы низкого и среднего давления", en: "Low and medium pressure systems", kk: "Төмен және орташа қысымды жүйелер" },
      { ru: "Возвратные и сливные линии", en: "Return and drain lines", kk: "Қайтару және ағызу желілері" },
      { ru: "Пневматические системы высокого давления", en: "High pressure pneumatic systems", kk: "Жоғары қысымды пневматикалық жүйелер" },
      { ru: "Линии гидростатического рулевого управления", en: "Hydrostatic steering lines", kk: "Гидростатикалық рульдік басқару желілері" },
      { ru: "Топливные и масляные системы", en: "Fuel and oil systems", kk: "Отын және май жүйелері" }
    ],
    markets: [
      { ru: "Транспорт", en: "Transport", kk: "Көлік" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" },
      { ru: "Строительство", en: "Construction", kk: "Құрылыс" },
      { ru: "Промышленное производство", en: "Industrial Manufacturing", kk: "Өндірістік өндіріс" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" }
    ]
  },
  {
    id: "s19",
    productTypeId: "pt7",
    brandId: "b1",
    name: {
      ru: "Трубные фитинги высокого давления Ermeto DIN",
      en: "Ermeto DIN High Pressure Tube Fittings",
      kk: "Ermeto DIN жоғары қысымды түтікті фитингтері"
    },
    slug: "ermeto-din",
    descriptionHtml: {
      ru: "Основная функция поворотных регулируемых фитингов Ermeto DIN — соединение трубок или шлангов под любым углом. Широкая номенклатура включает адаптеры, переходники, тройники и крестовины, обеспечивающие абсолютную герметичность и надежность в гидравлических системах высокого давления. Фитинги Ermeto задают стандарт качества для жестких трубных соединений.",
      en: "The primary function of Ermeto DIN swivel adjustable fittings is to connect tubes or hoses at any angle. The wide range includes adapters, reducers, tees and crosses providing absolute leak-tightness and reliability in high pressure hydraulic systems. Ermeto fittings set the quality standard for rigid tube connections.",
      kk: "Ermeto DIN бұрылмалы реттелетін фитингтерінің негізгі функциясы — түтіктерді немесе шлангтарды кез келген бұрышпен қосу. Кең номенклатура жоғары қысымды гидравликалық жүйелерде абсолютті герметикалық пен сенімділікті қамтамасыз ететін адаптерлерді, ауыстырғыштарды, үштіктерді және крестовиналарды қамтиды. Ermeto фитингтері қатты түтікті қосылымдар үшін сапа стандартын белгілейді."
    },
    images: ["/assets/images/products/hoses/Ermeto_DIN_202608271737.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "160 – 800 бар", en: "160 – 800 bar", kk: "160 – 800 бар" }, 
      "Материал": { ru: "Сталь / Нержавеющая сталь", en: "Steel / Stainless Steel", kk: "Болат / Тот баспайтын болат" },
      "Покрытие": { ru: "Цинк-никель (CrVI-free)", en: "Zinc-Nickel (CrVI-free)", kk: "Цинк-никель (CrVI-free)" },
      "Стандарт": { ru: "DIN 2353 / ISO 8434-1", en: "DIN 2353 / ISO 8434-1", kk: "DIN 2353 / ISO 8434-1" },
      "Типоразмер": { ru: "Серии L (легкая) и S (тяжелая)", en: "L (light) and S (heavy) series", kk: "L (жеңіл) және S (ауыр) сериялары" }
    },
    features: [
      { ru: "Высокая коррозионная стойкость (более 720 часов в солевом тумане)", en: "High corrosion resistance (over 720 hours in salt spray)", kk: "Жоғары коррозияға төзімділік (тұзды тұманда 720 сағаттан астам)" },
      { ru: "Абсолютная герметичность благодаря врезным кольцам или уплотнениям", en: "Absolute leak-tightness thanks to bite-type rings or seals", kk: "Кесетін сақиналар немесе тығыздағыштардың арқасында абсолютті герметикалық" },
      { ru: "Простой монтаж без специального инструмента", en: "Easy assembly without special tools", kk: "Арнайы құралсыз оңай монтаждау" },
      { ru: "Многоразовое использование без потери герметичности", en: "Reusable without loss of leak-tightness", kk: "Герметикалықты жоғалтпай қайталап пайдалану" },
      { ru: "Широчайший выбор конфигураций и размеров", en: "Widest selection of configurations and sizes", kk: "Конфигурациялар мен өлшемдердің кең таңдауы" },
      { ru: "Устойчивость к высоким вибрационным нагрузкам", en: "Resistance to high vibration loads", kk: "Жоғары діріл жүктемелеріне төзімділік" }
    ],
    benefits: [
      { ru: "Абсолютная герметичность соединения даже при пиковом давлении", en: "Absolute connection tightness even at peak pressure", kk: "Тіпті шыңдық қысымда да қосылымның абсолютті герметикалығы" },
      { ru: "Значительное снижение затрат на обслуживание и ремонт", en: "Significant reduction in maintenance and repair costs", kk: "Техникалық қызмет көрсету және жөндеу шығындарын айтарлықтай азайту" },
      { ru: "Увеличение интервалов замены фитингов", en: "Increased intervals for fitting replacement", kk: "Фитингтерді ауыстыру аралықтарын ұзарту" },
      { ru: "Безопасность персонала и окружающей среды", en: "Safety of personnel and environment", kk: "Персонал мен қоршаған ортаның қауіпсіздігі" },
      { ru: "Универсальность и полная совместимость по стандартам DIN", en: "Versatility and full compatibility with DIN standards", kk: "DIN стандарттары бойынша әмбебаптық және толық үйлесімділік" },
      { ru: "Высокое качество поверхности и эстетичный вид", en: "High surface quality and aesthetic appearance", kk: "Беттің жоғары сапасы және эстетикалық көрініс" }
    ],
    applications: [
      { ru: "Гидравлические системы высокого давления станков", en: "Machine tool high pressure hydraulic systems", kk: "Станоктардың жоғары қысымды гидравликалық жүйелері" },
      { ru: "Судостроение и морские платформы", en: "Shipbuilding and offshore platforms", kk: "Кеме жасау және теңіз платформалары" },
      { ru: "Строительная и горная спецтехника", en: "Construction and mining specialized equipment", kk: "Құрылыс және тау-кен арнайы техникасы" },
      { ru: "Энергетическое оборудование", en: "Energy equipment", kk: "Энергетикалық жабдық" },
      { ru: "Пищевая и химическая промышленность", en: "Food and chemical industry", kk: "Тамақ және химия өнеркәсібі" },
      { ru: "Железнодорожный транспорт", en: "Railway transport", kk: "Теміржол көлігі" }
    ],
    markets: [
      { ru: "Автомобильная промышленность", en: "Automotive Industry", kk: "Автомобиль өнеркәсібі" },
      { ru: "Станкостроение", en: "Machine Tool Industry", kk: "Станок жасау" },
      { ru: "Морской сектор", en: "Marine Sector", kk: "Теңіз секторы" },
      { ru: "Нефтегазовая отрасль", en: "Oil and Gas Industry", kk: "Мұнай-газ саласы" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" }
    ]
  },
  {
    id: "s20",
    productTypeId: "pt8",
    brandId: "b1",
    name: {
      ru: "Промышленные гидроцилиндры HMI, MMB",
      en: "HMI, MMB Industrial Hydraulic Cylinders",
      kk: "HMI, MMB өнеркәсіптік гидравликалық цилиндрлері"
    },
    slug: "hmi-mmb-cylinders",
    descriptionHtml: {
      ru: "Метрические гидроцилиндры Parker серии HMI рассчитаны на рабочее давление до 210 бар. Они соответствуют международному стандарту ISO 6020/2 и предназначены для тяжелых промышленных условий. Прочная конструкция, высококачественные уплотнения и широкий выбор вариантов монтажа делают их идеальным выбором для станкостроения и автоматизации.",
      en: "Parker HMI series metric hydraulic cylinders are designed for working pressures up to 210 bar. They comply with the international ISO 6020/2 standard and are designed for harsh industrial environments. Rugged construction, high-quality seals and a wide choice of mounting options make them ideal for machine tool and automation applications.",
      kk: "Parker HMI сериялы метрикалық гидравликалық цилиндрлер 210 барға дейінгі жұмыс қысымына есептелген. Олар халықаралық ISO 6020/2 стандартына сәйкес келеді және ауыр өнеркәсіптік жағдайларға арналған. Берік конструкция, жоғары сапалы тығыздағыштар және монтаждау нұсқаларының кең таңдауы оларды станок жасау мен автоматтандыру үшін тамаша таңдау жасайды."
    },
    images: ["/assets/images/products/hoses/HMI,_MMB_202608271741.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Рабочее давление": { ru: "до 210 бар", en: "up to 210 bar", kk: "210 барға дейін" }, 
      "Диаметр поршня": { ru: "25 – 200 мм", en: "25 – 200 mm", kk: "25 – 200 мм" },
      "Диаметр штока": { ru: "12 – 140 мм", en: "12 – 140 mm", kk: "12 – 140 мм" },
      "Стандарт": { ru: "ISO 6020/2", en: "ISO 6020/2", kk: "ISO 6020/2" },
      "Температура": { ru: "-20°C ... +150°C", en: "-20°C ... +150°C", kk: "-20°C ... +150°C" }
    },
    features: [
      { ru: "Соответствие стандарту ISO 6020/2 (тяжелая серия)", en: "Compliance with ISO 6020/2 standard (heavy series)", kk: "ISO 6020/2 стандартына сәйкестік (ауыр серия)" },
      { ru: "Высокопрочные кованые головки и основания", en: "High-strength forged heads and caps", kk: "Жоғары беріктігі бар соғылған бастар мен негіздер" },
      { ru: "Хромированные штоки для защиты от коррозии и износа", en: "Chrome-plated rods for corrosion and wear protection", kk: "Коррозиядан және тозудан қорғауға арналған хромдалған штоктар" },
      { ru: "Система демпфирования для плавной остановки", en: "Cushioning system for smooth stopping", kk: "Бірқалыпты тоқтауға арналған демпферлеу жүйесі" },
      { ru: "Широкий выбор типов уплотнений под различные среды", en: "Wide selection of seal types for different media", kk: "Әртүрлі орталар үшін тығыздағыш түрлерінің кең таңдауы" },
      { ru: "12 стандартных способов монтажа", en: "12 standard mounting styles", kk: "12 стандартты монтаждау тәсілі" }
    ],
    benefits: [
      { ru: "Высокая производительность в интенсивных промышленных циклах", en: "High performance in intensive industrial cycles", kk: "Қарқынды өнеркәсіптік циклдардағы жоғары өнімділік" },
      { ru: "Исключительная надежность и длительный ресурс", en: "Exceptional reliability and long life", kk: "Ерекше сенімділік және ұзақ ресурс" },
      { ru: "Простота интеграции в современные станки", en: "Ease of integration into modern machines", kk: "Заманауи станоктарға интеграциялаудың оңайлығы" },
      { ru: "Минимальные затраты на техническое обслуживание", en: "Minimum maintenance costs", kk: "Минималды техникалық қызмет көрсету шығындары" },
      { ru: "Возможность работы в высокотемпературных средах", en: "Ability to operate in high temperature environments", kk: "Жоғары температуралық орталарда жұмыс істеу мүмкіндігі" },
      { ru: "Глобальная доступность запасных частей", en: "Global spare parts availability", kk: "Қосалқы бөлшектердің жаһандық қолжетімділігі" }
    ],
    applications: [
      { ru: "Металлорежущие станки", en: "Metal cutting machine tools", kk: "Металл кесетін станоктар" },
      { ru: "Литейное оборудование", en: "Foundry equipment", kk: "Құю жабдығы" },
      { ru: "Автомобильные производственные линии", en: "Automotive production lines", kk: "Автомобиль өндірістік желілері" },
      { ru: "Прессовое оборудование", en: "Press equipment", kk: "Пресс жабдықтары" },
      { ru: "Складские автоматизированные системы", en: "Automated warehouse systems", kk: "Қоймалық автоматтандырылған жүйелер" },
      { ru: "Системы управления шлюзами", en: "Sluice control systems", kk: "Шлюздерді басқару жүйелері" }
    ],
    markets: [
      { ru: "Промышленная автоматизация", en: "Industrial Automation", kk: "Өнеркәсіптік автоматтандыру" },
      { ru: "Станкостроение", en: "Machine Tool Industry", kk: "Станок жасау" },
      { ru: "Автомобилестроение", en: "Automotive Industry", kk: "Автомобиль жасау" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "Тяжелое машиностроение", en: "Heavy Engineering", kk: "Ауыр машина жасау" }
    ]
  },
    {
    id: "s21",
    productTypeId: "pt9",
    brandId: "b1",
    name: {
      ru: "Воздушно-масляные охладители — серия LAC/LAC2",
      en: "LAC/LAC2 Air-Oil Coolers",
      kk: "Ауа-май салқындатқыштары — LAC/LAC2 сериясы"
    },
    slug: "lac-lac2-air-oil-coolers",
    descriptionHtml: {
      ru: "Серия охладителей Parker LAC обеспечивает эффективное и надежное охлаждение для большинства промышленных применений. Оснащенные мощными вентиляторами и прочными радиаторами, эти устройства обеспечивают оптимальный температурный режим гидравлической жидкости, продлевая срок службы всей системы.",
      en: "The Parker LAC cooler series provides efficient and reliable cooling for most industrial applications. Equipped with powerful fans and durable radiators, these units ensure optimal temperature control of the hydraulic fluid, extending the life of the entire system.",
      kk: "Parker LAC салқындатқыштар сериясы өнеркәсіптік қолданудың көптеген түрлері үшін тиімді және сенімді салқындатуды қамтамасыз етеді. Қуатты желдеткіштермен және берік радиаторлармен жабдықталған бұл құрылғылар гидравликалық сұйықтықтың оңтайлы температуралық режимін қамтамасыз етіп, бүкіл жүйенің қызмет ету мерзімін ұзартады."
    },
    images: ["/assets/images/products/hoses/LAC_LAC2_Standard_202608271748.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Мощность охлаждения": { ru: "1 – 300 кВт", en: "1 – 300 kW", kk: "1 – 300 кВт" }, 
      "Расход масла": { ru: "до 1000 л/мин", en: "up to 1000 l/min", kk: "1000 л/мин дейін" },
      "Напряжение": { ru: "12V/24V DC, 230V/400V AC", en: "12V/24V DC, 230V/400V AC", kk: "12V/24V DC, 230V/400V AC" },
      "Макс. давление": { ru: "26 бар", en: "26 bar", kk: "26 бар" },
      "Температура": { ru: "до +120°C", en: "up to +120°C", kk: "+120°C дейін" }
    },
    features: [
      { ru: "Тихая работа вентилятора и двигателя", en: "Quiet fan and motor operation", kk: "Желдеткіш пен қозғалтқыштың тыныш жұмысы" },
      { ru: "Высокая эффективность теплообмена", en: "High heat exchange efficiency", kk: "Жылу алмасудың жоғары тиімділігі" },
      { ru: "Компактный дизайн для экономии места", en: "Compact design for space saving", kk: "Орынды үнемдеуге арналған жинақы дизайн" },
      { ru: "Прочная конструкция для тяжелых условий", en: "Rugged construction for harsh conditions", kk: "Ауыр жағдайларға арналған берік конструкция" },
      { ru: "Возможность установки встроенного термостата", en: "Option for integrated thermostat", kk: "Кіріктірілген термостатты орнату мүмкіндігі" },
      { ru: "Коррозионностойкое покрытие радиатора", en: "Corrosion resistant radiator coating", kk: "Радиатордың коррозияға төзімді жабыны" }
    ],
    benefits: [
      { ru: "Продление срока службы системы и масла", en: "Extension of system and oil life", kk: "Жүйенің және майдың қызмет ету мерзімін ұзарту" },
      { ru: "Стабильность вязкости рабочей жидкости", en: "Working fluid viscosity stability", kk: "Жұмыс сұйықтығы тұтқырлығының тұрақтылығы" },
      { ru: "Снижение риска перегрева и поломок", en: "Reduced risk of overheating and breakdowns", kk: "Қызып кету және бұзылу қаупін азайту" },
      { ru: "Простота монтажа и обслуживания", en: "Ease of installation and maintenance", kk: "Монтаждау мен қызмет көрсетудің қарапайымдылығы" },
      { ru: "Высокая эксплуатационная надежность", en: "High operational reliability", kk: "Жоғары пайдалану сенімділігі" },
      { ru: "Снижение затрат на охлаждение", en: "Reduced cooling costs", kk: "Салқындату шығындарын азайту" }
    ],
    applications: [
      { ru: "Гидравлические насосные станции", en: "Hydraulic pump stations", kk: "Гидравликалық сорғы станциялары" },
      { ru: "Термопластавтоматы и прессы", en: "Injection molding machines and presses", kk: "Термопластаавтоматтар мен престер" },
      { ru: "Системы смазки крупных агрегатов", en: "Lubrication systems for large units", kk: "Ірі агрегаттарды майлау жүйелері" },
      { ru: "Мобильная спецтехника", en: "Mobile specialized equipment", kk: "Мобильді арнайы техника" },
      { ru: "Ветрогенераторы", en: "Wind turbines", kk: "Жел генераторлары" },
      { ru: "Трансформаторные подстанции", en: "Transformer substations", kk: "Трансформаторлық қосалқы станциялар" }
    ],
    markets: [
      { ru: "Промышленное производство", en: "Industrial Manufacturing", kk: "Өнеркәсіптік өндіріс" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" },
      { ru: "Транспорт", en: "Transport", kk: "Көлік" },
      { ru: "Горнодобывающая отрасль", en: "Mining Industry", kk: "Тау-кен саласы" }
    ]
  },
  {
    id: "s42",
    productTypeId: "pt10",
    brandId: "b1",
    name: {
      ru: "Измерительный прибор SensoControl ServiceJunior",
      en: "SensoControl ServiceJunior Measuring Device",
      kk: "SensoControl ServiceJunior өлшеу құрылғысы"
    },
    slug: "servicejunior-measuring-device",
    descriptionHtml: {
      ru: "Parker ServiceJunior — это цифровой манометр, идеально подходящий для измерения и отображения давления в любых гидравлических или пневматических системах. Благодаря высокой точности, прочности и простоте использования, он является незаменимым инструментом для сервисных инженеров и специалистов по обслуживанию.",
      en: "The Parker ServiceJunior is a digital pressure gauge ideal for measuring and displaying pressure in any hydraulic or pneumatic system. With high accuracy, ruggedness and ease of use, it is an indispensable tool for service engineers and maintenance specialists.",
      kk: "Parker ServiceJunior — кез келген гидравликалық немесе пневматикалық жүйелердегі қысымды өлшеуге және көрсетуге өте ыңғайлы цифрлық манометр. Жоғары дәлдігінің, беріктігінің және пайдалану оңайлығының арқасында ол сервистік инженерлер мен техникалық қызмет көрсету мамандары үшін таптырмас құрал болып табылады."
    },
    images: ["/assets/images/products/hoses/SensoControl_202608271807.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Диапазон": { ru: "-1 до 1000 бар", en: "-1 to 1000 bar", kk: "-1-ден 1000 барға дейін" }, 
      "Точность": { ru: "± 0.1% до ± 0.5% FS", en: "± 0.1% to ± 0.5% FS", kk: "± 0.1%-ден ± 0.5% FS-ке дейін" },
      "Частота сканирования": { ru: "10 мс", en: "10 ms", kk: "10 мс" },
      "Тип защиты": { ru: "IP67", en: "IP67", kk: "IP67" },
      "Питание": { ru: "Батарейки (до 1500 часов)", en: "Batteries (up to 1500 hours)", kk: "Батареялар (1500 сағатқа дейін)" }
    },
    features: [
      { ru: "Прочный металлический корпус", en: "Durable metal housing", kk: "Берік металл корпус" },
      { ru: "Функция фиксации пиковых значений (MIN/MAX)", en: "Peak value hold function (MIN/MAX)", kk: "Шыңдық мәндерді бекіту функциясы (MIN/MAX)" },
      { ru: "Графический дисплей с подсветкой", en: "Backlit graphic display", kk: "Артқы жарығы бар графикалық дисплей" },
      { ru: "Простое управление кнопками", en: "Simple button operation", kk: "Батырмалармен қарапайым басқару" },
      { ru: "Различные единицы измерения (бар, PSI, МПа)", en: "Various units of measurement (bar, PSI, MPa)", kk: "Әртүрлі өлшем бірліктері (бар, PSI, МПа)" },
      { ru: "Быстроразъемное соединение Diagnostic", en: "Quick-connect Diagnostic coupling", kk: "Diagnostic жылдам босатылатын қосылымы" }
    ],
    benefits: [
      { ru: "Высокая точность и стабильность показаний", en: "High accuracy and stability of readings", kk: "Көрсеткіштердің жоғары дәлдігі мен тұрақтылығы" },
      { ru: "Мгновенное обнаружение скачков давления", en: "Instant detection of pressure spikes", kk: "Қысым секірістерін лезде анықтау" },
      { ru: "Удобство считывания данных в темноте", en: "Ease of reading data in the dark", kk: "Қараңғыда деректерді оқу ыңғайлылығы" },
      { ru: "Длительный срок службы батарей", en: "Long battery life", kk: "Батареяның ұзақ қызмет ету мерзімі" },
      { ru: "Надежность в полевых условиях", en: "Reliability in field conditions", kk: "Далалық жағдайлардағы сенімділік" },
      { ru: "Минимальное время на диагностику", en: "Minimal diagnostic time", kk: "Диагностикаға кететін минималды уақыт" }
    ],
    applications: [
      { ru: "Техническое обслуживание и сервис", en: "Maintenance and service", kk: "Техникалық қызмет көрсету және сервис" },
      { ru: "Пусконаладка гидросистем", en: "Hydraulic system commissioning", kk: "Гидрожүйелерді іске қосу-ретке келтіру" },
      { ru: "Лабораторные испытания", en: "Laboratory testing", kk: "Зертханалық сынақтар" },
      { ru: "Мониторинг давления в реальном времени", en: "Real-time pressure monitoring", kk: "Нақты уақыт режимінде қысымды бақылау" },
      { ru: "Калибровка аналоговых манометров", en: "Calibration of analog pressure gauges", kk: "Аналогты манометрлерді калибрлеу" },
      { ru: "Поиск неисправностей", en: "Troubleshooting", kk: "Ақаулықтарды іздеу" }
    ],
    markets: [
      { ru: "Промышленное производство", en: "Industrial Manufacturing", kk: "Өнеркәсіптік өндіріс" },
      { ru: "Сервисные службы", en: "Service Departments", kk: "Сервистік қызметтер" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "Авиация", en: "Aviation", kk: "Авиация" }
    ]
  },
  {
    id: "s22",
    productTypeId: "pt10",
    brandId: "b1",
    name: {
      ru: "Диагностический набор ServiceJunior Test-Kit",
      en: "ServiceJunior Test-Kit",
      kk: "ServiceJunior Test-Kit диагностикалық жинағы"
    },
    slug: "servicejunior-test-kit",
    descriptionHtml: {
      ru: "Диагностические наборы Parker ServiceJunior Test-Kit идеально подходят для цифрового измерения давления в любых гидравлических или пневматических системах. В комплект входит цифровой манометр, адаптеры и шланги, упакованные в прочный кейс для удобной транспортировки и хранения.",
      en: "Parker ServiceJunior Test-Kits are ideal for digital pressure measurement in any hydraulic or pneumatic system. The kit includes a digital pressure gauge, adapters and hoses, packed in a rugged case for easy transport and storage.",
      kk: "Parker ServiceJunior Test-Kit диагностикалық жинақтары кез келген гидравликалық немесе пневматикалық жүйелердегі қысымды цифрлық өлшеуге өте ыңғайлы. Жинаққа цифрлық манометр, адаптерлер және шлангтар кіреді, олар ыңғайлы тасымалдау және сақтау үшін берік кейске салынған."
    },
    images: ["/assets/images/products/hoses/ServiceJunior_Test-Kit_202608271809.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Диапазон (воздух)": { ru: "-0.95 до 60 бар", en: "-0.95 to 60 bar", kk: "-0.95-тен 60 барға дейін" }, 
      "Диапазон (гидравлика)": { ru: "0 до 700 бар", en: "0 to 700 bar", kk: "0-ден 700 барға дейін" },
      "Тип соединения": { ru: "EMA-3 (M16x2)", en: "EMA-3 (M16x2)", kk: "EMA-3 (M16x2)" },
      "Кейс": { ru: "Ударопрочный пластик", en: "Impact-resistant plastic", kk: "Соққыға төзімді пластик" },
      "Точность": { ru: "0.5% FS", en: "0.5% FS", kk: "0.5% FS" }
    },
    features: [
      { ru: "Полный набор для диагностики «из коробки»", en: "Complete diagnostic kit out of the box", kk: "Қораптан шыққан толық диагностикалық жинақ" },
      { ru: "Простая генерация давления для проверки", en: "Simple pressure generation for testing", kk: "Тексеру үшін қысымды қарапайым генерациялау" },
      { ru: "Высококачественные микрошланги в комплекте", en: "High-quality micro-hoses included", kk: "Жинақтағы жоғары сапалы микрошлангтар" },
      { ru: "Набор переходников под разные стандарты", en: "Set of adapters for different standards", kk: "Әртүрлі стандарттарға арналған ауыстырғыштар жиынтығы" },
      { ru: "Компактность и мобильность", en: "Compactness and mobility", kk: "Жинақылық пен мобильділік" },
      { ru: "Интуитивно понятное использование", en: "Intuitive use", kk: "Интуитивті түсінікті пайдалану" }
    ],
    benefits: [
      { ru: "Быстрая проверка манометров на месте", en: "Fast on-site gauge checking", kk: "Манометрлерді орнында жылдам тексеру" },
      { ru: "Сокращение времени простоя оборудования", en: "Reduction in equipment downtime", kk: "Жабдықтың бос тұру уақытын азайту" },
      { ru: "Универсальность для разных типов систем", en: "Versatility for different types of systems", kk: "Әртүрлі жүйелер үшін әмбебаптық" },
      { ru: "Защита прибора при транспортировке", en: "Protection of the device during transport", kk: "Тасымалдау кезінде құрылғыны қорғау" },
      { ru: "Экономия на покупке отдельных компонентов", en: "Savings on buying individual components", kk: "Жеке компоненттерді сатып алуды үнемдеу" },
      { ru: "Профессиональный уровень диагностики", en: "Professional diagnostic level", kk: "Диагностиканың кәсіби деңгейі" }
    ],
    applications: [
      { ru: "Сервисное обслуживание и испытания", en: "Service maintenance and testing", kk: "Сервистік қызмет көрсету және сынақтар" },
      { ru: "Проверка датчиков и реле давления", en: "Checking pressure sensors and switches", kk: "Қысым датчиктері мен релелерін тексеру" },
      { ru: "Поиск утечек и неисправностей", en: "Leak and troubleshooting search", kk: "Ағып кетулер мен ақауларды іздеу" },
      { ru: "Мобильные сервисные бригады", en: "Mobile service teams", kk: "Мобильді сервистік бригадалар" },
      { ru: "Проверка гидроаккумуляторов", en: "Hydraulic accumulator testing", kk: "Гидроаккумуляторларды тексеру" },
      { ru: "Цеховой контроль качества", en: "Shop floor quality control", kk: "Цехтық сапа бақылауы" }
    ],
    markets: [
      { ru: "Техническое обслуживание и ремонт (MRO)", en: "Maintenance, Repair and Overhaul (MRO)", kk: "Техникалық қызмет көрсету және жөндеу (MRO)" },
      { ru: "Горнодобывающая промышленность", en: "Mining Industry", kk: "Тау-кен өнеркәсібі" },
      { ru: "Строительство", en: "Construction", kk: "Құрылыс" },
      { ru: "Сельское хозяйство", en: "Agriculture", kk: "Ауыл шаруашылығы" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" }
    ]
  },
  {
    id: "s31",
    productTypeId: "pt10",
    brandId: "b1",
    name: {
      ru: "Измерительный прибор SensoControl Serviceman Plus",
      en: "SensoControl Serviceman Plus Measuring Device",
      kk: "SensoControl Serviceman Plus өлшеу құрылғысы"
    },
    slug: "serviceman-plus",
    descriptionHtml: {
      ru: "Parker Serviceman Plus — это прочный, портативный и простой в использовании диагностический прибор для измерения давления, расхода, температуры и частоты вращения. Благодаря автоматическому распознаванию датчиков «Plug and Play», он позволяет мгновенно начать измерения без сложной настройки.",
      en: "The Parker Serviceman Plus is a rugged, portable and easy-to-use diagnostic tool for measuring pressure, flow, temperature and speed. With 'Plug and Play' automatic sensor recognition, it allows you to start measuring instantly without complex setup.",
      kk: "Parker Serviceman Plus — қысымды, шығынды, температураны және айналу жиілігін өлшеуге арналған берік, портативті және пайдалану оңай диагностикалық құрылғы. «Plug and Play» датчиктерін автоматты түрде тану арқасында ол күрделі орнатусыз бірден өлшеуді бастауға мүмкіндік береді."
    },
    images: ["/assets/images/products/hoses/Serviceman_Plus_202608271810.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Входы": { ru: "2 Аналоговых или до 3 CAN", en: "2 Analog or up to 3 CAN", kk: "2 аналогтық немесе 3 CAN-ға дейін" }, 
      "Параметры": { ru: "P, Q, T, RPM", en: "P, Q, T, RPM", kk: "P, Q, T, RPM" },
      "Защита": { ru: "IP67 (в резиновом чехле)", en: "IP67 (in rubber cover)", kk: "IP67 (резеңке қаптамада)" },
      "Память": { ru: "MIN / MAX значения", en: "MIN / MAX values", kk: "MIN / MAX мәндері" },
      "Дисплей": { ru: "Графический ЖК", en: "Graphic LCD", kk: "Графикалық ЖК" }
    },
    features: [
      { ru: "Компактный прибор для P, Q, T и RPM", en: "Compact device for P, Q, T and RPM", kk: "P, Q, T және RPM үшін жинақы құрылғы" },
      { ru: "Автоматическое распознавание датчиков", en: "Automatic sensor recognition", kk: "Датчиктерді автоматты түрде тану" },
      { ru: "Одновременное отображение двух каналов", en: "Simultaneous display of two channels", kk: "Екі арнаның бір мезгілде көрсетілуі" },
      { ru: "Ударопрочный и водонепроницаемый корпус", en: "Shockproof and waterproof housing", kk: "Соққыға төзімді және су өткізбейтін корпус" },
      { ru: "Простое управление одной рукой", en: "Simple one-hand operation", kk: "Бір қолмен қарапайым басқару" },
      { ru: "Длительное время автономной работы", en: "Long battery life", kk: "Ұзақ автономды жұмыс уақыты" }
    ],
    benefits: [
      { ru: "Быстроное обнаружение неисправностей", en: "Quick troubleshooting", kk: "Ақаулықтарды жылдам анықтау" },
      { ru: "Исключение ошибок при подключении датчиков", en: "Elimination of errors when connecting sensors", kk: "Датчиктерді қосу кезіндегі қателерді болдырмау" },
      { ru: "Возможность работы в самых суровых условиях", en: "Ability to work in the harshest conditions", kk: "Ең қиын жағдайларда жұмыс істеу мүмкіндігі" },
      { ru: "Высокая мобильность специалиста", en: "High mobility for specialists", kk: "Маманның жоғары мобильділігі" },
      { ru: "Точность измерений Parker", en: "Parker measurement accuracy", kk: "Parker өлшеу дәлдігі" },
      { ru: "Универсальность для мобильной и промгидравлики", en: "Versatility for mobile and industrial hydraulics", kk: "Мобильді және өнеркәсіптік гидравлика үшін әмбебаптық" }
    ],
    applications: [
      { ru: "Техническое обслуживание", en: "Technical maintenance", kk: "Техникалық қызмет көрсету" },
      { ru: "Поиск и устранение неисправностей", en: "Troubleshooting", kk: "Ақаулықтарды іздеу және жою" },
      { ru: "Оптимизация работы гидросистем", en: "Hydraulic system optimization", kk: "Гидрожүйелер жұмысын оңтайландыру" },
      { ru: "Полевая диагностика спецтехники", en: "Field diagnosis of specialized equipment", kk: "Арнайы техниканың далалық диагностикасы" },
      { ru: "Периодический контроль параметров", en: "Periodic parameter control", kk: "Параметрлерді мерзімді бақылау" },
      { ru: "Сервисные центры", en: "Service centers", kk: "Сервистік орталықтар" }
    ],
    markets: [
      { ru: "Промышленное производство", en: "Industrial Manufacturing", kk: "Өнеркәсіптік өндіріс" },
      { ru: "Строительная техника", en: "Construction Machinery", kk: "Құрылыс техникасы" },
      { ru: "Горнодобывающая отрасль", en: "Mining Industry", kk: "Тау-кен саласы" },
      { ru: "Лесозаготовка", en: "Logging", kk: "Орман дайындау" },
      { ru: "Сельское хозяйство", en: "Agriculture", kk: "Ауыл шаруашылығы" }
    ]
  },
  {
    id: "s24",
    productTypeId: "pt10",
    brandId: "b1",
    name: {
      ru: "Преобразователь тока/напряжения/частоты SCMA-VADC-710",
      en: "SCMA-VADC-710 current/voltage/frequency converter",
      kk: "SCMA-VADC-710 ток/кернеу/жиілік түрлендіргіші"
    },
    slug: "scma-vadc-710",
    descriptionHtml: {
      ru: "Преобразователь SCMA-VADC-710 устанавливается для фиксации состояния переключения гидравлических компонентов или измерения внешних сигналов тока, напряжения и частоты. Это расширяет возможности приборов SensoControl, позволяя интегрировать сторонние датчики в единую систему диагностики.",
      en: "The SCMA-VADC-710 converter is installed to capture the switching status of hydraulic components or measure external current, voltage and frequency signals. This expands the capabilities of SensoControl devices by allowing the integration of third-party sensors into a single diagnostic system.",
      kk: "SCMA-VADC-710 түрлендіргіші гидравликалық компоненттердің ауысу күйін бекіту немесе сыртқы ток, кернеу және жиілік сигналдарын өлшеу үшін орнатылады. Бұл SensoControl құрылғыларының мүмкіндіктерін кеңейтіп, үшінші тарап датчиктерін бірыңғай диагностикалық жүйеге біріктіруге мүмкіндік береді."
    },
    images: ["/assets/images/products/hoses/SCMA-VADC-710_202608271813.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Сигналы": { ru: "Ток / Напряжение / Частота", en: "Current / Voltage / Frequency", kk: "Ток / Кернеу / Жиілік" }, 
      "Точность": { ru: "±0.1% до ±0.5% FS", en: "±0.1% to ±0.5% FS", kk: "±0.1%-ден ±0.5% FS-ке дейін" },
      "Входной ток": { ru: "0/4 – 20 мА", en: "0/4 – 20 mA", kk: "0/4 – 20 мА" },
      "Входное напряжение": { ru: "0 – 10 В", en: "0 – 10 V", kk: "0 – 10 В" },
      "Входная частота": { ru: "1 Гц – 10 кГц", en: "1 Hz – 10 kHz", kk: "1 Гц – 10 кГц" }
    },
    features: [
      { ru: "Гальваническая развязка для безопасности", en: "Galvanic isolation for safety", kk: "Қауіпсіздік үшін гальваникалық оқшаулау" },
      { ru: "Преобразование сигналов в стандарт SensoControl", en: "Signal conversion to SensoControl standard", kk: "Сигналдарды SensoControl стандартына түрлендіру" },
      { ru: "Компактный и прочный корпус", en: "Compact and durable housing", kk: "Жинақы және берік корпус" },
      { ru: "Простое подключение (Plug and Play)", en: "Simple connection (Plug and Play)", kk: "Қарапайым қосылу (Plug and Play)" },
      { ru: "Светодиодная индикация состояния", en: "LED status indication", kk: "Күйдің жарықдиодты индикациясы" },
      { ru: "Высокая помехозащищенность", en: "High noise immunity", kk: "Жоғары кедергіге төзімділік" }
    ],
    benefits: [
      { ru: "Расширение функций приборов SensoControl", en: "Expansion of SensoControl device functions", kk: "SensoControl құрылғыларының функцияларын кеңейту" },
      { ru: "Возможность анализа стороннего оборудования", en: "Ability to analyze third-party equipment", kk: "Үшінші тарап жабдықтарын талдау мүмкіндігі" },
      { ru: "Защита измерительного прибора от перенапряжений", en: "Protection of measuring device from overvoltages", kk: "Өлшеу құрылғысын асқын кернеулерден қорғау" },
      { ru: "Точность передачи данных без потерь", en: "Lossless data transmission accuracy", kk: "Деректерді жоғалтусыз беру дәлдігі" },
      { ru: "Гибкость диагностической системы", en: "Diagnostic system flexibility", kk: "Диагностикалық жүйенің икемділігі" },
      { ru: "Простота интеграции в существующие тесты", en: "Ease of integration into existing tests", kk: "Қолданыстағы сынақтарға интеграциялаудың оңайлығы" }
    ],
    applications: [
      { ru: "Захват состояния переключения", en: "Switching status capture", kk: "Ауысу күйін түсіру" },
      { ru: "Мониторинг электрических параметров гидросистем", en: "Monitoring of electrical parameters of hydraulic systems", kk: "Гидрожүйелердің электрлік параметрлерін бақылау" },
      { ru: "Интеграция датчиков сторонних производителей", en: "Integration of third-party sensors", kk: "Үшінші тарап өндірушілерінің датчиктерін біріктіру" },
      { ru: "Сложная диагностика автоматизированных линий", en: "Complex diagnostics of automated lines", kk: "Автоматтандырылған желілердің күрделі диагностикасы" },
      { ru: "Синхронная запись гидравлики и электрики", en: "Synchronous recording of hydraulics and electrics", kk: "Гидравлика мен электр бөлігін синхронды жазу" },
      { ru: "Лабораторные исследования", en: "Laboratory research", kk: "Зертханалық зерттеулер" }
    ],
    markets: [
      { ru: "Промышленное производство", en: "Industrial Manufacturing", kk: "Өнеркәсіптік өндіріс" },
      { ru: "НИОКР", en: "R&D", kk: "ҒЗТКЖ" },
      { ru: "Автоматизация", en: "Automation", kk: "Автоматтандыру" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" }
    ]
  },
  {
    id: "s25",
    productTypeId: "pt10",
    brandId: "b1",
    name: {
      ru: "Манометр для опасных сред — серия Code 91",
      en: "Hazardous Environment Pressure Gauge - Code 91",
      kk: "Қауіпті ортаға арналған манометр — Code 91 сериясы"
    },
    slug: "code-91-gauge",
    descriptionHtml: {
      ru: "Манометр Parker Conflow Code 91 разработан специально для работы в опасных и суровых условиях, таких как подземные горные работы и карьеры. Он обладает исключительной прочностью и надежностью, обеспечивая точное измерение давления в самых сложных условиях эксплуатации.",
      en: "The Parker Conflow Code 91 pressure gauge is designed specifically for hazardous and harsh environments such as underground mining and quarrying. It features exceptional durability and reliability, providing accurate pressure measurement in the most challenging operating conditions.",
      kk: "Parker Conflow Code 91 манометрі жер асты тау-кен жұмыстары мен карьерлер сияқты қауіпті және қатал жағдайларда жұмыс істеу үшін арнайы жасалған. Ол ерекше беріктік пен сенімділікке ие, бұл ең күрделі пайдалану жағдайларында қысымды дәл өлшеуді қамтамасыз етеді."
    },
    images: ["/assets/images/products/hoses/Code_91_202608271815.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Давление": { ru: "20 – 1000 бар", en: "20 – 1000 bar", kk: "20 – 1000 бар" }, 
      "Вес": { ru: "0.85 кг", en: "0.85 kg", kk: "0.85 кг" },
      "Материал": { ru: "Нержавеющая сталь / Латунь", en: "Stainless Steel / Brass", kk: "Тот баспайтын болат / Латунь" },
      "Точность": { ru: "±1.6% FS", en: "±1.6% FS", kk: "±1.6% FS" },
      "Среда": { ru: "Вода / Масло", en: "Water / Oil", kk: "Су / Май" }
    },
    features: [
      { ru: "Разработан специально для опасных зон", en: "Designed specifically for hazardous areas", kk: "Арнайы қауіпті аймақтар үшін жасалған" },
      { ru: "Сверхпрочный корпус для защиты от ударов", en: "Heavy-duty housing for impact protection", kk: "Соққылардан қорғауға арналған өте берік корпус" },
      { ru: "Устойчивость к сильной вибрации", en: "Resistance to strong vibration", kk: "Күшті дірілге төзімділік" },
      { ru: "Защищенный циферблат", en: "Protected dial", kk: "Қорғалған циферблат" },
      { ru: "Высокая перегрузочная способность", en: "High overload capacity", kk: "Жоғары шамадан тыс жүктеме қабілеті" },
      { ru: "Специальные горно-шахтные резьбовые соединения", en: "Special mining threaded connections", kk: "Арнайы тау-кен бұрандалы қосылыстары" }
    ],
    benefits: [
      { ru: "Высокая надежность в суровых условиях", en: "High reliability in harsh conditions", kk: "Қатал жағдайлардағы жоғары сенімділік" },
      { ru: "Безопасность эксплуатации в шахтах", en: "Operational safety in mines", kk: "Шахталарда пайдалану қауіпсіздігі" },
      { ru: "Длительный срок службы при интенсивных нагрузках", en: "Long service life under intensive loads", kk: "Қарқынды жүктемелердегі ұзақ қызмет ету мерзімі" },
      { ru: "Минимизация риска повреждения прибора", en: "Minimal risk of device damage", kk: "Құрылғыны зақымдау қаупін азайту" },
      { ru: "Простота считывания показаний в запыленной среде", en: "Ease of reading in dusty environments", kk: "Шаңды ортада көрсеткіштерді оқу оңайлығы" },
      { ru: "Соответствие отраслевым стандартам безопасности", en: "Compliance with industry safety standards", kk: "Салалық қауіпсіздік стандарттарына сәйкестік" }
    ],
    applications: [
      { ru: "Мониторинг давления в шахтах", en: "Pressure monitoring in mines", kk: "Шахталардағы қысымды бақылау" },
      { ru: "Гидрокрепи и механизированные комплексы", en: "Hydraulic roof supports and longwall systems", kk: "Гидробекітпелер мен механикаландырылған кешендер" },
      { ru: "Буровое оборудование", en: "Drilling equipment", kk: "Бұрғылау жабдықтары" },
      { ru: "Подземный транспорт", en: "Underground transport", kk: "Жер асты көлігі" },
      { ru: "Системы пожаротушения в шахтах", en: "Firefighting systems in mines", kk: "Шахталардағы өрт сөндіру жүйелері" },
      { ru: "Карьерная техника", en: "Quarry machinery", kk: "Карьерлік техника" }
    ],
    markets: [
      { ru: "Горнодобывающая промышленность", en: "Mining Industry", kk: "Тау-кен өнеркәсібі" },
      { ru: "Строительство тоннелей", en: "Tunnel Construction", kk: "Тоннель құрылысы" },
      { ru: "Тяжелое машиностроение", en: "Heavy Engineering", kk: "Ауыр машина жасау" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "Инфраструктура", en: "Infrastructure", kk: "Инфрақұрылым" }
    ]
  },
  {
    id: "s26",
    productTypeId: "pt10",
    brandId: "b1",
    name: {
      ru: "Манометры для гидробаков и резервуаров",
      en: "Pressure Gauges - Reservoir Equipment",
      kk: "Гидробактар мен резервуарларға арналған манометрлер"
    },
    slug: "reservoir-pressure-gauges",
    descriptionHtml: {
      ru: "Манометры Parker обеспечивают надежную визуальную индикацию давления в системе. Широкий выбор диапазонов, типов присоединения и исполнений корпуса позволяет подобрать оптимальное решение для любой гидростанции или резервуара.",
      en: "Parker pressure gauges provide reliable visual indication of system pressure. A wide range of pressure ranges, connection types and housing designs allows you to find the optimal solution for any hydraulic power unit or reservoir.",
      kk: "Parker манометрлері жүйедегі қысымның сенімді визуалды индикациясын қамтамасыз етеді. Диапазондардың, қосылу түрлерінің және корпус нұсқаларының кең таңдауы кез келген гидростанция немесе резервуар үшін оңтайлы шешімді таңдауға мүмкіндік береді."
    },
    images: ["/assets/images/products/hoses/Pressure_Gauges_-_Reservoir_Equipment_202608271816.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Давление": { ru: "0 – 600 бар", en: "0 – 600 bar", kk: "0 – 600 бар" }, 
      "Точность": { ru: "до 1.0% FS", en: "up to 1.0% FS", kk: "1.0% FS дейін" },
      "Заполнение": { ru: "Глицерин / Без заполнения", en: "Glycerine / Non-filled", kk: "Глицерин / Толтырылмаған" },
      "Диаметр": { ru: "63 / 100 мм", en: "63 / 100 mm", kk: "63 / 100 мм" },
      "Материал": { ru: "Нержавеющая сталь", en: "Stainless Steel", kk: "Тот баспайтын болат" }
    },
    features: [
      { ru: "Корпус из нержавеющей стали", en: "Stainless steel housing", kk: "Тот баспайтын болаттан жасалған корпус" },
      { ru: "Двойная шкала (бар / PSI)", en: "Dual scale (bar / PSI)", kk: "Қос шкала (бар / PSI)" },
      { ru: "Глицериновое заполнение для гашения вибраций", en: "Glycerine filling for vibration damping", kk: "Дірілді бәсеңдетуге арналған глицерин толтыру" },
      { ru: "Предохранительный клапан сброса давления", en: "Safety pressure relief valve", kk: "Қысымды түсіруге арналған сақтандыру клапаны" },
      { ru: "Различные варианты монтажа (радиальный, осевой)", en: "Various mounting options (radial, axial)", kk: "Түрлі монтаждау нұсқалары (радиальды, осьтік)" },
      { ru: "Прочное стекло", en: "Rugged glass", kk: "Берік шыны" }
    ],
    benefits: [
      { ru: "Мгновенная визуальная индикация", en: "Instant visual indication", kk: "Лездік визуалды индикация" },
      { ru: "Устойчивость к коррозии и агрессивным средам", en: "Resistance to corrosion and aggressive media", kk: "Коррозияға және агрессивті ортаға төзімділік" },
      { ru: "Стабильность показаний при вибрации", en: "Stability of readings under vibration", kk: "Діріл кезіндегі көрсеткіштердің тұрақтылығы" },
      { ru: "Долговечность и отсутствие запотевания", en: "Long life and no fogging", kk: "Ұзақ мерзімділік және буланудың болмауы" },
      { ru: "Простота установки", en: "Ease of installation", kk: "Орнатудың қарапайымдылығы" },
      { ru: "Эстетичный внешний вид", en: "Aesthetic appearance", kk: "Эстетикалық сыртқы түрі" }
    ],
    applications: [
      { ru: "Контроль давления в гидробаках", en: "Pressure monitoring in hydraulic tanks", kk: "Гидробактардағы қысымды бақылау" },
      { ru: "Промышленные гидростанции", en: "Industrial hydraulic power units", kk: "Өнеркәсіптік гидростанциялар" },
      { ru: "Мобильные гидравлические системы", en: "Mobile hydraulic systems", kk: "Мобильді гидравликалық жүйелер" },
      { ru: "Компрессорное оборудование", en: "Compressor equipment", kk: "Компрессорлық жабдық" },
      { ru: "Насосные агрегаты", en: "Pump units", kk: "Сорғы агрегаттары" },
      { ru: "Фильтрующие установки", en: "Filtration systems", kk: "Фильтрлеу қондырғылары" }
    ],
    markets: [
      { ru: "Промышленное производство", en: "Industrial Manufacturing", kk: "Өнеркәсіптік өндіріс" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "Транспорт", en: "Transport", kk: "Көлік" },
      { ru: "Нефтегазовая отрасль", en: "Oil and Gas Industry", kk: "Мұнай-газ саласы" }
    ]
  },
  {
    id: "s27",
    productTypeId: "pt10",
    brandId: "b1",
    name: {
      ru: "Анализ рабочей жидкости Par-Test",
      en: "Par-Test Fluid Analysis",
      kk: "Par-Test жұмыс сұйықтығын талдау"
    },
    slug: "par-test",
    descriptionHtml: {
      ru: "Par-Test — это комплексный лабораторный анализ рабочей жидкости, который позволяет оценить состояние системы без разборки. Анализ включает определение класса чистоты по ISO/NAS, содержание воды, состояние присадок и наличие продуктов износа.",
      en: "Par-Test is a comprehensive laboratory fluid analysis that allows the condition of a system to be assessed without disassembly. The analysis includes determination of cleanliness class according to ISO/NAS, water content, additive condition and the presence of wear products.",
      kk: "Par-Test — бөлшектемей жүйенің күйін бағалауға мүмкіндік беретін жұмыс сұйықтығын кешенді зертханалық талдау. Талдау ISO/NAS бойынша тазалық класын анықтауды, судың мөлшерін, қоспалардың күйін және тозу өнімдерінің болуын қамтиды."
    },
    images: ["/assets/images/products/hoses/Par-Test_202608271818.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Тип": { ru: "Лабораторный анализ", en: "Laboratory Analysis", kk: "Зертханалық талдау" }, 
      "Стандарт": { ru: "NFPA T2.9.1 / ANSI B93.13", en: "NFPA T2.9.1 / ANSI B93.13", kk: "NFPA T2.9.1 / ANSI B93.13" },
      "Параметры": { ru: "Чистота, Вязкость, Вода, Износ", en: "Cleanliness, Viscosity, Water, Wear", kk: "Тазалық, тұтқырлық, су, тозу" },
      "Отчетность": { ru: "Подробный протокол с рекомендациями", en: "Detailed report with recommendations", kk: "Ұсыныстары бар егжей-тегжейлі хаттама" },
      "Срок": { ru: "от 2 рабочих дней", en: "from 2 working days", kk: "2 жұмыс күнінен бастап" }
    },
    features: [
      { ru: "Полный анализ по малому объему пробы", en: "Full analysis from a small sample volume", kk: "Кішкентай сынама көлемі бойынша толық талдау" },
      { ru: "Использование высокоточного оборудования", en: "Use of high-precision equipment", kk: "Жоғары дәлдіктегі жабдықты пайдалану" },
      { ru: "Проверка на 20+ критических параметров", en: "Testing for 20+ critical parameters", kk: "20+ маңызды параметрлерді тексеру" },
      { ru: "Удобные наборы для забора проб", en: "Convenient sampling kits", kk: "Сынамаларды алуға арналған ыңғайлы жинақтар" },
      { ru: "Сравнение с базовыми показателями", en: "Comparison with baseline figures", kk: "Базалық көрсеткіштермен салыстыру" },
      { ru: "Экспертная интерпретация результатов", en: "Expert interpretation of results", kk: "Нәтижелерді сарапшылық түсіндіру" }
    ],
    benefits: [
      { ru: "Выявление проблем до поломки", en: "Identifying problems before breakdown", kk: "Бұзылуға дейін мәселелерді анықтау" },
      { ru: "Продление срока службы компонентов и масла", en: "Extension of component and oil life", kk: "Компоненттер мен майдың қызмет ету мерзімін ұзарту" },
      { ru: "Обоснование интервалов замены жидкости", en: "Justification of fluid change intervals", kk: "Сұйықтықты ауыстыру аралықтарын негіздеу" },
      { ru: "Снижение затрат на внеплановый ремонт", en: "Reduced costs for unscheduled repairs", kk: "Жоспардан тыс жөндеу шығындарын азайту" },
      { ru: "Повышение надежности оборудования", en: "Increased equipment reliability", kk: "Жабдықтың сенімділігін арттыру" },
      { ru: "Объективная оценка чистоты системы", en: "Objective assessment of system cleanliness", kk: "Жүйенің тазалығын объективті бағалау" }
    ],
    applications: [
      { ru: "Профилактическое обслуживание", en: "Preventive maintenance", kk: "Алдын алу қызметі" },
      { ru: "Ввод оборудования в эксплуатацию", en: "Equipment commissioning", kk: "Жабдықты іске қосу" },
      { ru: "Диагностика при снижении производительности", en: "Diagnostics in case of performance decline", kk: "Өнімділік төмендеген кездегі диагностика" },
      { ru: "Аудит состояния парка техники", en: "Fleet condition audit", kk: "Техника паркінің күйін аудиттеу" },
      { ru: "Подбор фильтрующих элементов", en: "Selection of filter elements", kk: "Фильтрлеу элементтерін таңдау" },
      { ru: "Расследование причин аварий", en: "Investigation of accident causes", kk: "Апаттардың себептерін тергеу" }
    ],
    markets: [
      { ru: "Промышленное производство", en: "Industrial Manufacturing", kk: "Өнеркәсіптік өндіріс" },
      { ru: "Горнодобывающая промышленность", en: "Mining Industry", kk: "Тау-кен өнеркәсібі" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "Морской транспорт", en: "Marine Transport", kk: "Теңіз көлігі" },
      { ru: "Авиация", en: "Aviation", kk: "Авиация" }
    ]
  },
  {
    id: "s28",
    productTypeId: "pt10",
    brandId: "b1",
    name: {
      ru: "Измерительный прибор Service Master COMPACT",
      en: "Service Master COMPACT Measuring Device",
      kk: "Service Master COMPACT өлшеу құрылғысы"
    },
    slug: "service-master-compact",
    descriptionHtml: {
      ru: "Parker Service Master COMPACT — это универсальное устройство для сервисного обслуживания гидравлики, объединяющее функции измерения и записи данных. Сенсорный дисплей и интуитивный интерфейс делают его простым в использовании как для мобильной, так и для стационарной гидравлики.",
      en: "The Parker Service Master COMPACT is a versatile hydraulic service tool that combines measurement and data logging functions. A touch screen display and intuitive interface make it easy to use for both mobile and industrial hydraulics.",
      kk: "Parker Service Master COMPACT — өлшеу және деректерді жазу функцияларын біріктіретін гидравликаға сервистік қызмет көрсетуге арналған әмбебап құрылғы. Сенсорлық дисплей мен интуитивті интерфейс оны мобильді және стационарлық гидравлика үшін пайдалануды оңайлатады."
    },
    images: ["/assets/images/products/hoses/Service_Master_COMPACT_202608271821.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Дисплей": { ru: "4,3\" Сенсорный", en: "4.3\" Touchscreen", kk: "4,3\" Сенсорлық" }, 
      "Точность": { ru: "0.1% FS", en: "0.1% FS", kk: "0.1% FS" },
      "Входы": { ru: "до 6 каналов", en: "up to 6 channels", kk: "6 арнаға дейін" },
      "Интерфейс": { ru: "USB / LAN", en: "USB / LAN", kk: "USB / LAN" },
      "Память": { ru: "до 1 млрд точек", en: "up to 1 billion points", kk: "1 млрд нүктеге дейін" }
    },
    features: [
      { ru: "Автоматическое распознавание датчиков (Plug and Play)", en: "Automatic sensor recognition (Plug and Play)", kk: "Датчиктерді автоматты түрде тану (Plug and Play)" },
      { ru: "Прочный корпус с прорезиненными вставками", en: "Rugged housing with rubber inserts", kk: "Резеңкеленген кірістірулері бар берік корпус" },
      { ru: "Возможность записи графиков в реальном времени", en: "Real-time graph recording capability", kk: "Нақты уақытта графиктерді жазу мүмкіндігі" },
      { ru: "Долгая работа от аккумулятора", en: "Long battery life", kk: "Аккумулятордан ұзақ жұмыс істеу" },
      { ru: "Многоязычный интерфейс", en: "Multi-language interface", kk: "Көптілді интерфейс" },
      { ru: "Удобная передача данных на ПК", en: "Easy data transfer to PC", kk: "Деректерді компьютерге ыңғайлы тасымалдау" }
    ],
    benefits: [
      { ru: "Исключение ошибок настройки", en: "Elimination of setup errors", kk: "Орнату қателерін болдырмау" },
      { ru: "Наглядная визуализация процессов", en: "Visual representation of processes", kk: "Процестерді көрнекі бейнелеу" },
      { ru: "Быстрое документирование тестов", en: "Fast test documentation", kk: "Сынақтарды жылдам құжаттандыру" },
      { ru: "Простота обучения персонала", en: "Ease of staff training", kk: "Персоналды оқытудың қарапайымдылығы" },
      { ru: "Высокая точность анализа", en: "High analysis accuracy", kk: "Талдаудың жоғары дәлдігі" },
      { ru: "Компактность и легкость", en: "Compactness and lightness", kk: "Жинақылық пен жеңілдік" }
    ],
    applications: [
      { ru: "Диагностика гидравлики", en: "Hydraulics diagnostics", kk: "Гидравлика диагностикасы" },
      { ru: "Профилактические проверки", en: "Preventive inspections", kk: "Алдын алу тексерулері" },
      { ru: "Настройка клапанов и насосов", en: "Adjustment of valves and pumps", kk: "Клапандар мен сорғыларды реттеу" },
      { ru: "Аудит производительности систем", en: "System performance audit", kk: "Жүйелердің өнімділігін аудиттеу" },
      { ru: "Поиск переходных процессов и пиков", en: "Search for transients and peaks", kk: "Өтпелі процестер мен шыңдарды іздеу" },
      { ru: "Мобильный сервис", en: "Mobile service", kk: "Мобильді сервис" }
    ],
    markets: [
      { ru: "Техническое обслуживание и ремонт (MRO)", en: "Maintenance, Repair and Overhaul (MRO)", kk: "Техникалық қызмет көрсету және жөндеу (MRO)" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" },
      { ru: "Строительство", en: "Construction", kk: "Құрылыс" },
      { ru: "Энергетика", en: "Energy", kk: "Энергетика" },
      { ru: "НИОКР", en: "R&D", kk: "ҒЗТКЖ" }
    ]
  },
  {
    id: "s29",
    productTypeId: "pt10",
    brandId: "b1",
    name: {
      ru: "Измерительный прибор Service Master CONNECT",
      en: "Service Master CONNECT Measuring Device",
      kk: "Service Master CONNECT өлшеу құрылғысы"
    },
    slug: "service-master-connect",
    descriptionHtml: {
      ru: "Parker Service Master CONNECT — это мощный диагностический прибор для гидравлических систем, поддерживающий до 100 измерительных каналов одновременно. Модульная система позволяет адаптировать прибор под самые сложные задачи — от простой диагностики до НИОКР и разработки новых систем.",
      en: "The Parker Service Master CONNECT is a powerful diagnostic tool for hydraulic systems, supporting up to 100 measurement channels simultaneously. Its modular system allows the tool to be adapted for the most challenging tasks, from simple diagnostics to R&D and new system development.",
      kk: "Parker Service Master CONNECT — бір уақытта 100-ге дейін өлшеу арналарын қолдайтын гидравликалық жүйелерге арналған қуатты диагностикалық құрылғы. Модульдік жүйе құрылғыны қарапайым диагностикадан бастап ҒЗТКЖ-ға және жаңа жүйелерді әзірлеуге дейінгі ең күрделі тапсырмаларға бейімдеуге мүмкіндік береді."
    },
    images: ["/assets/images/products/hoses/Service_Master_CONNECT_202608271823.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Дисплей": { ru: "7\" Сенсорный", en: "7\" Touchscreen", kk: "7\" Сенсорлық" }, 
      "Каналы": { ru: "до 100 одновременно", en: "up to 100 simultaneously", kk: "бір уақытта 100-ге дейін" },
      "Частота сканирования": { ru: "0.1 мс", en: "0.1 ms", kk: "0.1 мс" },
      "Связь": { ru: "WiFi / Bluetooth / USB", en: "WiFi / Bluetooth / USB", kk: "WiFi / Bluetooth / USB" },
      "Модульность": { ru: "Сменные модули ввода", en: "Interchangeable input modules", kk: "Ауыстырмалы енгізу модульдері" }
    },
    features: [
      { ru: "Модульная система со сменными модулями", en: "Modular system with interchangeable modules", kk: "Ауыстырмалы модульдері бар модульдік жүйе" },
      { ru: "7-дюймовый сенсорный дисплей высокой четкости", en: "7-inch high-definition touchscreen display", kk: "7 дюймдік жоғары ажыратымдылықты сенсорлық дисплей" },
      { ru: "Поддержка CAN, аналоговых и цифровых датчиков", en: "Support for CAN, analog and digital sensors", kk: "CAN, аналогтық және цифрлық датчиктерді қолдау" },
      { ru: "Дистанционное управление и передача данных", en: "Remote control and data transfer", kk: "Қашықтан басқару және деректерді беру" },
      { ru: "Анализ больших объемов данных на устройстве", en: "Analysis of large data volumes on device", kk: "Құрылғыдағы үлкен көлемдегі деректерді талдау" },
      { ru: "Защищенное исполнение для цеха", en: "Rugged design for shop floor", kk: "Цехқа арналған қорғалған орындау" }
    ],
    benefits: [
      { ru: "Максимальная гибкость в работе", en: "Maximum flexibility in operation", kk: "Жұмыстағы максималды икемділік" },
      { ru: "Сокращение времени на разработку и тест", en: "Reduced development and test time", kk: "Әзірлеу және сынақ уақытын қысқарту" },
      { ru: "Возможность комплексного мониторинга всей машины", en: "Ability for comprehensive monitoring of whole machine", kk: "Бүкіл машинаны кешенді бақылау мүмкіндігі" },
      { ru: "Удобство работы с большим количеством данных", en: "Convenience of working with large data amounts", kk: "Үлкен деректер көлемімен жұмыс істеу ыңғайлылығы" },
      { ru: "Будущая масштабируемость системы", en: "Future system scalability", kk: "Жүйенің болашақ масштабталуы" },
      { ru: "Премиальный уровень диагностики", en: "Premium level of diagnostics", kk: "Диагностиканың премиум деңгейі" }
    ],
    applications: [
      { ru: "НИОКР и разработка систем", en: "R&D and system development", kk: "ҒЗТКЖ және жүйелерді әзірлеу" },
      { ru: "Комплексная диагностика крупных машин", en: "Comprehensive diagnostics of large machines", kk: "Ірі машиналардың кешенді диагностикасы" },
      { ru: "Испытательные стенды", en: "Test benches", kk: "Сынақ стендтері" },
      { ru: "Дистанционный мониторинг состояния", en: "Remote condition monitoring", kk: "Күйді қашықтан бақылау" },
      { ru: "Сложная отладка автоматики", en: "Complex debugging of automation", kk: "Автоматиканы күрделі баптау" },
      { ru: "Академические исследования", en: "Academic research", kk: "Академиялық зерттеулер" }
    ],
    markets: [
      { ru: "Мобильная техника и транспорт", en: "Mobile Equipment and Transport", kk: "Мобильді техника және көлік" },
      { ru: "Машиностроение", en: "Machine Building", kk: "Машина жасау" },
      { ru: "Аэрокосмическая отрасль", en: "Aerospace Industry", kk: "Аэроғарыш саласы" },
      { ru: "НИИ и Университеты", en: "Research Institutes and Universities", kk: "ҒЗИ мен университеттер" },
      { ru: "Тяжелая промышленность", en: "Heavy Industry", kk: "Ауыр өнеркәсіп" }
    ]
  },
  {
    id: "s30",
    productTypeId: "pt10",
    brandId: "b1",
    name: {
      ru: "Измерительный прибор Service Master Easy",
      en: "Service Master Easy Measuring Device",
      kk: "Service Master Easy өлшеу құрылғысы"
    },
    slug: "service-master-easy",
    descriptionHtml: {
      ru: "Parker Service Master Easy — это портативный диагностический прибор, сочетающий измерение данных и интуитивно понятное управление. Это классическое решение для быстрого измерения давления, температуры и расхода в полевых условиях.",
      en: "The Parker Service Master Easy is a handheld diagnostic tool combining data measurement and intuitive operation. It is a classic solution for rapid measurement of pressure, temperature and flow in the field.",
      kk: "Parker Service Master Easy — деректерді өлшеу мен интуитивті басқаруды біріктіретін портативті диагностикалық құрылғы. Бұл далалық жағдайларда қысымды, температураны және шығынды жылдам өлшеуге арналған классикалық шешім."
    },
    images: ["/assets/images/products/hoses/Master_Easy_Measuring_202608271824.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Каналы": { ru: "3 или 4 аналоговых", en: "3 or 4 analog", kk: "3 немесе 4 аналогтық" }, 
      "Скорость сканирования": { ru: "1 мс", en: "1 ms", kk: "1 мс" },
      "Память": { ru: "Внутренняя на 10 тестов", en: "Internal for 10 tests", kk: "10 сынаққа арналған ішкі" },
      "Дисплей": { ru: "ЖК с подсветкой", en: "Backlit LCD", kk: "Артқы жарығы бар ЖК" },
      "Питание": { ru: "Аккумулятор / Сеть", en: "Battery / Mains", kk: "Аккумулятор / Желі" }
    },
    features: [
      { ru: "Скорость сканирования 1 мс", en: "1 ms scan rate", kk: "Сканерлеу жылдамдығы 1 мс" },
      { ru: "Прочный корпус, проверенный временем", en: "Time-tested rugged housing", kk: "Уақытпен тексерілген берік корпус" },
      { ru: "Автоматическое распознавание датчиков", en: "Automatic sensor recognition", kk: "Датчиктерді автоматты түрде тану" },
      { ru: "Кнопки прямого доступа к функциям", en: "Direct access function keys", kk: "Функцияларға тікелей қол жеткізу түймелері" },
      { ru: "Аналоговые выходы для осциллографа", en: "Analog outputs for oscilloscope", kk: "Осциллографқа арналған аналогтық шығыстар" },
      { ru: "Простота эксплуатации", en: "Ease of operation", kk: "Пайдаланудың қарапайымдылығы" }
    ],
    benefits: [
      { ru: "Надежность в полевых условиях", en: "Reliability in field conditions", kk: "Далалық жағдайлардағы сенімділік" },
      { ru: "Минимальное время на обучение", en: "Minimal training time", kk: "Оқытудың минималды уақыты" },
      { ru: "Точное обнаружение пиков давления", en: "Accurate pressure peak detection", kk: "Қысым шыңдарын дәл анықтау" },
      { ru: "Долговечность прибора (легендарная серия)", en: "Long tool life (legendary series)", kk: "Құрылғының ұзақ мерзімділігі (аңызға айналған серия)" },
      { ru: "Отличное соотношение цена/качество", en: "Excellent price/performance ratio", kk: "Баға мен сапаның тамаша арақатынасы" },
      { ru: "Удобство использования в перчатках", en: "Convenience of use in gloves", kk: "Қолғаппен пайдалану ыңғайлылығы" }
    ],
    applications: [
      { ru: "Поиск неисправностей в гидросистемах", en: "Hydraulic troubleshooting", kk: "Гидрожүйелердегі ақауларды іздеу" },
      { ru: "Регулярное техобслуживание", en: "Regular maintenance", kk: "Тұрақты техникалық қызмет көрсету" },
      { ru: "Проверка рабочих циклов машин", en: "Machine cycle verification", kk: "Машиналардың жұмыс циклдерін тексеру" },
      { ru: "Простая наладка оборудования", en: "Simple equipment setup", kk: "Жабдықты қарапайым баптау" },
      { ru: "Мобильный сервис", en: "Mobile service", kk: "Мобильді сервис" },
      { ru: "Обучение персонала", en: "Staff training", kk: "Персоналды оқыту" }
    ],
    markets: [
      { ru: "Техническое обслуживание и ремонт (MRO)", en: "Maintenance, Repair and Overhaul (MRO)", kk: "Техникалық қызмет көрсету және жөндеу (MRO)" },
      { ru: "Строительство", en: "Construction", kk: "Құрылыс" },
      { ru: "Сельское хозяйство", en: "Agriculture", kk: "Ауыл шаруашылығы" },
      { ru: "Лесная промышленность", en: "Forestry Industry", kk: "Орман өнеркәсібі" },
      { ru: "Транспорт", en: "Transport", kk: "Көлік" }
    ]
  },
  {
    id: "s23",
    productTypeId: "pt11",
    brandId: "b1",
    name: {
      ru: "Коробка отбора мощности Chelsea — серия 880",
      en: "880 Series Power Take-Off",
      kk: "Chelsea қуатты таңдау қорабы — 880 сериясы"
    },
    slug: "chelsea-pto",
    descriptionHtml: {
      ru: "КОМ Chelsea серии 880 предназначены для большинства механических трансмиссий с 8-болтовым лючком. Обладая высокой несущей способностью и прочной конструкцией, они идеально подходят для привода мощных насосов, компрессоров и другого навесного оборудования в тяжелых условиях эксплуатации.",
      en: "The Chelsea 880 Series Power Take-Offs are designed for most mechanical transmissions with an 8-bolt aperture. With high load capacity and rugged construction, they are ideal for driving heavy-duty pumps, compressors and other attachments in severe operating conditions.",
      kk: "880 сериялы Chelsea ҚТҚ 8 болтты люгі бар механикалық трансмиссиялардың көпшілігіне арналған. Жоғары көтеру қабілеті мен берік конструкциясымен олар ауыр пайдалану жағдайларында қуатты сорғыларды, компрессорларды және басқа аспалы жабдықтарды жетектеу үшін өте қолайлы."
    },
    images: ["/assets/images/products/hoses/880_Series_Power_Take-Off_202608271832.jpeg"],
    datasheetUrl: "#",
    specRange: { 
      "Крутящий момент": { ru: "до 678 Нм", en: "up to 678 Nm", kk: "678 Нм дейін" }, 
      "Монтаж": { ru: "8 болтов", en: "8 bolts", kk: "8 болт" },
      "Передаточное число": { ru: "Различные варианты", en: "Various options", kk: "Түрлі нұсқалар" },
      "Вес": { ru: "~25 кг", en: "~25 kg", kk: "~25 кг" },
      "Тип": { ru: "Механический / Пневмо", en: "Mechanical / Pneumatic", kk: "Механикалық / Пневмо" }
    },
    features: [
      { ru: "Прочный чугунный корпус", en: "Rugged cast iron housing", kk: "Берік шойын корпус" },
      { ru: "Конические роликовые подшипники", en: "Tapered roller bearings", kk: "Конустық роликті подшипниктер" },
      { ru: "Высокоточные шестерни", en: "High-precision gears", kk: "Жоғары дәлдіктегі шестернялар" },
      { ru: "Различные варианты выходных валов (DIN, SAE, фланец)", en: "Various output shaft options (DIN, SAE, flange)", kk: "Шығыс біліктерінің түрлі нұсқалары (DIN, SAE, фланец)" },
      { ru: "Простая установка и регулировка зазора", en: "Easy installation and backlash adjustment", kk: "Оңай орнату және саңылауды реттеу" },
      { ru: "Высокая износостойкость", en: "High wear resistance", kk: "Жоғары тозуға төзімділік" }
    ],
    benefits: [
      { ru: "Высокая несущая способность", en: "High load capacity", kk: "Жоғары көтеру қабілеті" },
      { ru: "Длительный срок службы в тяжелых режимах", en: "Long service life in heavy-duty modes", kk: "Ауыр режимдердегі ұзақ қызмет ету мерзімі" },
      { ru: "Надежность привода оборудования", en: "Equipment drive reliability", kk: "Жабдық жетегінің сенімділігі" },
      { ru: "Низкий уровень шума", en: "Low noise level", kk: "Төмен шу деңгейі" },
      { ru: "Минимальные требования к обслуживанию", en: "Minimal maintenance requirements", kk: "Минималды техникалық қызмет көрсету талаптары" },
      { ru: "Глобальная поддержка Parker Chelsea", en: "Global Parker Chelsea support", kk: "Parker Chelsea жаһандық қолдауы" }
    ],
    applications: [
      { ru: "Тяжелые условия эксплуатации", en: "Severe operating conditions", kk: "Ауыр пайдалану жағдайлары" },
      { ru: "Вакуумные машины и ассенизаторы", en: "Vacuum trucks and septic pumpers", kk: "Вакуумдық машиналар мен ассенизаторлар" },
      { ru: "Пожарные машины", en: "Fire trucks", kk: "Өрт сөндіру машиналары" },
      { ru: "Гидроманипуляторы", en: "Hydraulic manipulators", kk: "Гидроманипуляторлар" },
      { ru: "Цементировочные агрегаты", en: "Cementing units", kk: "Цементтеу агрегаттары" },
      { ru: "Мобильные буровые установки", en: "Mobile drilling rigs", kk: "Мобильді бұрғылау қондырғылары" }
    ],
    markets: [
      { ru: "Спецтехника", en: "Specialized Equipment", kk: "Арнайы техника" },
      { ru: "Транспорт", en: "Transport", kk: "Көлік" },
      { ru: "Нефтегазовый сектор", en: "Oil and Gas Sector", kk: "Мұнай-газ секторы" },
      { ru: "Строительство", en: "Construction", kk: "Құрылыс" },
      { ru: "Коммунальное хозяйство", en: "Utilities", kk: "Коммуналдық шаруашылық" }
    ]
  },
  // MOTORS SERIES
  {
    id: "s-m1",
    productTypeId: "pt-m1",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые гидромоторы — серия M (ISO)", 
      en: "Axial Piston Motors — M Series (ISO version)", 
      kk: "Аксьальді-поршеньді гидромоторлар — M сериясы (ISO)" 
    },
    slug: "series-m-motor",
    descriptionHtml: { 
      ru: "Гидромоторы серии M имеют конструкцию с наклонным блоком (40°), сочетая высокую производительность и компактные размеры. Они предназначены для стационарных и мобильных приложений и могут использоваться как в открытых, так и в закрытых гидравлических контурах. Моторы выдерживают постоянное давление до 400 бар и пиковое до 450 бар, обеспечивая частоту вращения до 8000 об/мин.",
      en: "M series hydraulic motors feature a bent axis design with a 40° angle, combining high performance with a reduced size envelope. Designed for fixed and mobile applications, they can be used in either closed or open loop systems. These motors operate at pressures up to 400 bar continuous (450 bar peak) and speeds up to 8000 rpm depending on the model.",
      kk: "M сериялы гидромоторлары еңіс блокты (40°) конструкцияға ие, ол жоғары өнімділік пен ықшам өлшемдерді біріктіреді. Олар стационарлық және мобильді қосымшаларға арналған және ашық, сондай-ақ жабық гидравликалық контурларда қолданылуы мүмкін. Моторлар 400 барға дейінгі тұрақты қысымға және 450 барға дейінгі пиктік қысымға төзеді, 8000 айн/мин дейінгі айналу жиілігін қамтамасыз етеді."
    },
    images: ["/assets/images/products/leduc/motors/Моторы_Hydro_Leduc_202609051327.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "5 – 180 см³/об", en: "5 – 180 cc/rev", kk: "5 – 180 см³/айн" },
      "Рабочее давление": { ru: "400 бар (пик 450)", en: "400 bar (450 peak)", kk: "400 бар (450 пик)" },
      "Макс. частота вращения": { ru: "3400 – 8000 об/мин", en: "3400 – 8000 rpm", kk: "3400 – 8000 айн/мин" },
      "Стандарт": { ru: "ISO 3019-2 / CETOP", en: "ISO 3019-2 / CETOP", kk: "ISO 3019-2 / CETOP" }
    },
    features: [
      { ru: "Конструкция с наклонным блоком (40°)", en: "Bent axis design with 40° angle", kk: "Еңіс блокты (40°) конструкция" },
      { ru: "Варианты вала: шлицевой или со шпонкой", en: "Available with keyed or splined shaft", kk: "Білік нұсқалары: ойықты немесе шпонкалы" },
      { ru: "Выбор портов присоединения (A и B)", en: "Multiple port options (A and B types)", kk: "Қосылу порттарын таңдау (A және B)" },
      { ru: "Возможность установки датчика скорости", en: "Optional speed sensor integration", kk: "Жылдамдық датчигін орнату мүмкіндігі" }
    ],
    benefits: [
      { ru: "Высокий КПД во всем диапазоне оборотов", en: "High efficiency across the full speed range", kk: "Барлық айналымдар диапазонында жоғары ПӘК" },
      { ru: "Компактный размер для плотной компоновки", en: "Reduced size envelope for tight installations", kk: "Тығыз орналасуға арналған ықшам өлшем" },
      { ru: "Работа в открытых и закрытых контурах", en: "Suitable for open and closed loop systems", kk: "Ашық және жабық контурларда жұмыс істеу" },
      { ru: "Опциональные клапаны (промывочный, антикавитационный)", en: "Optional flushing and anti-cavitation valves", kk: "Қосымша клапандар (жуу, антикавитациялық)" }
    ],
    applications: [
      { ru: "Строительная техника и вибропогружатели", en: "Construction equipment and vibro hammers", kk: "Құрылыс техникасы және діріл батырмалары" },
      { ru: "Приводы вентиляторов и лесозаготовительные головки", en: "Fan drives and harvester heads", kk: "Желдеткіш жетектері және орман дайындау бастиектері" },
      { ru: "Тяжелые лебедки и горношахтное оборудование", en: "Heavy winches and mining equipment", kk: "Ауыр лебедкалар және тау-кен жабдықтары" },
      { ru: "Муниципальная техника (косилки, подметальные машины)", en: "Municipal equipment (mowers, sweepers)", kk: "Муниципалдық техника (шөп шапқыштар, сыпыру машиналары)" }
    ]
  },
  {
    id: "s-m2",
    productTypeId: "pt-m1",
    brandId: "b2",
    name: { 
      ru: "Полуинтегрированные гидромоторы — серия MSI", 
      en: "Semi-integrated Motors — MSI Series", 
      kk: "Жартылай интеграцияланған гидромоторлар — MSI сериясы" 
    },
    slug: "series-msi-motor",
    descriptionHtml: { 
      ru: "Гидромоторы серии MSI имеют конструкцию с наклонным блоком (40°) и выполнены в полуинтегрированном (картриджном) исполнении. Такая конструкция позволяет значительно уменьшить габариты всего узла, делая его идеальным для установки в планетарные редукторы и другие компактные механизмы. Моторы подходят для работы в открытых и закрытых контурах при давлении до 450 бар.",
      en: "MSI series hydraulic motors feature a bent axis design with a 40° angle and a semi-integrated (cartridge) design. This architecture significantly reduces the overall size of the assembly, making it perfect for integration into planetary gearboxes and other compact systems. Suitable for both open and closed loop systems, these motors handle pressures up to 450 bar peak.",
      kk: "MSI сериялы гидромоторлары еңіс блокты (40°) және жартылай интеграцияланған (картридждік) конструкцияға ие. Мұндай конструкция бүкіл тораптың өлшемдерін айтарлықтай азайтуға мүмкіндік береді, бұл оны планетарлық редукторларға және басқа ықшам механизмдерге орнату үшін тамаша етеді. Моторлар 450 барға дейінгі қысымда ашық және жабық контурларда жұмыс істеуге жарамды."
    },
    images: ["/assets/images/products/leduc/motors/С_фиксированным_рабочим_объемом_202609051350.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "28 – 180 см³/об", en: "28 – 180 cc/rev", kk: "28 – 180 см³/айн" },
      "Рабочее давление": { ru: "400 бар (пик 450)", en: "400 bar (450 peak)", kk: "400 бар (450 пик)" },
      "Макс. частота вращения": { ru: "3400 – 6300 об/мин", en: "3400 – 6300 rpm", kk: "3400 – 6300 айн/мин" },
      "Тип монтажа": { ru: "Полуинтегрированный (Cartridge)", en: "Semi-integrated (Cartridge)", kk: "Жартылай интеграцияланған (Cartridge)" }
    },
    features: [
      { ru: "Компактная картриджная конструкция", en: "Compact cartridge design for space saving", kk: "Орынды үнемдеуге арналған ықшам картридждік конструкция" },
      { ru: "Шлицевой вал в стандартной комплектации", en: "Splined shaft as standard (keyed on request)", kk: "Стандартты жиынтықтағы ойықты білік" },
      { ru: "Взаимозаменяемость портов (версии A и B)", en: "Multiple port options for easy interchangeability", kk: "Порттардың өзара алмасуы (A және B нұсқалары)" },
      { ru: "Высокий КПД при уменьшенном размере", en: "High efficiency in a reduced size envelope", kk: "Кішірейтілген өлшемдегі жоғары ПӘК" }
    ],
    benefits: [
      { ru: "Идеальная интеграция в планетарные передачи", en: "Ideal integration into planetary gear systems", kk: "Планетарлық берілістерге тамаша интеграция" },
      { ru: "Снижение общего веса и объема оборудования", en: "Reduction in total equipment weight and volume", kk: "Жабдықтың жалпы салмағы мен көлемін азайту" },
      { ru: "Надежная работа в тяжелых мобильных приложениях", en: "Reliable performance in demanding mobile applications", kk: "Ауыр мобильді қосымшалардағы сенімді жұмыс" },
      { ru: "Возможность установки датчика скорости и клапанов", en: "Optional speed sensor and flushing valve integration", kk: "Жылдамдық датчигі мен клапандарды орнату мүмкіндігі" }
    ],
    applications: [
      { ru: "Планетарные редукторы и приводы колес", en: "Planetary gearboxes and wheel drives", kk: "Планетарлық редукторлар және дөңгелек жетектері" },
      { ru: "Строительная техника и лебедки", en: "Construction machinery and heavy winches", kk: "Құрылыс техникасы және лебедкалар" },
      { ru: "Лесозаготовительные агрегаты (харвестеры)", en: "Forestry harvester heads and mulchers", kk: "Орман дайындау агрегаттары (харвестерлер)" },
      { ru: "Горношахтное оборудование", en: "Mining equipment and heavy-duty machinery", kk: "Тау-кен жабдықтары" }
    ]
  },
  {
    id: "s-m3",
    productTypeId: "pt-m1",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые гидромоторы — серия MXP / MXA", 
      en: "Axial Piston Motors — MXP / MXA Series", 
      kk: "Аксьальді-поршеньді гидромоторлар — MXP / MXA сериясы" 
    },
    slug: "series-mxp-mxa-motor",
    descriptionHtml: { 
      ru: "Гидромоторы серии MXP/MXA имеют конструкцию с наклонным блоком (40°) и сочетают в себе высокую производительность с компактными габаритами. Серия MXP соответствует стандарту DIN ISO14, а MXA — стандарту SAE J744. Эти моторы специально разработаны для периодической работы в системах грузовых автомобилей и строительной техники, обеспечивая надежность при давлении до 450 бар.",
      en: "MXP/MXA series hydraulic motors feature a bent axis design with a 40° angle, combining high performance with a reduced size envelope. The MXP series follows DIN ISO14, while the MXA series follows SAE J744. Specifically designed for intermittent duty in truck and construction machinery, these motors deliver reliability at pressures up to 450 bar peak.",
      kk: "MXP/MXA сериялы гидромоторлары еңіс блокты (40°) конструкцияға ие және жоғары өнімділікті ықшам габариттермен біріктіреді. MXP сериясы DIN ISO14 стандартына, ал MXA — SAE J744 стандартына сәйкес келеді. Бұл моторлар 450 барға дейінгі қысымда сенімділікті қамтамасыз ете отырып, жүк автомобильдері мен құрылыс техникасының жүйелерінде мерзімді жұмыс істеу үшін арнайы әзірленген."
    },
    images: ["/assets/images/products/leduc/motors/MXP_MXA_202609051510.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем (MXP)": { ru: "25 – 126 см³/об", en: "25 – 126 cc/rev", kk: "25 – 126 см³/айн" },
      "Рабочий объем (MXA)": { ru: "25 – 63 см³/об", en: "25 – 63 cc/rev", kk: "25 – 63 см³/айн" },
      "Рабочее давление": { ru: "400 бар (пик 450)", en: "400 bar (450 peak)", kk: "400 бар (450 пик)" },
      "Макс. частота вращения": { ru: "до 6900 об/мин", en: "up to 6900 rpm", kk: "6900 айн/мин дейін" }
    },
    features: [
      { ru: "Компактная конструкция с наклонным блоком (40°)", en: "Compact bent axis design (40° angle)", kk: "Еңіс блогы бар (40°) ықшам конструкция" },
      { ru: "Соответствие стандартам DIN ISO14 (MXP) и SAE (MXA)", en: "Compliance with DIN ISO14 (MXP) and SAE (MXA) standards", kk: "DIN ISO14 (MXP) және SAE (MXA) стандарттарына сәйкестік" },
      { ru: "Двунаправленное вращение (CW или CCW)", en: "Can rotate in either direction (CW or CCW)", kk: "Екі бағытты айналу (CW немесе CCW)" },
      { ru: "Возможность монтажа в любом положении", en: "Can be used in all mounting positions", kk: "Кез келген позицияда монтаждау мүмкіндігі" }
    ],
    benefits: [
      { ru: "Оптимальное решение для периодических рабочих циклов", en: "Optimal solution for intermittent duty cycles", kk: "Мерзімді жұмыс циклдері үшін оңтайлы шешім" },
      { ru: "Высокая плотность мощности при малых габаритах", en: "High power density in a small size envelope", kk: "Шағын габариттердегі жоғары қуат тығыздығы" },
      { ru: "Универсальность для мобильных приложений", en: "Versatility for mobile and truck applications", kk: "Мобильді қосымшалар үшін әмбебаптық" },
      { ru: "Надежность в тяжелых условиях эксплуатации", en: "Reliability in demanding operating environments", kk: "Ауыр пайдалану жағдайларындағы сенімділік" }
    ],
    applications: [
      { ru: "Приводы насосов вакуумных и илососных машин", en: "Vacuum pump drives for sewer-cleaning trucks", kk: "Вакуумдық және илосостық машиналардың сорғы жетектері" },
      { ru: "Водяные насосы высокого давления", en: "High pressure water pump drives", kk: "Жоғары қысымды су сорғылары" },
      { ru: "Сельскохозяйственная техника и мобильная гидравлика", en: "Agricultural machinery and mobile hydraulics", kk: "Ауыл шаруашылығы техникасы және мобильді гидравлика" },
      { ru: "Строительное оборудование (периодическая работа)", en: "Construction machinery (intermittent service)", kk: "Құрылыс жабдықтары (мерзімді жұмыс)" }
    ]
  },
  {
    id: "s-m4",
    productTypeId: "pt-m1",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые гидромоторы — серия MA (SAE)", 
      en: "Axial Piston Motors — MA Series (SAE version)", 
      kk: "Аксьальді-поршеньді гидромоторлар — MA сериясы (SAE)" 
    },
    slug: "series-ma-motor",
    descriptionHtml: { 
      ru: "Гидромоторы серии MA имеют конструкцию с наклонным блоком (40°) и полностью соответствуют стандарту SAE. Они сочетают высокую производительность с компактными размерами и предназначены для широкого спектра стационарных и мобильных приложений. Моторы могут работать как в открытых, так и в закрытых гидравлических контурах при постоянном давлении до 400 бар и пиковом до 450 бар.",
      en: "MA series hydraulic motors feature a bent axis design with a 40° angle and fully comply with SAE standards. Combining high performance with a reduced size envelope, they are designed for a variety of fixed and mobile applications. These motors are suitable for both open and closed loop systems, operating at pressures up to 400 bar continuous and 450 bar peak.",
      kk: "MA сериялы гидромоторлары еңіс блокты (40°) конструкцияға ие және SAE стандартына толық сәйкес келеді. Олар жоғары өнімділікті ықшам өлшемдермен біріктіреді және стационарлық және мобильді қосымшалардың кең ауқымына арналған. Моторлар 400 барға дейінгі тұрақты қысымда және 450 барға дейінгі пиктік қысымда ашық және жабық гидравликалық контурларда жұмыс істей алады."
    },
    images: ["/assets/images/products/leduc/motors/Моторы_Hydro_Leduc_202609051327.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "10 – 180 см³/об (до 250)", en: "10 – 180 cc/rev (up to 250)", kk: "10 – 180 см³/айн (250-ге дейін)" },
      "Рабочее давление": { ru: "400 бар (пик 450)", en: "400 bar (450 peak)", kk: "400 бар (450 пик)" },
      "Макс. частота вращения": { ru: "3400 – 8000 об/мин", en: "3400 – 8000 rpm", kk: "3400 – 8000 айн/мин" },
      "Стандарт фланца": { ru: "SAE (J744)", en: "SAE (J744)", kk: "SAE (J744)" }
    },
    features: [
      { ru: "Конструкция с наклонным блоком под углом 40°", en: "Bent axis design with 40° angle", kk: "40° бұрыштағы еңіс блокты конструкция" },
      { ru: "Варианты приводного вала: шлицевой или со шпонкой", en: "Drive shaft options: splined or keyed", kk: "Жетек білігінің нұсқалары: ойықты немесе шпонкалы" },
      { ru: "Наличие портов присоединения типов A и B", en: "A and B port options available", kk: "A және B типті қосылу порттарының болуы" },
      { ru: "Высокий КПД при компактных габаритах", en: "High efficiency in a reduced size envelope", kk: "Ықшам габариттердегі жоғары ПӘК" }
    ],
    benefits: [
      { ru: "Полная совместимость с американским стандартом SAE", en: "Full compatibility with SAE US standard", kk: "Америкалық SAE стандартымен толық үйлесімділік" },
      { ru: "Возможность работы на экстремальных оборотах", en: "Capable of operating at extreme speeds", kk: "Экстремалды айналымдарда жұмыс істеу мүмкіндігі" },
      { ru: "Опциональный датчик скорости и промывочный клапан", en: "Optional speed sensor and flushing valve", kk: "Қосымша жылдамдық датчигі және жуу клапаны" },
      { ru: "Универсальность для открытых и закрытых контуров", en: "Versatility for open and closed loop circuits", kk: "Ашық және жабық контурлар үшін әмбебаптық" }
    ],
    applications: [
      { ru: "Строительная и дорожная техника (трансмиссии)", en: "Construction and road machinery transmissions", kk: "Құрылыс және жол техникасы (трансмиссиялар)" },
      { ru: "Приводы вентиляторов и охлаждающих систем", en: "Fan drives and cooling system units", kk: "Желдеткіштер мен салқындату жүйелерінің жетектері" },
      { ru: "Сельскохозяйственные и лесные машины (мульчеры)", en: "Agricultural and forestry machines (mulchers)", kk: "Ауыл шаруашылығы және орман машиналары (мульчерлер)" },
      { ru: "Тяжелые лебедки и оборудование горного сектора", en: "Heavy-duty winches and mining equipment", kk: "Ауыр лебедкалар және тау-кен секторының жабдықтары" }
    ]
  },
  {
    id: "s-m5",
    productTypeId: "pt-m2",
    brandId: "b2",
    name: { 
      ru: "Двухскоростные гидромоторы — серии MSI2C45 и MSIC249", 
      en: "2-Displacement Motors — MSI2C45 & MSIC249 Series", 
      kk: "Екі жылдамдықты гидромоторлар — MSI2C45 және MSIC249 сериялары" 
    },
    slug: "msi2c45-msic249-motors",
    descriptionHtml: { 
      ru: "Двухскоростные гидромоторы серий MSI2C45 и MSIC249 (полуинтегрированного типа) специально разработаны для привода колес транспортных средств. Благодаря 'картриджному' исполнению фланец смещен назад, что позволяет легко устанавливать мотор в колесную ступицу или планетарный редуктор. Изменение рабочего объема (двухпозиционное управление) позволяет менять скорость вращения вала при постоянном входном потоке, что обеспечивает две передачи скорости для спецтехники.",
      en: "The MSI2C45 and MSIC249 semi-integrated (cartridge) 2-displacement motors are specifically designed for vehicle wheel drives. The 'cartridge' design with a set-back flange allows for easy fitting into gearboxes or wheel hubs. Switching between two displacements enables changes in shaft speed at a constant inlet flow, effectively providing two gear speeds for mobile equipment.",
      kk: "MSI2C45 және MSIC249 сериялы екі жылдамдықты гидромоторлары (жартылай интеграцияланған типті) көлік құралдарының дөңгелектерін жетекке алу үшін арнайы әзірленген. 'Картридждік' орындалуының арқасында фланец артқа жылжытылған, бұл моторды дөңгелек торабына немесе планетарлық редукторға оңай орнатуға мүмкіндік береді. Жұмыс көлемін өзгерту (екі позициялы басқару) тұрақты кіріс ағыны кезінде біліктің айналу жылдамдығын өзгертуге мүмкіндік береді, бұл арнайы техника үшін екі жылдамдық берілісін қамтамасыз етеді."
    },
    images: ["/assets/images/products/leduc/motors/Двухпозиционные_двигатели_MSI2C45_и_MSIC249_202609051521.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Макс. рабочий объем": { ru: "45 – 49 см³/об", en: "45 – 49 cc/rev", kk: "45 – 49 см³/айн" },
      "Давление управления": { ru: "17 – 70 бар (линия X)", en: "17 – 70 bar (X line)", kk: "17 – 70 бар (X желісі)" },
      "Температура": { ru: "-25 до +115 °C", en: "-25 to +115 °C", kk: "-25-тен +115 °C-қа дейін" },
      "Тип": { ru: "Двухскоростной, картриджный", en: "2-speed, cartridge motor", kk: "Екі жылдамдықты, картридждік" }
    },
    features: [
      { ru: "Двухпозиционное изменение рабочего объема (2 speed)", en: "2-displacement control for dual speed range", kk: "Жұмыс көлемін екі позициялы өзгерту (2 жылдамдық)" },
      { ru: "Полуинтегрированное исполнение (картридж)", en: "Semi-integrated cartridge design for wheel hubs", kk: "Жартылай интеграцияланған орындалу (картридж)" },
      { ru: "Автоматический возврат на макс. объем", en: "Naturally at maximum displacement position", kk: "Максималды көлемге автоматты түрде оралу" },
      { ru: "Двунаправленное вращение", en: "Bidirectional rotation capability", kk: "Екі бағытты айналу" }
    ],
    benefits: [
      { ru: "Идеально для установки в ступицы и редукторы", en: "Perfect for direct fitting into gearboxes and hubs", kk: "Тораптар мен редукторларға орнату үшін тамаша" },
      { ru: "Высокая эффективность и надежность", en: "High efficiency and robust mechanical design", kk: "Жоғары тиімділік пен сенімділік" },
      { ru: "Заводская регулировка мин/макс объема под заказ", en: "Factory adjusted min/max displacement on request", kk: "Мин/макс көлемді тапсырыс бойынша зауыттық реттеу" },
      { ru: "Работа в открытых и закрытых контурах", en: "Suitable for both open and closed loop systems", kk: "Ашық және жабық контурларда жұмыс істеу" }
    ],
    applications: [
      { ru: "Строительная техника и мини-погрузчики (skid-steer)", en: "Construction equipment and skid-steer loaders", kk: "Құрылыс техникасы және мини-тиегіштер (skid-steer)" },
      { ru: "Сельскохозяйственные машины и комбайны", en: "Agricultural machinery and harvesters", kk: "Ауыл шаруашылығы машиналары мен комбайндар" },
      { ru: "Приводы колес мобильной спецтехники", en: "Wheel drives for mobile special vehicles", kk: "Мобильді арнайы техниканың дөңгелек жетектері" },
      { ru: "Приводы вентиляторов охлаждения", en: "Cooling fan drives with speed control", kk: "Салқындату желдеткіштерінің жетектері" }
    ]
  },
  {
    id: "s-m6",
    productTypeId: "pt-m2",
    brandId: "b2",
    name: { 
      ru: "Регулируемые гидромоторы — серии MV, MVA, MVSI", 
      en: "Variable Displacement Motors — MV, MVA, MVSI Series", 
      kk: "Реттелетін гидромоторлар — MV, MVA, MVSI сериялары" 
    },
    slug: "mv-mva-mvsi-motors",
    descriptionHtml: { 
      ru: "Гидромоторы Hydro Leduc с регулируемым рабочим объемом оснащены 7 или 9 поршнями, что гарантирует высокий пусковой момент и плавность вращения даже на низких скоростях (коэффициент регулирования 5:1). Серия MV предназначена для тяжелых условий эксплуатации в строительной и сельскохозяйственной технике. Доступны версии в стандартах ISO (MV), SAE (MVA) и полуинтегрированном исполнении 'plug-in' (MVSI).",
      en: "Hydro Leduc variable displacement motors feature a 7 or 9-piston design, ensuring high starting torque and smooth rotation even at low speeds (5:1 displacement ratio). Designed for medium and heavy-duty applications in construction and agriculture, they are available in ISO (MV), SAE (MVA), and semi-integrated 'plug-in' (MVSI) configurations.",
      kk: "Hydro Leduc реттелетін жұмыс көлемі бар гидромоторлары 7 немесе 9 поршеньмен жабдықталған, бұл жоғары іске қосу моментін және тіпті төмен жылдамдықтарда да айналудың бірқалыптылығын қамтамасыз етеді (реттеу коэффициенті 5:1). MV сериясы құрылыс және ауыл шаруашылығы техникасындағы ауыр пайдалану жағдайларына арналған. ISO (MV), SAE (MVA) стандарттарындағы және 'plug-in' (MVSI) жартылай интеграцияланған орындалуындағы нұсқалары қолжетімді."
    },
    images: ["/assets/images/products/leduc/motors/С_регулируемым_рабочим_объемом_202609051350.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "28, 85, 115 см³/об", en: "28, 85, 115 cc/rev", kk: "28, 85, 115 см³/айн" },
      "Давление": { ru: "400 бар (пик 450)", en: "400 bar (450 peak)", kk: "400 бар (450 пик)" },
      "Коэф. регулирования": { ru: "5:1", en: "5:1", kk: "5:1" },
      "Стандарты": { ru: "ISO, SAE, Plug-in", en: "ISO, SAE, Plug-in", kk: "ISO, SAE, Plug-in" }
    },
    features: [
      { ru: "7 или 9 поршней для идеальной плавности хода", en: "7 or 9-piston design for smooth rotation", kk: "Айналудың мінсіз біркелкілігі үшін 7 немесе 9 поршень" },
      { ru: "Три типа управления: HPA, H2N и электрическое E2N", en: "Three control options: HPA, H2N and electric E2N", kk: "Басқарудың үш түрі: HPA, H2N және электрлік E2N" },
      { ru: "Большой диапазон настройки мин/макс объема", en: "Large setting range of displacements", kk: "Мин/макс көлемді реттеудің үлкен диапазоны" },
      { ru: "Высокое отношение мощности к весу", en: "High weight-power ratio", kk: "Салмақ пен қуаттың жоғары қатынасы" }
    ],
    benefits: [
      { ru: "Высокий пусковой момент под нагрузкой", en: "High starting torque under load", kk: "Жүктеме кезіндегі жоғары іске қосу моменті" },
      { ru: "Работа в открытых и закрытых гидравлических контурах", en: "Suitable for closed or open loop systems", kk: "Ашық және жабық гидравликалық контурларда жұмыс істеу" },
      { ru: "Компактный размер для ограниченного пространства", en: "Reduced size envelope for tight spaces", kk: "Шектеулі кеңістікке арналған ықшам өлшем" },
      { ru: "Возможность установки датчика скорости и клапанов", en: "Optional speed sensor and flushing valve", kk: "Жылдамдық датчигі мен клапандарды орнату мүмкіндігі" }
    ],
    applications: [
      { ru: "Приводы колес и гусениц (wheel & track drive)", en: "Wheel drive and track drive systems", kk: "Дөңгелек және шынжыр табан жетектері" },
      { ru: "Тяжелые лебедки и планетарные редукторы", en: "Heavy winches and planetary gearboxes", kk: "Ауыр лебедкалар және планетарлық редукторлар" },
      { ru: "Лесные измельчители и мульчеры", en: "Forestry crushers and mulchers", kk: "Орман измельчительдері мен мульчерлер" },
      { ru: "Горнодобывающее и сельскохозяйственное оборудование", en: "Mining and agricultural heavy machinery", kk: "Тау-кен және ауыл шаруашылығы ауыр техникасы" }
    ]
  },
  {
    id: "s-m7",
    productTypeId: "pt-m3",
    brandId: "b2",
    name: { 
      ru: "Бесдренажные гидромоторы (без линии слива)", 
      en: "Drainless Hydraulic Motors", 
      kk: "Дренажсыз гидромоторлар (ағызу желісінсіз)" 
    },
    slug: "drainless-motor",
    descriptionHtml: { 
      ru: "Инновационная серия гидромоторов с наклонным блоком, способных работать без внешней дренажной линии. Конструкция задней крышки направляет поток утечек в линию низкого давления, поддерживая давление в корпусе на минимальном уровне контура. Это упрощает гидравлическую схему, снижает стоимость установки и делает мотор идеальным для навесного оборудования.",
      en: "This innovative bent axis motor is designed to operate without a separate drain connection, simplifying hydraulic circuits and reducing installation costs. The internal design directs the drain flow to the low-pressure line, ensuring that housing pressure remains at the circuit's minimum. Ideal for compact installations and excavator attachments.",
      kk: "Сыртқы дренаж желісінсіз жұмыс істей алатын еңіс блогы бар гидромоторлардың инновациялық сериясы. Артқы қақпақтың конструкциясы ағып кету ағынын төмен қысым желісіне бағыттайды, корпустағы қысымды контурдың минималды деңгейінде ұстап тұрады. Бұл гидравликалық схеманы жеңілдетеді, орнату құнын төмендетеді және моторды аспалы жабдық үшін тамаша етеді."
    },
    images: ["/assets/images/products/leduc/motors/Бессливной_двигатель_202609051521.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Линия слива": { ru: "Не требуется", en: "Not required", kk: "Талап етілмейді" },
      "Давление в обратке": { ru: "до 25 бар", en: "up to 25 bar", kk: "25 барға дейін" },
      "Тип": { ru: "С наклонным блоком", en: "Bent axis design", kk: "Еңіс блогымен" },
      "Подключение": { ru: "Только вход и выход", en: "Inlet and outlet only", kk: "Тек кіру және шығу" }
    },
    features: [
      { ru: "Отсутствие необходимости в дренажной линии", en: "No separate drain line needed", kk: "Дренаж желісінің қажеттілігінің болмауы" },
      { ru: "Встроенный пружинный аккумулятор для реверсивных систем", en: "Spring-loaded accumulator for bi-directional use", kk: "Реверсивті жүйелер үшін кіріктірілген серіппелі аккумулятор" },
      { ru: "Автоматическое выравнивание давления в корпусе", en: "Automatic housing pressure equalization", kk: "Корпустағы қысымды автоматты түрде теңестіру" },
      { ru: "Требуется только две линии: вход и выход", en: "Only inlet and outlet lines are required", kk: "Тек екі желі қажет: кіру және шығу" }
    ],
    benefits: [
      { ru: "Упрощение и удешевление гидравлической установки", en: "Simpler and more cost-effective installation", kk: "Гидравликалық қондырғыны жеңілдету және арзандату" },
      { ru: "Устранение риска повреждения мотора при обрыве слива", en: "Eliminates risk of damage from drain line failure", kk: "Ағызу үзілген кезде мотордың зақымдану қаупін жою" },
      { ru: "Компактность за счет меньшего количества шлангов", en: "Increased compactness with fewer hoses", kk: "Шлангтардың аз болуы есебінен ықшамдылық" },
      { ru: "Идеально для навесного оборудования экскаваторов", en: "Perfect for excavator attachments", kk: "Экскаваторлардың аспалы жабдықтары үшін тамаша" }
    ],
    applications: [
      { ru: "Навесное оборудование экскаваторов", en: "Excavator attachments", kk: "Экскаваторлардың аспалы жабдықтары" },
      { ru: "Сельскохозяйственные машины", en: "Agricultural machinery", kk: "Ауыл шаруашылығы машиналары" },
      { ru: "Строительная техника", en: "Construction equipment", kk: "Құрылыс техникасы" },
      { ru: "Компактные мобильные гидравлические системы", en: "Compact mobile hydraulic systems", kk: "Ықшам мобильді гидравликалық жүйелер" }
    ]
  },
  {
    id: "s-m8",
    productTypeId: "pt-m3",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые гидромоторы — серия MT45", 
      en: "Axial Piston Motors — MT45 Series", 
      kk: "Аксьальді-поршеньді гидромоторлар — MT45 сериясы" 
    },
    slug: "series-mt45-motor",
    descriptionHtml: { 
      ru: "MT45 — это рядный аксиально-поршневой гидромотор, выполненный в полуинтегрированном дизайне, что делает его крайне компактным. Оснащенный коническим валом со шпонкой, он является оптимальным решением для приводов вентиляторов. Мотор может быть дополнительно оснащен встроенными антикавитационными и предохранительными клапанами, что еще больше уменьшает габариты функционального узла.",
      en: "The MT45 is an in-line axial piston motor. Its 'semi-integrated' design makes it very compact, while the conical keyed shaft makes it the optimal choice for fan drive applications. On request, the MT45 can be fitted with integrated anti-cavitation and pressure relief valves, further reducing the size envelope of the hydraulic function.",
      kk: "MT45 — бұл жартылай интеграцияланған дизайнда орындалған қатарлы аксьальді-поршеньді гидромотор, бұл оны өте ықшам етеді. Шпонкасы бар конустық білікпен жабдықталған ол желдеткіш жетектері үшін оңтайлы шешім болып табылады. Мотор қосымша кіріктірілген антикавитациялық және сақтандыру клапандарымен жабдықталуы мүмкін, бұл функционалдық тораптың өлшемдерін одан әрі азайтады."
    },
    images: ["/assets/images/products/leduc/motors/Двигатель_серии_MT45_202609051521.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "45.1 см³/об", en: "45.1 cc/rev", kk: "45.1 см³/айн" },
      "Макс. скорость": { ru: "4000 об/мин", en: "4000 rpm", kk: "4000 айн/мин" },
      "Рабочее давление": { ru: "280 бар (пик 300)", en: "280 bar (300 peak)", kk: "280 бар (300 пик)" },
      "Исполнение": { ru: "Рядный, полуинтегрированный", en: "In-line, semi-integrated", kk: "Қатарлы, жартылай интеграцияланған" }
    },
    features: [
      { ru: "Компактная рядная конструкция (In-line)", en: "Compact in-line piston design", kk: "Ықшам қатарлы конструкция (In-line)" },
      { ru: "Конический вал со шпонкой для вентиляторов", en: "Conical keyed shaft for fan drives", kk: "Желдеткіштерге арналған шпонкасы бар конустық білік" },
      { ru: "Двунаправленное вращение", en: "Dual direction of rotation", kk: "Екі бағытты айналу" },
      { ru: "Полуинтегрированный стандарт ISO", en: "Semi-integrated ISO configuration", kk: "ISO жартылай интеграцияланған стандарты" }
    ],
    benefits: [
      { ru: "Оптимизирован для систем охлаждения", en: "Optimized for cooling system drives", kk: "Салқындату жүйелері үшін оңтайландырылған" },
      { ru: "Встроенные клапаны экономят место", en: "Integrated valves save installation space", kk: "Кіріктірілген клапандар орынды үнемдейді" },
      { ru: "Надежная работа на высоких оборотах", en: "Reliable performance at high speeds", kk: "Жоғары айналымдардағы сенімді жұмыс" },
      { ru: "Снижение стоимости за счет интеграции функций", en: "Cost reduction through function integration", kk: "Функцияларды интеграциялау есебінен құнды төмендету" }
    ],
    applications: [
      { ru: "Приводы вентиляторов (Fan drive)", en: "Fan drive systems", kk: "Желдеткіш жетектері (Fan drive)" },
      { ru: "Строительная техника и оборудование", en: "Construction machinery and equipment", kk: "Құрылыс техникасы мен жабдықтары" },
      { ru: "Сельскохозяйственные машины", en: "Agricultural machinery", kk: "Ауыл шаруашылығы машиналары" },
      { ru: "Системы охлаждения мобильной гидравлики", en: "Mobile hydraulic cooling units", kk: "Мобильді гидравликаның салқындату жүйелері" }
    ]
  },
  // PUMPS SERIES
  {
    id: "s-p1",
    productTypeId: "pt-p1",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые насосы — серия PA / PAC", 
      en: "Axial Piston Pumps — PA / PAC Series", 
      kk: "Аксьальді-поршеньді сорғылар — PA / PAC сериясы" 
    },
    slug: "series-pa-pac-pumps",
    descriptionHtml: { 
      ru: "Благодаря уникальной конструкции, насосы серии PA-PAC представляют собой мощное и долговечное решение для систем грузовых автомобилей, работающих под высоким давлением. Автоматический выбор направления вращения, экстремальное рабочее давление (до 500 бар) и устойчивость к различным типам гидравлических жидкостей делают их незаменимыми в самых тяжелых условиях эксплуатации.",
      en: "With their unique design, PA-PAC pumps offer a robust and durable solution to the high pressure needs of truck applications. Combining automatic dual direction of rotation, high operating pressure (up to 500 bar peak), and relative insensitivity to lower performance fluids, PA-PAC pumps are the solution for the most demanding environments.",
      kk: "Бірегей конструкциясының арқасында PA-PAC сериялы сорғылары жоғары қысымда жұмыс істейтін жүк автомобильдерінің жүйелері үшін қуатты және ұзақ мерзімді шешім болып табылады. Айналу бағытын автоматты түрде таңдау, экстремалды жұмыс қысымы (500 барға дейін) және гидравликалық сұйықтықтардың әртүрлі түрлеріне төзімділік оларды ең ауыр пайдалану жағдайларында таптырмас етеді."
    },
    images: ["/assets/images/products/leduc/pumps/Насосы_серии_PA_PAC_202609051540.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем (Single)": { ru: "25 – 114 см³/об", en: "25 – 114 cc/rev", kk: "25 – 114 см³/айн" },
      "Рабочий объем (Twin)": { ru: "2x25 – 2x75 см³/об", en: "2x25 – 2x75 cc/rev", kk: "2x25 – 2x75 см³/айн" },
      "Рабочее давление": { ru: "400 бар (пик 500)", en: "400 bar (500 peak)", kk: "400 бар (500 пик)" },
      "Направление вращения": { ru: "Автоматический реверс", en: "Automatic dual direction", kk: "Автоматты реверс" }
    },
    features: [
      { ru: "Автоматическое изменение направления вращения", en: "Automatic dual direction of rotation", kk: "Айналу бағытын автоматты түрде өзгерту" },
      { ru: "Наличие двухпоточных версий и смешанных объемов (75-40)", en: "Twin-flow versions and mixed displacements available", kk: "Екі ағынды нұсқалардың және аралас көлемдердің (75-40) болуы" },
      { ru: "Фланец согласно стандарту DIN ISO14 (DIN 5462)", en: "Flange according to DIN ISO14 (DIN 5462)", kk: "DIN ISO14 (DIN 5462) стандартына сәйкес фланец" },
      { ru: "Устойчивость к жидкостям с низкими характеристиками", en: "Insensitivity to lower performance fluids", kk: "Төмен сипаттамалары бар сұйықтықтарға төзімділік" }
    ],
    benefits: [
      { ru: "Экстремально высокое давление для КМУ и спецтехники", en: "Extremely high pressure for truck cranes and special equipment", kk: "КМУ және арнайы техникаға арналған экстремалды жоғары қысым" },
      { ru: "Простая и высоконадежная поршневая конструкция", en: "Simple and highly reliable piston design", kk: "Қарапайым және жоғары сенімді поршеньді конструкция" },
      { ru: "Долгий срок службы в агрессивных средах", en: "Long service life in aggressive environments", kk: "Агрессивті ортада ұзақ қызмет ету мерзімі" },
      { ru: "Универсальность установки на КПП любого типа", en: "Versatility of installation on any type of gearbox", kk: "Кез келген типтегі беріліс қорабына орнатудың әмбебаптығы" }
    ],
    applications: [
      { ru: "КМУ, лесные краны и мультилифты", en: "Truck cranes, forestry cranes and hook lifts", kk: "КМУ, орман крандары және мультилифтілер" },
      { ru: "Снегоуборочная техника и распределители", en: "Snow removal equipment and spreaders", kk: "Қар тазалайтын техника және таратқыштар" },
      { ru: "Пожарные машины и военная спецтехника", en: "Fire trucks and military vehicles", kk: "Өрт сөндіру машиналары және әскери арнайы техника" },
      { ru: "Скип-лоадеры и цилиндры стабилизации", en: "Skip loaders and stabilization cylinders", kk: "Скип-лоадерлер және тұрақтандыру цилиндрлері" }
    ]
  },
  {
    id: "s-p2",
    productTypeId: "pt-p1",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые насосы — серия XAi (версия SAE)", 
      en: "Axial Piston Pumps — XAi Series (SAE version)", 
      kk: "Аксьальді-поршеньді сорғылар — XAi сериясы (SAE нұсқасы)" 
    },
    slug: "series-xai-pump",
    descriptionHtml: { 
      ru: "Насосы серии XAi с постоянным рабочим объемом имеют ту же конструкцию, что и серия XPi, но оснащены фланцем и валом стандарта SAE. Серия включает модели с рабочим объемом от 12 до 63 см³/об. Компактность и автоматическая настройка направления вращения делают эти насосы идеальным выбором для установки в условиях ограниченного пространства на валах отбора мощности (PTO).",
      en: "The XAi fixed displacement pumps feature the same robust design as the XPi series, but with an SAE flange and shaft. Available in displacements from 12 to 63 cc/rev, their extreme compactness allows installation in environments where space is very limited. Automatic setting of the pump's direction of rotation simplifies installation and startup.",
      kk: "Тұрақты жұмыс көлемі бар XAi сериялы сорғылары XPi сериясымен бірдей конструкцияға ие, бірақ SAE стандартындағы фланецпен және білікпен жабдықталған. Серия 12-ден 63 см³/айн дейінгі жұмыс көлемі бар модельдерді қамтиды. Ықшамдылығы мен айналу бағытын автоматты түрде реттеу бұл сорғыларды қуатты алу біліктеріндегі (PTO) шектеулі кеңістік жағдайларында орнату үшін тамаша таңдау жасайды."
    },
    images: ["/assets/images/products/leduc/pumps/Насос_серии_XAi_202609051540.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "12 – 63 см³/об", en: "12 – 63 cc/rev", kk: "12 – 63 см³/айн" },
      "Рабочее давление": { ru: "380 бар (пик 420)", en: "380 bar (420 peak)", kk: "380 бар (420 пик)" },
      "Макс. частота вращения": { ru: "2300 – 2950 об/мин", en: "2300 – 2950 rpm", kk: "2300 – 2950 айн/мин" },
      "Стандарт фланца": { ru: "SAE B (2 или 4 болта)", en: "SAE B (2 or 4 bolts)", kk: "SAE B (2 немесе 4 болт)" }
    },
    features: [
      { ru: "Конструкция с 7 поршнями для надежной работы", en: "7 pistons design for reliable performance", kk: "Сенімді жұмыс істеуге арналған 7 поршеньді конструкция" },
      { ru: "Автоматическая настройка направления вращения (CW/CCW)", en: "Automatic setting of pump direction of rotation", kk: "Айналу бағытын автоматты түрде реттеу (CW/CCW)" },
      { ru: "Экстремальная компактность для установки на PTO", en: "Extreme compactness for easy PTO installation", kk: "PTO-ға орнатуға арналған экстремалды ықшамдылық" },
      { ru: "Возможность установки байпасного клапана", en: "Suitable for engine PTO with by-pass valve", kk: "Байпас клапанын орнату мүмкіндігі" }
    ],
    benefits: [
      { ru: "Упрощенный монтаж и быстрый запуск системы", en: "Easier installation and rapid system start-up", kk: "Оңайлатылған монтаждау және жүйені жылдам іске қосу" },
      { ru: "Высокое рабочее давление в компактном корпусе", en: "High operating pressure in a very compact size", kk: "Ықшам корпустағы жоғары жұмыс қысымы" },
      { ru: "Универсальность для американского стандарта SAE", en: "Versatility for the US SAE standard", kk: "Америкалық SAE стандарты үшін әмбебаптық" },
      { ru: "Надежность, проверенная технологией серии XPi", en: "Reliability proven by XPi series technology", kk: "XPi сериясының технологиясымен дәлелденген сенімділік" }
    ],
    applications: [
      { ru: "КМУ, лесные краны и цилиндры стабилизации", en: "Truck cranes, forestry cranes and stabilization cylinders", kk: "КМУ, орман крандары және тұрақтандыру цилиндрлері" },
      { ru: "Снегоуборочное оборудование и тали", en: "Snow and ice equipment, hoists", kk: "Қар тазалайтын жабдықтар мен тальдар" },
      { ru: "Пожарные машины и муниципальная техника", en: "Fire trucks and municipal vehicles", kk: "Өрт сөндіру машиналары және муниципалдық техника" },
      { ru: "Военная спецтехника и мультилифты", en: "Military vehicles and hook lifts", kk: "Әскери арнайы техника және мультилифтілер" }
    ]
  },
  {
    id: "s-p3",
    productTypeId: "pt-p1",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые насосы — серия XPi", 
      en: "Axial Piston Pumps — XPi Series", 
      kk: "Аксьальді-поршеньді сорғылар — XPi сериясы" 
    },
    slug: "series-xpi-pump",
    descriptionHtml: { 
      ru: "Насосы серии XPi с наклонным блоком специально разработаны для установки на грузовые автомобили. Их компактная конструкция позволяет осуществлять прямой монтаж на вал отбора мощности (PTO). Все модели имеют 7-поршневую конструкцию для обеспечения оптимальной равномерности потока и выдерживают постоянное рабочее давление до 380 бар (пиковое до 420 бар). Эти двунаправленные насосы не требуют вмешательства пользователя для смены направления вращения (достаточно просто переставить впускной фитинг).",
      en: "Bent axis XPi pumps are specially designed to meet the needs of truck equipment. Their compact design allows direct flange-mounting on the PTO. All models feature a 7-piston design to ensure optimal flow regularity and can withstand continuous working pressures up to 380 bar and 420 bar peak. These bidirectional pumps require no user intervention to change the direction of rotation (simple switching of the inlet fitting).",
      kk: "Еңіс блогы бар XPi сериялы сорғылары жүк автомобильдеріне орнату үшін арнайы әзірленген. Олардың ықшам конструкциясы қуатты алу білігіне (PTO) тікелей монтаждауға мүмкіндік береді. Барлық модельдер ағынның оңтайлы біркелкілігін қамтамасыз ету үшін 7 поршеньді конструкцияға ие және 380 барға дейінгі тұрақты жұмыс қысымына (пиктік 420 барға дейін) төзе алады. Бұл екі бағытты сорғылар айналу бағытын өзгерту үшін пайдаланушының араласуын талап етпейді (кіріс фитингін ауыстыру жеткілікті)."
    },
    images: ["/assets/images/products/leduc/pumps/Насос_серии_Xpi_202609051540.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "12 – 130 см³/об", en: "12 – 130 cc/rev", kk: "12 – 130 см³/айн" },
      "Рабочее давление": { ru: "380 бар (пик 420)", en: "380 bar (420 peak)", kk: "380 бар (420 пик)" },
      "Макс. частота вращения": { ru: "1750 – 3150 об/мин", en: "1750 – 3150 rpm", kk: "1750 – 3150 айн/мин" },
      "Направление вращения": { ru: "Двунаправленный (авто)", en: "Bidirectional (automatic)", kk: "Екі бағытты (авто)" }
    },
    features: [
      { ru: "Конструкция с наклонным блоком (Bent axis)", en: "Bent axis design for high efficiency", kk: "Жоғары тиімділікке арналған еңіс блогы бар конструкция (Bent axis)" },
      { ru: "7 поршней для идеальной равномерности потока", en: "7 pistons to ensure optimal flow regularity", kk: "Ағынның мінсіз біркелкілігі үшін 7 поршень" },
      { ru: "Фланец стандарта DIN ISO14 (DIN 5462)", en: "Flange according to DIN ISO14 (DIN 5462)", kk: "DIN ISO14 (DIN 5462) стандартындағы фланец" },
      { ru: "Возможность использования байпасного клапана", en: "Suitable for engine PTO with by-pass valve", kk: "Байпас клапанын пайдалану мүмкіндігі" }
    ],
    benefits: [
      { ru: "Самый широкий ассортимент на рынке (12–130 см³)", en: "Most extensive range on the market (12–130 cc/rev)", kk: "Нарықтағы ең кең ассортимент (12–130 см³)" },
      { ru: "Смена вращения перестановкой впускного фитинга", en: "Change rotation by simply switching the inlet fitting", kk: "Кіріс фитингін ауыстыру арқылы айналуды өзгерту" },
      { ru: "Экстремальная компактность для тесных PTO", en: "Compactness for very limited space environments", kk: "Тар PTO үшін экстремалды ықшамдылық" },
      { ru: "Простой запуск и обслуживание", en: "Easier installation and start-up", kk: "Оңай іске қосу және техникалық қызмет көрсету" }
    ],
    applications: [
      { ru: "Грузовые краны и лесные манипуляторы", en: "Truck cranes and forestry cranes", kk: "Жүк крандары және орман манипуляторлары" },
      { ru: "Мультилифты, скип-лоадеры и спецтехника", en: "Hook lifts, skip loaders and special vehicles", kk: "Мультилифтілер, скип-лоадерлер және арнайы техника" },
      { ru: "Пожарные машины и муниципальный транспорт", en: "Fire trucks and municipal transport", kk: "Өрт сөндіру машиналары және муниципалдық көлік" },
      { ru: "Снегоуборочное оборудование и тали", en: "Snow removal equipment and spreaders", kk: "Қар тазалайтын жабдықтар мен тальдар" }
    ]
  },
  {
    id: "s-p4",
    productTypeId: "pt-p1",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые насосы — серия XR", 
      en: "Axial Piston Pumps — XR Series", 
      kk: "Аксьальді-поршеньді сорғылар — XR сериясы" 
    },
    slug: "series-xr-pump",
    descriptionHtml: { 
      ru: "Серия XR — это новое поколение насосов со сферическими поршнями и переработанным распределительным узлом, обеспечивающим самую высокую скорость самовсасывания на рынке при сохранении высокого КПД. Насосы специально разработаны для тяжелой грузовой техники и оснащены 7 поршнями для идеальной равномерности потока. Выдерживают постоянное давление до 400 бар и пиковое до 450 бар.",
      en: "The new XR series of spherical piston pumps features a redesigned distribution section, allowing it to achieve the highest self-priming speeds on the market with high overall efficiency. Specially designed for demanding truck equipment, all models feature 7 pistons to ensure optimal flow consistency. These fixed displacement pumps handle continuous working pressures up to 400 bar and peak pressures up to 450 bar.",
      kk: "XR сериясы — бұл сфералық поршеньдері және қайта өңделген тарату торабы бар сорғылардың жаңа буыны, ол жоғары ПӘК-ті сақтай отырып, нарықтағы ең жоғары өздігінен сору жылдамдығын қамтамасыз етеді. Сорғылар ауыр жүк техникасы үшін арнайы әзірленген және ағынның мінсіз біркелкілігі үшін 7 поршеньмен жабдықталған. 400 барға дейінгі тұрақты қысымға және 450 барға дейінгі пиктік қысымға төзімді."
    },
    images: ["/assets/images/products/leduc/pumps/Насос_серии_XR_202609051540.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "63 – 130 см³/об", en: "63 – 130 cc/rev", kk: "63 – 130 см³/айн" },
      "Рабочее давление": { ru: "400 бар (пик 450)", en: "400 bar (450 peak)", kk: "400 бар (450 пик)" },
      "Скорость всасывания": { ru: "Самая высокая на рынке", en: "Highest self-priming speed", kk: "Нарықтағы ең жоғары" },
      "Тип поршней": { ru: "Сферические", en: "Spherical pistons", kk: "Сфералық" }
    },
    features: [
      { ru: "Уникальная биметаллическая головка собственной разработки", en: "In-house developed bi-material head", kk: "Меншікті әзірлемедегі бірегей биметалды бастиек" },
      { ru: "Оригинальная синхронизация шайбы и блока цилиндров", en: "Original synchronization between swashplate and block", kk: "Шайба мен цилиндрлер блогының түпнұсқалық синхрондалуы" },
      { ru: "Уплотнения FKM (Viton) в стандартной комплектации", en: "FKM (Viton) seals as standard", kk: "Стандартты жиынтықтағы FKM (Viton) тығыздағыштары" },
      { ru: "Фланец по стандартам DIN ISO14 и ISO 7653", en: "Flange according to DIN ISO14 and ISO 7653", kk: "DIN ISO14 және ISO 7653 стандарттары бойынша фланец" }
    ],
    benefits: [
      { ru: "Лучшие показатели самовсасывания в своем классе", en: "Best-in-class self-priming performance", kk: "Өз класындағы ең жақсы өздігінен сору көрсеткіштері" },
      { ru: "Высокая механическая прочность применяемых материалов", en: "Use of materials with high mechanical strength", kk: "Қолданылатын материалдардың жоғары механикалық беріктігі" },
      { ru: "Компактная конструкция для легкого монтажа на PTO", en: "Compact design for easy installation on PTO", kk: "PTO-ға оңай орнатуға арналған ықшам конструкция" },
      { ru: "Совместимость с задним отбором мощности двигателя", en: "Compatible for use on rear engine take-off", kk: "Қозғалтқыштың артқы қуат алуымен үйлесімділік" }
    ],
    applications: [
      { ru: "Грузовые краны, манипуляторы и мультилифты", en: "Truck cranes, articulated arms and hook lifts", kk: "Жүк крандары, манипуляторлар және мультилифтілер" },
      { ru: "Зимняя техника: солераспределители и снегоочистители", en: "Winter equipment: spreaders and snow plows", kk: "Қысқы техника: тұз таратқыштар және қар тазалағыштар" },
      { ru: "Пожарные машины и муниципальная спецтехника", en: "Fire trucks and municipal special vehicles", kk: "Өрт сөндіру машиналары және муниципалдық арнайы техника" },
      { ru: "Военная техника и системы стабилизации", en: "Military vehicles and stabilization systems", kk: "Әскери техника және тұрақтандыру жүйелері" }
    ]
  },
  {
    id: "s-p5",
    productTypeId: "pt-p1",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые насосы — серия XRe (для e-PTO)", 
      en: "Axial Piston Pumps — XRe Series (for e-PTO)", 
      kk: "Аксьальді-поршеньді сорғылар — XRe сериясы (e-PTO үшін)" 
    },
    slug: "series-xre-pump",
    descriptionHtml: { 
      ru: "Серия XRe — это новое поколение бесшумных и эффективных насосов с постоянным рабочим объемом, специально разработанных для установки на электрические валы отбора мощности (e-PTO). Уникальная 9-поршневая конструкция и инновационная система распределения значительно снижают пульсации потока и давления, а также уровень шума, что критически важно для электрифицированной техники.",
      en: "The new XRe series of fixed displacement spherical piston pumps is quiet and efficient, specifically designed for mounting on an electric power take-off (e-PTO). Its 9-piston design and innovative distribution significantly reduce flow and pressure pulsations, as well as noise levels, making it ideal for electrified vehicles.",
      kk: "XRe сериясы — бұл электрлік қуатты алу біліктеріне (e-PTO) орнату үшін арнайы әзірленген дыбыссыз және тиімді тұрақты жұмыс көлемі бар сорғылардың жаңа буыны. Бірегей 9 поршеньді конструкция және инновациялық тарату жүйесі ағын мен қысымның пульсациясын, сондай-ақ шу деңгейін айтарлықтай төмендетеді, бұл электрлендірілген техника үшін өте маңызды."
    },
    images: ["/assets/images/products/leduc/pumps/Насос_серии_Xre_202609051539.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "25 – 90 см³/об", en: "25 – 90 cc/rev", kk: "25 – 90 см³/айн" },
      "Макс. скорость": { ru: "до 3050 об/мин", en: "up to 3050 rpm", kk: "3050 айн/мин дейін" },
      "Конструкция": { ru: "9 поршней", en: "9-piston design", kk: "9 поршеньді" },
      "Тип всасывания": { ru: "Самовсасывающий", en: "Self-priming", kk: "Өздігінен соратын" }
    },
    features: [
      { ru: "9-поршневая конструкция для минимального уровня шума", en: "9-piston design for minimum noise levels", kk: "Минималды шу деңгейіне арналған 9 поршеньді конструкция" },
      { ru: "Специально для электрических валов отбора мощности (e-PTO)", en: "Specifically designed for electric power take-off (e-PTO)", kk: "Арнайы электрлік қуатты алу біліктері (e-PTO) үшін" },
      { ru: "Инновационная система распределения потока", en: "Innovative distribution for enhanced performance", kk: "Өнімділікті арттыруға арналған инновациялық тарату жүйесі" },
      { ru: "Фланец DIN ISO14 / ISO 7653", en: "Mounting flange according to DIN ISO14 and ISO 7653", kk: "DIN ISO14 / ISO 7653 стандарты бойынша фланец" }
    ],
    benefits: [
      { ru: "Значительное снижение пульсаций давления", en: "Significant reduction in pressure pulsations", kk: "Қысым пульсациясын айтарлықтай төмендету" },
      { ru: "Высокий общий КПД при работе на электротяге", en: "High overall efficiency for electric drives", kk: "Электр жетегінде жұмыс істегенде жоғары жалпы ПӘК" },
      { ru: "Использование материалов высокой механической прочности", en: "Use of materials with high mechanical strength", kk: "Жоғары механикалық беріктігі бар материалдарды қолдану" },
      { ru: "Доступны версии с вращением CW и CCW", en: "Available in CW and CCW versions", kk: "CW және CCW айналу нұсқалары қолжетімді" }
    ],
    applications: [
      { ru: "Электрифицированные грузовики и спецтехника", en: "Electrified trucks and special vehicles", kk: "Электрлендірілген жүк автомобильдері және арнайы техника" },
      { ru: "Коммунальная техника с низким уровнем шума", en: "Low-noise municipal and refuse trucks", kk: "Төмен шу деңгейі бар коммуналдық техника" },
      { ru: "Зимнее оборудование на электроприводе", en: "Electric drive winter equipment", kk: "Электр жетегіндегі қысқы жабдықтар" },
      { ru: "Пожарные и военные машины с e-PTO", en: "Fire and military vehicles with e-PTO", kk: "e-PTO бар өрт сөндіру және әскери машиналар" }
    ]
  },
  {
    id: "s-p6",
    productTypeId: "pt-p1",
    brandId: "b2",
    name: { 
      ru: "Двухпоточные насосы — серия XRT", 
      en: "Dual-flow Pumps — XRT Series", 
      kk: "Екі ағынды сорғылар — XRT сериясы" 
    },
    slug: "series-xrt-pump",
    descriptionHtml: { 
      ru: "Насос серии XRT6868 с постоянным рабочим объемом — это идеальное решение для систем, требующих двух независимых гидравлических контуров. Он специально разработан для установки на отключаемые валы отбора мощности или задний отбор мощности двигателя (с использованием байпасного клапана BPT). Уникальная конструкция '2 x 5 поршней' обеспечивает высокую производительность в компактном корпусе.",
      en: "The XRT6868 fixed displacement pump is the ideal solution for applications requiring two independent hydraulic circuits. It is especially suited for mounting on a disengageable power take-off or rear engine take-off (with BPT bypass). Its unique 2 x 5-piston design delivers high overall efficiency and reliable performance in a compact footprint.",
      kk: "Тұрақты жұмыс көлемі бар XRT6868 сериялы сорғысы — бұл екі тәуелсіз гидравликалық контурды талап ететін жүйелер үшін тамаша шешім. Ол ажыратылатын қуатты алу біліктеріне немесе қозғалтқыштың артқы қуат алуына (BPT байпас клапанын қолданумен) орнату үшін арнайы әзірленген. Бірегей '2 x 5 поршень' конструкциясы ықшам корпуста жоғары өнімділікті қамтамасыз етеді."
    },
    images: ["/assets/images/products/leduc/pumps/Насос_серии_XRT_202609051539.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "68 + 68 см³/об", en: "68 + 68 cc/rev", kk: "68 + 68 см³/айн" },
      "Тип потока": { ru: "Двухпоточный", en: "Dual independent flow", kk: "Екі ағынды" },
      "Конструкция": { ru: "2 x 5 поршней", en: "2 x 5-piston design", kk: "2 x 5 поршеньді" },
      "Фланец": { ru: "DIN ISO14 / ISO 7653", en: "DIN ISO14 / ISO 7653", kk: "DIN ISO14 / ISO 7653" }
    },
    features: [
      { ru: "Два независимых контура в одном корпусе", en: "Two independent circuits in a single unit", kk: "Бір корпуста екі тәуелсіз контур" },
      { ru: "Конструкция с 2 x 5 поршнями для надежности", en: "Robust 2 x 5-piston configuration", kk: "Сенімділікке арналған 2 x 5 поршеньді конструкция" },
      { ru: "Возможность монтажа с байпасным клапаном BPT", en: "Rear engine take-off with BPT bypass valve", kk: "BPT байпас клапанымен монтаждау мүмкіндігі" },
      { ru: "Использование материалов высокой прочности", en: "Use of materials with high mechanical strength", kk: "Жоғары беріктігі бар материалдарды қолдану" }
    ],
    benefits: [
      { ru: "Экономия места за счет объединения двух насосов", en: "Space saving by combining two pumps into one", kk: "Екі сорғыны біріктіру есебінен орынды үнемдеу" },
      { ru: "Низкий уровень шума при высокой нагрузке", en: "Low noise level even under high load", kk: "Жоғары жүктемедегі төмен шу деңгейі" },
      { ru: "Высокий общий КПД системы", en: "High overall efficiency of the hydraulic system", kk: "Жүйенің жоғары жалпы ПӘК-і" },
      { ru: "Оригинальная синхронизация блока цилиндров", en: "Original swashplate-cylinder block synchronization", kk: "Цилиндрлер блогының түпнұсқалық синхрондалуы" }
    ],
    applications: [
      { ru: "Сложные КМУ и лесные манипуляторы", en: "Advanced truck cranes and forestry cranes", kk: "Күрделі КМУ және орман манипуляторлары" },
      { ru: "Мультилифты и многоковшовые системы", en: "Hook lifts and multi-bucket systems", kk: "Мультилифтілер және көп шөмішті жүйелер" },
      { ru: "Зимняя техника (снегоочистители, турбины)", en: "Winter equipment (snow plows, turbines)", kk: "Қар тазалайтын техника (қар тазалағыштар, турбиналар)" },
      { ru: "Пожарная и военная спецтехника", en: "Fire trucks and military vehicles", kk: "Өрт сөндіру және әскери арнайы техника" }
    ]
  },
  {
    id: "s-p7",
    productTypeId: "pt-p2",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые насосы — серия TXV", 
      en: "Axial Piston Pumps — TXV Series", 
      kk: "Аксьальді-поршеньді сорғылар — TXV сериясы" 
    },
    slug: "series-txv-pump",
    descriptionHtml: { 
      ru: "Регулируемые насосы серии TXV с системой управления LS (Load Sensing) специально разработаны для удовлетворения потребностей гидравлических систем грузовых автомобилей. Насос регулирует поток таким образом, чтобы подавать ровно тот объем жидкости, который необходим для каждого конкретного движения. Компактный корпус позволяет устанавливать насос напрямую на вал отбора мощности (PTO) или через промежуточный вал.",
      en: "TXV variable displacement pumps with LS (Load Sensing) control are specifically designed to meet the needs of truck hydraulics. The pump regulates the flow to suit the application requirements, supplying only the correct flow for each movement. Its compact size enables direct flange mounting on the PTO or via an input drive shaft.",
      kk: "LS (Load Sensing) басқару жүйесі бар TXV сериялы реттелетін сорғылары жүк автомобильдерінің гидравликалық жүйелерінің қажеттіліктерін қанағаттандыру үшін арнайы әзірленген. Сорғы әрбір нақты қозғалыс үшін қажетті сұйықтық көлемін дәл беру үшін ағынды реттейді. Ықшам корпусы сорғыны тікелей қуатты алу білігіне (PTO) немесе аралық білік арқылы орнатуға мүмкіндік береді."
    },
    images: ["/assets/images/products/leduc/pumps/Насос_серии_TXV_202609051554.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "40 – 150 см³/об", en: "40 – 150 cc/rev", kk: "40 – 150 см³/айн" },
      "Рабочее давление": { ru: "до 400 бар", en: "up to 400 bar", kk: "400 барға дейін" },
      "Макс. частота вращения": { ru: "1900 – 3000 об/мин", en: "1900 – 3000 rpm", kk: "1900 – 3000 айн/мин" },
      "Тип управления": { ru: "Load Sensing (LS)", en: "Load Sensing (LS)", kk: "Load Sensing (LS)" }
    },
    features: [
      { ru: "Наличие уникальной на рынке модели объемом 150 см³/об", en: "Unique 150 cc/rev model available on the market", kk: "Нарықтағы бірегей 150 см³/айн моделінің болуы" },
      { ru: "Фланец крепления согласно DIN ISO14 (DIN 5462)", en: "Mounting flange according to DIN ISO14 (DIN 5462)", kk: "DIN ISO14 (DIN 5462) сәйкес бекіту фланеці" },
      { ru: "Возможность установки регулировочного винта макс. объема", en: "Optional maximum displacement adjustment screw", kk: "Максималды көлемді реттеу бұрандасын орнату мүмкіндігі" },
      { ru: "Уплотнения FKM (Viton) входят в стандартную комплектацию", en: "FKM (Viton) seals fitted as standard", kk: "FKM (Viton) тығыздағыштары стандартты жиынтыққа кіреді" }
    ],
    benefits: [
      { ru: "Экономия топлива за счет подачи только необходимого потока", en: "Fuel saving by supplying only the required flow", kk: "Қажетті ағынды ғана беру есебінен отынды үнемдеу" },
      { ru: "Компактная конструкция для легкой установки в ограниченном пространстве", en: "Compact design for easy installation in tight spaces", kk: "Шектеулі кеңістікте оңай орнатуға арналған ықшам конструкция" },
      { ru: "Версия со сквозным валом для привода второго насоса", en: "Through shaft version available to drive a second pump", kk: "Екінші сорғыны жетекке алу үшін өтпелі білігі бар нұсқасы" },
      { ru: "Возможность интеграции системы контроля крутящего момента", en: "Optional constant torque control available", kk: "Айналу моментін бақылау жүйесін біріктіру мүмкіндігі" }
    ],
    applications: [
      { ru: "Грузовые краны-манипуляторы и лесные краны", en: "Handling cranes and forestry cranes", kk: "Жүк кран-манипуляторлары және орман крандары" },
      { ru: "Мусоровозы и коммунальная техника", en: "Refuse trucks and public works equipment", kk: "Қоқыс тасығыштар және коммуналдық техника" },
      { ru: "Снегоуборочные машины и распределители", en: "Snow removal vehicles and spreaders", kk: "Қар тазалайтын машиналар мен таратқыштар" },
      { ru: "Сельскохозяйственная и военная спецтехника", en: "Agricultural machinery and military equipment", kk: "Ауыл шаруашылығы және әскери арнайы техника" }
    ]
  },
  {
    id: "s-p8",
    productTypeId: "pt-p2",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые насосы — серия TXVA (версия SAE)", 
      en: "Axial Piston Pumps — TXVA Series (SAE version)", 
      kk: "Аксьальді-поршеньді сорғылар — TXVA сериясы (SAE нұсқасы)" 
    },
    slug: "series-txva-pump",
    descriptionHtml: { 
      ru: "Насосы серии TXVA имеют конструкцию, аналогичную серии TXV, но выполнены с фланцем и валом стандарта SAE C. Серия представлена двумя моделями с рабочим объемом 75 и 92 см³/об. Насосы оснащены системой управления Load Sensing (LS) для автоматической адаптации потока под требования системы.",
      en: "The TXVA series pumps have a design similar to the TXV series, but are featuring an SAE C flange and shaft. The series is available in two models with a maximum displacement of 75 and 92 cc/rev. The pumps are fitted with Load Sensing regulation for automatic flow adaptation.",
      kk: "TXVA сериялы сорғылары TXV сериясына ұқсас конструкцияға ие, бірақ SAE C стандартындағы фланец пен білікпен орындалған. Серия жұмыс көлемі 75 және 92 см³/айн болатын екі модельмен ұсынылған. Сорғылар жүйе талаптарына сәйкес ағынды автоматты түрде бейімдеу үшін Load Sensing (LS) басқару жүйесімен жабдықталған."
    },
    images: ["/assets/images/products/leduc/pumps/Насос_серии_TXVA_(версия_SAE)_202609051555.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "75 – 92 см³/об", en: "75 – 92 cc/rev", kk: "75 – 92 см³/айн" },
      "Рабочее давление": { ru: "400 бар (пик 420)", en: "400 bar (420 peak)", kk: "400 бар (420 пик)" },
      "Макс. частота вращения": { ru: "1900 – 2000 об/мин", en: "1900 – 2000 rpm", kk: "1900 – 2000 айн/мин" },
      "Стандарт фланца": { ru: "SAE C (2 или 4 болта)", en: "SAE C (2 or 4 bolts)", kk: "SAE C (2 немесе 4 болт)" }
    },
    features: [
      { ru: "Присоединительные порты стандарта UNF", en: "UNF ports for connection", kk: "UNF стандартындағы қосылу порттары" },
      { ru: "Варианты приводного вала: шлицевой или со шпонкой", en: "Drive shaft options: splined or keyed", kk: "Жетек білігінің нұсқалары: ойықты немесе шпонкалы" },
      { ru: "Регулирование потока по принципу Load Sensing", en: "Load Sensing flow regulation", kk: "Load Sensing принципі бойынша ағынды реттеу" },
      { ru: "Монтаж на двигатель или КПП через PTO", en: "Mounting on engine or gearbox via PTO", kk: "Қозғалтқышқа немесе беріліс қорабына PTO арқылы орнату" }
    ],
    benefits: [
      { ru: "Полная совместимость со стандартом SAE C (США)", en: "Full compatibility with SAE C standard (US version)", kk: "SAE C (АҚШ) стандартымен толық үйлесімділік" },
      { ru: "Высокое рабочее давление для сложных задач", en: "High operating pressure for demanding tasks", kk: "Күрделі тапсырмалар үшін жоғары жұмыс қысымы" },
      { ru: "Автоматическая адаптация к нагрузке", en: "Automatic adaptation to the load", kk: "Жүктемеге автоматты түрде бейімделу" },
      { ru: "Надежная работа в тяжелых условиях эксплуатации", en: "Reliable operation in severe operating conditions", kk: "Ауыр пайдалану жағдайларында сенімді жұмыс" }
    ],
    applications: [
      { ru: "Спецтехника для рынка США и международных рынков", en: "Special vehicles for US and international markets", kk: "АҚШ және халықаралық нарықтарға арналған арнайы техника" },
      { ru: "Грузовые автомобили с гидроприводом навесного оборудования", en: "Trucks with hydraulic equipment drives", kk: "Аспалы жабдықтың гидравликалық жетегі бар жүк автомобильдері" },
      { ru: "Военная и сельскохозяйственная техника", en: "Military and agricultural machinery", kk: "Әскери және ауыл шаруашылығы техникасы" }
    ]
  },
  {
    id: "s-p9",
    productTypeId: "pt-p2",
    brandId: "b2",
    name: { 
      ru: "Насос TXV с регулированием крутящего момента", 
      en: "TXV Pump with Constant Torque Control", 
      kk: "Тұрақты айналу моментін реттейтін TXV сорғысы" 
    },
    slug: "thermostatic-torque-pump",
    descriptionHtml: { 
      ru: "Насос серии TXV может быть оснащен системой регулирования постоянного крутящего момента. Это устройство позволяет насосу непрерывно регулировать рабочие параметры для поддержания баланса: Давление x Расход = Константа. Данная технология обеспечивает максимальную производительность оборудования без риска перегрузки привода.",
      en: "The TXV pump can be fitted with a constant torque control. This device allows the pump to continuously regulate to keep: Pressure x Flow = Constant. This technology ensures maximum equipment performance without the risk of overloading the drive.",
      kk: "TXV сериялы сорғы тұрақты айналу моментін реттеу жүйесімен жабдықталуы мүмкін. Бұл құрылғы сорғыға келесі тепе-теңдікті сақтау үшін жұмыс параметрлерін үздіксіз реттеуге мүмкіндік береді: Қысым x Шығын = Константа. Бұл технология жетекті шамадан тыс жүктеу қаупінсіз жабдықтың максималды өнімділігін қамтамасыз етеді."
    },
    images: ["/assets/images/products/leduc/pumps/Насос_с_терморегулирующий_202609051554.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "40 – 150 см³/об", en: "40 – 150 cc/rev", kk: "40 – 150 см³/айн" },
      "Макс. давление": { ru: "до 400 бар", en: "up to 400 bar", kk: "400 барға дейін" },
      "Крутящий момент": { ru: "90 – 700 Нм", en: "90 – 700 Nm", kk: "90 – 700 Нм" },
      "Макс. скорость": { ru: "3000 об/мин", en: "3000 rpm", kk: "3000 айн/мин" }
    },
    features: [
      { ru: "Автоматическое поддержание постоянного крутящего момента", en: "Automatic maintenance of constant torque", kk: "Тұрақты айналу моментін автоматты түрде сақтау" },
      { ru: "Компактные габаритные размеры при расширенном функционале", en: "Compact overall dimensions with extended functionality", kk: "Кеңейтілген функционалдығы бар ықшам габариттік өлшемдер" },
      { ru: "Работа в пределах лимитов мощности вала отбора мощности (PTO)", en: "Operation within the power/torque limits of the PTO", kk: "Қуатты алу білігінің (PTO) қуат/айналу моменті шегінде жұмыс істеу" },
      { ru: "Доступна версия 130 см³ со сквозным валом", en: "Available in 130 cc with through shaft", kk: "Өтпелі білігі бар 130 см³ нұсқасы қолжетімді" }
    ],
    benefits: [
      { ru: "Защита двигателя и трансмиссии от перегрузок", en: "Protection of the engine and transmission from overloads", kk: "Қозғалтқыш пен трансмиссияны шамадан тыс жүктемелерден қорғау" },
      { ru: "Оптимизация энергопотребления системы", en: "System energy consumption optimization", kk: "Жүйенің энергия тұтынуын оңтайландыру" },
      { ru: "Плавная работа при высоких нагрузках", en: "Smooth operation under high loads", kk: "Жоғары жүктемелер кезінде бірқалыпты жұмыс" },
      { ru: "Увеличение ресурса гидравлических компонентов", en: "Increased lifespan of hydraulic components", kk: "Гидравликалық компоненттердің ресурсын арттыру" }
    ],
    applications: [
      { ru: "Погрузочные и лесные краны большой мощности", en: "High-power handling and forestry cranes", kk: "Жоғары қуатты тиеу және орман крандары" },
      { ru: "Мусоровозы и коммунальная техника", en: "Refuse trucks and public works equipment", kk: "Қоқыс тасығыштар және коммуналдық техника" },
      { ru: "Распределители и снегоуборочные машины", en: "Spreaders and snow removal vehicles", kk: "Таратқыштар және қар тазалайтын машиналар" },
      { ru: "Сельскохозяйственное и военное машиностроение", en: "Agricultural machinery and military equipment", kk: "Ауыл шаруашылығы және әскери машина жасау" }
    ]
  },
  {
    id: "s-p11",
    productTypeId: "pt-p3",
    brandId: "b2",
    name: { 
      ru: "Аксиально-поршневые насосы — серия W / WA", 
      en: "Axial Piston Pumps — W / WA Series", 
      kk: "Аксьальді-поршеньді сорғылар — W / WA сериясы" 
    },
    slug: "series-w-wa-pump",
    descriptionHtml: { 
      ru: "Насосы серий W и WA разработаны для удовлетворения потребностей как промышленного, так и мобильного секторов гидравлики. Серия W (версия ISO) предлагает рабочие объемы от 5 до 125 см³/об, в то время как серия WA (версия SAE) доступна в диапазоне от 12 до 180 см³/об. Эти насосы отличаются высокой эффективностью и способностью работать при экстремальном давлении.",
      en: "W/WA pumps have been developed to meet the needs of both the industrial and the mobile hydraulic market. The W series (ISO version) is available in displacements from 5 to 125 cc/rev, while the WA series (SAE version) is available in displacements from 12 to 180 cc/rev. These pumps feature high efficiency and extreme pressure capabilities.",
      kk: "W және WA сериялы сорғылары гидравликаның өнеркәсіптік және мобильді секторларының қажеттіліктерін қанағаттандыру үшін әзірленген. W сериясы (ISO нұсқасы) 5-тен 125 см³/айн дейінгі жұмыс көлемін ұсынады, ал WA сериясы (SAE нұсқасы) 12-ден 180 см³/айн дейінгі диапазонда қолжетімді. Бұл сорғылар жоғары тиімділігімен және экстремалды қысымда жұмыс істеу қабілетімен ерекшеленеді."
    },
    images: ["/assets/images/products/leduc/pumps/Насос_серии_W_WA_202609051601.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем (W)": { ru: "5 – 125 см³/об", en: "5 – 125 cc/rev", kk: "5 – 125 см³/айн" },
      "Рабочий объем (WA)": { ru: "12 – 180 см³/об", en: "12 – 180 cc/rev", kk: "12 – 180 см³/айн" },
      "Рабочее давление": { ru: "400 бар (пик 450)", en: "400 bar (450 peak)", kk: "400 бар (450 пик)" },
      "Частота вращения": { ru: "1900 – 3150 об/мин", en: "1900 – 3150 rpm", kk: "1900 – 3150 айн/мин" }
    },
    features: [
      { ru: "Технология 7 поршней для снижения пульсаций потока", en: "7 piston technology to reduce pulsations", kk: "Ағын пульсациясын азайту үшін 7 поршеньді технология" },
      { ru: "Саморегулирование и функция самовсасывания", en: "Self-priming and self-suction functions", kk: "Өздігінен реттелу және өздігінен сору функциясы" },
      { ru: "Уплотнения FKM в стандарте (NBR как опция)", en: "FKM seals as standard (NBR as an option)", kk: "FKM тығыздағыштары стандартты түрде (NBR опция ретінде)" },
      { ru: "Приводной вал: со шпонкой или шлицевой", en: "Available with keyed or splined shaft", kk: "Жетек білігі: шпонкалы немесе ойықты" }
    ],
    benefits: [
      { ru: "Высокий общий КПД при низком уровне шума", en: "High global efficiency with low noise level", kk: "Төмен шу деңгейінде жоғары жалпы ПӘК" },
      { ru: "Способность работать при экстремальных оборотах", en: "High speed performance capability", kk: "Экстремалды айналымдарда жұмыс істеу қабілеті" },
      { ru: "Универсальность: ISO и SAE стандарты в одной линейке", en: "Versatility: ISO and SAE standards in one line", kk: "Әмбебаптық: бір желіде ISO және SAE стандарттары" },
      { ru: "Надежность конструкции для тяжелых условий", en: "Robust design for demanding environments", kk: "Ауыр жағдайларға арналған конструкцияның сенімділігі" }
    ],
    applications: [
      { ru: "Гидравлические насосные станции (пауэрпаки)", en: "Hydraulic power packs", kk: "Гидравликалық сорғы станциялары (пауэрпактар)" },
      { ru: "Блоки питания для металлорежущих станков", en: "Power supply units for machine tools", kk: "Металл кесетін станоктарға арналған қуат блоктары" },
      { ru: "Буровое оборудование и дорожная техника", en: "Drilling equipment and public works machinery", kk: "Бұрғылау жабдықтары және жол техникасы" },
      { ru: "Машины с гидромеханическим управлением", en: "Hydromechanically controlled machines", kk: "Гидромеханикалық басқарылатын машиналар" }
    ]
  },
  {
    id: "s-p12",
    productTypeId: "pt-p4",
    brandId: "b2",
    name: { 
      ru: "Электрогидравлический модуль — EGP External", 
      en: "Electro-hydraulic Power Unit — EGP External", 
      kk: "Электргидравликалық модуль — EGP External" 
    },
    slug: "egp-external",
    descriptionHtml: { 
      ru: "Внешний EGP — это компактный и высокопроизводительный электрогидравлический силовой агрегат, объединяющий в себе трехфазный бесщеточный электродвигатель ME175, встроенный частотный инвертор и внешний шестеренный насос. Эта архитектура обеспечивает непрерывную работу, высокий КПД и низкий уровень шума, что делает его идеальным решением для современных мобильных и промышленных электрифицированных систем.",
      en: "The External EGP is a compact and high-performance electro-hydraulic power unit that combines a three-phase brushless ME175 electric motor, an integrated frequency inverter, and an external gear pump. This architecture ensures continuous operation, high efficiency, and low noise, making it perfectly suited for modern mobile and industrial electrified systems.",
      kk: "Сыртқы EGP — бұл үш фазалы щеткасыз ME175 электр қозғалтқышын, кіріктірілген жиілік инверторын және сыртқы тісті сорғыны біріктіретін ықшам және жоғары өнімді электргидравликалық қуат блогы. Бұл архитектура үздіксіз жұмысты, жоғары ПӘК-ті және төмен шу деңгейін қамтамасыз етеді, бұл оны заманауи мобильді және өнеркәсіптік электрлендірілген жүйелер үшін тамаша шешім етеді."
    },
    images: ["/assets/images/products/leduc/pumps/EGP_External_202609051601.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "0.25 – 12.00 см³/об", en: "0.25 – 12.00 cc/rev", kk: "0.25 – 12.00 см³/айн" },
      "Макс. давление": { ru: "240 бар (пик 280)", en: "240 bar (280 peak)", kk: "240 бар (280 пик)" },
      "Мощность": { ru: "5 – 18 кВт", en: "5 – 18 kW", kk: "5 – 18 кВт" },
      "Напряжение": { ru: "24, 48, 96, 330 В", en: "24, 48, 96, 330 Vdc", kk: "24, 48, 96, 330 В" }
    },
    features: [
      { ru: "Интеграция двигателя ME175, инвертора и насоса в одном узле", en: "Integration of ME175 motor, inverter and pump in one unit", kk: "ME175 қозғалтқышын, инверторды және сорғыны бір торапқа біріктіру" },
      { ru: "Бесщеточный двигатель с передовым управлением", en: "Brushless motor with advanced control technology", kk: "Жетілдірілген басқаруы бар щеткасыз қозғалтқыш" },
      { ru: "Точное регулирование потока и давления через инвертор", en: "Precise control of flow and pressure through the inverter", kk: "Инвертор арқылы ағын мен қысымды дәл реттеу" },
      { ru: "Максимальная частота вращения до 7000 об/мин", en: "Rotational speed up to 7000 rpm depending on model", kk: "Үлгіге байланысты макс. айналу жиілігі 7000 айн/мин дейін" }
    ],
    benefits: [
      { ru: "Высокая энергоэффективность и низкое тепловыделение", en: "High energy efficiency and low heat generation", kk: "Жоғары энергия тиімділігі және төмен жылу бөлінуі" },
      { ru: "Тихая работа, идеальная для замкнутых пространств", en: "Quiet operation, ideal for confined environments", kk: "Жабық кеңістіктер үшін өте қолайлы тыныш жұмыс" },
      { ru: "Простая и быстрая установка на технику", en: "Simple and quick installation on equipment", kk: "Техникаға қарапайым және жылдам орнату" },
      { ru: "Стабильная подача мощности в любых режимах", en: "Stable power delivery in all operating modes", kk: "Барлық режимдерде тұрақты қуат беру" }
    ],
    applications: [
      { ru: "Коммерческий транспорт и коммунальные машины", en: "Commercial and mobile service vehicles", kk: "Коммерциялық көлік және коммуналдық машиналар" },
      { ru: "Электрические валы отбора мощности (ePTO)", en: "Electric Power Take-Off (ePTO) systems", kk: "Электрлік қуатты алу біліктері (ePTO)" },
      { ru: "Промышленные испытательные стенды и автоматика", en: "Industrial test benches and automated machinery", kk: "Өнеркәсіптік сынақ стендтері және автоматика" },
      { ru: "КМУ и КМУ-манипуляторы на электротяге", en: "Electric truck-mounted cranes and articulated arms", kk: "Электр жетегі бар КМУ және КМУ-манипуляторлары" }
    ]
  },
  {
    id: "s-p13",
    productTypeId: "pt-p4",
    brandId: "b2",
    name: { 
      ru: "Электрогидравлический модуль — EGP Internal", 
      en: "Electro-hydraulic Power Unit — EGP Internal", 
      kk: "Электргидравликалық модуль — EGP Internal" 
    },
    slug: "egp-internal",
    descriptionHtml: { 
      ru: "Модуль EGP Internal — это высокопроизводительный электрогидравлический силовой агрегат, объединяющий трехфазный бесщеточный электродвигатель ME175 с внутренним шестеренным насосом. Эта комбинация обеспечивает исключительную бесшумность работы, высокий КПД и максимальную надежность. Модульная конструкция с уменьшенными габаритами позволяет легко интегрировать узел в широкий спектр мобильных и промышленных гидравлических систем.",
      en: "The Internal EGP is a high-performance electro-hydraulic power unit combining a three-phase brushless ME175 electric motor with an internal gear pump. This combination ensures excellent overall efficiency, low noise levels, and high robustness. Its modular design and reduced footprint allow quick and optimized integration into a wide range of mobile and industrial hydraulic applications.",
      kk: "EGP Internal модулі — бұл үш фазалы щеткасыз ME175 электр қозғалтқышын ішкі тісті сорғымен біріктіретін жоғары өнімді электргидравликалық қуат блогы. Бұл комбинация жұмыстың ерекше дыбыссыздығын, жоғары ПӘК-ті және максималды сенімділікті қамтамасыз етеді. Ықшам габариттері бар модульдік конструкция торапты мобильді және өнеркәсіптік гидравликалық жүйелердің кең ауқымына оңай біріктіруге мүмкіндік береді."
    },
    images: ["/assets/images/products/leduc/pumps/EGP_Internal_202609051601.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "3.6 – 10.2 см³/об", en: "3.6 – 10.2 cc/rev", kk: "3.6 – 10.2 см³/айн" },
      "Макс. давление": { ru: "330 бар (пик 345)", en: "330 bar (345 peak)", kk: "330 бар (345 пик)" },
      "Макс. расход": { ru: "до 36 л/мин", en: "up to 36 l/min", kk: "36 л/мин дейін" },
      "Напряжение": { ru: "24, 48, 96 В", en: "24, 48, 96 Vdc", kk: "24, 48, 96 В" }
    },
    features: [
      { ru: "Внутренний шестеренный насос для бесшумной работы", en: "Internal gear pump for quiet and smooth operation", kk: "Дыбыссыз жұмыс істеуге арналған ішкі тісті сорғы" },
      { ru: "Бесщеточный двигатель ME175 с высоким ресурсом", en: "High-performance brushless ME175 motor", kk: "Ресурсы жоғары щеткасыз ME175 қозғалтқышы" },
      { ru: "Оптимальный баланс между расходом и энергопотреблением", en: "Excellent balance between flow and energy consumption", kk: "Шығын мен энергия тұтыну арасындағы оңтайлы теңгерім" },
      { ru: "Диапазон частоты вращения от 400 до 3600 об/мин", en: "Speed range from 400 to 3600 rpm", kk: "Айналу жиілігінің диапазоны 400-ден 3600 айн/мин дейін" }
    ],
    benefits: [
      { ru: "Максимальная надежность в тяжелых условиях эксплуатации", en: "Maximum robustness in demanding environments", kk: "Ауыр пайдалану жағдайларында максималды сенімділік" },
      { ru: "Компактный форм-фактор для интеграции в малые пространства", en: "Reduced footprint for integration into small spaces", kk: "Шағын кеңістіктерге біріктіруге арналған ықшам форм-фактор" },
      { ru: "Работа в режиме непрерывной нагрузки", en: "Designed for continuous-duty operation", kk: "Үздіксіз жүктеме режимінде жұмыс істеу" },
      { ru: "Стабильные гидравлические характеристики", en: "Stable hydraulic characteristics across operating range", kk: "Тұрақты гидравликалық сипаттамалар" }
    ],
    applications: [
      { ru: "Электрические валы отбора мощности (ePTO)", en: "Electric Power Take-Off (ePTO) systems", kk: "Электрлік қуатты алу біліктері (ePTO)" },
      { ru: "Манипуляторы и краны на коммерческом транспорте", en: "Truck-mounted cranes and articulated arms", kk: "Коммерциялық көліктегі манипуляторлар мен крандар" },
      { ru: "Компактные гидростанции и испытательные стенды", en: "Compact hydraulic power units and test benches", kk: "Ықшам гидростанциялар мен сынақ стендтері" },
      { ru: "Спецтехника оборонного сектора", en: "Defense sector special vehicles", kk: "Қорғаныс секторының арнайы техникасы" }
    ]
  },
  {
    id: "s-p14",
    productTypeId: "pt-p4",
    brandId: "b2",
    name: { 
      ru: "Гибридный силовой агрегат — Powerpack GEP 7.3", 
      en: "Hybrid Power Unit — Powerpack GEP 7.3", 
      kk: "Гибридті қуат блогы — Powerpack GEP 7.3" 
    },
    slug: "powerpack-7-3",
    descriptionHtml: { 
      ru: "GEP 7.3 — это инновационный силовой агрегат (пауэрпак), специально разработанный для гибридных транспортных средств. Компактный, легкий и удобный в эксплуатации, он оснащен бесщеточным двигателем постоянного тока, регулируемым приводом и радиально-поршневым насосом. Уникальная система внутренней циркуляции масла обеспечивает эффективное охлаждение двигателя, что позволяет установке работать в непрерывном режиме.",
      en: "The GEP 7.3 is an innovative powerpack tailored for hybrid vehicles. Compact, lightweight, and user-friendly, it features a brushless DC electric motor, variable speed drive, and a hydraulic radial piston pump. Internal oil circulation ensures optimal motor cooling, enabling continuous operation even in demanding cycles.",
      kk: "GEP 7.3 — бұл гибридті көлік құралдары үшін арнайы әзірленген инновациялық қуат блогы (пауэрпак). Ықшам, жеңіл және пайдалануда ыңғайлы, ол щеткасыз тұрақты ток қозғалтқышымен, реттелетін жетекпен және радиалды-поршеньді сорғымен жабдықталған. Майдың ішкі айналымының бірегей жүйесі қозғалтқышты тиімді салқындатуды қамтамасыз етеді, бұл қондырғыға үздіксіз режимде жұмыс істеуге мүмкіндік береді."
    },
    images: ["/assets/images/products/leduc/pumps/Powerpack_7.3_202609051601.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Рабочий объем": { ru: "7.3 см³/об", en: "7.3 cc/rev", kk: "7.3 см³/айн" },
      "Напряжение": { ru: "12, 24, 48, 96, 400 В", en: "12, 24, 48, 96, 400 Vdc", kk: "12, 24, 48, 96, 400 В" },
      "Частота вращения": { ru: "300 – 3500 об/мин", en: "300 – 3500 rpm", kk: "300 – 3500 айн/мин" },
      "Вес установки": { ru: "27 кг", en: "27 kg", kk: "27 кг" }
    },
    features: [
      { ru: "Радиально-поршневой насос для высокой надежности", en: "Radial piston pump for high reliability", kk: "Жоғары сенімділікке арналған радиалды-поршеньді сорғы" },
      { ru: "Программируемая кривая расход/давление через CANopen", en: "Programmable flow/pressure curve via CANopen", kk: "CANopen арқылы бағдарламаланатын шығын/қысым қисығы" },
      { ru: "Внутреннее охлаждение маслом для непрерывной работы", en: "Internal oil cooling for continuous operation", kk: "Үздіксіз жұмыс үшін ішкі маймен салқындату" },
      { ru: "Возможность погружного монтажа в масляный бак", en: "Submersible mounting capability in the oil tank", kk: "Май багына су астында орнату мүмкіндігі" }
    ],
    benefits: [
      { ru: "Гибкая адаптация под доступную электрическую мощность", en: "Flexible adaptation to available electrical power", kk: "Қолжетімді электр қуатына икемді бейімделу" },
      { ru: "Компактность и малый вес (всего 27 кг)", en: "Compact design and low weight (only 27 kg)", kk: "Ықшамдылық және аз салмақ (бар болғаны 27 кг)" },
      { ru: "Возможность объединения нескольких блоков в систему", en: "Possibility to connect multiple units together", kk: "Бірнеше блокты жүйеге біріктіру мүмкіндігі" },
      { ru: "Простое управление через CANopen или потенциометр", en: "Simple control via CANopen or potentiometer", kk: "CANopen немесе потенциометр арқылы қарапайым басқару" }
    ],
    applications: [
      { ru: "Гибридные грузовые автомобили и спецтехника", en: "Hybrid trucks and special vehicles", kk: "Гибридті жүк автомобильдері және арнайы техника" },
      { ru: "Строительное и дорожное оборудование", en: "Construction and public works machinery", kk: "Құрылыс және жол жабдықтары" },
      { ru: "Промышленные мобильные гидравлические системы", en: "Industrial mobile hydraulic systems", kk: "Өнеркәсіптік мобильді гидравликалық жүйелер" },
      { ru: "Электрифицированные приводы для спецзадач", en: "Electrified drives for specialized tasks", kk: "Арнайы тапсырмаларға арналған электрлендірілген жетектер" }
    ]
  },
  // MICROPUMPS SERIES
  {
    id: "s-micro1",
    productTypeId: "pt-micro1",
    brandId: "b2",
    name: { 
      ru: "Микронасосы высокого давления — серия PB", 
      en: "High Pressure Micropumps — PB Series", 
      kk: "Жоғары қысымды микросорғылар — PB сериясы" 
    },
    slug: "pb-series-micropumps",
    descriptionHtml: { 
      ru: "Микронасосы серии PB, основанные на технологии рядных поршней, сочетают в себе экстремально компактные размеры, способность работать при сверхвысоком давлении и высокий КПД. Эти насосы спроектированы для эксплуатации в самых требовательных и агрессивных средах, включая глубоководные исследования и нефтеразведку.",
      en: "The PB series micropumps, featuring in-line piston technology, combine a very compact footprint, high-pressure capabilities, and high efficiency. These micropumps are specifically designed for the most demanding environments, offering reliable performance where space is limited and pressures are extreme.",
      kk: "Қатарлы поршеньдер технологиясына негізделген PB сериялы микросорғылары өте ықшам өлшемдерді, өте жоғары қысымда жұмыс істеу қабілетін және жоғары ПӘК-ті біріктіреді. Бұл сорғылар ең талап етілетін және агрессивті орталарда, соның ішінде терең су астындағы зерттеулер мен мұнай барлауда жұмыс істеу үшін әзірленген."
    },
    images: ["/assets/images/products/leduc/micropumps/Микронасосы_Hydro_Leduc_202609051451.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Макс. давление": { ru: "до 1000 бар", en: "up to 1000 bar", kk: "1000 барға дейін" },
      "Рабочая темп.": { ru: "до +175°C", en: "up to +175°C", kk: "+175°C дейін" },
      "Технология": { ru: "Рядные поршни", en: "In-line pistons", kk: "Қатарлы поршеньдер" },
      "Тип всасывания": { ru: "Самовсасывающий", en: "Self-priming", kk: "Өздігінен соратын" }
    },
    features: [
      { ru: "Способность работать при давлении до 1000 бар", en: "Operating pressure capability up to 1000 bar", kk: "1000 барға дейінгі қысымда жұмыс істеу қабілеті" },
      { ru: "Экстремально компактный корпус (микро-формат)", en: "Extremely compact footprint (micro-format)", kk: "Өте ықшам корпус (микро-формат)" },
      { ru: "Работа при сверхвысоких температурах до 175°C", en: "High temperature operation up to 175°C", kk: "175°C дейінги аса жоғары температурада жұмыс істеу" },
      { ru: "Возможность полной кастомизации под заказ", en: "Fully customizable upon request", kk: "Тапсырыс бойынша толық кастомизация мүмкіндігі" }
    ],
    benefits: [
      { ru: "Высочайший КПД в миниатюрном исполнении", en: "Maximum efficiency in a miniature design", kk: "Миниатюралық орындалудағы ең жоғары ПӘК" },
      { ru: "Надежность в экстремальных средах", en: "Unmatched reliability in extreme environments", kk: "Экстремалды орталардағы сенімділік" },
      { ru: "Минимальный вес и занимаемое пространство", en: "Minimum weight and space requirements", kk: "Минималды салмақ пен бос орын" },
      { ru: "Эффективная самовсасывающая способность", en: "Excellent self-priming performance", kk: "Тиімді өздігінен сору қабілеті" }
    ],
    applications: [
      { ru: "Инструменты для разведки нефтяных скважин", en: "Oil exploration and logging tools", kk: "Мұнай ұңғымаларын барлауға арналған құралдар" },
      { ru: "Океанографические исследования и аппараты", en: "Oceanographic research and subsea equipment", kk: "Океанографиялық зерттеулер және аппараттар" },
      { ru: "Аэрокосмическая промышленность и аэронавтика", en: "Aerospace industry and aeronautics", kk: "Аэроғарыш өнеркәсібі және аэронавтика" },
      { ru: "Портативный электроинструмент и микро-ТЭЦ", en: "Portable power tools and micro-power plants", kk: "Портативті электр құралы және микро-ЖЭО" }
    ]
  },
  // ACCUMULATORS SERIES
  {
    id: "s-a1",
    productTypeId: "pt-a1",
    brandId: "b2",
    name: { 
      ru: "Сварные цилиндрические аккумуляторы — серия ACS(L)", 
      en: "Welded Cylindrical Accumulators — ACS(L) Series", 
      kk: "ACS(L) сериялы дәнекерленген цилиндрлік аккумуляторлар" 
    },
    slug: "acs-l-accumulators",
    descriptionHtml: { 
      ru: "Гидропневматические аккумуляторы серии ACS(L) с баллонно-диафрагменной конструкцией разработаны специально для мобильной техники. Обладая рабочим объемом от 0.7 до 4 литров, они обеспечивают надежную работу при давлении до 330 бар. Стандартная версия работает в диапазоне от -20°C до +100°C, а низкотемпературная версия (Low Temp) — от -40°C до +100°C. Все модели оснащены зарядным клапаном для самостоятельной проверки и зарядки азотом.",
      en: "ACS(L) series hydropneumatic accumulators featuring a bladder-diaphragm design are an attractive solution for mobile applications. Available in volumes from 0.7 to 4 Litres, they support working pressures up to 330 bar. The series includes a standard version (-20°C to +100°C) and a low-temperature version (-40°C to +100°C). All units are equipped with a charging valve, allowing customers to verify and recharge the pressure as needed.",
      kk: "Баллондық-диафрагмалық конструкциясы бар ACS(L) сериялы гидропневматикалық аккумуляторлар мобильді техника үшін арнайы әзірленген. 0.7-ден 4 литрге дейінгі жұмыс көлеміне ие бола отырып, олар 330 барға дейінгі қысымда сенімді жұмысты қамтамасыз етеді. Стандартты нұсқа -20°C-тан +100°C-қа дейінгі диапазонда, ал төмен температуралы нұсқа (Low Temp) -40°C-тан +100°C-қа дейін жұмыс істейді. Барлық модельдер азотпен өздігінен тексеру және зарядтау үшін зарядтау клапанымен жабдықталған."
    },
    images: ["/assets/images/products/leduc/accumulators/Сварные_цилиндрические_аккумуляторы_202609051430.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Полезный объем": { ru: "0.7 – 4 литра", en: "0.7 – 4 litres", kk: "0.7 – 4 литр" },
      "Макс. давление": { ru: "250 или 330 бар", en: "250 or 330 bar", kk: "250 немесе 330 бар" },
      "Темп. диапазон": { ru: "-40°C до +100°C", en: "-40°C to +100°C", kk: "-40°C-тан +100°C-қа дейін" },
      "Тип конструкции": { ru: "Баллонно-диафрагменный", en: "Bladder-diaphragm", kk: "Баллондық-диафрагмалық" }
    },
    features: [
      { ru: "Надежная баллонно-диафрагменная конструкция", en: "Robust bladder-diaphragm internal design", kk: "Сенімді баллондық-диафрагмалық конструкция" },
      { ru: "Объемы от 0.7 до 4 литров в компактном корпусе", en: "Volumes from 0.7 to 4L in a compact footprint", kk: "Ықшам корпустағы 0.7-ден 4 литрге дейінгі көлемдер" },
      { ru: "Встроенный клапан для зарядки и проверки давления", en: "Equipped with screw or charging valve", kk: "Зарядтауға және қысымды тексеруге арналған кіріктірілген клапан" },
      { ru: "Высокий эксплуатационный ресурс (кол-во циклов)", en: "High operating ratio and long cycle life", kk: "Жоғары пайдалану ресурсы (циклдер саны)" }
    ],
    benefits: [
      { ru: "Долгий срок службы благодаря качеству материалов", en: "Long service life due to high-quality materials", kk: "Материалдардың сапасы арқасында ұзақ қызмет мерзімі" },
      { ru: "Оптимальное решение для мобильных приложений", en: "Attractive solution for demanding mobile apps", kk: "Мобильді қосымшалар үшін оңтайлы шешім" },
      { ru: "Простота обслуживания и возможность дозарядки", en: "Easy maintenance and recharging capability", kk: "Техникалық қызмет көрсетудің қарапайымдылығы және қайта зарядтау мүмкіндігі" },
      { ru: "Наличие низкотемпературного исполнения (-40°C)", en: "Availability of low temperature version (-40°C)", kk: "Төмен температуралы орындалудың болуы (-40°C)" }
    ],
    applications: [
      { ru: "Строительная и погрузочно-разгрузочная техника", en: "Construction and handling equipment", kk: "Құрылыс және тиеу-түсіру техникасы" },
      { ru: "Сельскохозяйственные машины и оборудование", en: "Agricultural machinery and implements", kk: "Ауыл шаруашылығы машиналары мен жабдықтары" },
      { ru: "Демпфирование пульсаций и гидроударов", en: "Shock absorber and pulsation dampening", kk: "Пульсациялар мен гидросоққыларды демпферлеу" },
      { ru: "Хранение энергии и термокомпенсация", en: "Energy storage and thermal expansion", kk: "Энергияны сақтау және термокомпенсация" }
    ]
  },
  {
    id: "s-a2",
    productTypeId: "pt-a2",
    brandId: "b2",
    name: { 
      ru: "Сферические гидропневмоаккумуляторы — серия AS / AC", 
      en: "Spherical Accumulators — AS / AC Series", 
      kk: "AS / AC сериялы сфералық гидропневмоаккумуляторлар" 
    },
    slug: "as-spherical-accumulators",
    descriptionHtml: { 
      ru: "Сферические аккумуляторы Hydro Leduc (серии AS-AC) состоят из двух полусферических корпусов, соединенных резьбовым соединением и удерживающих диафрагму. Диафрагма оснащена металлическим клапаном-шпилькой, который перекрывает выходное отверстие при полном опорожнении, исключая риск повреждения мембраны. Порт со стороны газа оснащен зарядным клапаном для контроля давления азота.",
      en: "Hydro Leduc spherical accumulators (AS-AC) consist of two hemispherical shells screwed together holding a diaphragm. This diaphragm features a metal stud that closes off the fluid port when completely drained, preventing any risk of damage to the membrane. The gas-side port is fitted with a charging valve to monitor and adjust the nitrogen pressure.",
      kk: "Hydro Leduc сфералық аккумуляторлары (AS-AC сериялары) бұрандалы қосылыммен біріктірілген және диафрагманы ұстап тұратын екі жарты сфералық корпустан тұрады. Диафрагма металл клапан-шпилькамен жабдықталған, ол толық босаған кезде шығыс саңылауын жауып, мембрананың зақымдану қаупін болдырмайды. Газ жағындағы порт азот қысымын бақылау үшін зарядтау клапанымен жабдықталған."
    },
    images: ["/assets/images/products/leduc/accumulators/Сферические_аккумуляторы_202609051429.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Полезный объем": { ru: "0.02 – 10 литров", en: "0.02 – 10 litres", kk: "0.02 – 10 литр" },
      "Макс. давление": { ru: "до 400 бар", en: "up to 400 bar", kk: "400 барға дейін" },
      "Темп. диапазон": { ru: "-20°C до +120°C", en: "-20°C to +120°C", kk: "-20°C-тан +120°C-қа дейін" },
      "Эластомеры": { ru: "NBR, FKM, EPDM", en: "NBR, FKM, EPDM", kk: "NBR, FKM, EPDM" }
    },
    features: [
      { ru: "Металлический клапан для защиты диафрагмы", en: "Metal stud protection against diaphragm damage", kk: "Диафрагманы қорғауға арналған металл клапан" },
      { ru: "Широкий выбор эластомеров (NBR-FKM-EPDM)", en: "Various diaphragm elastomers available", kk: "Эластомерлердің кең таңдауы (NBR-FKM-EPDM)" },
      { ru: "Зарядный клапан для контроля азота", en: "Gas-side port with charging valve", kk: "Азотты бақылауға арналған зарядтау клапаны" },
      { ru: "Возможность антикоррозийной обработки ARCOR®", en: "Optional ARCOR® anti-corrosion treatment", kk: "ARCOR® коррозияға қарсы өңдеу мүмкіндігі" }
    ],
    benefits: [
      { ru: "Высокая надежность при давлении до 400 бар", en: "High reliability at pressures up to 400 bar", kk: "400 барға дейінгі қысымдағы жоғары сенімділік" },
      { ru: "Совместимость с различными типами жидкостей", en: "Compatibility with different types of fluids", kk: "Сұйықтықтардың әртүрлі түрлерімен үйлесімділік" },
      { ru: "Устойчивость к экстремальным температурам", en: "Resistance to extreme operating temperatures", kk: "Экстремалды температураға төзімділік" },
      { ru: "Длительный срок службы без обслуживания", en: "Long maintenance-free service life", kk: "Техникалық қызмет көрсетусіз ұзақ қызмет мерзімі" }
    ],
    applications: [
      { ru: "Промышленное оборудование", en: "General industrial machinery", kk: "Өнеркәсіптік жабдықтар" },
      { ru: "Судовые двигатели и морские системы", en: "Marine engines and offshore systems", kk: "Кеме қозғалтқыштары және теңіз жүйелері" },
      { ru: "Гидравлические станции и прессы", en: "Hydraulic power units and presses", kk: "Гидравликалық станциялар мен престер" },
      { ru: "Энергетические установки", en: "Energy sector installations", kk: "Энергетикалық қондырғылар" }
    ]
  },
  {
    id: "s-a3",
    productTypeId: "pt-a3",
    brandId: "b2",
    name: { 
      ru: "Баллонные гидроаккумуляторы — серия ABVE", 
      en: "Bladder Accumulators — ABVE Series", 
      kk: "ABVE сериялы баллонды гидроаккумуляторлар" 
    },
    slug: "abve-bladder-accumulators",
    descriptionHtml: { 
      ru: "Баллонные аккумуляторы Hydro Leduc серии ABVE бутылочного типа состоят из кованого стального корпуса, эластичного баллона, зарядного клапана и гидравлического порта. Жидкостной порт оснащен тарельчатым клапаном, который предотвращает выдавливание баллона, обеспечивая безопасность и долговечность. Газовый клапан позволяет точно настраивать давление азота в соответствии с требованиями системы.",
      en: "Hydro Leduc ABVE bottle-type accumulators consist of a forged steel body, an internal bladder, a charging valve, and a fluid port connection. The fluid port is equipped with a poppet valve to prevent bladder extrusion, ensuring safety and reliability. These units are designed for easy maintenance and are compatible with standard components from major accumulator brands.",
      kk: "Hydro Leduc ABVE сериялы баллонды аккумуляторлары соғылған болат корпустан, серпімді баллоннан, зарядтау клапанынан және гидравликалық порттан тұрады. Сұйықтық порты баллонның сығылып кетуіне жол бермейтін тарелкалы клапанмен жабдықталған, бұл қауіпсіздік пен ұзақ мерзімділікті қамтамасыз етеді. Газ клапаны азот қысымын жүйе талаптарына сәйкес дәл реттеуге мүмкіндік береді."
    },
    images: ["/assets/images/products/leduc/accumulators/Баллонные_аккумуляторы_202609051429.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Полезный объем": { ru: "4 – 50 литров", en: "4 – 50 litres", kk: "4 – 50 литр" },
      "Макс. давление": { ru: "330 или 350 бар", en: "330 or 350 bar", kk: "330 немесе 350 бар" },
      "Темп. диапазон": { ru: "-20°C до +100°C", en: "-20°C to +100°C", kk: "-20°C-тан +100°C-қа дейін" },
      "Материал баллона": { ru: "NBR (другие под заказ)", en: "NBR (others on request)", kk: "NBR (басқалары тапсырыс бойынша)" }
    },
    features: [
      { ru: "Корпус из высококачественной кованой стали", en: "High-quality forged steel body construction", kk: "Жоғары сапалы соғылған болаттан жасалған корпус" },
      { ru: "Тарельчатый клапан для защиты от экструзии", en: "Poppet valve to prevent bladder extrusion", kk: "Экструзиядан қорғауға арналған тарелкалы клапан" },
      { ru: "Взаимозаменяемость с основными мировыми брендами", en: "Interchangeable with major accumulator brands", kk: "Әлемдік негізгі брендтермен өзара алмасу мүмкіндігі" },
      { ru: "Возможность сборки в аккумуляторные батареи", en: "Suitable for battery configuration", kk: "Аккумуляторлық батареяларға жинау мүмкіндігі" }
    ],
    benefits: [
      { ru: "Высокая скорость разрядки (отдачи энергии)", en: "High discharge speeds for rapid response", kk: "Энергияны берудің жоғары жылдамдығы" },
      { ru: "Простая установка и удобные габариты", en: "Compact dimensions for easy installation", kk: "Оңай орнату және ыңғайлы габариттер" },
      { ru: "Длительный срок службы баллона", en: "Long service life for internal bladder", kk: "Баллонның ұзақ қызмет ету мерзімі" },
      { ru: "Надежная работа в промышленных условиях", en: "Proven reliability in industrial applications", kk: "Өнеркәсіптік жағдайлардағы сенімді жұмыс" }
    ],
    applications: [
      { ru: "Промышленное гидравлическое оборудование", en: "Industrial hydraulic power units", kk: "Өнеркәсіптік гидравликалық жабдықтар" },
      { ru: "Станки и автоматизированные линии", en: "Machine tools and automated lines", kk: "Станоктар мен автоматтандырылған желілер" },
      { ru: "Энергетические и распределительные системы", en: "Energy and distribution systems", kk: "Энергетикалық және тарату жүйелері" },
      { ru: "Демпфирование пульсаций в тяжелых системах", en: "Pulsation dampening in heavy systems", kk: "Ауыр жүйелердегі пульсацияларды демпферлеу" }
    ]
  },
  {
    id: "s-a4",
    productTypeId: "pt-a4",
    brandId: "b2",
    name: { 
      ru: "Сварные поршневые гидроаккумуляторы — серия AP(L)", 
      en: "Welded Piston Accumulators — AP(L) Series", 
      kk: "AP(L) сериялы дәнекерленген поршеньді гидроаккумуляторлар" 
    },
    slug: "ap-l-piston-accumulators",
    descriptionHtml: { 
      ru: "Поршневые аккумуляторы AP(L) изготовлены из кованой стали с высоким механическим сопротивлением. Разделительный поршень оснащен уплотнениями, адаптированными к перекачиваемым жидкостям и рабочим температурам. Это современное решение для гидравлических контуров, обеспечивающее минимальные потери газа со временем и возможность монтажа в любом положении.",
      en: "AP(L) piston accumulators are built from a body made of high mechanical resistance forged steel. The fluid-gas separating piston is equipped with seals adapted to specific fluids and temperatures. These accumulators offer a modern solution for hydraulic circuits, guaranteeing very low gas loss over time and the flexibility to be mounted in any orientation.",
      kk: "AP(L) поршеньді аккумуляторлары жоғары механикалық кедергісі бар соғылған болаттан жасалған. Бөлетін поршень тасымалданатын сұйықтықтар мен жұмыс температурасына бейімделген тығыздағыштармен жабдықталған. Бұл гидравликалық контурлар үшін заманауи шешім, ол уақыт өте келе газдың минималды шығынын және кез келген қалыпта монтаждау мүмкіндігін қамтамасыз етеді."
    },
    images: ["/assets/images/products/leduc/accumulators/Поршневые_аккумуляторы_202609051429.jpeg"],
    datasheetUrl: "#",
    specRange: {
      "Полезный объем": { ru: "0.16 – 4 литра", en: "0.16 – 4 litres", kk: "0.16 – 4 литр" },
      "Макс. давление": { ru: "250 или 350 бар", en: "250 or 350 bar", kk: "250 немесе 350 бар" },
      "Темп. диапазон": { ru: "-20°C до +80°C", en: "-20°C to +80°C", kk: "-20°C-тан +80°C-қа дейін" },
      "Монтаж": { ru: "В любом положении", en: "Any orientation", kk: "Кез келген қалыпта" }
    },
    features: [
      { ru: "Высокая степень сжатия (compression ratio)", en: "Very high compression ratio support", kk: "Жоғары сығылу дәрежесі (compression ratio)" },
      { ru: "Полная и быстрая разрядка жидкости", en: "Total and fast discharge of the fluid", kk: "Сұйықтықтың толық және жылдам разрядталуы" },
      { ru: "Минимальные потери газа в течение срока службы", en: "Very low gas loss over time", kk: "Қызмет ету мерзімі ішінде газдың минималды шығыны" },
      { ru: "Длительный интервал обслуживания", en: "Long service interval", kk: "Ұзақ қызмет көрсету аралығы" }
    ],
    benefits: [
      { ru: "Универсальность монтажа (без привязки к положению)", en: "Can be mounted without position preference", kk: "Монтаждаудың әмбебаптығы (қалыпқа байланысты емес)" },
      { ru: "Адаптация уплотнений под различные жидкости", en: "Adaptable to specific fluids and temperatures", kk: "Әртүрлі сұйықтықтарға тығыздағыштарды бейімдеу" },
      { ru: "Высокая механическая прочность корпуса", en: "High mechanical resistance forged steel body", kk: "Корпустың жоғары механикалық беріктігі" },
      { ru: "Надежная работа в мобильной гидравлике", en: "Reliable performance in mobile hydraulics", kk: "Мобильді гидравликадағы сенімді жұмыс" }
    ],
    applications: [
      { ru: "Строительная и дорожная техника", en: "Construction and road equipment", kk: "Құрылыс және жол техникасы" },
      { ru: "Сельскохозяйственные машины", en: "Agricultural machinery", kk: "Ауыл шаруашылығы машиналары" },
      { ru: "Погрузочно-разгрузочное оборудование", en: "Material handling equipment", kk: "Тиеу-түсіру жабдықтары" },
      { ru: "Системы амортизации и хранения энергии", en: "Shock absorber and energy storage systems", kk: "Амортизация және энергия сақтау жүйелері" }
    ]
  },
];

export const SKUS: SKU[] = [
  { id: "sku1", seriesId: "s1", articleCode: "024-25515-000", description: { ru: "T6C B17 1R00 B1", en: "T6C B17 1R00 B1", kk: "T6C B17 1R00 B1" }, availability: "in_stock", attributes: { "Типоразмер": "B17", "Вращение": "Правое" } },
  { id: "sku2", seriesId: "s1", articleCode: "024-25515-001", description: { ru: "T6C B17 1R01 B1", en: "T6C B17 1R01 B1", kk: "T6C B17 1R01 B1" }, availability: "on_request", attributes: { "Типоразмер": "B17", "Вращение": "Левое" } },
  { id: "sku3", seriesId: "s1", articleCode: "024-25515-002", description: { ru: "T6C B17 1R02 B1", en: "T6C B17 1R02 B1", kk: "T6C B17 1R02 B1" }, availability: "in_stock", attributes: { "Типоразмер": "B17", "Вращение": "Правое" } },
  { id: "sku4", seriesId: "s1", articleCode: "024-25516-000", description: { ru: "T6D B22 1R00 B1", en: "T6D B22 1R00 B1", kk: "T6D B22 1R00 B1" }, availability: "on_request", attributes: { "Типоразмер": "B22", "Вращение": "Правое" } },
];

export const SERVICES: Service[] = [
  { 
    id: "rvd", 
    title: { ru: "Изготовление РВД", en: "Hose Assembly Fabrication", kk: "ЖҚЖ дайындау" },
    description: { 
      ru: "Производство рукавов высокого давления по образцу или чертежу.", 
      en: "Production of high pressure hoses according to sample or drawing.", 
      kk: "Үлгі немесе сызба бойынша жоғары қысымды жеңдерді өндіру." 
    },
    image: "/assets/images/services/rvd/пресс_S10_UNIFLEX_202608261305.jpeg"
  },
  { 
    id: "fittings", 
    title: { ru: "Монтаж трубных фитингов", en: "Tube Fitting Installation", kk: "Түтікті фитингтерді монтаждау" },
    description: { 
      ru: "Профессиональный монтаж трубных соединений любой сложности.", 
      en: "Professional installation of tube connections of any complexity.", 
      kk: "Кез келген күрделіліктегі түтікті қосылымдарды кәсіби монтаждау." 
    },
    image: "/assets/images/services/fittings/eo2_plus_parker_202608261533.jpeg"
  },
  { 
    id: "diagnostics", 
    title: { ru: "Диагностика систем", en: "System Diagnostics", kk: "Жүйелерді диагностикалау" },
    description: { 
      ru: "Выездная диагностика для поиска утечек и измерения параметров.", 
      en: "On-site diagnostics for leak detection and parameter measurement.", 
      kk: "Сыртқа шығып ағып кетуді іздеу және параметрлерді өлшеу үшін диагностикалау." 
    },
    image: "/assets/images/services/diagnostics/Diagnostic_equipment_kit_arranged_202608271308.jpeg"
  },
];

