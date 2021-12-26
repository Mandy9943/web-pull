import animales from "./reviews/animales";

//Listado de todas las categorias
const categories = [animales()];

export default (category) => {
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
  return categories;
};
