import type { Product } from "./types";
import {
  catalogAdvantagesHy,
  catalogApplicationHy,
  catalogBaseOilHy,
  catalogDescHy,
  catalogShortHy,
} from "./armenianCatalog";

export type CatalogEntry = {
  name: string;
  category: string;
  subcategory: string;
  descRu: string;
  descEn: string;
  shortRu?: string;
  shortEn?: string;
  isoVg?: string[];
  nlgi?: string[];
  suffix?: string;
  temperature?: string;
  baseOilRu?: string;
  baseOilEn?: string;
  color?: string;
  viscosityNote?: string;
  foodGrade?: boolean;
  nsfH1?: boolean;
  synthetic?: boolean;
  mineral?: boolean;
  certificates?: string[];
  industries?: string[];
  equipment?: string[];
  tags?: string[];
  applicationsRu?: string[];
  applicationsEn?: string[];
};

const DEFAULT_TEMP = "-20°C to +120°C";
const DEFAULT_BASE_RU = "Минеральное";
const DEFAULT_BASE_EN = "Mineral";

function oil(
  name: string,
  subcategory: string,
  isoVg: string[],
  opts: Partial<CatalogEntry> = {}
): CatalogEntry {
  return {
    name,
    category: "industrial-oils",
    subcategory,
    descRu: `${name} — промышленное масло COGELSA европейского качества`,
    descEn: `${name} — COGELSA industrial oil of European quality`,
    isoVg,
    mineral: true,
    ...opts,
  };
}

function grease(
  name: string,
  subcategory: string,
  nlgi: string[],
  opts: Partial<CatalogEntry> = {}
): CatalogEntry {
  return {
    name,
    category: "industrial-greases",
    subcategory,
    descRu: `${name} — промышленная смазка COGELSA европейского качества`,
    descEn: `${name} — COGELSA industrial grease of European quality`,
    nlgi,
    mineral: true,
    ...opts,
  };
}

function single(
  name: string,
  category: string,
  subcategory: string,
  opts: Partial<CatalogEntry> = {}
): CatalogEntry {
  return {
    name,
    category,
    subcategory,
    descRu: `${name} — продукт COGELSA европейского качества`,
    descEn: `${name} — COGELSA product of European quality`,
    mineral: true,
    ...opts,
  };
}

function cleaner(
  name: string,
  subcategory: string,
  descRu: string,
  descEn: string,
  opts: Partial<CatalogEntry> = {}
): CatalogEntry {
  return {
    name,
    category: "industrial-cleaners",
    subcategory,
    descRu,
    descEn,
    ...opts,
  };
}

function textile(
  name: string,
  subcategory: string,
  opts: Partial<CatalogEntry> = {}
): CatalogEntry {
  return single(name, "textile-lubricants", subcategory, {
    industries: ["textile"],
    ...opts,
  });
}

function metalworking(
  name: string,
  subcategory: string,
  opts: Partial<CatalogEntry> = {}
): CatalogEntry {
  return single(name, "metalworking-fluids", subcategory, opts);
}

function spray(name: string, subcategory: string, opts: Partial<CatalogEntry> = {}): CatalogEntry {
  return single(name, "industrial-sprays", subcategory, opts);
}

