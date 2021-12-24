export default () => {
  const products = [
    {
      name: "Dog Bottle",
      img: [
        {
          url: "https://kiero.co/review_folder/Animales/P1 - Dog Bottle/Product 1 - dog bottle 2.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Animales/P1 - Dog Bottle/Product 1 - Dog Bottle 2.mp4",
          image: false,
        },
        {
          url: "https://kiero.co/review_folder/Animales/P1 - Dog Bottle/Product 1 - Dog bottle.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Animales/P1 - Dog Bottle/Product 1 - Dog bottle.mp4",
          image: false,
        },
      ],
    },
  ];
  return {
    reviews: [
      {
        name: "María Carmen Mora",
        star: 5,
        location: "Bogotá, Colombia",
        H: "¡Muy recomendable esta botella!",
        P: "Llegó un día antes de lo esperado, y vino en una caja robusta. El color y la forma eran exactamente como se anunciaba. Lo compré en rosa y todo era igual que las fotos. Es muy fácil de usar: simplemente presione el botón e incline hacia adelante, y el agua sale casi como una pequeña cascada. Si su perro no termina lo que hay en el recipiente, simplemente presione el botón e incline hacia atrás, y el agua volverá a fluir hacia la botella. Hay algunas gotas que no van a entrar pero eso no es un problema en absoluto La botella está hecha de plástico grueso, estudio que parece combatir parte del calor del exterior. Era absolutamente perfecto para mi Chihuahua de 6 libras. ¡Te recomiendo encarecidamente esta botella!",
        product: products[0],
      },
      {
        name: "Salvador Saez",
        star: 4,
        location: "Alejandría, Colombia",
        H: "Gran manera de hacer que tu perro beba agua.",
        P: "A mi perro le encanta beber de esto. es un poco divertido para ella supongo. Tienes una opción de bloqueo y lo más fresco es que puedes reutilizar el agua que queda en el visor, simplemente vuelve a la botella cuando mantén el artículo en posición vertical y presiona el botón.",
        product: products[0],
      },
    ],
    category: "Animales",
  };
};
