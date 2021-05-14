import { get, post, put, rDelete } from "../lib/request";

export const createUser = async (
  name,
  last_name,
  email,
  password,
  password_confirmation
) => {
  
  try {
    const response = await post("/register", {
      name: name,
      last_name: last_name,
      email: email,
      username: email,
      password: password,
    });
    return response;
  } catch (error) {
    return error.response && error.response.status === 422
      ? "El correo ya existe."
      : error.response.status === 400
      ? "Por favor complete todos los campos"
      : "Error desconocido, intente nuevamente.";
  }
};

export const socialLogin = async (name, last_name, email, red, id, token) => {
  try {
    const response = await post("/social", {
      name: name,
      last_name: last_name,
      email: email,
      username: email,
      red: red,
      id: id,
      token: token,
    });
    return response;
  } catch (error) {
    return "Error desconocido, intente nuevamente.";
  }
};

export const getData = (endpoint, jwt) => {
  try {
    return get(endpoint, jwt);
  } catch (error) {
    return error;
  }
};

export const deleteData = (endpoint, jwt) => {
  try {
    return rDelete(endpoint, jwt);
  } catch (error) {
    return error;
  }
};

export const recoverPass = async (email) => {
  try {
    const response = await post("/recoverPass", {
      email: email,
    });
    return response;
  } catch (error) {
    return error.response && error.response.status === 400
      ? "El correo no existe."
      : "Error desconocido, intente nuevamente.";
  }
};

export const resetPassword = async (password, token) => {
  try {
    const response = await post("/resetPassword", {
      token: token,
      password: password,
    });
    return 1;
  } catch (error) {
    return error.response && error.response.status === 400
      ? "El usuario no existe o el token ha expirado."
      : "Error desconocido, intente nuevamente.";
  }
};

export const savePhone = async (email) => {
  try {
    const response = await post("/recoverPass", {
      email: email,
    });
    return response;
  } catch (error) {
    return error.response && error.response.status === 400
      ? "El correo no existe."
      : "Error desconocido, intente nuevamente.";
  }
};

export const completeData = async (data, jwt) => {
  try {
    const response = await post("/completeData", data, jwt);

    return !response.data ? response : null;
  } catch (error) {
    return (
      error.response &&
      "No se pudo guardar la información, intentelo nuevamente."
    );
  }
};

export const savePrivateData = async (endpoint, data, jwt) => {
  try {
    const response = await post(endpoint, data, jwt);
    return !response.data ? response : null;
  } catch (error) {
    return (
      error.response &&
      "No se pudo guardar la información, intentelo nuevamente."
    );
  }
};

export const makePayment = async (data, jwt) => {
  try {
    const response = await post("/psePayment", data, jwt);
    return response.data
      ? response
      : {
          error:
            "E000000132 : No se pudo guardar la información, intentelo nuevamente.",
        };
  } catch (error) {
    return (
      error.response && {
        error: "No se pudo guardar la información, intentelo nuevamente.",
      }
    );
  }
};

export const makePaymentCC = async (data, jwt) => {
  const response = await post("/ccPayment", data, jwt);

  return response.data
    ? response
    : {
        error:
          "E000000142 : No se pudo guardar la información, intentelo nuevamente.",
      };
};

export const makePaymentCash = async (data, jwt) => {
  const response = await post("/cashPayment", data, jwt);

  return response.data
    ? response
    : {
        error:
          "E000000152 : No se pudo guardar la información, intentelo nuevamente.",
      };
};

export const getUserData = async (jwt) => {
  try {
    const response = await get("/getUserData", jwt);
    return response;
  } catch (error) {
    return error.response && "No se pudo obtener la información del usuario.";
  }
};

export const contact = async (data) => {
  try {
    const response = await post("/contact", data);
    return response;
  } catch (error) {
    return error.response && "No se pudo realizar la solicitud.";
  }
};

export const getDSI = async (jwt) => {
  try {
    const response = await get("/getDSI", jwt);
    return response;
  } catch (error) {
    return error.response && "No se pudo obtener la información del usuario.";
  }
};

export const changeUsername = async (data, jwt) => {
  try {
    const response = await put(
      "/changeUserName ",
      {
        new_name: data,
      },
      jwt
    );
    return true;
  } catch (error) {
    return false;
  }
};

export const anulateAccount = async (data, jwt) => {
  try {
    const response = await rDelete("/anulate_account ", data, jwt);
    return true;
  } catch (error) {
    return "Ha ocurrido un error en el servidor!";
  }
};
