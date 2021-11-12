import { post } from "../lib/request";

export const createlead = async (
  data,
) => {
  try {
    const response = await post("/create_lead_zoho", data);
    return response;
  } catch (error) {
    return error.response && error.response.status === 422
      ? "El elemento ya existe."
      : error.response.status === 400
      ? "Por favor complete todos los campos"
      : "Error desconocido, intente nuevamente.";
  }
};

