import { post } from "../lib/request";
export const traceLead = async (
  email,
  json,
  first_name,
  last_name,
  phone,
  product_category,
  product_subcategory,
  lead_type
) => {
  try {
    const res = await post("/saveTraceLead", {
      email: email,
      json: json,
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      product_category: product_category,
      product_subcategory: product_subcategory,
      lead_type: lead_type,
    });
    return res.data;
  } catch (error) {
    return error.response && error.response.status === 422
      ? "El elemento ya existe."
      : error.response.status === 400
      ? "Por favor complete todos los campos"
      : "Error desconocido, intente nuevamente.";
  }
};