// ─── CLEANERS: water-soluble ───────────────────────────────────────────────
const cleanersWater: CatalogEntry[] = [
  cleaner("ULTRADEG WASH D50", "water-soluble-cleaners",
    "Нейтральный обезжириватель для общей очистки поверхностей. Применяется для уборки рабочих мест, машин, деталей и кабин ветряных электростанций. Одобрено Siemens-Gamesa. Внешний вид: синяя жидкость. Плотность 1,0 кг/л. pH 9,8. Рефрактометрический фактор 9,8. Опрыскивание/ручное, без разбавления, атмосферная температура. Материалы: железо, алюминий, медь, краска, керамика.",
    "Neutral degreaser for general surface cleaning. Workplaces, machines, parts and wind turbine cabins. Siemens-Gamesa approved. Appearance: blue liquid. Density 1.0 kg/l. pH 9.8. Refractometric factor 9.8. Spray/manual, ready-to-use, ambient temperature. Materials: iron, aluminium, copper, paint, ceramics.",
    { color: "Синяя жидкость", temperature: "Атмосферная" }),
  cleaner("ULTRADEG 6020", "water-soluble-cleaners",
    "Нейтральный энергетический обезжириватель для генеральной очистки поверхностей закрытых помещений и металлоконструкций. Высокая биоразлагаемость. Внешний вид: янтарная жидкость. Плотность 1,0 кг/л. pH 8,0. Рефрактометрический фактор 4,0. Распыление / струя высокого давления. Концентрация 0,5–50%. Температура 20–70 °C. Материалы: сталь, керамика.",
    "Neutral multipurpose degreaser for indoor surfaces and metal structures. Highly biodegradable. Appearance: amber liquid. Density 1.0 kg/l. pH 8.0. Refractometric factor 4.0. Spray / high-pressure jet. Concentration 0.5–50%. Temperature 20–70 °C. Materials: steel, ceramics.",
    { color: "Янтарная жидкость", temperature: "20–70 °C" }),
  cleaner("ULTRADEG WS 80", "water-soluble-cleaners",
    "Универсальный экологический очиститель для мойки под высоким давлением с лимонным ароматом. Янтарная жидкость. Плотность 1,01 кг/л. pH 9,4. Рефрактометрический фактор 3,0. Распыление, погружение, ультразвук. Концентрация 2–5%. Температура 35–70 °C. Материалы: сталь, алюминий.",
    "Universal ecological high-pressure cleaner with lemon scent. Amber liquid. Density 1.01 kg/l. pH 9.4. Refractometric factor 3.0. Spray, immersion, ultrasound. Concentration 2–5%. Temperature 35–70 °C. Materials: steel, aluminium.",
    { color: "Янтарная жидкость", temperature: "35–70 °C" }),
  cleaner("STANDARD CLEAN 50", "water-soluble-cleaners",
    "Универсальный экологический очиститель для мойки под высоким давлением с лимонным ароматом. Янтарная жидкость. Плотность 1,01 кг/л. pH 10,5. Рефрактометрический фактор 3,7. Высокое давление, пар. Концентрация 0,5–50%. Температура 40–60 °C. Материалы: сталь, алюминий, пластик, керамика.",
    "Universal ecological high-pressure cleaner with lemon scent. Amber liquid. Density 1.01 kg/l. pH 10.5. Refractometric factor 3.7. High pressure, steam. Concentration 0.5–50%. Temperature 40–60 °C. Materials: steel, aluminium, plastic, ceramics.",
    { color: "Янтарная жидкость", temperature: "40–60 °C" }),
  cleaner("ULTRADEG ALCA EM", "water-soluble-cleaners",
    "Щелочное моющее средство с высоким уровнем ингибирования коррозии. Янтарная жидкость. Плотность 1,01 кг/л. pH 10,6. Рефрактометрический фактор 2,4. Спрей, высокое давление. Концентрация 0,5–50%. Температура 30–70 °C. Материалы: сталь, алюминий.",
    "Alkaline detergent with strong corrosion inhibition. Amber liquid. Density 1.01 kg/l. pH 10.6. Refractometric factor 2.4. Spray, high pressure. Concentration 0.5–50%. Temperature 30–70 °C. Materials: steel, aluminium.",
    { color: "Янтарная жидкость", temperature: "30–70 °C" }),
  cleaner("ULTRADEG 2068", "water-soluble-cleaners",
    "Высокощелочной обезжириватель для сложных и сильно замасленных деталей, очистителей, вентиляционного оборудования. Янтарная жидкость. Плотность 1,05 кг/л. pH 13,0. Рефрактометрический фактор 3,1. Погружение, высокое давление, распыление. Концентрация 1–10%. Температура 20–60 °C. Материалы: нержавеющая сталь, сталь.",
    "Highly alkaline degreaser for heavily soiled parts, cleaners and ventilation equipment. Amber liquid. Density 1.05 kg/l. pH 13.0. Refractometric factor 3.1. Immersion, high pressure, spray. Concentration 1–10%. Temperature 20–60 °C. Materials: stainless steel, steel.",
    { color: "Янтарная жидкость", temperature: "20–60 °C" }),
  cleaner("ULTRADEG 2090", "water-soluble-cleaners",
    "Активное моющее средство для очистки распылением в быстрых технологических процессах. Янтарная жидкость. Плотность 1,42 кг/л. pH 14,0. Рефрактометрический фактор 1,7. Погружение, ультразвук. Концентрация 0,5–8%. Температура 40–80 °C. Материалы: нержавеющая сталь, стали.",
    "Active detergent for spray cleaning in fast processes. Amber liquid. Density 1.42 kg/l. pH 14.0. Refractometric factor 1.7. Immersion, ultrasound. Concentration 0.5–8%. Temperature 40–80 °C. Materials: stainless steel, steels.",
    { color: "Янтарная жидкость", temperature: "40–80 °C" }),
  cleaner("ULTRADEG 2094 AL", "water-soluble-cleaners",
    "Нейтральное моющее средство для различных металлов. Особенно для алюминия и обезжиривания погружением. Янтарная жидкость. Плотность 1,08 кг/л. pH 10,0. Рефрактометрический фактор 2,0. Погружение. Концентрация 0,5–50%. Температура 35–80 °C. Материалы: алюминий и сплавы, медь, сталь.",
    "Neutral detergent for various metals. Especially suitable for aluminium and immersion degreasing. Amber liquid. Density 1.08 kg/l. pH 10.0. Refractometric factor 2.0. Immersion. Concentration 0.5–50%. Temperature 35–80 °C. Materials: aluminium alloys, copper, steel.",
    { color: "Янтарная жидкость", temperature: "35–80 °C" }),
  cleaner("ULTRADEG 3849", "water-soluble-cleaners",
    "Концентрированное кислотное моющее средство для удаления органических и неорганических отложений. Отлично удаляет стеараты в катушках экструдированной проволоки. Янтарная жидкость. Плотность 1,05 кг/л. pH 1,02. Рефрактометрический фактор 2,5. Погружение. Концентрация 2–5%. Температура 35–70 °C. Материалы: нержавеющая сталь, стали.",
    "Concentrated acid detergent for organic and inorganic deposits. Excellent for stearates on extruded wire coils. Amber liquid. Density 1.05 kg/l. pH 1.02. Refractometric factor 2.5. Immersion. Concentration 2–5%. Temperature 35–70 °C. Materials: stainless steel, steels.",
    { color: "Янтарная жидкость", temperature: "35–70 °C" }),
  cleaner("ULTRADEG DECALER", "water-soluble-cleaners",
    "Специальное средство для удаления окалины после сварки нержавеющей стали (и для стали — после применения разбавить и нанести антикоррозионную защиту). Желтоватая жидкость. Плотность 1,33 кг/л. pH 2,0. Ручное нанесение кистью. Концентрация 50–100%. Температура 15–25 °C. Материалы: нержавеющая сталь.",
    "Special scale remover after stainless steel welding (also for steel — dilute and apply corrosion protection afterwards). Yellowish liquid. Density 1.33 kg/l. pH 2.0. Manual brush application. Concentration 50–100%. Temperature 15–25 °C. Materials: stainless steel.",
    { color: "Желтоватая жидкость", temperature: "15–25 °C" }),
  cleaner("ULTRADEG 5000 ATOX", "water-soluble-cleaners",
    "Универсальный нейтральный нетоксичный обезжириватель с высокой биоразлагаемостью. Для пищевой промышленности, международный допуск NSF. Янтарная жидкость. Плотность 1,01 кг/л. pH 9,8. Рефрактометрический фактор 4,7. Распыление, погружение, УЗИ. Концентрация 5–25%. Температура 20–70 °C. Материалы: сталь, алюминий.",
    "Universal neutral non-toxic highly biodegradable degreaser. Designed for food industry with international NSF approval. Amber liquid. Density 1.01 kg/l. pH 9.8. Refractometric factor 4.7. Spray, immersion, ultrasound. Concentration 5–25%. Temperature 20–70 °C. Materials: steel, aluminium.",
    { foodGrade: true, nsfH1: true, certificates: ["iso-9001", "nsf-h1"], color: "Янтарная жидкость", temperature: "20–70 °C" }),
  cleaner("STANDARD SYSTEM CLEANER", "water-soluble-cleaners",
    "Очиститель систем промышленного оборудования. Для промывки контуров и резервуаров. Добавляется в эмульсии перед заменой. Янтарная жидкость. Плотность 1,05 кг/л. pH 11,0. Рефрактометрический фактор 4,7. Концентрация 1,2%. Температура 20–40 °C.",
    "Industrial system cleaner for flushing circuits and tanks. Added to spent emulsions before change-out. Amber liquid. Density 1.05 kg/l. pH 11.0. Refractometric factor 4.7. Concentration 1.2%. Temperature 20–40 °C.",
    { color: "Янтарная жидкость", temperature: "20–40 °C" }),
];

