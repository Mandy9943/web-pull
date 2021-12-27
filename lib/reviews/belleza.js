const belleza = () => {
  const products = [
    {
      name: "Pore Remover",
      img: [
        {
          url: "https://kiero.co/review_folder/Belleza/P1 - Pore Remover/_0.jpeg",
          image: true,
        },

        {
          url: "https://kiero.co/review_folder/Belleza/P1 - Pore Remover/Good Suction_0.jpeg",
          image: true,
        },

        {
          url: "https://kiero.co/review_folder/Belleza/P1 - Pore Remover/Good Suction_1.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Belleza/P1 - Pore Remover/Good Suction_2.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Belleza/P1 - Pore Remover/P1 - Pore Remover.mp4",
          image: false,
        },
      ],
    },
    {
      name: "Gua Sha",
      img: [
        {
          url: "https://kiero.co/review_folder/Belleza/P2 - Gua Sha/I use it every single day __0.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Belleza/P2 - Gua Sha/On Trend_0.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Belleza/P2 - Gua Sha/On Trend_1.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Belleza/P2 - Gua Sha/Satisfied with this product_0.jpeg",
          image: true,
        },
      ],
    },
  ];
  return {
    reviews: [
      {
        name: "María Jesús Marin",
        star: 5,
        location: "Bogotá, Colombia",
        H: "¡Buena succión!",
        P: "Este aspirador removedor de espinillas es realmente bueno. Elimina la suciedad y las espinillas sueltas de la cara. La cara se siente suave después de su uso. Siga las instrucciones cuidadosamente sin embargo. El producto llegó en buen estado con todas sus partes. Definitivamente recomendará este producto!",
        product: products[0],
      },
      {
        name: "Andrea Ortiz",
        star: 5,
        location: "La Victoria, Colombia",
        H: "Succión potente",
        P: "Quede sorprendido como succiona la piel, esta muy bien equipado con diferentes boquillas dependiendo de tu piel y limpieza que quieras. La batería es duradera, manteniendo una potència de succión durante varias exfoliaciones. Se tiene que tener en cuenta las instrucciones de uso por que debido a la succión que tiene puedes dejarte rojeces. Estoy mu contento con este limpiador de poros.",
        product: products[0],
      },
      {
        name: "Aurora Gutierrez",
        star: 5,
        location: "San Carlos, Colombia",
        H: "Funciona!!!!!",
        P: "Compre el producto pensando que no funcionaría y si que funciona!!!! Quita los puntos negros y se ve la grasa que ha extraido al terminar. No es que desaparezcan los puntos a la primera, pero siendo constantes en el tiempo si que disminuyen muchísimo y llegarán a desaparecer. No hace daño. En mi caso, que los puntos negros eran mas pequeños y la piem mas fina he usado la velocidad 1. En el caso de mi hermano y mi novio que eran mas grandes he usado la velocidad 2.Es una maravilla. Todos estamos encantados y hemos notado los efectos",
        product: products[0],
      },
      {
        name: "Sandra Soto",
        star: 5,
        location: "Medellín, Colombia",
        H: "Lo uso todos los días:)",
        P: "¡Estoy tan obsesionado con mi juego de rodillos de jade y gua shua! Literalmente veo una diferencia en mi piel. No estaba seguro al principio porque parecía demasiado bueno para ser verdad. Pero honestamente estoy tan feliz de haber comprado esto. Cuando me despierto, es lo primero que hago. Reduce la hinchazón que tengo debajo de mis ojos y mi piel se ve mucho más suave. Lo dejo en el refrigerador para que me quede bien y frío en la cara. La gua shua se deshace de todas las torceduras en mi cuello y para cuando termine de usar este set me siento tan fresca y lista para tomar el día. Definitivamente recomendaría este producto. 10/10. ¡Estoy tan feliz con eso!",
        product: products[1],
      },
      {
        name: "Teresa Santos",
        star: 5,
        location: "Bogotá, Colombia",
        H: "¡En tendencia!",
        P: "Sigo escuchando acerca de esta tendencia con el rodillo de Jade que he estado haciendo algunas investigaciones y me encontré con este amor que tiene instrucciones fáciles de usar y explicar a usted los movimientos que usted necesita hacer con el fin de obtener la mejor humedad y ayuda para su piel también viene con una bolsa protectora para tiendas o viajar también viene con la piedra debajo del ojo no tuve ningún problema en absoluto aplicar mi crema hidratante con esto pensé que iba a ser un poco raro ya que la piedra se queda fría pero no lo hice con ella como un sueño hizo mi rutina nocturna un poco más rápido y más relajante.",
        product: products[1],
      },
      {
        name: "Ana Isabel Herrero",
        star: 5,
        location: "Anza, Colombia",
        H: "¡Satisfecho con este producto!",
        P: "Excelente producto. La primera vez que uso este producto y mi piel se ve y se siente genial! Muy relajante, piedra fría, no puedo esperar para ver los resultados en un mes! ¡Totalmente recomendado! ❤️",
        product: products[1],
      },
    ],
    category: "Belleza",
  };
};

export default belleza;
