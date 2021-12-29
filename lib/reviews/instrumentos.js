const instrumentos = () => {
  const products = [
    {
      name: "Piano",
      img: [
        {
          url: "https://kiero.co/review_folder/Instrumentos/Piano/_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Instrumentos/Piano/Good for beginners_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Instrumentos/Piano/Great device for its price_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Instrumentos/Piano/Great value for the money_0 (1).jpg",
          image: true,
        },
      ],
    },
    {
      name: "Speaker",
      img: [
        {
          url: "https://kiero.co/review_folder/Instrumentos/Speaker/_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Instrumentos/Speaker/C1wvkrlCGTS.mp4",
          image: false,
        },
        {
          url: "https://kiero.co/review_folder/Instrumentos/Speaker/D1OhYqviddS.mp4",
          image: false,
        },
      ],
    },
  ];

  return {
    reviews: [
      {
        name: "Victoria Fuentes",
        star: 5,
        location: "El Encanto, Colombia",
        H: "Perfecto para clases de piano por primera vez",
        P: "Mi hijo de 8 años comenzó las lecciones este año, pero su objetivo final es la guitarra eléctrica. El profesor siempre empieza con piano, por lo que no queríamos comprar un instrumento caro que no se utilizará durante más de un par de años. Después de leer las reseñas y discutir con su maestra pedimos este set, ha sido perfecto para sus prácticas entre lecciones. A pesar de que las teclas no están ponderadas, tienen una sensación pesada que también dan las notas largas necesarias para algunas partituras musicales.",
        product: products[0],
      },
      {
        name: "Javier Esteban",
        star: 5,
        location: "Andes, Colombia",
        H: "¡Sorprendentemente bueno!",
        P: "Después de leer tantas críticas negativas, tengo que preguntarme por qué. Compré esto para mi nieta para empezar. Soy pianista, así que lo probé. Tiene un sonido muy bueno. Tiene otras funciones con las que juega mi chica y todas suenan bien también. Estoy muy contento con esta compra, especialmente porque venía con tantos accesorios. El único inconveniente es que no hay venta de sustain, ¡pero es genial para mi chica!",
        product: products[0],
      },
      {
        name: "María Mercedes Montero",
        star: 5,
        location: "Medellín, Colombia",
        H: "Teclado MIDI económico y perfecto..",
        P: "Si eres como yo donde de repente tuviste la necesidad de hacer uso de tu bloqueo y la decisión que tomaste fue aprender a tocar el piano pero estás viviendo con un presupuesto... bueno, mi amigo no busques más porque con Kiero siempre estoy comprando a los más baratos.",
        product: products[0],
      },
      {
        name: "Ana Isabel Herrero",
        star: 5,
        location: "Anza, Colombia",
        H: "Pequeño, portátil, y bonito… ¡Gracias Kiero!",
        P: "Este es un altavoz bluetooth dinámico. Con la conexión inalámbrica, puede alimentar música desde su teléfono inteligente, reproductor de mp3, computadora o Smart TV. Para un altavoz alto, es bastante compacto y portátil. La amplificación es sólida y se puede llenar una habitación de tamaño mediano con un gran sonido. El espectáculo de luces es limpio, pero no sorprende a nadie acostumbrado a la deslumbrante exhibición del entretenimiento moderno. Aun así, aumenta el efecto y hace que un partido en general se sienta mucho más fiesta-ish.",
        product: products[1],
      },
      {
        name: "Alejandro Manuel Jimenez",
        star: 5,
        location: "La Victoria, Colombia",
        H: "Máquina de karaoke muy divertida",
        P: "Esta máquina de karaoke de JMfinger es una máquina de karaoke muy agradable y fácil de usar. Me gusta jugar con esta máquina de karaoke con mi hija y se lo pasa muy bien cantando todas sus canciones favoritas en esta máquina de karaoke. La calidad del sonido está bien. Funciona muy bien. Es bueno que sea bonito y pequeño para que pueda llevar consigo la máquina de karaoke por la casa. Todos los sábados por la noche tenemos una pequeña fiesta de karaoke junto a esta máquina. El bluetooth incorporado funciona bien y fue fácil emparejarlo con mi teléfono para que podamos reproducir nuestras canciones favoritas en esta pequeña máquina de karaoke. En general, la calidad de esta máquina de karaoke es muy buena. Esto le dará a mi hija años de disfrute. ¡Máquina de karaoke muy recomendable!",
        product: products[1],
      },
      {
        name: "Antonio Herrera Torres",
        star: 4,
        location: "Bogotá, Colombia",
        H: "Ideal para fiestas.",
        P: "¡Altavoz impresionante! Las luces y el micrófono lo distinguen de otros altavoces, y con la ayuda del equipo de Kiero encontré un altavoz tan asombroso a un coste tan bajo comparado con el resto.",
        product: products[1],
      },
    ],
    category: "Instrumentos",
  };
};

export default instrumentos;
