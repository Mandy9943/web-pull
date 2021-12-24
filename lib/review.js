import animales from "./reviews/animales";

export default (category) => {
  const getReviews = (el, category) => {
    console.log({ el, category });
    return String(el).toLowerCase().includes(String(category).toLowerCase());
  };
  const list = [animales()];
  const list_category = list.filter((el) => getReviews(el.category, category));
  if (list_category.length > 0) {
  }
  return [...animales()];
};