// ─── CLEANERS: solvent ─────────────────────────────────────────────────────
const cleanersSolvent: CatalogEntry[] = [
  cleaner("ULTRADEG 20", "solvent-cleaners",
    "Деароматизированные алифатические углеводороды с высокой испаряемостью. Ручное обезжиривание. Бесцветная жидкость. Плотность 0,86 кг/л. Вязкость 0,8 сСт. Температура воспламенения 30 °C.",
    "Dearomatized aliphatic hydrocarbons with high volatility. Manual degreasing. Colourless liquid. Density 0.86 kg/l. Viscosity 0.8 cSt. Flash point 30 °C.",
    { color: "Бесцветная", viscosityNote: "0,8 сСт", temperature: "Flash point 30 °C" }),
  cleaner("ULTRADEG 20 ALH", "solvent-cleaners",
    "Смесь деароматизированных алифатических углеводородов с высокой испаряемостью и спирта. Ручное обезжиривание. Бесцветная жидкость. Плотность 0,86 кг/л. Вязкость 0,8 сСт. Температура воспламенения 30 °C.",
    "Blend of dearomatized aliphatic hydrocarbons with high volatility and alcohol. Manual degreasing. Colourless liquid. Density 0.86 kg/l. Viscosity 0.8 cSt. Flash point 30 °C.",
    { color: "Бесцветная", viscosityNote: "0,8 сСт", temperature: "Flash point 30 °C" }),
  cleaner("STANDARD CLEAN M-4", "solvent-cleaners",
    "Моющийся состав для обезжиривания двигателей и генеральной очистки на основе деароматизированных, антикоррозионных и поверхностно-активных углеводородов. Желтоватая жидкость. Плотность 0,81 кг/л. Вязкость 1,2 сСт. Температура воспламенения 45 °C.",
    "Washable engine degreaser and general cleaner based on dearomatized anticorrosion surfactant hydrocarbons. Yellowish liquid. Density 0.81 kg/l. Viscosity 1.2 cSt. Flash point 45 °C.",
    { color: "Желтоватая", viscosityNote: "1,2 сСт", temperature: "Flash point 45 °C" }),
  cleaner("ULTRADEG 40", "solvent-cleaners",
    "Деароматизированные алифатические углеводороды быстрого испарения. Ручное обезжиривание. Бесцветная жидкость. Плотность 0,75 кг/л. Вязкость 0,9 сСт. Температура воспламенения 44 °C.",
    "Fast-evaporating dearomatized aliphatic hydrocarbons. Manual degreasing. Colourless liquid. Density 0.75 kg/l. Viscosity 0.9 cSt. Flash point 44 °C.",
    { color: "Бесцветная", viscosityNote: "0,9 сСт", temperature: "Flash point 44 °C" }),
  cleaner("ULTRADEG 50 AL", "solvent-cleaners",
    "Летучий растворитель со слабым запахом. Ручное обезжиривание и ламинирование цветных металлов. Сертификат пищевой промышленности C1. Бесцветная жидкость. Плотность 0,73 кг/л. Вязкость 1 сСт. Температура воспламенения 50 °C.",
    "Volatile low-odour solvent. Manual degreasing and non-ferrous metal laminating. Food-industry C1 certificate. Colourless liquid. Density 0.73 kg/l. Viscosity 1 cSt. Flash point 50 °C.",
    { foodGrade: true, color: "Бесцветная", viscosityNote: "1 сСт", temperature: "Flash point 50 °C" }),
  cleaner("ULTRADEG 65", "solvent-cleaners",
    "Промежуточный летучий растворитель со слабым ароматом. Ручное обезжиривание, погружение, распыление. Пищевой класс C1 (NSF и Halal). Также в аэрозоле. Бесцветная жидкость. Плотность 0,76 кг/л. Вязкость 1,2 сСт. Температура воспламенения 62 °C.",
    "Intermediate volatile low-odour solvent. Manual degreasing, immersion, spray. Food grade C1 (NSF and Halal). Also available as aerosol. Colourless liquid. Density 0.76 kg/l. Viscosity 1.2 cSt. Flash point 62 °C.",
    { nsfH1: true, certificates: ["iso-9001", "nsf-h1", "halal"], color: "Бесцветная", viscosityNote: "1,2 сСт", temperature: "Flash point 62 °C" }),
  cleaner("ULTRADEG 65 HS", "solvent-cleaners",
    "Промежуточный летучий синтетический растворитель со слабым ароматом. Высокая совместимость с эластомерами. Ручное обезжиривание, погружение, распыление. Бесцветная жидкость. Плотность 0,8 кг/л. Вязкость 1,3 сСт. Температура воспламенения 65 °C.",
    "Intermediate volatile synthetic low-odour solvent. High elastomer compatibility. Manual degreasing, immersion, spray. Colourless liquid. Density 0.8 kg/l. Viscosity 1.3 cSt. Flash point 65 °C.",
    { synthetic: true, mineral: false, color: "Бесцветная", viscosityNote: "1,3 сСт", temperature: "Flash point 65 °C" }),
  cleaner("ULTRADEG 236 S", "solvent-cleaners",
    "Деароматизированные алифатические углеводороды со средней испаряемостью для ручного обезжиривания. Бесцветная жидкость. Плотность 0,75 кг/л. Вязкость 2,1 сСт. Температура воспламенения 77 °C.",
    "Medium-volatility dearomatized aliphatic hydrocarbons for manual degreasing. Colourless liquid. Density 0.75 kg/l. Viscosity 2.1 cSt. Flash point 77 °C.",
    { color: "Бесцветная", viscosityNote: "2,1 сСт", temperature: "Flash point 77 °C" }),
  cleaner("ULTRADEG 5746 L", "solvent-cleaners",
    "Деароматизированный растворитель средней летучести для ручного обезжиривания с лимонным ароматом. Бесцветная жидкость. Плотность 0,75 кг/л. Вязкость 2,1 сСт. Температура воспламенения 62 °C.",
    "Medium-volatility dearomatized solvent for manual degreasing with lemon scent. Colourless liquid. Density 0.75 kg/l. Viscosity 2.1 cSt. Flash point 62 °C.",
    { color: "Бесцветная", viscosityNote: "2,1 сСт", temperature: "Flash point 62 °C" }),
  cleaner("ULTRADEG 680", "solvent-cleaners",
    "Растворитель на основе деароматизированных алифатических углеводородов. Соответствует NATO S-753 и MIL PRF 680 Type II. Для очистки при высоких требованиях к температуре воспламенения. Бесцветная жидкость. Плотность 0,80 кг/л. Вязкость 2,1 сСт. Температура воспламенения 77 °C.",
    "Dearomatized aliphatic hydrocarbon solvent. Meets NATO S-753 and MIL-PRF-680 Type II. For cleaning where high flash point is required. Colourless liquid. Density 0.80 kg/l. Viscosity 2.1 cSt. Flash point 77 °C.",
    { color: "Бесцветная", viscosityNote: "2,1 сСт", temperature: "Flash point 77 °C" }),
  cleaner("STANDARD CLEAN FC-5", "solvent-cleaners",
    "Деароматизированный растворитель БЕЗ ЛОС/VOC с низкой испаряемостью. Ручное обезжиривание, погружение, автоматическая промывка. Пищевой класс C1 (NSF и Halal). Бесцветная жидкость. Плотность 0,81 кг/л. Вязкость 2,2 сСт. Температура воспламенения 110 °C.",
    "VOC-free dearomatized low-volatility solvent. Manual degreasing, immersion, automatic washing. Food grade C1 (NSF and Halal). Colourless liquid. Density 0.81 kg/l. Viscosity 2.2 cSt. Flash point 110 °C.",
    { nsfH1: true, certificates: ["iso-9001", "nsf-h1", "halal"], color: "Бесцветная", viscosityNote: "2,2 сСт", temperature: "Flash point 110 °C" }),
  cleaner("ULTRADEG NC 14", "solvent-cleaners",
    "Растворитель без ЛОС с высокой температурой воспламенения. Для холодного ламинирования алюминия. Бесцветная жидкость. Плотность 0,77 кг/л. Вязкость 2,2 сСт. Температура воспламенения 105 °C.",
    "VOC-free high-flash-point solvent. Specially for cold aluminium laminating. Colourless liquid. Density 0.77 kg/l. Viscosity 2.2 cSt. Flash point 105 °C.",
    { color: "Бесцветная", viscosityNote: "2,2 сСт", temperature: "Flash point 105 °C" }),
  cleaner("ULTRADEG 38 NF", "solvent-cleaners",
    "НЕГОРЮЧИЙ летучий диэлектрический растворитель. Для очистки угольных щёток генераторов ветряных электростанций и чувствительных электрических компонентов. Одобрено Siemens Gamesa. Бесцветная жидкость. Плотность 1,24 кг/л. Вязкость < 1 сСт. Негорючий.",
    "NON-FLAMMABLE volatile dielectric solvent. For cleaning carbon brushes on wind turbine generators and sensitive electrical components. Siemens Gamesa approved. Colourless liquid. Density 1.24 kg/l. Viscosity < 1 cSt. Non-flammable.",
    { color: "Бесцветная", viscosityNote: "< 1 сСт", temperature: "Негорючий" }),
  cleaner("ULTRADEG 60 NF", "solvent-cleaners",
    "НЕГОРЮЧИЙ летучий диэлектрический растворитель. Для очистки щёток деталей и оборудования от сложных фторированных смазок. Бесцветная жидкость. Плотность 1,53 кг/л. Вязкость < 1 сСт. Негорючий.",
    "NON-FLAMMABLE volatile dielectric solvent. For cleaning brushes and equipment from advanced fluorinated greases. Colourless liquid. Density 1.53 kg/l. Viscosity < 1 cSt. Non-flammable.",
    { color: "Бесцветная", viscosityNote: "< 1 сСт", temperature: "Негорючий" }),
  cleaner("ULTRADEG 40 ATOX", "solvent-cleaners",
    "Специальная очищающая жидкость для валиков в картонной промышленности. Пищевой класс H1. Желтоватая или бесцветная жидкость. Плотность 0,86 кг/л. Вязкость 32 сСт. Температура воспламенения 200 °C.",
    "Special cleaning fluid for cardboard industry rollers. Food grade H1. Yellowish or colourless liquid. Density 0.86 kg/l. Viscosity 32 cSt. Flash point 200 °C.",
    { foodGrade: true, nsfH1: true, certificates: ["iso-9001", "nsf-h1"], color: "Желтоватая/бесцветная", viscosityNote: "32 сСт", temperature: "Flash point 200 °C" }),
  cleaner("STANDARD CLEAN UP", "solvent-cleaners",
    "Растворитель на основе ксилола. Для разбавления и удаления красок. Бесцветная жидкость. Плотность 0,87 кг/л. Вязкость < 1 сСт. Температура воспламенения 27 °C.",
    "Xylene-based solvent for thinning and removing paints. Colourless liquid. Density 0.87 kg/l. Viscosity < 1 cSt. Flash point 27 °C.",
    { color: "Бесцветная", viscosityNote: "< 1 сСт", temperature: "Flash point 27 °C" }),
  cleaner("DILUYENTE UN", "solvent-cleaners",
    "Универсальный растворитель — смесь ароматических углеводородов (толуол), эфиров и кетонов. Бесцветная жидкость. Плотность 0,86 кг/л. Вязкость < 1 сСт. Температура воспламенения 5 °C.",
    "Universal solvent — blend of aromatic hydrocarbons (toluene), esters and ketones. Colourless liquid. Density 0.86 kg/l. Viscosity < 1 cSt. Flash point 5 °C.",
    { color: "Бесцветная", viscosityNote: "< 1 сСт", temperature: "Flash point 5 °C" }),
];

