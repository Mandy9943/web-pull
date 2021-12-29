import animales from "./reviews/animales";
import bebes from "./reviews/bebes";
import belleza from "./reviews/belleza";
import camaras from "./reviews/camaras";
import cientifica from "./reviews/cientifica";
import computacion from "./reviews/computacion";
import consolas from "./reviews/consolas";
import deportes from "./reviews/deportes";
import oficina from "./reviews/oficina";
import relojes_y_joyeria from "./reviews/relojes_y_joyeria";
import salud from "./reviews/salud";
import vehiculos from "./reviews/vehiculos";
import electrodomesticos from "./reviews/electrodomesticos";
import electronica from "./reviews/electronica";
import herramientas from "./reviews/herramientas";
import hogar from "./reviews/hogar";

//Listado de todas las categorias
const categories = [
  animales(),
  bebes(),
  belleza(),
  camaras(),
  cientifica(),
  computacion(),
  consolas(),
  deportes(),
  vehiculos(),
  salud(),
  relojes_y_joyeria(),
  oficina(),
  electrodomesticos(),
  electronica(),
  herramientas(),
  hogar(),
];

const review = (category) => {
  // Filtrar solo las categorias que se parecen a la solicitada
  const list_category = categories.filter((el) => {
    return String(el.category)
      .toLowerCase()
      .includes(String(category).toLowerCase());
  });
  // Creando variable temporal
  const list = [];

  // Si la categoria existe mandar solo las categorias si no mandar el listado completo
  if (list_category.length > 0) {
    list_category.map((category) => {
      category.reviews.map((review) => {
        list.push(review);
      });
    });
    return list;
  }
  categories.map((category) => {
    category.reviews.map((review) => {
      list.push(review);
    });
  });
  return list;
};

export default review;
