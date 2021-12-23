import jardin from "./reviews/jardin";

const review = (category = "all") => {
  const listadoReview = [...jardin()];
  console.log(listadoReview);
  if (category === "all") {
    return listadoReview;
  }
  let tempListadoReview = listadoReview.filter(
    (el) =>
      toString(el.category).toLowerCase().includes(category.toLowerCase()) ===
      true
  );
  if (tempListadoReview.length > 0) {
    return tempListadoReview;
  }
  return listadoReview;
};

export default review;
