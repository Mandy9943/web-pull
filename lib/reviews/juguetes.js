const juguetes = () => {
  const products = [
    {
      name: "Fortnite Monopoly",
      img: [
        {
          url: "https://kiero.co/review_folder/Juguetes/Fortnite Monopoly/It’s just okay...not like the original monopoly_1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Juguetes/Fortnite Monopoly/It’s just okay...not like the original monopoly_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Juguetes/Fortnite Monopoly/It’s just okay...not like the original monopoly_2.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Juguetes/Fortnite Monopoly/So fun; we played 5 times in 2 days_0.jpg",
          image: true,
        },
      ],
    },
    {
      name: "Star Wars Lego",
      img: [
        {
          url: "https://kiero.co/review_folder/Juguetes/Star Wars Lego/Amazing_1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Juguetes/Star Wars Lego/A weekend well spent..._0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Juguetes/Star Wars Lego/A weekend well spent..._1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Juguetes/Star Wars Lego/A weekend well spent..._2.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Juguetes/Star Wars Lego/A weekend well spent..._3.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Juguetes/Star Wars Lego/Amazing_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Juguetes/Star Wars Lego/Amazing_2.jpg",
          image: true,
        },
      ],
    },
  ];
  return {
    reviews: [
      {
        name: "Felipe Rubio",
        star: 5,
        location: "Tarapacá, Colombia",
        H: "¡Este es el camino!",
        P: "¡Absolutamente impresionante! Me encanta El Mandalorian, y me encanta LEGO. Este conjunto se basa en la increíble Razor Crest, fue bastante divertido de construir, y estoy seguro de que los niños y adultos lo disfrutarán!",
        product: products[1],
        img: products[1].img[0],
      },
      {
        name: "Mario Lopez Hernandez",
        star: 5,
        location: "Frontino, Colombia",
        H: "¡El mejor set que he comprado!",
        P: "Las palabras no pueden explicar cuánto me encanta este set de Lego. En primer lugar, recibí el producto un día antes de que Kiero lo cotizara, así que fue una gran bonificación. La caja estaba impecable en el momento de la entrega. Miré la abrumadora novela de instrucciones y me puse a trabajar. Las instrucciones fueron fáciles de seguir y toda la construcción tomó alrededor de 3 horas en total. No está mal por algo más de 1000 piezas. El barco es robusto y tiene un montón de partes móviles y áreas secretas tipo compartimento que permiten contar historias increíbles. Este set es imprescindible para cualquier fan de Star Wars. Oh, y en una nota al margen, el set valió la pena solo para la figura más adorable de Lego de la historia... El Niño.",
        product: products[1],
        img: products[1].img[1],
      },
      {
        name: "Santiago Roman",
        star: 5,
        location: "Bogotá, Colombia",
        H: "Un fin de semana bien gastado...",
        P: "Ya que es mi segundo barco favorito de todos los tiempos Star Wars pensé que merecía su propia sesión de fotos! Creo que la nave es innegablemente fotogénica. Oh, y la llamarada extra dramática vino de un viejo kit de luces Lego X-Wing. ¡Así que no pienses que te estás perdiendo ninguna parte!",
        product: products[1],
        img: products[1].img[2],
      },
      {
        name: "Juan Andres Sanchez",
        star: 5,
        location: "Bogotá, Colombia",
        H: "¡Tan divertido; jugamos 5 veces en 2 días!",
        P: "Esta versión de Monopoly no utiliza dinero! Idea genial para niños muy pequeños! Incluso a mi hijo de 4 años le encantaba jugar. Puede ser muy rápido (que fue perfecto!). Estaba fuera antes de pasar. Vete, jaja. En lugar de dinero, este juego utiliza círculos verdes llamados HP. Poco a poco los pierde todos en el «banco» en el medio, pero puede obtener más pasando Go o aterrizando en un espacio más uno o dibujando una tarjeta en particular. Cuando aterrices en una propiedad disponible, es tuya de forma gratuita. Si aterriza en una propiedad propia, tiene que pagar un HP verde. Sencillo. Este juego es fácil de entender, super divertido, y rápido para los cortos tramos de atención de los jóvenes jugadores de Fortnite.",
        product: products[0],
        img: products[0].img[0],
      },
      {
        name: "José Antonio Parra",
        star: 5,
        location: "Medellín, Colombia",
        H: "Edición de juegos impresionante",
        P: "Este juego es muy divertido y un giro agradable y un clásico antiguo. El juego no dura 3 días y termina cuando un amigo o familiar tira la pizarra por la sala al salir y se puede jugar en una o dos horas una vez hayas leído las reglas. Los PS (dinero) se intercambian con el banco en lugar de entre los jugadores y los cofres (cartas de azar) pueden sumar un daño sustancial al eliminar a algunos jugadores en un solo turno. Puedes construir «muros» en espacios en los que los oponentes se detengan en ese lugar, independientemente de su número de tiradas. Definitivamente vale la pena la compra y mi hijo de 8 años lo recogió más rápido que yo.",
        product: products[0],
        img: products[0].img[1],
      },
      {
        name: "Antonio Guerrero",
        star: 5,
        location: " Barbosa, Colombia",
        H: "Alternativa inteligente al monopoly tradicional",
        P: "Siempre dudamos en jugar al Monopoly porque el compromiso de tiempo y atención requería. Este juego tardó unos 30 minutos para que cuatro de nosotros jugáramos. Es un concepto muy diferente al Monopoly tradicional, pero aún así divertido. Pesado rápido.",
        product: products[0],
        img: products[0].img[2],
      },
    ],
    category: "Juguetes",
  };
};

export default juguetes;
