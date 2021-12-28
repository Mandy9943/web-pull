const oficina = () => {
  const products = [
    {
      name: 'LapGear Media Tray',
      img: [
        {
          url: 'https://kiero.co/review_folder/Oficina/LapGear Media Tray/It actually fits a 17_ laptop_4.jpg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Oficina/LapGear Media Tray/Large enough for sewing projects—lightweight, sturdy, well made, affordable_0.jpg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Oficina/LapGear Media Tray/91Imc4or7sS.mp4',
          image: false,
        },
        {
          url: 'https://kiero.co/review_folder/Oficina/LapGear Media Tray/Wish legs were adjustable_2 (1).jpg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Oficina/LapGear Media Tray/You can fit a lot of stuff on it and the grooves t…allow electronic devices to stand, priceless_0.jpg',
          image: true,
        },
      ],
    },
    {
      name: 'Paper Shredder',
      img: [
        {
          url: 'https://kiero.co/review_folder/Oficina/Paper Shredder/_0.jpg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Oficina/Paper Shredder/_1.jpg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Oficina/Paper Shredder/7135xN+2EPS.mp4',
          image: false,
        },
        {
          url: 'https://kiero.co/review_folder/Oficina/Paper Shredder/Best bang for your buck_0.jpg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Oficina/Paper Shredder/Handle is useless_0.jpg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Oficina/Paper Shredder/Noise level is higher than expected. Gets the job done._0.jpg',
          image: true,
        },
      ],
    },
  ]
  return {
    reviews: [
      {
        name: 'Rosa Esteban',
        star: 5,
        location: 'Medellín, Colombia',
        H: '¡Gran pequeña trituradora!',
        P: 'Me encanta este pequeño triturador. Estaba tan emocionado cuando llegó que empecé a usarlo de inmediato. Había acumulado una pila bastante grande de correo que necesitaba triturar, así que pasé un buen par de horas triturando y ni una vez hice nada atascado. Funcionó sin esfuerzo.',
        product: products[1],
      },
      {
        name: 'Pedro Suarez',
        star: 5,
        location: 'La Chorrera, Colombia',
        H: 'Relación calidad-precio, grosor y escarpado',
        P: 'Bueno, es un regalo para mi novio y lo que puedo decir que él ama!! Él es tan feliz ahora que puede hacerlo más fácil y de la manera en que él ama la sheerness. También quiero dar las gracias al equipo de Kiero por ayudarme a encontrar la mejor trituradora de papel a un precio más barato con una gran calidad',
        product: products[1],
      },
      {
        name: 'María Mercedes Ramos',
        star: 4.5,
        location: 'Medellín, Colombia',
        H: 'El nivel de ruido es más alto de lo esperado. Consigue hacer el trabajo.',
        P: 'Consigue hacer el trabajo. Creo que el nivel de ruido podría ser mejor, especialmente para una pequeña trituradora lol esta. Por el precio del producto creo que se cumple el objetivo principal.',
        product: products[1],
      },
      {
        name: 'Montserrat Muñoz',
        star: 4,
        location: 'Bogotá, Colombia',
        H: 'Se adapta a un portátil de 17"',
        P: 'Necesitaba una estación de trabajo que pudiera usar en casa mientras me recuperaba de la cirugía de tobillo, así que era necesario algo con espacio libre para elevar mi pierna. Este ajuste muy bien, con mi imagen de “mano de cuchillo” que muestra el espacio entre la bandeja y mi pierna en la cama. Desde el principio, se envasó mucho más allá de lo que esperaba, con espuma gruesa para cada esquina, y celofán envuelto dentro de la caja. Las piernas se desplegaron fácilmente, pero solo están bloqueadas por fricción, así que el tiempo dirá si necesitan ser apretadas para mantenerlas dobladas cuando lo quiero plano. La bandeja mantiene un bonito fondo plano con las patas dobladas, si eso le importa. Utilizo un portátil Dell Precision M6600 de 17 pulgadas, que encaja muy bien en esta bandeja, con suficiente espacio en la parte posterior para que el cable de alimentación se conecte sin tensión',
        product: products[0],
      },
      {
        name: 'Inés Molina',
        star: 5,
        location: 'Andes, Colombia',
        H: 'Perfecto para trabajos reclinables.',
        P: 'Necesitaba un escritorio robusto para mi máquina de fabricación de botones. ¡Lo encontré! El borde alrededor del borde de la bandeja evita que las piezas se deslicen, y no tengo que sentarme en el suelo (terrible en la espalda) para hacer mi trabajo.',
        product: products[0],
      },
      {
        name: 'María Dolores Prieto',
        star: 5,
        location: 'El Encanto, Colombia',
        H: 'Lo suficientemente grande para coser proyectos: ligero, resistente, bien hecho, asequible.',
        P: 'Me encanta la bandeja de bambú. Es ligero pero espacioso con un poco más de 20» de ancho por poco más de 11» de profundidad, o 13» de profundidad cuando se cuenta la zona superior para levantar una tableta o un teléfono. Me encanta el hecho de que el borde inferior (más cercano al cuerpo) tiene un borde de aproximadamente 1/8» de altura, por lo que nada se rodará. Las patas se pliegan por debajo para un fácil almacenamiento; pero cada vez que están extendidas, se pliegan en un ligero ángulo, lo que hace que la mesa sea aún más segura cuando está en uso. Lo usaré para mis proyectos de costura a mano.',
        product: products[0],
      },
    ],
    category: 'Oficina',
  }
}

export default oficina
