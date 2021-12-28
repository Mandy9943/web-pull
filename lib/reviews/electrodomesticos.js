const electrodomesticos = () => {
  const products = [
    {
      name: "Robot Vacuum",
      img: [
        {
          url: "https://kiero.co/review_folder/Electrodomesticos/P1 - Robot Vacuum/_0.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electrodomesticos/P1 - Robot Vacuum/_1.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electrodomesticos/P1 - Robot Vacuum/_2.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electrodomesticos/P1 - Robot Vacuum/_3.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electrodomesticos/P1 - Robot Vacuum/Upgrade from my roomba 614_0.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electrodomesticos/P1 - Robot Vacuum/A1d+kJL0knS.mp4",
          image: false,
        },
      ],
    },
    {
      name: "Air Fryer",
      img: [
        {
          url: "https://kiero.co/review_folder/Electrodomesticos/P2 - Air Fryer/61EfiYWU6RL.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electrodomesticos/P2 - Air Fryer/71fhJzPVz+L.jpeg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electrodomesticos/P2 - Air Fryer/C1XTIBd6VBS._SL1600_.jpg",
          image: true,
        },
      ],
    },
  ];

  return {
    reviews: [
      {
        name: "María José Rodriguez",
        star: 5,
        location: "Bogotá, Colombia",
        H: "Perfecto para limpieza y ahorro de tiempo.",
        P: `
Yo y mi esposa estamos trabajando, así que no tenemos tiempo para limpiar en días laborables y en fines de semana estamos agotados. Estaba en busca de un robot aspirador en un presupuesto, encontré este. Viene con un mando a distancia, una aplicación para rastrear la limpieza, diferentes direcciones de limpieza y cubierta de carga. Dios mío, para mi sorpresa, funciona increíble Quiero decir que no esperaba eso. Pude ver el mapa en la aplicación de mi teléfono y también el porcentaje de batería. Este robot es muy inteligente, no se queda atascado debajo de sofás y mesa de comedor, siempre sabe su salida y también se va a la cubierta de carga cuando se hace la limpieza. He asignado tiempo para limpiar día y noche y no podría sentirme más aliviado. Lo recomendaré ya que es salvavidas.
        `,
        product: products[0],
      },
      {
        name: "María Nieves Cano",
        star: 4,
        location: "Medellín, Colombia",
        H: "Actualización de mi roomba 614",
        P: `
        Me sorprendió bastante lo bien que ofrece este robótico 'fuera de marca'. Me gustó mi roomba 614 pero fue increíblemente ineficiente porque no mapeó la habitación. Simplemente se tropezaría en su camino. Esta es una mejora seria.

Me encanta que viene con un mando a distancia patentado, además de una aplicación bastante bien diseñada. Lo he estado usando durante aproximadamente un mes y hasta ahora tan bien. Aparentemente hay un accesorio de fregona también disponible.
        `,
        product: products[0],
      },
      {
        name: "Aurora Gutierrez",
        star: 4,
        location: "Amagá, Colombia",
        H: "¡ACTUALIZADO! ¡Gran producto y satisfacción del cliente!",
        P: `
        Compré 3 de M210 para mi familia y para mí. Todavía hay 2 funcionando muy bien, el mío está defectuoso. Me puse en contacto con Lefant para obtener la garantía, me ofrecieron un reembolso completo o enviaron el modelo M213 más nuevo para un reemplazo gratuito.
Prefiero el robot que un reembolso porque me encanta el producto. Estoy bastante seguro de que el M213 debería ser mejor, tal vez tuve mala suerte en 1 de cada 3. ¡Pero aún así! ¡Esta es la mejor oferta! Lefant son buenos productos y la satisfacción del cliente aún más... ¡Gracias!
        `,
        product: products[0],
      },
      {
        name: "Juan Manuel Saez",
        star: 5,
        location: "Medellín, Colombia",
        H: "¡Sorprendente!",
        P: `
        He probado las características de Bake and Airfry hasta ahora y me encanta! ¡
La freidora se calienta muy rápidamente! Así que no hay necesidad de «recalentar» cuando vas a usarlo porque normalmente se calienta en menos de 5 minutos.
El ruido es casi el mismo que cualquier otra freidora. También disfruto de las indicaciones de «añadir comida» y «dar la vuelta a la comida» que hace la freidora, junto con los pitidos! El pomo para gestionar el tiempo y la temperatura, permite flexibilidad y puede cambiar el tiempo y la temperatura cuando lo necesite.
El aspecto de peso es algo que me gusta también, no está en el lado pesado (cuando lo uso, básicamente lo estoy levantando unos 4 pies.
        `,
        product: products[1],
      },
    ],
    category: "Electrodomesticos",
  };
};

export default electrodomesticos;
