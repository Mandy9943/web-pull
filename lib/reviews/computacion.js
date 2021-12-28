const computacion = () => {
  const products = [
    {
      name: "Computer Monitor",
      img: [
        {
          url: "https://kiero.co/review_folder/Computacion/P1 - Computer Monitor/Good View, Easy Setup_0.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Computacion/P1 - Computer Monitor/Perfect Cheapest one for the best value_0 (1).jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Computacion/P1 - Computer Monitor/Perfect Cheapest one for the best value_0.jpeg",
          image: true,
        },
      ],
    },
    {
      name: "Computer Case",
      img: [
        {
          url: "https://kiero.co/review_folder/Computacion/P2 - Computer Case/El mejor case_0.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Computacion/P2 - Computer Case/Muy bueno_0 (1).jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Computacion/P2 - Computer Case/Muy bueno_0.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Computacion/P2 - Computer Case/Su nombre lo dice todo..... Flujo de Aire._0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Computacion/P2 - Computer Case/Su nombre lo dice todo..... Flujo de Aire._1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Computacion/P2 - Computer Case/Su nombre lo dice todo..... Flujo de Aire._3.jpg",
          image: true,
        },
      ],
    },
  ];
  return {
    reviews: [
      {
        name: "Pedro Iglesias",
        star: 5,
        location: "Caldas, Colombia",
        H: "Este es un monitor decente como monitor lateral en una configuración dual.",
        P: "Este monitor tiene una calidad de imagen excelente. La configuración fue extremadamente simplista, pero el stand tomó un poco de desciframiento. Una vez insertado el soporte en la base, no pude encontrar la forma de quitarlo, por lo que recomendaría conectar el monitor al soporte antes de conectar la base al soporte para facilitar la instalación. El soporte no es tan fuerte como hubiera esperado, pero puedes comprar un soporte que se adapte mejor a tus necesidades. Este monitor fue una segunda compra de Sceptre y estoy muy contento de elegir a Sceptre para un monitor. Tanto es así que también les compré un monitor curvo.",
        product: products[0],
      },
      {
        name: "Jesus Peña",
        star: 5,
        location: "Andes, Colombia",
        H: "¡COMPRA ESTO, NO LO DUDES!",
        P: "Al principio fui escéptico por el precio realmente bueno que tiene este monitor. Pero decidí comprarlo de todos modos, es súper grande, súper limpio, el audio es bastante bueno por el precio, el bisel delgado lo hace realmente bueno para ver películas y juegos pesados, también lo uso MUCHO para programar. El tamaño grande de 27 es muy bueno para cualquier material relacionado con el trabajo escolar, especialmente si tienes que dividir la pantalla, etc. ¡Definitivamente recomendaría chicos!",
        product: products[0],
      },
      {
        name: "María Mercedes Ramos",
        star: 4.5,
        location: "Medellín, Colombia",
        H: "¡Perfecto! ¡El más barato por el mejor valor!",
        P: "¡Guau! El mejor monitor que nunca va a mentir, ¡era barato por la increíble calidad! Lo único que tengo que decir es que la calidad del sonido del monitor no es muy buena, pero si eres jugador y usas auriculares, ¡esto es perfecto! (¡También tiene un brillo súper alto, lo que es perfecto para juegos de ps4!)",
        product: products[0],
      },
      {
        name: "Mateo Torres",
        star: 5,
        location: "Bogotá, Colombia",
        H: "Yo lo recomiendo al 100% me encanto",
        P: "feliz con mi compra llego el case en perfecto estado sin problema muchas personas se quejan de que la malla anti-polvo pega de los abanicos delanteros en mi caso no paso eso no tengo ningún problema con el case incluso pienso que por su precio es muy completo trae incluso muchos tornillo bastante diria para los fan y para el case nuevo al igual para poner el power supply trae tornillos para todo y estoy bastante feliz con eso y fue muy facil de montar todo",
        product: products[1],
      },
      {
        name: "Antonio Guerrero",
        star: 5,
        location: "Barbosa, Colombia",
        H: "Belleza, comodidad y materiales de calidad",
        P: "Ventiladores sorprendentemente silenciosos, estilo muy sofisticado y elegante, sircunspecto. Muy práctico y adaptable",
        product: products[1],
      },
      {
        name: "Rosa Esteban",
        star: 5,
        location: "Medellín, Colombia",
        H: "Muy linda caja de pc",
        P: "Me gustó bastante la recomiendo bastante grande si el tamaño te importa es perfecta",
        product: products[1],
      },
    ],
    category: "Computacion",
  };
};

export default computacion;
