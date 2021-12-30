const jardin = () => {
  const products = [
    {
      name: "Lawn Mower",
      img: [
        {
          url: "https://kiero.co/review_folder/Jardin/Lawn Mower/Great buy. Worth every penny_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Jardin/Lawn Mower/Great Mower For The Price_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Jardin/Lawn Mower/The last mower just couldnt cut it_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Jardin/Lawn Mower/The last mower just couldnt cut it_1.jpg",
          image: true,
        },
      ],
    },
    {
      name: "Outdoor Firepit",
      img: [
        {
          url: "https://kiero.co/review_folder/Jardin/Outdoor Firepit/Great Mower For The Price_2.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Jardin/Outdoor Firepit/F11McNuudDS.mp4",
          image: false,
        },
        {
          url: "https://kiero.co/review_folder/Jardin/Outdoor Firepit/Perfect for a small patio_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Jardin/Outdoor Firepit/Scenic Views_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Jardin/Outdoor Firepit/Small size but good for roasting marshmallows_0.jpg",
          image: true,
        },
      ],
    },
  ];
  return {
    reviews: [
      {
        name: "Juan Andres Sanchez",
        star: 5,
        product: products[0],
        location: "Bogotá, Colombia",
        H: "¡Gran cortadora de césped!",
        P: "Tengo esta cortadora de césped como un reemplazo para una cortadora de 11 años de edad Craftsman, y estoy muy satisfecho con ella. Llegó en una caja robusta, por lo que estaba bien protegido durante el envío. El ensamblaje/configuración mínima era fácil y no requería herramientas. Todo podría hacerse a mano. Incluían todo lo necesario excepto gasolina. Es más ligero que mi anterior cortacésped Craftsman, y también más silencioso, pero igualmente potente, o posiblemente más potente. Empieza muy fácilmente. Los ajustes de altura del césped son muy fáciles de ajustar. Y la función de autopropulsión funciona muy bien. Tengo una propiedad muy desigual, y la característica de autopropulsión ha funcionado muy bien, y me parece muy útil. También la cubierta negra en la parte delantera es una especie de parachoques, por lo que si golpea un árbol o una piedra, simplemente golpea suavemente la segadora hacia atrás, y no sacudirá la segadora horriblemente. Y lo más importante, corta la hierba muy bien y uniformemente. Esta es una gran cortadora, estoy muy contento con ella, y todas sus características funcionan muy bien.",
      },
      {
        name: "Alejandro Gutierrez",
        star: 4.5,
        product: products[0],
        location: "Medellín, Colombia",
        H: "Debería haber comprado esto desde el principio",
        P: "Compré una cortadora de césped un poco antes que esta y me cagó por completo, fue cuando aprendí que pagar un poco más para obtener algo de calidad es el camino correcto y esta cortadora es eso. muy fácil de configurar. Muy suave al segar, sin problemas con el motor hasta el momento, y lo he estado usando cada dos semanas durante aproximadamente 3 meses ahora daré una revisión editada después de un año. ¡Hasta ahora todo bien!",
      },
      {
        name: "Fernando Cano",
        star: 4,
        product: products[0],
        location: "Anza, Colombia",
        H: "Gran cortadora. Grandes características. Gran precio. Gran apoyo de Kiero.",
        P: "Escogí esto para mi marido sin su opinión. ¡Es un ganador! Él está muy satisfecho con la bolsa, la capacidad de acolchado y... ¡autopropulsado! Tenía una pregunta durante el breve montaje; llamado Kiero y lo que fue una experiencia increíble. ¡Ganando!",
      },
      {
        name: "María Mercedes Torres",
        star: 5,
        product: products[1],
        location: "Medellín, Colombia",
        H: "¡Gran valor!",
        P: "Esta fogata tiene una gran relación calidad-precio por el dinero gastado. Es perfecto... no. Y con el apoyo del equipo de Kiero a buscar un a lo más barato no pudo pasar esta oportunidad. La pintura en los puntos calientes se quemará pero a quién le importa la cosa seguirá siendo de color negro. La mayoría de las partes metálicas son delgadas, excepto el tazón y la rejilla, que tienen el mismo grosor que una parrilla de barbacoa. Si solo buscas algo para encender fuego no puedes equivocarte.",
      },
      {
        name: "Miguel Moreno",
        star: 4,
        product: products[1],
        location: "El Encanto, Colombia",
        H: "¡Fácil de configurar y usar!",
        P: "¡Buen tamaño! No viene montado, pero fue fácil. Lo armé en 10 minutos y las instrucciones son solo imágenes.",
      },
      {
        name: "Tomas Velasco",
        star: 5,
        location: "Tarapacá, Colombia",
        H: "Gran pozo de fuego pequeño por el precio",
        P: "Me encantan mis pequeños fuegos artificiales Perfecto para mis necesidades. Montaje muy sencillo. A la nieta incluso le encanta",
        product: products[1],
      },
    ],
    category: "Jardin",
  };
};

export default jardin;
