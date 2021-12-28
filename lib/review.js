import animales from "./reviews/animales";
import bebes from "./reviews/bebes";
import belleza from "./reviews/belleza";
import camaras from "./reviews/camaras";
import cientifica from "./reviews/cientifica";
import computacion from "./reviews/computacion";
import consolas from "./reviews/consolas";
import deportes from "./reviews/deportes";

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
