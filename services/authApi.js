import { post } from "../lib/request";
export const authenticate = async (username, password) => {
  try {
    const res = await post("/login", {
          username: username,
          password: password
        }
    );
    return res.data;
  } catch (error) {
    console.log(error.response + error.response.status);
    
    return error.response && error.response.status === 401
        ? "Usuario o contraseña inválido"
        : (error.response && error.response.status === 402 ? 
          "Por favor, active su cuenta para continuar."
          : "Error desconocido. por favor intente nuevamente."
          );
  }
};
