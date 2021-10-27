import { post } from "../lib/request";

export const createlead = async (
  name,
) => {
  
  try {
    const response = await post("/create_lead_zoho", {
      name: name,
      last_name: last_name,
      email: email,
      username: email,
      password: password,
    });
    return response;
  } catch (error) {
    return error.response && error.response.status === 422
      ? "El elemento ya existe."
      : error.response.status === 400
      ? "Por favor complete todos los campos"
      : "Error desconocido, intente nuevamente.";
  }
};

