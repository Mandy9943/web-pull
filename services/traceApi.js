import { post } from "../lib/request";
export const traceLead = async (email, json) => {
  try {
    const res = await post("/saveTraceLead", {
      email: email,
      json: json,
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
