const electronica = () => {
  const products = [
    {
      name: "Amazon Echo",
      img: [
        {
          url: "https://kiero.co/review_folder/Electronica/Echo 5/Best Bedside Personal Assistant_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electronica/Echo 5/C1NYVXQApnS.mp4",
          image: false,
        },
        {
          url: "https://kiero.co/review_folder/Electronica/Echo 5/E1KJMvuy7WS.mp4",
          image: false,
        },
        {
          url: "https://kiero.co/review_folder/Electronica/Echo 5/New favorite gadget_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electronica/Echo 5/Screen Shot 2021-12-05 at 5.42.06 PM.png",
          image: true,
        },
      ],
    },
    {
      name: "Television TCL",
      img: [
        {
          url: "https://kiero.co/review_folder/Electronica/Television TCL/CAN'T BEAT THIS T.V. FOR THE PRICE_0.jpg",
          image: true,
        },
        // {
        //   url: "https://kiero.co/review_folder/Electronica/Television TCL/D1ES16HjJ3S.mp4",
        //   image: false,
        // },
        {
          url: "https://kiero.co/review_folder/Electronica/Television TCL/Great TV at a bargin price_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electronica/Television TCL/I'll never buy another TV that doesn't have ROKU or FireTV built into it._2.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Electronica/Television TCL/Perfect tv_0 (1).jpg",
          image: true,
        },
      ],
    },
  ];

  return {
    reviews: [
      {
        name: "Ana Isabel Herrero",
        star: 5,
        location: "Anza, Colombia",
        H: "¡Mejor asistente personal junto a la cama!",
        P: " Me gusta este pequeño Echo Show junto a mi cama. Con un gran descuento gracias a KIERO. ¡Puedo ver el clima, la fecha y la hora cuando me levanto por la mañana! Reproduce mi emisora de radio favorita mientras me estoy vestiendo. Puedo preguntar sobre cualquier paquete y puedo ver mis fotos guardadas. Sin mencionar que lo tengo vinculado a otros dispositivos, incluido el Echo Show de mi madre a dos estados de distancia. Vale la pena lo que pagué por ello! ¡Lo único negativo son los anuncios! ¡Pero solo necesito sentarme un día y seguir los pasos para quitarlos!",
        product: products[0],
        img: products[0].img[3],
      },
      {
        name: "Santiago Vazquez",
        star: 5,
        location: "Medellín, Colombia",
        H: "La versatilidad de este dispositivo es increíble.",
        P: "Este Echo Show 5 es realmente increíble. La calidad de la música es excelente y MUCHO mejor que los Echo Dots (en comparación con la Gen 3 y la Gen 4). La vista en directo desde la aplicación Alexa de mi teléfono lo duplica como un dispositivo de monitoreo de seguridad en interiores (aunque no hay detección de movimiento). Me gusta cómo te avisa cuando alguien (con acceso a la cuenta) está viendo en vivo y también tienes la cubierta deslizante de plástico tangible que cubre la cámara para mayor privacidad (de color blanco para que puedas ver fácilmente cuando la diapositiva cubre la cámara). En general, un producto increíble y definitivamente pagaría el precio completo por uno cuando decido obtener otro.",
        product: products[0],
        img: products[0].img[1],
      },
      {
        name: "María Carmen Garrido",
        star: 4,
        location: "Bogotá, Colombia",
        H: "¡Nuevo gadget favorito!",
        P: "No tenía ni idea de lo mucho que necesitaba esto en mi vida hasta que lo instalé. ¡Esto vino gratis con mi compra de cinco cámaras parpadeantes y estoy absolutamente obsesionado! Me encanta que a mis hijos les pidan que vean diferentes cámaras en nuestra casa en caso de que estén solos en casa puedan ver lo que está pasando. También pude hacer FaceTime a mi hijo desde este dispositivo y él pudo llamarme, lo cual es genial teniendo en cuenta que no tenemos un teléfono fijo y no pudo encontrar su iPad cuando llegó a casa para llamarme. Ni siquiera creo que haya rayado la superficie en algunas de las cosas que pueden hacer, pero si estabas buscando un nuevo gadget para emparejar con tus dispositivos Alexa, ¡este es definitivamente el que debes conseguir!",
        product: products[0],
        img: products[0].img[2],
      },
      {
        name: "Ramon Jimenez",
        star: 5,
        location: "Bogotá, Colombia",
        H: "Estoy impresionada.",
        P: "Recibí este producto hoy. Fue en EXCELENTE CALIDAD cuando lo recibí. Fácilmente desembalado y capaz de configurar. Todos los artículos estaban presentes. Tengo que decir que esta fue la configuración más rápida que he tenido para cualquier tipo de dispositivo (TV, PC, ordenador portátil, teléfono, etc.). Aunque hice un poco de investigación antes de comprar este dispositivo a través de Kiero. Luego, después de que lo pedí y mientras estaba esperando la entrega hice un poco de lectura en este sitio (comentarios y preguntas y respuestas) solo para tener un “borde” cuando llegó el momento de configurarlo. Cuando todo fue dicho y hecho, probablemente fue de una hora a hora y media desde abrir la caja hasta volver a tumbarse en el sofá después de todo estaba hecho.",
        product: products[1],
        img: products[1].img[0],
      },
      {
        name: "Alejandro Manuel Jimenez",
        star: 5,
        location: "La Victoria, Colombia",
        H: "¡Precio increíble con gran calidad gracias a Kiero! Te vas a gustar.",
        P: "Estoy muy contento con esta compra. yo estaba un poco vacilante debido a la Roku, pero en realidad me gusta mucho. He configurado mi televisión por cable también y soy capaz de cambiar en cualquier momento a ella. El mío está conectado con el cable HDMI - super fácil de configurar.",
        product: products[1],
        img: products[1].img[1],
      },
      {
        name: "Ivan Nieto",
        star: 4,
        location: "La Victoria, Colombia",
        H: "¡Me encanta!",
        P: "No puedo decir suficientes cosas buenas sobre este televisor y el apoyo del equipo Kiero. Tan simple de usar, tantas características, tantas aplicaciones gratuitas. Simplemente hicieron casi todo bien. Me preocupaba que el control remoto fuera un problema al no tener los números, pero nunca los uso de todos modos. Así que me queda un control remoto que es fácil de usar porque solo tiene los botones que realmente necesito. Los menús son mucho más suaves y fáciles de usar que el televisor inteligente que está reemplazando.",
        product: products[1],
        img: products[1].img[2],
      },
    ],
    category: "Electronica",
  };
};

export default electronica;