const cleanersPlant: CatalogEntry[] = [
  cleaner("ULTRADEG BIO", "plant-based-cleaners",
    "Обезжириватель на основе экологичных растительных растворителей, без предупреждающих пиктограмм на этикетке. Эффективен для удаления полиуретановых выступов. Янтарная жидкость. Плотность 0,86 кг/л. Вязкость 4,8 сСт. Температура воспламенения 77 °C.",
    "Eco plant-based solvent degreaser with no hazard pictograms required. Especially effective against polyurethane residues. Amber liquid. Density 0.86 kg/l. Viscosity 4.8 cSt. Flash point 77 °C.",
    { synthetic: false, mineral: false, color: "Янтарная", viscosityNote: "4,8 сСт", temperature: "Flash point 77 °C" }),
];

const cleanersCircuit: CatalogEntry[] = [
  cleaner("DISPERSOIL", "circuit-cleaners",
    "Жидкость для очистки гидравлических контуров. Используется «как есть» методом промывки. Янтарная жидкость. Вязкость ISO VG 15 сСт.",
    "Hydraulic circuit cleaning fluid. Used neat by flushing. Amber liquid. Viscosity ISO VG 15 cSt.",
    { color: "Янтарная", viscosityNote: "15 сСт @ 40°C" }),
  cleaner("DISPERSOIL SOLV", "circuit-cleaners",
    "Специальная моющая добавка для очистки компрессоров. Рекомендуется 10% к объёму отработанного компрессорного масла перед сливом. Янтарная жидкость. Вязкость 30 сСт.",
    "Special detergent additive for compressor cleaning. Recommended at 10% of spent compressor oil volume before drain. Amber liquid. Viscosity 30 cSt.",
    { color: "Янтарная", viscosityNote: "30 сСт" }),
  cleaner("DISPERSOIL SYNT MP", "circuit-cleaners",
    "Высокоэффективная синтетическая жидкость для очистки мультипликаторов ветрогенераторов с маслами на основе ПАО/PAO. Желтоватая жидкость. Вязкость 5 сСт.",
    "High-performance synthetic fluid for cleaning wind turbine multipliers running PAO oils. Yellowish liquid. Viscosity 5 cSt.",
    { synthetic: true, mineral: false, color: "Желтоватая", viscosityNote: "5 сСт" }),
  cleaner("DISPERSOIL TC", "circuit-cleaners",
    "Концентрированная моющая добавка для очистки систем циркуляции масла. Добавляется 5% к отработанному маслу перед заменой. Янтарная жидкость. Вязкость 4 сСт.",
    "Concentrated detergent additive for oil circulation systems. Add 5% to spent oil before change. Amber liquid. Viscosity 4 cSt.",
    { color: "Янтарная", viscosityNote: "4 сСт" }),
];

// ─── TEXTILE: knitting ─────────────────────────────────────────────────────
const textileKnitting: CatalogEntry[] = [
  textile("ULTRATEX CR", "knitting-oils", { isoVg: ["22", "32", "46"], industries: ["textile"] }),
  textile("ULTRATEX LYC", "knitting-oils", { isoVg: ["22", "32"], industries: ["textile"] }),
  textile("ROS OIL A", "knitting-oils", {
    suffix: "-22 PLUS", descRu: "ROS OIL A-22 PLUS — масло для вязальных машин ISO VG 22", descEn: "ROS OIL A-22 PLUS — knitting machine oil ISO VG 22", viscosityNote: "ISO VG 22", industries: ["textile"],
  }),
  textile("ROS OIL A", "knitting-oils", {
    suffix: "-32 PLUS", descRu: "ROS OIL A-32 PLUS — масло для вязальных машин ISO VG 32", descEn: "ROS OIL A-32 PLUS — knitting machine oil ISO VG 32", viscosityNote: "ISO VG 32", industries: ["textile"],
  }),
  textile("ROS OIL A", "knitting-oils", {
    suffix: "-46 PLUS", descRu: "ROS OIL A-46 PLUS — масло для вязальных машин ISO VG 46", descEn: "ROS OIL A-46 PLUS — knitting machine oil ISO VG 46", viscosityNote: "ISO VG 46", industries: ["textile"],
  }),
  textile("ROS OIL A-22 PLUS TW", "knitting-oils", { viscosityNote: "ISO VG 22", industries: ["textile"] }),
  textile("ROS OIL W", "knitting-oils", { suffix: "-2", viscosityNote: "ISO VG 22", industries: ["textile"] }),
  textile("ROS OIL W", "knitting-oils", { suffix: "-3", viscosityNote: "ISO VG 32", industries: ["textile"] }),
  textile("ROS OIL W", "knitting-oils", { suffix: "-4", viscosityNote: "ISO VG 46", industries: ["textile"] }),
  textile("ROS OIL W", "knitting-oils", { suffix: "-5", viscosityNote: "ISO VG 68", industries: ["textile"] }),
  textile("ROS CLEAN", "knitting-oils", { industries: ["textile"] }),
];

// ─── TEXTILE: spinning ─────────────────────────────────────────────────────
const textileSpinning: CatalogEntry[] = [
  textile("ISOCARD A-30", "spinning-oils"),
  textile("ISOTEX", "spinning-oils"),
  textile("ISOTEX RM", "spinning-oils"),
  textile("ISOTEX AB", "spinning-oils"),
  textile("ISOTEX DT", "spinning-oils"),
  textile("ISOTEX 112", "spinning-oils"),
  textile("ISOTEXT NEW", "spinning-oils"),
  textile("ISOMED GGR", "spinning-oils"),
  textile("ISOIL OP 40", "spinning-oils", { viscosityNote: "ISO VG 40" }),
  textile("ISOIL 34", "spinning-oils", { viscosityNote: "ISO VG 34" }),
  textile("ISOIL PP", "spinning-oils"),
  textile("ISOIL PA 95", "spinning-oils"),
  textile("ULTRATEX S-50 THERMICAN", "spinning-oils"),
  textile("ISOWACH", "spinning-oils"),
  textile("ISOWACH 5", "spinning-oils"),
];

// ─── TEXTILE: spinning auxiliaries ─────────────────────────────────────────
const textileSpinAux: CatalogEntry[] = [
  textile("ISOSTATIC PAT", "spinning-auxiliaries"),
  textile("ISOSTATIC PAT 2", "spinning-auxiliaries"),
  textile("ISOSTATIC AN", "spinning-auxiliaries"),
  textile("HUMISOL 45", "spinning-auxiliaries"),
  textile("ISOSIL AN 4 NF", "spinning-auxiliaries"),
  textile("ISOSIL AN 3 NF", "spinning-auxiliaries"),
  textile("ISOSIL 360 CA", "spinning-auxiliaries"),
  textile("ISOGAL AE", "spinning-auxiliaries"),
];

