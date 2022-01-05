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
        // {
        //   url: "https://kiero.co/review_folder/Electrodomesticos/P1 - Robot Vacuum/A1d+kJL0knS.mp4",
        //   image: false,
        // },
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
        img: products[0].img[0],
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
        img: products[0].img[1],
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
        img: products[0].img[2],
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
        img: products[1].img[0],
      },
      {
        name: "Ángeles Santiago",
        star: 5,
        location: "Andes, Colombia",
        H: "Vale la pena el dinero",
        P: `
        Me encanta. No soy un cocinero profesional en absoluto y esta freidora me hace sentir como un chef lol fácil de usar y limpiar. Tiene un olor a quemaduras de plástico al principio, pero después de mi cuarta vez usándolo apenas se puede oler. Ideal para solteros o familias pequeñas. Corta el tiempo de cocción a la mitad. También es conveniente porque vivo en un sótano sin estufa. Sólo he hecho patatas fritas, hamburguesas de pavo y pollo a la parrilla, pero estoy deseando probar todo. Compré algunos accesorios de Amazon para hacer pinchos de pollo y pastel, etc. 
        `,
        product: products[1],
        img: products[1].img[1],
      },
      {
        name: "Sebastian Aguilar",
        star: 5,
        location: "Anza, Colombia",
        H: "Ahora entiendo todo el HYPE!",
        P: "Tengo un horno de convección, no pensé que este dispositivo fuera tan diferente pero pensé que le daría una oportunidad. He estado probando alimentos que no he tenido en años en esta cosa y ha sido muy divertido! Todos los que conozco que tienen una freidora de aire más pequeña dicen que tengan un tamaño más grande y tengo que estar de acuerdo con ellos. Solo soy una persona y compré el tamaño de 6 litros y no puede imaginarse tener una papelera más pequeña. La comida tiene más espacio para extenderse mientras se cocina y calentar uniformemente y dorar. Una cosa más, no soy un gran fan de las verduras y me han impresionado lo bueno que sale el brócoli y la coliflor. Absoluta perfección... Oh, ¿mencioné lo bueno que es el tocino también? ¡Disfrútalo!",
        product: products[1],
        img: products[1].img[2],
      },
    ],
    category: "Electrodomesticos",
  };
};

export default electrodomesticos;
