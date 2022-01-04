const deportes = () => {
  const products = [
    {
      name: "Versatile Shorts",
      img: [
        {
          url: "https://kiero.co/review_folder/Deportes/P1 - Versatile Shorts/71dvbLm44xL._SL1600_.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Deportes/P1 - Versatile Shorts/71MPK-z67UL._SL1600_.jpg",
          image: true,
        },
        // {
        //   url: "https://kiero.co/review_folder/Deportes/P1 - Versatile Shorts/A1TPIZWOTYS.mp4",
        //   image: false,
        // },
      ],
    },
    {
      name: " Bike",
      img: [
        {
          url: "https://kiero.co/review_folder/Deportes/P2 - Bike/Great bike for a toddler._0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Deportes/P2 - Bike/Great bike for a toddler._1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Deportes/P2 - Bike/Great bike for a toddler._2.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Deportes/P2 - Bike/He loves it_0.jpeg",
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
        H: "Cómodo y perfecto para correr.",
        P: "Creo que la longitud de la pierna de 7 pulgadas es el favorito general de la multitud, algunos chicos les gusta un corto corto para hacer ejercicio. Personalmente soy un fan de estos pantalones cortos de gimnasio de 7 pulgadas, que tienen pantalones cortos de compresión integrados debajo de su capa exterior más suelta. Técnicamente están hechos para correr, pero también me gustan para entrenamientos de remo de cardio. La compresión integrada garantiza comodidad, mientras que la longitud de 17,8 cm me mantiene libre de enganches en el deslizamiento del barco o el remo. Vale la pena mencionar que tengo 6'4» y 207 libras y tengo el tamaño US XL/Tag 3XL, que me queda perfectamente. Los bolsillos son lo suficientemente espaciosos para mantener mi iPhone XS MAX sin",
        product: products[0],
        img: products[0].img[0],
      },
      {
        name: "Pablo Velasco",
        star: 4.5,
        location: "Bogotá, Colombia",
        H: "Más que vale la pena el precio",
        P: `
       necesarios para la bicicleta estática de moda, así que algo de compresión sin convertirme en un MAMIL (hombre de mediana edad en lycra). Son perfectos, con la ventaja adicional de que puedo salir con ellos y los bolsillos me permiten tener teléfono, llaves y billetera con facilidad.

Normalmente estoy entre un tamaño pequeño y uno mediano, pero más a menudo un mediano ahora (por lo tanto, la bicicleta, y gracias, kilos de cuarenta kilos...) y leer sobre tallas me estresa un poco. Pero estos son geniales, tal vez un poco grandes, pero un pequeño sería muy ajustado. Así que mi habitual cerca no es perfecto.

Me alegro de haberlos cogido, conseguiré más
 
        `,
        product: products[0],
        img: products[0].img[1],
      },
      // {
      //   name: "Alex Ortiz",
      //   star: 5,
      //   location: "El Encanto, Colombia",
      //   H: "Perfecto",
      //   P: "Los pantalones cortos son pequeños, pero si sigues la comparación de medidas, te ayudará a elegir el correcto.",
      //   product: products[0],
      // },
      {
        name: "Angel Leon",
        star: 5,
        location: "Andes, Colombia",
        H: "¡Le encanta!",
        P: `
        Compró esta bicicleta para nuestros dos años de edad y le encanta así que nos encanta! Super ligero y fácil de manejar para él. Después de leer los comentarios que era un poco aprensivo acerca de las ruedas de espuma, pero son súper ligeros y no hay pisos! Así que realmente son perfectos para él.
Me gusta cómo a apenas dos puede manejar su bicicleta de forma independiente. ¡Aumenta su nivel de confianza!
        `,
        product: products[1],
        img: products[1].img[0],
      },
      {
        name: "Jose Miguel Flores",
        star: 4,
        location: "El Encanto, Colombia",
        H: "pero esta fue una gran herramienta de aprendizaje",
        P: `
        A mi hijo de 4 años le encanta esta bicicleta. Tenía problemas inclinándose a pedalear con una bicicleta normal, así que esta era una manera barata para él de al menos tener la idea de que una bicicleta va hacia adelante y rápido! No es un problema ahora, pero esta fue una gran herramienta de aprendizaje. Las ruedas son la mejor parte, porque nunca necesitan ser infladas. Son duro y duradero polímero/goma combo. Esta bicicleta se utiliza mejor en hormigón plano o asfalto. NO hay descansos, así que ten cuidado en las colinas. Llevo a mi hijo a un pequeño parque de patinaje local con un montón de terreno llano para que pueda montar y es muy suave.
        `,
        product: products[1],
        img: products[1].img[1],
      },
      {
        name: "Ariel Garcia",
        star: 5,
        location: "Bogotá, Colombia",
        H: "A + + + Mejor primera bicicleta!.. Añadir a la cesta",
        P: `
        Esta debería ser la primera bicicleta de cada niño. Esta es nuestra segunda bicicleta. Mi hijo de 3 años de edad carretera su primera bicicleta muy duro todos los días. Son 9 meses de uso pesado. Los rodamientos de las ruedas se desgastaron como era de esperar con un uso tan pesado. Elegí reemplazar la bicicleta en lugar de reemplazar sólo las ruedas. La bicicleta 2 también se montó muy duro. Los rodamientos de rueda también duraron alrededor de 9 meses. Mi hijo consiguió una bicicleta nueva, pero aún así preferiría montar su vieja bicicleta con la rueda oscilante. A + + + 
        `,
        product: products[1],
        img: products[1].img[2],
      },
    ],
    category: "Deportes",
  };
};

export default deportes;