// ─── TEXTILE: specialty ────────────────────────────────────────────────────
const textileSpecialty: CatalogEntry[] = [
  textile("ISOTEX T", "textile-specialty", { foodGrade: true, nsfH1: true, certificates: ["iso-9001", "nsf-h1"] }),
];

// ─── TEXTILE: greases ──────────────────────────────────────────────────────
const textileGreases: CatalogEntry[] = [
  single("LITKEN BLANC 2", "industrial-greases", "lithium-greases", { descRu: "LITKEN BLANC 2 — белая литиевая смазка NLGI 2 для текстильного оборудования", descEn: "LITKEN BLANC 2 — white lithium grease NLGI 2 for textile equipment", industries: ["textile"] }),
  single("ULTRAPLEX LT 2", "industrial-greases", "lithium-complex-greases", { industries: ["textile"] }),
  single("ULTRAPLEX LT 2 PTFE", "industrial-greases", "ptfe-greases", { industries: ["textile"], synthetic: true }),
  single("ULTRAPLEX XT 2 SYNT", "industrial-greases", "lithium-complex-greases", { industries: ["textile"], synthetic: true, mineral: false }),
  single("ULTRAPLEX BA SYNT 24", "industrial-greases", "lithium-complex-greases", { industries: ["textile"], synthetic: true, mineral: false }),
  single("ULTRAPLEX TG 1 SYNT", "industrial-greases", "lithium-complex-greases", { industries: ["textile"], synthetic: true, mineral: false }),
  single("ULTRAPLEX CS 2", "industrial-greases", "calcium-sulfonate-greases", { industries: ["textile"] }),
  single("ULTRAGREASE TOP 2", "industrial-greases", "lithium-complex-greases", { industries: ["textile"] }),
  single("ULTRAPLEX BA 462", "industrial-greases", "lithium-complex-greases", { industries: ["textile"] }),
];

// ─── TEXTILE: equipment oils ───────────────────────────────────────────────
const textileEquipOils: CatalogEntry[] = [
  oil("ULTRAGEAR EP", "gear-oils", ["100", "150", "220", "320", "460", "680"], { industries: ["textile"] }),
  oil("ULTRAGEAR PG", "gear-oils", ["100", "150", "220", "320", "460", "680"], { industries: ["textile"], synthetic: true }),
  oil("ULTRASYNT EP", "gear-oils", ["150", "220", "320", "460", "680", "1000"], { industries: ["textile"], synthetic: true, mineral: false }),
  oil("ULTRASYNT WG", "gear-oils", ["100", "1000"], { industries: ["textile"], synthetic: true, mineral: false }),
  single("ULTRACHAIN HT 100 SG", "industrial-oils", "chain-oils", { industries: ["textile"], viscosityNote: "ISO VG 100" }),
  single("ULTRACHAIN HT 220", "industrial-oils", "chain-oils", { industries: ["textile"], viscosityNote: "ISO VG 220" }),
  single("ULTRACHAIN HT 320", "industrial-oils", "chain-oils", { industries: ["textile"], viscosityNote: "ISO VG 320" }),
  oil("ULTRACHAIN PRO", "chain-oils", ["150", "270", "460"], { industries: ["textile"] }),
  single("ACEITE TERMICO 3", "industrial-oils", "heat-transfer-fluids", { industries: ["textile"], temperature: "-10°C to +300°C" }),
  oil("STANDARD CP", "compressor-oils", ["32", "46", "68", "100", "150"], { industries: ["textile"] }),
  oil("PRESOL HM", "hydraulic-oils", ["10", "22", "32", "46", "68", "100", "150"], { industries: ["textile"] }),
  oil("STANDARD VAREN EP", "gear-oils", ["100", "150", "220", "320", "460", "680", "1000"], { industries: ["textile"] }),
];

// ─── TEXTILE: sprays ───────────────────────────────────────────────────────
const textileSprays: CatalogEntry[] = [
  spray("MOLISPRAY", "lubricant-sprays", { industries: ["textile"] }),
  spray("ULTRA MOLY DRY SPRAY", "lubricant-sprays", { industries: ["textile"] }),
  spray("MULTIUSO SPRAY", "lubricant-sprays", { industries: ["textile"] }),
  spray("MULTIGREASE SPRAY", "lubricant-sprays", { industries: ["textile"] }),
  spray("ULTRAGREASE TF SPRAY", "lubricant-sprays", { industries: ["textile"] }),
  spray("ULTRATEF H1 SPRAY", "food-grade-sprays", { industries: ["textile"], foodGrade: true, nsfH1: true }),
  spray("ULTRA CWF 1500 SPRAY", "lubricant-sprays", { industries: ["textile"] }),
];

