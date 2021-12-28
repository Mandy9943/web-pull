const bebes = () => {
  const products = [
    {
      name: 'Baby Piano',
      img: [
        {
          url: 'https://kiero.co/review_folder/Bebes/P1 - Baby Piano/P1 - Piano 2.jpg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Bebes/P1 - Baby Piano/P1 - Piano.jpeg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Bebes/P1 - Baby Piano/P1 - Piano.jpg',
          image: true,
        },
      ],
    },
    {
      name: 'Baby PJs',
      img: [
        {
          url: 'https://kiero.co/review_folder/Bebes/P2 - Baby PJs/Dreamy Summertime Sleepers_0.jpeg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Animales/P2 - Baby PJs/Newborn size is huge_0.jpeg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Animales/P2 - Baby PJs/Newborn size is huge_1.jpeg',
          image: true,
        },
        {
          url: 'https://kiero.co/review_folder/Animales/P2 - Baby PJs/Newborn size is huge_2.jpeg',
          image: true,
        },
      ],
    },
  ]
  return {
    reviews: [
      {
        name: 'Mateo Gallego',
        star: 5,
        location: 'Andes, Colombia',
        H: 'Diversión para niños pequeños y fácil de limpiar.',
        P:
          'Este es un juguete divertido para niños pequeños. Lo que tiene cuidado es que la superficie clave es una pieza lisa de madera y muy fácil de mantener limpia. El teclado también incluye algunas tarjetas de canciones que se pueden reproducir de una de tres maneras:\n' +
          '\n' +
          '1. «Estilo libre» presionando las teclas asociadas con los colores de la tarjeta de la canción.\n' +
          '\n' +
          '2. El modo «Auto» se puede activar cuando se mueve un interruptor en el lado de la electrónica del teclado. Esto le permitirá al niño tocar la canción sin tener que presionar las teclas correctas, cada pulsación de tecla reproducirá la siguiente nota.\n' +
          '\n' +
          '3. El modo «Demo» reproducirá una canción más compleja con una pulsación de botón. La canción reproducida variará en función de la tarjeta insertada.\n' +
          '\n' +
          'Mi única queja con esto es que el color rojo impreso en la tarjeta se ve más naranja que rojo, lo que podría ser confuso para los niños pequeños. De lo contrario, este es un juguete divertido para que los más pequeños aprendan los conceptos básicos de un piano.\n',
        product: products[0],
      },
      {
        name: 'Victoria Fuentes',
        star: 4.5,
        location: 'El Encanto, Colombia',
        H: 'Nieta ama este piano, gran producto!',
        P:
          ' Aunque dice que es por más de 12 meses, decidimos obtenerlo antes, ya que pensamos que a mi nieta realmente le gustaría, y solo permitiríamos su uso con supervisión. A\n' +
          'ella le encanta, y a los 7 meses de edad se sentará y jugará con esto durante largos períodos. Después de la jugada inicial, ella va a hacer otra cosa luego en cuestión de minutos volver a ella y jugar un poco más, y repetir.\n' +
          'La «partitura» es bastante resistente, ella lo dobla hacia atrás y hacia adelante mientras está en las ranuras, y ella todavía ha (golpear la madera) para causar un pliegue en el plástico.\n' +
          'Le di un 4 por robustez solo por la sensación de que si empujan hacia atrás en la parte superior o lo tiran hacia ellos, se irá, pero eso no debería ser demasiado preocupante. De lo contrario, la robustez es buena.\n' +
          'Producto parece muy duradero, en realidad me impresionó una vez abrirlo. Definitivamente vamos a dar esto como un regalo a los demás.\n' +
          '\n' +
          'Una rareza - hay una característica en la que después de tocar las notas en la «partitura», el piano luego continúa el resto de la canción. A veces tiene un pequeño retraso antes de retomar el resto, y ocasionalmente no lo ha hecho en absoluto. No estoy seguro de por qué es eso, pero no es suficiente para mí para anotarlo.\n' +
          '\n' +
          'Recomiendo encarecidamente este piano de juguete. Una vez que sea un poco mayor, tendremos un piano de juguete que tiene las teclas realistas, pero por ahora (y por un tiempo) esto es fantástico.\n',
        product: products[0],
      },
      {
        name: 'Alejandra Calvo',
        star: 4.5,
        location: 'Bogotá, Colombia',
        H: 'Buena calidad',
        P: 'En general estoy muy impresionado con este piano. Suena bien y se ha caído un par de veces y se mantiene bien. Mi única queja es el color de los puntos musicales en las tarjetas que vienen con él. Los puntos naranja y rojo se parecen mucho en color. Mi hermano (el pianista real de la familia) señaló cuáles se supone que son rojos. Los coloqué con un marcador permanente rojo para hacerlos rojos y no anaranjados. A mi hijo de tres años le encanta tratar de igualar los puntos para hacer la canción y mi hijo de dos años simplemente toca libremente. Es un gran primer piano.',
        product: products[0],
      },
      {
        name: 'Alejandra Calvo',
        star: 4.5,
        location: 'Bogotá, Colombia',
        H: 'Hermosisimosss',
        P: 'Son un poco más grandes que la edad que indica pero le quedaron perfectos cuando creció un poco más. La calidad es excelente para climas tropicales, siempre dormimos con aire y la abriga lo suficiente. Sus diseños son demasiado lindos! Me encantaron!',
        product: products[1],
      },
      {
        name: 'Emilia Sanchez',
        star: 5,
        location: 'Medellín, Colombia',
        H: 'Un poco más grandes pero excelentes!',
        P: 'Son un poco más grandes que la edad que indica pero le quedaron perfectos cuando creció un poco más. La calidad es excelente para climas tropicales, siempre dormimos con aire y la abriga lo suficiente. Sus diseños son demasiado lindos! Me encantaron!',
        product: products[1],
      },
    ],
    category: 'Bebes',
  }
}

export default bebes
