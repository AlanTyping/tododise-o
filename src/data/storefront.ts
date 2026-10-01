export type StorefrontProduct = {
  slug: string;
  name: string;
  category: string;
  price?: string;
  image: string;
  imageAlt: string;
  accent: string;
  imagePosition?: string;
};

export type StorefrontCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  secondLine: string;
  description: string;
  tone: string;
  filters: string[];
};

export const categories: StorefrontCategory[] = [
  {
    slug: "vasos",
    name: "Vasos",
    eyebrow: "Vasos",
    secondLine: "Personalizados",
    description: "Diseñados para regalar, compartir y recordar. Personalizalos con nombres, frases o temáticas.",
    tone: "#e47e6b",
    filters: ["Vasos térmicos", "Vasos de vidrio", "Vasos con tapa", "Cumpleaños", "Kits"],
  },
  {
    slug: "termos",
    name: "Termos",
    eyebrow: "Termos",
    secondLine: "para todos los días",
    description: "Objetos que acompañan cada plan, con tu nombre, tu color y tu manera de hacerlos propios.",
    tone: "#82968b",
    filters: ["Botellas", "Acero inoxidable", "Regalos"],
  },
  {
    slug: "mates",
    name: "Mates",
    eyebrow: "Mates",
    secondLine: "con identidad",
    description: "Un ritual de todos los días, convertido en un regalo pensado especialmente para vos.",
    tone: "#9d7869",
    filters: ["Mates", "Sets", "Regalos"],
  },
  {
    slug: "combos",
    name: "Combos",
    eyebrow: "Combos",
    secondLine: "para compartir",
    description: "Ideas listas para regalar, personalizadas con los detalles que cuentan tu historia.",
    tone: "#c28f68",
    filters: ["Sets", "Cumpleaños", "Regalos"],
  },
  {
    slug: "souvenirs",
    name: "Souvenirs",
    eyebrow: "Souvenirs",
    secondLine: "para recordar",
    description: "Detalles hechos para quedarse con un pedacito de los momentos que más importan.",
    tone: "#987688",
    filters: ["Cumpleaños", "Eventos", "Sets"],
  },
  {
    slug: "corporativos",
    name: "Corporativos",
    eyebrow: "Regalos",
    secondLine: "para tu marca",
    description: "Merchandising con calidez y diseño, creado a la medida de tu equipo y tu marca.",
    tone: "#739587",
    filters: ["Empresas", "Eventos", "Kits"],
  },
];

const unsplash = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const pexels = (id: string) => `https://images.pexels.com/photos/${id}`;