// ─── INDUSTRIAL OILS (section I) ───────────────────────────────────────────
const industrialOils: CatalogEntry[] = [
  oil("ULTRA MF", "hydraulic-oils", ["10", "22", "32", "46", "68", "100", "150", "220"]),
  oil("ULTRA ATOX", "food-grade-oils", ["32", "46", "68", "100", "150", "220", "320", "460"], { foodGrade: true, nsfH1: true, certificates: ["iso-9001", "nsf-h1"] }),
  oil("ULTRASYNT ATOX", "food-grade-oils", ["32", "46", "68", "100", "150", "220", "320", "460", "680"], { foodGrade: true, nsfH1: true, synthetic: true, mineral: false, certificates: ["iso-9001", "nsf-h1"] }),
  oil("ULTRA VBA", "biodegradable-oils", ["46", "68"], { foodGrade: true, nsfH1: true, synthetic: false }),
  single("ULTRA BIO", "industrial-oils", "biodegradable-oils", { synthetic: false }),
  single("ULTRA BIO 100", "industrial-oils", "biodegradable-oils", { viscosityNote: "ISO VG 100", synthetic: false }),
  single("ULTRATEF H1 100", "industrial-oils", "food-grade-oils", { foodGrade: true, nsfH1: true, viscosityNote: "ISO VG 100" }),
  single("ULTRA CS 200 H1", "industrial-oils", "food-grade-oils", { foodGrade: true, nsfH1: true }),
  oil("ENGINE OIL", "universal-oils", ["100", "150"]),
  single("ULTRA SP 2", "industrial-oils", "special-oils"),
  single("ULTRAPRESS AG 5 LA", "industrial-oils", "pneumatic-oils"),
  single("ULTRAPRESS AG 68 LA", "industrial-oils", "pneumatic-oils", { viscosityNote: "ISO VG 68" }),
  oil("ULTRAGEAR LF", "gear-oils", ["220", "320"]),
  oil("ULTRASYNT FGT", "food-grade-oils", ["150"], { foodGrade: true, nsfH1: true, synthetic: true, mineral: false }),
  single("ULTRAGEAR BIO 460", "industrial-oils", "biodegradable-oils", { viscosityNote: "ISO VG 460" }),
  oil("STANDARD SLIP", "slideway-oils", ["68", "100", "150", "220", "320", "1000"]),
  single("STANDARD SINT 15", "industrial-oils", "spindle-oils", { viscosityNote: "ISO VG 15" }),
  oil("ULTRACHAIN PRO", "chain-oils", ["220", "320"]),
  single("ULTRA CLT", "industrial-oils", "compressor-oils"),
  single("ULTRA CLT 320", "industrial-oils", "compressor-oils", { viscosityNote: "ISO VG 320" }),
  single("STANDARD CLT 460", "industrial-oils", "compressor-oils", { viscosityNote: "ISO VG 460" }),
  single("ULTRACHAIN CPO 270", "industrial-oils", "chain-oils", { viscosityNote: "ISO VG 270" }),
  single("ULTRACHAIN CTP 145", "industrial-oils", "chain-oils", { viscosityNote: "ISO VG 145" }),
  single("ULTRADRY 320", "industrial-oils", "vacuum-oils", { viscosityNote: "ISO VG 320" }),
  single("ULTRACHAIN FG 220", "industrial-oils", "food-grade-oils", { foodGrade: true, nsfH1: true, viscosityNote: "ISO VG 220" }),
  single("ULTRALUBE P-6", "industrial-oils", "food-grade-oils", { foodGrade: true, nsfH1: true }),
  single("STICK PRESS AG 23", "industrial-oils", "pneumatic-oils"),
  oil("ULTRABAR HC", "hydraulic-oils", ["32", "46", "68"]),
  oil("ULTRABAR HS", "hydraulic-oils", ["32", "46", "68"]),
  single("STANDARD FRI 68", "industrial-oils", "hydraulic-oils", { viscosityNote: "ISO VG 68" }),
  oil("ULTRA SGT", "gear-oils", ["32", "68", "100"]),
  single("NEBULOIL 2", "industrial-oils", "pneumatic-oils"),
  single("SIVANO 1", "industrial-oils", "vacuum-oils", { viscosityNote: "ISO VG 10" }),
  single("SIVANO 6", "industrial-oils", "vacuum-oils", { viscosityNote: "ISO VG 22" }),
  single("WHITE SI 350", "industrial-oils", "vacuum-oils"),
  single("WHITE SI 1000", "industrial-oils", "vacuum-oils"),
  single("FARMOL 22", "industrial-oils", "hydraulic-oils", { viscosityNote: "ISO VG 15" }),
  single("FARMOL 33", "industrial-oils", "hydraulic-oils", { viscosityNote: "ISO VG 32" }),
  single("FARMOL 55", "industrial-oils", "hydraulic-oils", { viscosityNote: "ISO VG 68" }),
  single("FARMOL NL", "industrial-oils", "hydraulic-oils"),
  single("ULTRAFARM VDP-E", "industrial-oils", "food-grade-oils", { foodGrade: true }),
  single("ULTRAFARM 40", "industrial-oils", "food-grade-oils", { foodGrade: true }),
  single("ULTRASIL CUT 300", "industrial-oils", "special-oils"),
  single("WHITE OIL FILANTE", "industrial-oils", "food-grade-oils", { foodGrade: true }),
  single("ULTRATERMIC P 6", "industrial-oils", "heat-transfer-fluids", { foodGrade: true, nsfH1: true, temperature: "-10°C to +300°C" }),
  single("ULTRA HT 32", "industrial-oils", "heat-transfer-fluids", { viscosityNote: "ISO VG 32", temperature: "-10°C to +320°C" }),
  oil("ULTRA PFPE", "special-oils", ["150", "220", "460"], { synthetic: true, mineral: false }),
  single("ULTRASYNT PG 68", "industrial-oils", "gear-oils", { synthetic: true, mineral: false, viscosityNote: "ISO VG 68" }),
  single("ULTRASYNT IF 40", "industrial-oils", "compressor-oils", { synthetic: true, mineral: false, viscosityNote: "ISO VG 40" }),
];

// ─── INDUSTRIAL GREASES (section II) ───────────────────────────────────────
const industrialGreases: CatalogEntry[] = [
  single("GREASE CA T 2", "industrial-greases", "calcium-greases"),
  grease("GREASE MAR PLUS", "lithium-greases", ["2", "3"]),
  grease("GELSA", "lithium-greases", ["00", "0", "1", "2"]),
  grease("GELSA BIO", "lithium-greases", ["0", "1", "2"], { synthetic: false }),
  single("GELSA XEP 360", "industrial-greases", "lithium-greases"),
  single("CALCOGRAF BIO FLUID", "industrial-greases", "lithium-greases", { synthetic: false }),
  single("GELSA BIO FLUID", "industrial-greases", "lithium-greases", { synthetic: false }),
  single("CALCOGRAF BIO SYNT 015", "industrial-greases", "lithium-greases", { synthetic: true, mineral: false }),
  single("CALCOGRAF BIO HEAVY", "industrial-greases", "lithium-greases", { synthetic: false }),
  single("GELSA BIO HEAVY", "industrial-greases", "lithium-greases", { synthetic: false }),
  single("CALCOGRAF BIO 323", "industrial-greases", "lithium-greases", { synthetic: false }),
  single("GELSA LICA 2", "industrial-greases", "lithium-greases"),
  single("GELSA LT 215", "industrial-greases", "lithium-greases"),
  single("ULTRAGREASE BETA 2", "industrial-greases", "lithium-greases", { foodGrade: true, nsfH1: true }),
  grease("LITKEN R", "lithium-greases", ["1", "2", "3"]),
  single("LITKEN COTTON GREASE", "industrial-greases", "lithium-greases"),
  single("LITKEN WR 222", "industrial-greases", "lithium-greases"),
  grease("LITKEN EP", "lithium-greases", ["00", "0", "1", "2", "3", "4"]),
  grease("LITKEN HD", "lithium-greases", ["1", "2"]),
  single("LITKEMOL 71", "industrial-greases", "lithium-greases"),
  single("LITKEMOL 72", "industrial-greases", "lithium-greases"),
  grease("LITKEN MOLIBDENO", "lithium-greases", ["2", "3"]),
  single("LITKEN MOLY 2", "industrial-greases", "lithium-greases"),
  single("ULTRALIT HS 131 M5", "industrial-greases", "lithium-greases"),
  grease("LITKEN GMV", "lithium-greases", ["2", "3"]),
  single("ULTRALIT SEG 34", "industrial-greases", "lithium-greases"),
  grease("ULTRAPLEX LT", "lithium-complex-greases", ["1", "2", "3"]),
  grease("ULTRAPLEX LT PTFE", "ptfe-greases", ["1", "2"]),
  single("ULTRAGREASE GA 2", "industrial-greases", "lithium-complex-greases"),
  single("ULTRAPLEX LCH 12", "industrial-greases", "lithium-complex-greases"),
  grease("ULTRAPLEX TG SYNT", "lithium-complex-greases", ["0", "1"], { synthetic: true, mineral: false }),
  single("ULTRAPLEX MC 2", "industrial-greases", "lithium-complex-greases"),
  single("ULTRAPLEX AC 2", "industrial-greases", "aluminium-complex-greases"),
  single("ULTRAPLEX ACK 2", "industrial-greases", "aluminium-complex-greases"),
  single("ULTRAPLEX LTM 1500", "industrial-greases", "lithium-complex-greases"),
  single("ULTRAPLEX LTM 1", "industrial-greases", "lithium-complex-greases"),
  single("KRUPPER GREASE", "industrial-greases", "lithium-complex-greases"),
  single("ULTRAPLEX HP 2 SYNT", "industrial-greases", "lithium-complex-greases", { synthetic: true, mineral: false }),
  single("ULTRAPLEX CS 1", "industrial-greases", "calcium-sulfonate-greases"),
  single("ULTRAPLEX CS 1/2", "industrial-greases", "calcium-sulfonate-greases"),
  single("ULTRAPLEX CS 2", "industrial-greases", "calcium-sulfonate-greases"),
  single("ULTRAPLEX XCS 462", "industrial-greases", "calcium-sulfonate-greases"),
  grease("ULTRAPLEX MCS", "calcium-sulfonate-greases", ["1", "2"]),
  single("ULTRAPLEX CSFG 460", "industrial-greases", "calcium-sulfonate-greases", { foodGrade: true, nsfH1: true }),
  single("ULTRAPLEX CSFG 462", "industrial-greases", "calcium-sulfonate-greases", { foodGrade: true, nsfH1: true }),
  single("ULTRABEN 2", "industrial-greases", "lithium-complex-greases"),
  single("ULTRAGREASE ATOX 2", "industrial-greases", "lithium-complex-greases", { foodGrade: true, nsfH1: true }),
  single("ULTRAGREASE ALFA 2", "industrial-greases", "lithium-complex-greases", { foodGrade: true, nsfH1: true }),
  single("ULTRABEN VL 1004 TG", "industrial-greases", "lithium-complex-greases"),
  single("ULTRABEN SYNT 10004 TF", "industrial-greases", "lithium-complex-greases", { synthetic: true, mineral: false }),
  single("ULTRASIL GREASE 2", "industrial-greases", "silicone-greases", { synthetic: true }),
  grease("ULTRAGREASE TOP", "lithium-complex-greases", ["1"]),
  single("ULTRAPLEX AL 2", "industrial-greases", "aluminium-complex-greases"),
  grease("ULTRAPLEX FG", "lithium-complex-greases", ["00", "0", "1", "2"], { foodGrade: true, nsfH1: true }),
  single("ULTRAPLEX FG 462", "industrial-greases", "lithium-complex-greases", { foodGrade: true, nsfH1: true }),
  grease("ULTRAPLEX ALMA", "aluminium-complex-greases", ["1", "2"]),
  single("ULTRAPLEX ALMA 00", "industrial-greases", "aluminium-complex-greases"),
  grease("ULTRAPLEX ADH", "aluminium-complex-greases", ["1", "2"]),
  grease("ULTRAPLEX ALCA", "aluminium-complex-greases", ["00", "2"]),
  grease("ULTRAPLEX ALEA", "lithium-complex-greases", ["0", "2"]),
  grease("ULTRAPLEX ALEA 3000", "lithium-complex-greases", ["0", "00", "000"]),
  single("ULTRAPLEX HAMMER", "industrial-greases", "lithium-complex-greases"),
  single("ULTRAPLEX ALX 461", "industrial-greases", "aluminium-complex-greases"),
  single("ULTRAPLEX ALX 2", "industrial-greases", "aluminium-complex-greases"),
  single("ULTRAPLEX BA 1", "industrial-greases", "barium-complex-greases"),
  single("ULTRAPLEX BA 1/2", "industrial-greases", "barium-complex-greases"),
  single("ULTRAPLEX BA 2", "industrial-greases", "barium-complex-greases"),
  single("ULTRAPASTE CU 12", "industrial-greases", "copper-pastes"),
  single("ULTRAPASTE CU 25", "industrial-greases", "copper-pastes"),
  single("ULTRAPASTE CU 12 SF", "industrial-greases", "copper-pastes"),
  single("ULTRAPASTE XTG 320-12", "industrial-greases", "copper-pastes"),
  single("GELSA WAX PT", "industrial-greases", "pastes-waxes"),
];

