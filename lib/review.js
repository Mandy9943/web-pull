import jardin from "./reviews/jardin";
import computacion from "./reviews/computacion";

export default (category) => {
  const getReviews = (el, category) => {
    return String(el).toLowerCase().includes(String(category).toLowerCase());
  };
  return [...jardin(), ...computacion()].filter((el) =>
    getReviews(el.category, category)
  );
};
