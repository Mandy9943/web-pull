const hogar = () => {
  const products = [
    {
      name: "Handheld Vacuum",
      img: [
        {
          url: "https://kiero.co/review_folder/Hogar/Handheld Vacuum/Don’t waste your money_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Hogar/Handheld Vacuum/B18Io9ZXXfS.mp4",
          image: false,
        },
        {
          url: "https://kiero.co/review_folder/Hogar/Handheld Vacuum/It works _0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Hogar/Handheld Vacuum/It works _1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Hogar/Handheld Vacuum/The most impressive car vacuum_1.jpg",
          image: true,
        },
      ],
    },
    {
      name: "Outdoor Chair",
      img: [
        {
          url: "https://kiero.co/review_folder/Hogar/Outdoor Chair/😃_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Hogar/Outdoor Chair/Best chairs ever_0 (2).jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Hogar/Outdoor Chair/Comfortable and wellmade_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Hogar/Outdoor Chair/Great chairs for a great value They are perfect around our fire pit_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Hogar/Outdoor Chair/montage.mp4",
          image: false,
        },
      ],
    },
  ];

  return {
    reviews: [
      {
        name: "María Nieves Cano",
        star: 4.5,
        location: "Medellín, Colombia",
        H: "¡El aspirador de coche más impresionante!",
        P: "¡Esta cosa es increíble! Yo sólo un 2018 Dodge Durango que lamentablemente no tiene asientos de cuero. Tengo tres perros y es sólo una pesadilla sacando mi cable de extensión para aspirar mi camión. Ahora puedo conectar a este pequeño chico en mi toma de corriente de 12v y estoy listo para ir! La potencia en este vacío es tan buena como va a conseguir para un aspirador de coche, así que si quieres succión extrema - comprar una aspiradora de taller. También los archivos adjuntos son fantásticos.",
        product: products[0],
      },
      {
        name: "María José Rodriguez",
        star: 5,
        location: "Bogotá, Colombia",
        H: "Gran aspirador por el precio",
        P: "Decidimos comprar esta aspiradora porque tenemos un bebé y necesitamos mantener nuestro entorno limpio. Nos quedamos gratamente sorprendidos con la entrega rápida, el embalaje y la bolsa que viene con lo que es muy conveniente para llevar y mantener en un solo lugar. El vacío en sí es potente, limpia fácilmente la arena de los asientos del automóvil, así como la otra suciedad forman la alfombra del piso. El acorde es largo, así que no tienes que preocuparte por los asientos traseros y el maletero. Fácil de limpiar, viene con una extensión para entrar en puntos estrechos. ¡Estamos satisfechos!",
        product: products[0],
      },
      {
        name: "Sebastian Aguilar",
        star: 5,
        location: "Anza, Colombia",
        H: "Tan práctico",
        P: "Acabo de usar esto en mi coche. Succión increíble. Se ha gastado un centavo, como puedes ver en las fotos. Bonito cable de alimentación largo que se conecta al encendedor de cigarrillos. Esta pequeña aspiradora tiene mucho poder absorbido un centavo. Todo, accesorios y todo, cabe dentro de la bolsa negra que viene con ella. Hay un accesorio que puedes poner en él que encaja en los espacios realmente reducidos si miras una de mis imágenes. Es esa zona difícil entre la puerta y el asiento estaba tan limpia. Me sorprendió mucho la potencia de la sección de esta aspiradora.",
        product: products[0],
      },
      {
        name: "Salvador Saez",
        star: 5,
        location: "Alejandría, Colombia",
        H: "¡Estas son mis sillas FAVORITAS que tengo!",
        P: "Montado por mí mismo, me llevó un par de días. Tuve que leer las instrucciones un par de veces. Son robustos, cómodos y se ven muy bien. Me faltaba una pequeña parte. Me puse en contacto con la empresa del vendedor Kiero y me respondieron dentro de las 24 horas y están enviando la pieza. Excelente servicio al cliente.",
        product: products[1],
      },
      {
        name: "Lucas Serrano",
        star: 5,
        location: "La Pedrera, Colombia",
        H: "Muy resistente, cómodo y elegante.",
        P: "¡Estas sillas son de gran calidad! Compramos 2 sets y nos encantan! Eran bastante fáciles de montar por mí mismo.",
        product: products[1],
      },
      {
        name: "Carlos Manuel Montero",
        star: 5,
        location: "Bogotá, Colombia",
        H: "Cómodo y bien hecho.",
        P: "Me sorprendió gratamente este set. Son extremadamente cómodas para personas de todos los tamaños. El rebote suave es perfecto y permite el movimiento mientras aún encaja en mi pequeño espacio. Se secan rápidamente después de la lluvia (llovió por la mañana y espolvoreado durante todo el día y pude sentarme en ellos por 3). Mi única queja es que la reunión fue bastante difícil. No por la necesidad de herramientas o tiempo, sino porque es difícil, sino imposible, hacerlo solo. Así que asegúrese de tener un par de manos extra alrededor si es posible! En general estoy muy feliz que tomé una apuesta en este conjunto a pesar de tener prácticamente ninguna crítica.",
        product: products[1],
      },
    ],
    category: "Hogar",
  };
};

export default hogar;
