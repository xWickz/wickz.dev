// Señales de confianza y FAQs del home, por idioma.
// TODO: añadir FAQ de precios y plazos cuando haya datos reales.

export const process = {
  es: [
    { title: "Conversamos", text: "Me cuentas qué vende tu negocio, a quién y cómo te contactan hoy tus clientes." },
    { title: "Propuesta", text: "Te digo qué te conviene (catálogo, menú, landing o algo a medida) y por qué." },
    { title: "Desarrollo", text: "Construyo la página y la revisamos juntos en el teléfono antes de publicarla." },
    { title: "Publicación", text: "La pongo en línea y te entrego el enlace listo para compartir." },
  ],
  en: [
    { title: "We talk", text: "You tell me what your business sells, to whom, and how customers reach you today." },
    { title: "Proposal", text: "I tell you what fits best (catalog, menu, landing page or custom) and why." },
    { title: "Build", text: "I build the page and we review it together on a phone before publishing." },
    { title: "Launch", text: "I put it online and hand you the link, ready to share." },
  ],
} as const;

export const homeFaqs = {
  es: [
    {
      q: "¿Qué servicios ofreces?",
      a: "Catálogos web, menús digitales con QR, landing pages, portafolios, desarrollo web full-stack a medida y apps multiplataforma para negocios y emprendedores.",
    },
    {
      q: "¿Qué diferencia hay entre un catálogo web, un menú digital y una landing page?",
      a: "El catálogo web muestra los productos de una tienda con fotos y precios. El menú digital es la carta de un restaurante que se abre con un código QR. La landing page es una sola página con un objetivo concreto, como recibir mensajes o reservas.",
    },
    {
      q: "¿Puedo ver ejemplos de tu trabajo?",
      a: "Sí. Hay cuatro demos públicas de catálogos web, una demo de menú digital y el caso de Good Life Insurance, que consiguió un 50 % más de clientes con su sitio web.",
    },
    {
      q: "¿Cuánto tardas en responder?",
      a: "Normalmente respondo en menos de 24 horas, por correo a hi@wickz.dev.",
    },
    {
      q: "¿Qué necesito para empezar?",
      a: "Una idea clara de qué vendes y a quién. Si ya tienes logo, fotos o la lista de productos o platos, mejor; si no, lo vemos juntos en la primera conversación.",
    },
  ],
  en: [
    {
      q: "What services do you offer?",
      a: "Web catalogs, QR digital menus, landing pages, portfolios, custom full-stack web development and cross-platform apps for businesses and entrepreneurs.",
    },
    {
      q: "What's the difference between a web catalog, a digital menu and a landing page?",
      a: "A web catalog shows a shop's products with photos and prices. A digital menu is a restaurant's menu that opens from a QR code. A landing page is a single page with one specific goal, such as getting messages or bookings.",
    },
    {
      q: "Can I see examples of your work?",
      a: "Yes. There are four public web catalog demos, a digital menu demo and the Good Life Insurance case study, where the client got 50% more customers with their website.",
    },
    {
      q: "How quickly do you reply?",
      a: "I usually reply within 24 hours, by email at hi@wickz.dev.",
    },
    {
      q: "What do I need to get started?",
      a: "A clear idea of what you sell and to whom. If you already have a logo, photos or your product or dish list, even better; if not, we'll sort it out in our first conversation.",
    },
  ],
} as const;