// ─── METALWORKING (section III) ────────────────────────────────────────────
const metalworkingFluids: CatalogEntry[] = [
  metalworking("EMBATOL A", "forming-neat-oils"),
  metalworking("EMBATOL 10", "forming-neat-oils", { viscosityNote: "ISO VG 10" }),
  metalworking("EMBATOL 15", "forming-neat-oils", { viscosityNote: "ISO VG 15" }),
  metalworking("EMBATOL 20", "forming-neat-oils", { viscosityNote: "ISO VG 20" }),
  metalworking("EMBATOL 40", "forming-neat-oils", { viscosityNote: "ISO VG 40" }),
  metalworking("EMBATOL 95", "forming-neat-oils", { viscosityNote: "ISO VG 95" }),
  metalworking("ULTRALUB AC 5", "forming-neat-oils"),
  metalworking("ULTRALUB AC 25", "forming-neat-oils"),
  metalworking("ULTRALUB AC 70", "forming-neat-oils"),
  metalworking("ULTRALUB AC 90", "forming-neat-oils"),
  metalworking("ULTRALUB AC 100 EP", "forming-neat-oils"),
  metalworking("ULTRALUB AC 150", "forming-neat-oils"),
  metalworking("ULTRALUB AC 220", "forming-neat-oils"),
  metalworking("ULTRALUB SP 100", "forming-neat-oils"),
  metalworking("ULTRALUB SP 220", "forming-neat-oils"),
  metalworking("ULTRALUB SP 320", "forming-neat-oils"),
  metalworking("ULTRALUB SP 680", "forming-neat-oils"),
  metalworking("ULTRALUB SP 1050", "forming-neat-oils"),
  metalworking("ULTRALUB CF 500 EP", "forming-soluble-oils"),
  metalworking("ULTRALUB CF 800 MF", "forming-soluble-oils"),
  metalworking("ULTRALUB CF 907", "forming-soluble-oils"),
  metalworking("ULTRADRAW 110 T", "cold-drawing-oils"),
  metalworking("ULTRADRAW 150 EP", "cold-drawing-oils"),
  metalworking("ULTRADRAW E68", "cold-drawing-oils"),
  metalworking("ULTRADRAW SCL", "cold-drawing-oils"),
  metalworking("ULTRADRAW PASTE TK", "cold-drawing-oils"),
  metalworking("ULTRADRAW 805", "cold-drawing-oils"),
  metalworking("ULTRADRAW TDR", "cold-drawing-oils"),
  metalworking("ULTRALUB LIGHT", "forming-neat-oils"),
  metalworking("ULTRALUB EV 3", "forming-neat-oils"),
  metalworking("ULTRALUB EV 3 ATOX", "forming-neat-oils", { foodGrade: true, nsfH1: true }),
  metalworking("ULTRALUB EV 5", "forming-neat-oils"),
  metalworking("ULTRALUB EV 6 ATOX", "forming-neat-oils", { foodGrade: true, nsfH1: true }),
  metalworking("ULTRALUB EV 7 ATOX", "forming-neat-oils", { foodGrade: true, nsfH1: true }),
  metalworking("ULTRALUB EV 10 EP", "forming-neat-oils"),
  metalworking("ULTRALUB EV 15 EP", "forming-neat-oils"),
  metalworking("ULTRALUB EV 307 AL", "aluminum-cutting"),
  metalworking("ULTRALUB EV 350 AL", "aluminum-cutting"),
  metalworking("ULTRALUB EV 542", "forming-neat-oils"),
  metalworking("ULTRALUB EV 2645 S", "forming-soluble-oils"),
  metalworking("ECODRAW A-40", "cold-drawing-oils"),
  metalworking("ECODRAW A-80", "cold-drawing-oils"),
  metalworking("ECODRAW A-120", "cold-drawing-oils"),
  metalworking("ECODRAW A-70", "cold-drawing-oils"),
  metalworking("ECODRAW A-90", "cold-drawing-oils"),
  metalworking("ECODRAW A-100 ATOX", "cold-drawing-oils", { foodGrade: true, nsfH1: true }),
  metalworking("ECODRAW A-150", "cold-drawing-oils"),
  metalworking("ULTRACUT GR 10 S", "aluminum-cutting"),
  metalworking("ULTRALUB 105 TT", "forming-soluble-oils"),
  metalworking("ULTRACAST W 2100", "die-casting-fluids"),
  metalworking("INJECT Z", "die-casting-fluids"),
  metalworking("ULTRACAST 2070 MZK", "die-casting-fluids"),
  metalworking("ULTRACAST PST 460 M", "die-casting-fluids"),
  metalworking("ULTRACAST PST 460 V", "die-casting-fluids"),
  metalworking("ULTRACAST NB D20", "die-casting-fluids"),
  metalworking("ULTRACUT BIO ALC 25", "aluminum-cutting", { synthetic: false }),
  metalworking("ALUMOL FLUID 32", "aluminum-cutting", { viscosityNote: "ISO VG 32" }),
  metalworking("ALUMOL EV 450 S", "aluminum-cutting"),
  metalworking("ULTRALUB EV 9", "forming-neat-oils"),
  metalworking("ULTRALUB AC 127", "forming-neat-oils"),
  metalworking("ULTRALUB AC 161", "forming-neat-oils"),
  metalworking("ULTRALUB AC 280", "forming-neat-oils"),
  metalworking("PREVENT-RUST GR 10", "vanishing-oils"),
  metalworking("PREVENT-RUST A-80 HF", "vanishing-oils"),
  metalworking("PREVENT-RUST A-7", "vanishing-oils"),
  metalworking("ULTRACAST W 950", "die-casting-fluids"),
  metalworking("ULTRAFORGE GW 13", "forging-fluids"),
  metalworking("ULTRAFORGE EM", "forging-fluids"),
  metalworking("ULTRAFORGE B", "forging-fluids"),
  metalworking("ULTRACAST 209", "die-casting-fluids"),
  metalworking("ULTRACAST 85", "die-casting-fluids"),
];

