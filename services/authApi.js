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
    return error.response && error.response.status === 401
        ? "Usuario o contraseña inválido"
        : "Error desconocido. por favor intente nuevamente.";
  }
};
