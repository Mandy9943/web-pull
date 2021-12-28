const salud = () => {
  const products = [
    {
      name: "Goli Gummies",
      img: [
        {
          url: "https://kiero.co/review_folder/Salud/Goli Gummies/Excellent taste_0 (1).jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Salud/Goli Gummies/Excellent taste_1 (1).jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Salud/Goli Gummies/Great taste, way better than making a sour face over a shot of ACV_0 (1).jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Salud/Goli Gummies/Great taste, way better than making a sour face over a shot of ACV_1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Salud/Goli Gummies/THEY TASTE AMAZING_0 (1).jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Salud/Goli Gummies/THEY TASTE AMAZING_0.jpg",
          image: true,
        },
      ],
    },
    {
      name: "Protein Powder",
      img: [
        {
          url: "https://kiero.co/review_folder/Salud/Protein Powder/Definitely worth it =_1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Salud/Protein Powder/Definitely worth it =_2.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Salud/Protein Powder/Good, but ISOLATE is better_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Salud/Protein Powder/Gourmet Vanila and Rich chocolate_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Salud/Protein Powder/Definitely worth it =_0.jpg",
          image: true,
        },
      ],
    },
  ];
  return {
    reviews: [
      {
        name: "José Antonio Gomez",
        star: 5,
        location: "Medellín, Colombia",
        H: " Sabe exactamente como bebidas embotelladas de moca Starbucks.",
        P: "Llegó un día antes de lo esperado, y vino en una caja robusta. El color y la forma eran exactamente como se anunciaba. Lo compré en rosa y todo era igual que las fotos. Es muy fácil de usar: simplemente presione el botón e incline hacia adelante, y el agua sale casi como una pequeña cascada. Si su perro no termina lo que hay en el recipiente, simplemente presione el botón e incline hacia atrás, y el agua volverá a fluir hacia la botella. Hay algunas gotas que no van a entrar pero eso no es un problema en absoluto La botella está hecha de plástico grueso, estudio que parece combatir parte del calor del exterior. Era absolutamente perfecto para mi Chihuahua de 6 libras. ¡Te recomiendo encarecidamente esta botella!",
        product: products[1],
      },
      {
        name: "Jose Miguel Flores",
        star: 4,
        location: "El Encanto, Colombia",
        H: "¡No puedo superar el precio!",
        P: "El primer producto Dymatize que probé fue el ISO100, pero esta vez Kiero estaba fuera de eso, así que compré esto en su lugar. Sabe igual (delicioso con leche al 2% o leche de almendras) pero el Elite contiene más proteína de suero que el ISO100. Hice un ISO100 vs Elite y descubrí que el Elite tiene mucho más suero que el otro. Lo beberé después de hacer ejercicio y me ayuda a energizarse y me ayudará a reconstruir el músculo que desgarré con mi entrenamiento. Me siento muy satisfecho y lleno después de tomar una porción de esto. Ambos son buenos productos pero a partir de ahora compraré el Dymatize Elite porque por el precio obtienes mucho más por tu dinero, al menos creo que lo hice.",
        product: products[1],
      },
      {
        name: "Mónica Carrasco",
        star: 4.5,
        location: "Bogotá, Colombia",
        H: "La mejor relación calidad-precio para polvo de proteína estándar",
        P: "He estado haciendo ejercicio por un tiempo y decidió empezar a beber batidos de proteínas. Quería algo nuevo y pasó mucho tiempo revisando diferentes productos. Fue difícil elegir el correcto. En general me decidí por Dymatize porque 100% suero de absorción tan rápida con 140 calorías. Estaba nervioso por el tast, pero para una proteína en polvo el rico sabor de chocolate impresionante casi como coca-/chocolate milk realmente feliz.",
        product: products[1],
      },
      {
        name: "Oscar Suarez",
        star: 5,
        location: "Andes, Colombia",
        H: "Ayuda para el reflujo ácido",
        P: "Estos funcionan muy bien para el reflujo ácido y el sabor es agradable!",
        product: products[0],
      },
      {
        name: "Eduardo Montero",
        star: 4.55,
        location: "Leticia, Colombia",
        H: " Excelente sabo",
        P: " Solo puedo basar esto en el sabor hasta ahora hasta que pueda ver si funcionan. Saben increíble. Siempre tuve miedo de probar inyecciones regulares de vinagre de sidra de manzana porque es tan desagradable. Esto no sabe repugnante en absoluto. Lo actualizaré en una semana para ver si me regula. Ejército todos los días con cardio y hago levantamiento de pesas 3 días a la semana. También come sano. Sólo necesito refuerzos adicionales de energía y para regular mi sistema. ¡Lo cual espero que lo hagan!",
        product: products[0],
      },
      {
        name: "Enrique Calvo",
        star: 5,
        location: "Bogotá, Colombia",
        H: "GOMINITAS DE MARAVILLA CON RESULTADOS REALES",
        P: "Normalmente no escribo críticas, pero esta es una que no podía perderme. Estas gomitas son enviadas al cielo. He estado viendo esto desde hace un par de años, pero era escéptico en comprarlos. Muchas empresas dan promesas de resultados pero sus productos nunca cumplen. He estado tomando 2 en la mañana y 2 en la tarde durante una semana y los resultados son absolutamente SORPRENDENTES! Sabor muy bien, sin necesidad de cazador.",
        product: products[0],
      },
    ],
    category: "Salud",
  };
};

export default salud;
