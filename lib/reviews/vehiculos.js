const vehiculos = () => {
  const products = [
    {
      name: "Armor All",
      img: [
        {
          url: "https://kiero.co/review_folder/Vehiculos/Armor All/Complete kit for a traditional wash ... works great_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Vehiculos/Armor All/Didn't get all that was advertised ..._0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Vehiculos/Armor All/Happy_0.jpg",
          image: true,
        },
      ],
    },
    {
      name: "Tire Inflator",
      img: [
        {
          url: "https://kiero.co/review_folder/Vehiculos/Tire Inflator/_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Vehiculos/Tire Inflator/_0 (1).jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Vehiculos/Tire Inflator/_1.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Vehiculos/Tire Inflator/Could be better_0.jpg",
          image: true,
        },
        {
          url: "https://kiero.co/review_folder/Vehiculos/Tire Inflator/Great product_0.jpg",
          image: true,
        },
      ],
    },
  ];
  return {
    reviews: [
      {
        name: "Raul Hernandez",
        star: 4,
        location: "Tarapacá, Colombia",
        H: "Feliz",
        P: "Estaba dudando en comprar porque mucha gente decía que recibían artículos dañados o que no recibían las cosas correctas, pero recibí todo en perfecto estado y como se describe, así que estoy muy feliz.        ",
        product: products[0],
      },
      {
        name: "Xavier Navarro",
        star: 5,
        location: " Leticia, Colombia",
        H: "Gran comienzo para un principiante o alguien que necesita un kit básico de lavado de coches.",
        P: `Este es un gran valor para todo lo que obtienes en este kit. Armor All hace grandes productos y esto está a la par con el valor que viene con este kit.

        Todos los artículos vienen en la caja de envío individualmente. Esto le dará todo lo que necesita hacer para lavar su coche y está a la par con el valor y el rendimiento.
        
        En lo que respecta a cada producto,
        
        1. El limpiador de ruedas se puede utilizar en casi todas las ruedas y hace un gran trabajo limpiando el polvo roto de mis ruedas cromadas.
        
        2. La Wash and Wax está bien. Este es un producto básico y funciona bien.
        
        3. El limpiador de cristales es genial y no deja rayas ni neblina.
        
        4. El limpiador de interiores funciona muy bien en la mayoría de las superficies y fue capaz de levantar las manchas.
        
        5. El protector es la misma fórmula que hace años y deja un bonito acabado satinado en las superficies.
        
        6. El vendaje de neumáticos hace un gran trabajo y durará alrededor de una semana.
        
        7. El ambientador era mi parte menos favorita de este paquete y aunque huele limpio y fresco no dura mucho en absoluto.
        `,
        product: products[0],
      },
      {
        name: "Carolina Rojas",
        star: 5,
        location: "Medellín, Colombia",
        H: "Kit completo para un lavado tradicional... funciona muy bien!",
        P: "Wow, este es un gran kit! Todo lo que necesitas para un lavado de efectivo tradicional. ¡El limpiador de ruedas es increíble! Lo roció, lo dejó reposar unos minutos y lo enjuagó. Ni siquiera se frotó, y todo salió. Odio limpiar mis ruedas, ¡así que esto es un regalo del cielo! Todo lo demás es de buena calidad.",
        product: products[0],
      },
      {
        name: "María Isabel Gil",
        star: 5,
        location: "Medellín, Colombia",
        H: "No más máquinas de aire roto",
        P: "Como cualquier persona con un coche a veces necesito añadir aire a un neumático bajo. Las máquinas de aire la última vez que quiero eran 2.00 en cuartos Y rotas así que estaba conduciendo por un neumático bajo tratando de encontrar un cajero automático, alguien en una tienda para darme habitaciones y una máquina de aire. Molesto!! Este amiguito no era molesto. Lo enchufé, arranqué mi coche y con un accesorio mi neumático estaba lleno en unos 2 minutos. ¡Me encanta! Voy a usar esto en mi bicicleta y cualquier inflable viene el verano así que esto vale la pena el precio!        ",
        product: products[1],
      },
      {
        name: "Beatriz Cortes",
        star: 5,
        location: " Bogotá, Colombia",
        H: " Poderosa unidad pequeña",
        P: "¡El inflador de neumáticos perfecto que he estado buscando! He estado usando este producto durante un par de semanas en mi neumático de auto y así como el neumático de carro más pequeño que tengo en casa para la pesca. Comprueba la presión de los neumáticos y ajusta la presión al nivel apropiado. Muy contento con la compra y muy recomendable. Definitivamente vale la pena el precio.",
        product: products[1],
      },
      {
        name: "Celia Sanchez",
        star: 5,
        location: "Andes, Colombia",
        H: "Funciona muy bien para mantener los neumáticos a la presión correcta.",
        P: " Funcionó perfectamente para mi aplicación. Me encanta la lectura digital retroiluminada y el apagado automático cuando se alcanza la presión deseada de los neumáticos. Lo he usado para reponer los neumáticos de mis coches, montar cortadora de césped y otras cosas. Es pequeño, ligero y fácil de usar.",
        product: products[1],
      },
    ],
    category: "Vehiculos",
  };
};

export default vehiculos;
