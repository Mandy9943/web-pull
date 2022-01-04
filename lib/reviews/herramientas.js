const herramientas = () => {
  const products = [
    {
      name: "Tool Set",
      img: [
        {
          url: "https://kiero.co/review_folder/Herramientas/Tool Set/_1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Herramientas/Tool Set/This was delivered in less than 24 hours..._0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Herramientas/Tool Set/Tools are really amazing and strong_1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Herramientas/Tool Set/Tools are really amazing and strong_2.jpg",
          image: true,
        },
      ],
    },
    {
      name: "Headlight",
      img: [
        {
          url: "https://kiero.co/review_folder/Herramientas/Headlight/Awesome headlamp_1.jpg",
          image: true,
        },
        // {
        //   url: "https://kiero.co/review_folder/Herramientas/Headlight/719TfK01ESS.mp4",
        //   image: false,
        // },
        // {
        //   url: "https://kiero.co/review_folder/Herramientas/Headlight/B1H5PgHrmxS.mp4",
        //   image: false,
        // },
        {
          url: "https://kiero.co/review_folder/Herramientas/Headlight/Nice head lamp_1 (3).jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Herramientas/Headlight/Very comfortable fit _ quality built _ long battery life_0 (2).jpg",
          image: true,
        },
      ],
    },
  ];

  return {
    reviews: [
      {
        name: "Juan Antonio Duran",
        star: 5,
        location: "Amagá, Colombia",
        H: "Se entregó en menos de 48 horas de coger confirmacion...",
        P: "¡Envío de un día efectivamente! El producto es ideal para el hogar o el automóvil. Absolutamente sin contras para este pedido. La mejor compra en Kiero. Además, la funda viene en plástico duro y tiene un aspecto impresionante.",
        product: products[0],
        img: products[0].img[0],
      },
      {
        name: "Nicolas Aguilar",
        star: 5,
        location: "Bogotá, Colombia",
        H: "Absolutamente el mejor set para su casa",
        P: "Gran juego de herramientas. Tengo otros 4 juegos de herramientas combinadas para coches y diferentes partes de la casa. He querido un gran todo en un solo conjunto. Este finalmente pone todas las herramientas para una casa en un paquete fácil de llevar y usar. La calidad es la esperada. La llave ajustable salió de su posición, pero estaba tratando de hacer algo para lo que no estaba diseñado. No hay sorpresas. Este set realmente me impresiona. He reemplazado un puesto de ducha, ventilador de escape, iluminación, y varios otros proyectos. Funciona muy bien para trabajos rápidos.",
        product: products[0],
        img: products[0].img[1],
      },
      {
        name: "Pedro Suarez",
        star: 5,
        location: "La Chorrera, Colombia",
        H: "¡Este es un kit de herramientas excelente!",
        P: "Este es un estupendo kit de herramientas para el hogar. Tiene todas las herramientas que puedas necesitar para la mayoría de los proyectos de vivienda o automóviles. Me sorprendió la alta calidad de las herramientas. Tengo muchas herramientas, pero es muy conveniente llevar una funda para llevarla donde sea necesario hacer el trabajo en lugar de volver a buscar herramientas adicionales. Este es el regalo perfecto para los propietarios de casas nuevas. Seguirá dando durante los próximos años.",
        product: products[0],
        img: products[0].img[2],
      },
      {
        name: "Alejandro Gutierrez",
        star: 4.5,
        location: "Medellín, Colombia",
        H: "¡Un gran faro para el dinero!",
        P: "Esta es una linterna frontal súper impresionante que compré para mi esposa. ¡A ella le encanta! ¡Lo cual hago también! Compré mi primer faro con Kiero hace más de 2 años y todavía funciona muy bien.",
        product: products[1],
        img: products[1].img[0],
      },
      {
        name: "Mario Lopez Hernandez",
        star: 5,
        location: "Frontino, Colombia",
        H: "Absolutamente una linterna frontal de alta calidad. ¡TOTALMENTE vale cada centavo! ¡Muy recomendable!",
        P: "El envío se recibo en el tiempo ofrecido, la lámpara se ajusta muy bien a mí pequeña cabeza, el brillo es sensacional tiene una luminosidad realmente destacable, yo uso esa lámpara para hacer trabajos interiores y para motociclismo de montaña, la luz amplía trabaja perfectamente y a profundidad no creo que llegue a los 300 pies, pero está es solo mi apreciación pues no tengo elementos para probarlo. La batería es incómoda pues recuerden que la uso directamente sobre mi cabeza cuando hago trabajos interiores, con el casco es diferente no lástima mi cabeza, aunque es un poco pesada después de veinte minutos de llevarla sin embargo te acostumbras al peso, viene una bolsa para guardar la lámpara muy práctica y resistente al agua. En general estoy satisfecho con la compra y el precio. Recomiendo esta lámpara ampliamente.",
        product: products[1],
        img: products[1].img[1],
      },
      {
        name: "Juan Andres Sanchez",
        star: 5,
        location: "Bogotá, Colombia",
        H: "¡Ilumina tu mundo!",
        P: "Cuando llegas a los 67 años nunca puedes tener demasiada luz. He encontrado que estos faros son ideales para todas las situaciones de trabajo cuando solo necesitas ver mejor lo que estás haciendo. No más tratar de sostener una linterna y trabajar con una mano cuando realmente necesitas dos manos",
        product: products[1],
        img: products[1].img[2],
      },
    ],
    category: "Herramientas",
  };
};

export default herramientas;