// ─── CLEANERS/SPRAYS (section IV) ──────────────────────────────────────────
const cleanersSpraysIV: CatalogEntry[] = [
  cleaner("CLEANGRAFIC 10", "solvent-cleaners",
    "Водосмываемая жидкость для чистки печатных валов и резиновых полотен в полиграфии.",
    "Washable cleaner for printing rollers and rubber blankets in the graphic arts industry."),
  spray("DESBLOQUEANTE", "specialty-sprays", {
    descRu: "Универсальное проникающее средство (жидкий ключ) для удаления ржавчины и смазки мелких узлов.",
    descEn: "Universal penetrating fluid (liquid wrench) for freeing rusted parts and lubricating small assemblies.",
  }),
  spray("SILICON SPRAY", "lubricant-sprays", { synthetic: true }),
  spray("SOLDADURA SPRAY", "specialty-sprays"),
  spray("MULTILUBE PTFE SPRAY", "lubricant-sprays", { synthetic: true }),
  spray("MULTISLIP SPRAY", "lubricant-sprays"),
  spray("ULTRA MULTI FOOD SPRAY", "food-grade-sprays", { foodGrade: true, nsfH1: true }),
  spray("ULTRA ALEA 3000 MEDIUM SPRAY", "lubricant-sprays"),
];

// ─── Combined catalog ──────────────────────────────────────────────────────
export const catalogEntries: CatalogEntry[] = [
  ...cleanersWater,
  ...cleanersSolvent,
  ...cleanersPlant,
  ...cleanersCircuit,
  ...textileKnitting,
  ...textileSpinning,
  ...textileSpinAux,
  ...textileSpecialty,
  ...textileGreases,
  ...textileEquipOils,
  ...textileSprays,
  ...industrialOils,
  ...industrialGreases,
  ...metalworkingFluids,
  ...cleanersSpraysIV,
];

// ─── Builder helpers ───────────────────────────────────────────────────────
export function normalizeCatalogKey(name: string): string {
  return name
    .toUpperCase()
    .replace(/^COGELSA\s+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugFromName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function formatFamilyName(entry: CatalogEntry): string {
  if (entry.suffix) {
    const sep = entry.suffix.startsWith("-") || entry.suffix.startsWith("/") ? "" : " ";
    return `${entry.name}${sep}${entry.suffix}`;
  }
  return entry.name;
}

function defaultIndustries(category: string): string[] {
  switch (category) {
    case "textile-lubricants":
      return ["textile"];
    case "industrial-cleaners":
      return ["manufacturing", "automotive"];
    case "industrial-sprays":
      return ["manufacturing", "automotive"];
    case "metalworking-fluids":
      return ["mining", "steel", "automotive", "manufacturing"];
    default:
      return ["mining", "steel", "cement", "automotive", "energy"];
  }
}

function catalogImage(_num: number): string {
  return "/images/products/bochka-oil.jpg";
}

interface VariantSpec {
  fullName: string;
  isoVg?: string;
  nlgi?: string;
}

function getVariants(entry: CatalogEntry): VariantSpec[] {
  if (entry.isoVg?.length) {
    return entry.isoVg.map((vg) => ({
      fullName: `${entry.name} ${vg}`,
      isoVg: vg,
    }));
  }
  if (entry.nlgi?.length) {
    return entry.nlgi.map((n) => ({
      fullName: `${entry.name} ${n}`,
      nlgi: n,
    }));
  }
  return [{ fullName: formatFamilyName(entry) }];
}

function entryToProduct(
  entry: CatalogEntry,
  variant: VariantSpec,
  id: number,
  catalogNum: number,
  slug: string
): Product {
  const productName = `COGELSA ${variant.fullName}`;
  const industries = entry.industries ?? defaultIndustries(entry.category);
  const appsRu = entry.applicationsRu ?? ["Промышленное оборудование"];
  const appsEn = entry.applicationsEn ?? ["Industrial equipment"];

  return {
    id: `prod-${id}`,
    slug,
    name: { hy: productName, ru: productName, en: productName },
    category: entry.category,
    subcategory: entry.subcategory,
    description: {
      hy: catalogDescHy(entry, productName),
      ru: entry.descRu,
      en: entry.descEn,
    },
    shortDescription: {
      hy: catalogShortHy(entry, productName),
      ru: entry.shortRu ?? entry.descRu.split("—")[0].trim(),
      en: entry.shortEn ?? entry.descEn.split("—")[0].trim(),
    },
    image: catalogImage(catalogNum),
    gallery: [],
    applications: appsRu.map((ru, i) => ({
      hy: catalogApplicationHy,
      ru,
      en: appsEn[i] ?? appsEn[0],
    })),
    advantages: [
      { hy: catalogAdvantagesHy.quality, ru: "Европейское качество COGELSA", en: "COGELSA European quality" },
      { hy: catalogAdvantagesHy.life, ru: "Длительный срок службы", en: "Extended service life" },
    ],
    industries,
    equipment: entry.equipment ?? ["bearings", "gearboxes", "hydraulic-systems"],
    specifications: {
      ...(variant.isoVg ? { isoVg: variant.isoVg } : {}),
      ...(variant.nlgi ? { nlgi: variant.nlgi } : {}),
      baseOil: {
        hy: catalogBaseOilHy(entry),
        ru: entry.baseOilRu ?? (entry.synthetic ? "Синтетическое" : DEFAULT_BASE_RU),
        en: entry.baseOilEn ?? (entry.synthetic ? "Synthetic" : DEFAULT_BASE_EN),
      },
      temperature: entry.temperature ?? DEFAULT_TEMP,
      ...(entry.viscosityNote ? { viscosity: entry.viscosityNote } : {}),
      ...(entry.color ? { color: entry.color } : {}),
    },
    certificates: entry.certificates ?? ["iso-9001"],
    foodGrade: entry.foodGrade ?? false,
    nsfH1: entry.nsfH1 ?? false,
    synthetic: entry.synthetic ?? false,
    mineral: entry.mineral ?? !(entry.synthetic ?? false),
    tags: entry.tags ?? [entry.subcategory],
  };
}

export function buildCogelsaCatalogProducts(
  startId: number,
  startCatalogNum: number
): Product[] {
  const products: Product[] = [];
  const seenKeys = new Set<string>();
  const seenSlugs = new Set<string>();
  let id = startId;
  let catalogNum = startCatalogNum;

  for (const entry of catalogEntries) {
    for (const variant of getVariants(entry)) {
      const productName = `COGELSA ${variant.fullName}`;
      const key = normalizeCatalogKey(productName);
      if (seenKeys.has(key)) continue;
      seenKeys.add(key);

      const slug = slugFromName(productName);
      if (seenSlugs.has(slug)) continue;
      seenSlugs.add(slug);

      products.push(entryToProduct(entry, variant, id++, catalogNum++, slug));
    }
  }

  return products;
}