export const products: StorefrontProduct[] = [
  {
    slug: "vaso-termico-500ml-personalizado",
    name: "Vaso Térmico 500ml",
    category: "vasos",
    price: "$18.500",
    image: pexels("14698376/pexels-photo-14698376.jpeg"),
    imageAlt: "Botella térmica verde en un entorno natural, fotografía de Yasin Tetik en Pexels",
    accent: "#e4826f",
  },
  {
    slug: "vaso-con-tapa-y-pico",
    name: "Vaso con Tapa y Pico",
    category: "vasos",
    price: "$14.900",
    image: unsplash("photo-1690921822670-5929218ab41d"),
    imageAlt: "Vaso de vidrio con hojas de menta, fotografía de Monika Borys en Unsplash",
    accent: "#86988e",
  },
  {
    slug: "vaso-vidrio-templado",
    name: "Vaso Vidrio Templado",
    category: "vasos",
    price: "$11.200",
    image: unsplash("photo-1533418626725-7555a0cae906"),
    imageAlt: "Vaso de vidrio con bebida fresca, fotografía de enrico bet en Unsplash",
    accent: "#729285",
  },
  {
    slug: "vaso-personalizado-cumpleanos",
    name: "Vaso Personalizado Cumpleaños",
    category: "souvenirs",
    price: "$7.800",
    image: unsplash("photo-1530103862676-de8c9debad1d"),
    imageAlt: "Globos de colores para celebrar un cumpleaños, fotografía de Adi Goldstein en Unsplash",
    accent: "#df8c7c",
  },
  {
    slug: "set-6-vasos-souvenirs",
    name: "Set 6 Vasos Souvenirs",
    category: "combos",
    price: "$36.000",
    image: unsplash("photo-1618498733959-e2b6cf63adcd"),
    imageAlt: "Vasos con una bebida cítrica, fotografía de Tiago Pedro en Unsplash",
    accent: "#c18b72",
  },
  {
    slug: "vaso-acero-inox-350ml",
    name: "Vaso Acero Inox 350ml",
    category: "vasos",
    price: "$16.900",
    image: pexels("15110905/pexels-photo-15110905.jpeg"),
    imageAlt: "Botella térmica verde en un fondo oscuro, fotografía de John Andrew Nolia Blazo en Pexels",
    accent: "#8fa49a",
  },
  {
    slug: "vaso-plastico-duro-con-nombre",
    name: "Vaso Plástico Duro con Nombre",
    category: "vasos",
    price: "$6.900",
    image: unsplash("photo-1780963135005-277cf8028367"),
    imageAlt: "Cóctel preparado en vaso de vidrio, fotografía de Guillermo Velarde en Unsplash",
    accent: "#e4a479",
  },
  {
    slug: "vaso-transparente-impreso",
    name: "Vaso Transparente Impreso",
    category: "corporativos",
    price: "$8.200",
    image: pexels("6312177/pexels-photo-6312177.jpeg"),
    imageAlt: "Taza blanca de cerámica sobre una mesa clara, fotografía de KATRIN BOLOVTSOVA en Pexels",
    accent: "#899c91",
  },
  {
    slug: "kit-vasos-cumpleanos-x12",
    name: "Kit Vasos Cumpleaños x12",
    category: "combos",
    price: "$64.800",
    image: unsplash("photo-1604080907141-8476a60708dc"),
    imageAlt: "Globos rosados y amarillos para una fiesta, fotografía de Ali Kokab en Unsplash",
    accent: "#de8a77",
  },
  {
    slug: "mate-imperial-personalizado",
    name: "Mate Imperial Personalizado",
    category: "mates",
    price: "$26.900",
    image: unsplash("photo-1643005498149-c7684a669bcf"),
    imageAlt: "Vaso de té oscuro en una mesa, fotografía de Timur Garifov en Unsplash",
    accent: "#b78f75",
  },
  {
    slug: "botella-termica-750ml",
    name: "Botella Térmica 750ml",
    category: "termos",
    price: "$22.500",
    image: pexels("14698376/pexels-photo-14698376.jpeg"),
    imageAlt: "Botella térmica verde en un entorno natural, fotografía de Yasin Tetik en Pexels",
    accent: "#81968b",
  },
];

export const productColors = [
  { name: "Terracota", hex: "#e27f6c" },
  { name: "Azul petróleo", hex: "#284653" },
  { name: "Salvia", hex: "#91a49a" },
  { name: "Carbón", hex: "#303737" },
  { name: "Rosa", hex: "#dfa1a1" },
  { name: "Marfil", hex: "#f4f0eb" },
];

export const occasions = [
  { title: "Cumpleaños", text: "Un detalle pensado para esa persona que querés celebrar.", icon: "gift" },
  { title: "Casamientos", text: "Souvenirs con identidad para acompañar un día inolvidable.", icon: "star" },
  { title: "Eventos", text: "Pequeños objetos que hacen que cada encuentro quede en la memoria.", icon: "users" },
  { title: "Emprendimientos", text: "Merchandising que habla de tu marca con calidez y diseño.", icon: "tag" },
];

export const orderSteps = [
  { title: "Consulta", text: "Elegí el producto que más te guste y coordinamos por WhatsApp para definir el diseño.", icon: "message" },
  { title: "Diseño", text: "Te enviamos una muestra digital personalizada con tu nombre, logo o frase favorita.", icon: "palette" },
  { title: "Producción", text: "Una vez aprobado el diseño, pasamos a producción con tecnología láser o sublimación premium.", icon: "check" },
  { title: "Entrega", text: "Coordinamos el envío a todo el país o podés retirar por nuestro punto de entrega.", icon: "truck" },
];

export const personalizationIdeas = [
  { title: "Un deseo que acompaña", label: "Cumpleaños", copy: "Nombres, fechas y frases que convierten cada brindis en un recuerdo.", tone: "#efaa98", sample: "Feliz cumple" },
  { title: "Tu marca, todos los días", label: "Corporativo", copy: "Logos y paletas de marca aplicados con precisión para equipos y eventos.", tone: "#91a69e", sample: "estudio norte" },
  { title: "Pequeños gestos", label: "Romántico", copy: "Una frase propia o una fecha especial para llevar cerca lo importante.", tone: "#d9a5a1", sample: "vos + yo" },
];
