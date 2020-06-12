import { post, get, rDelete } from "../lib/request";

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
        password: password
    });
    return response;
  } catch (error) {

    return error.response &&
    error.response.status === 422 ? "El correo ya existe."
    : (error.response.status === 400 ? "Por favor complete todos los campos"
    : "Error desconocido, intente nuevamente.");
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
}

export const recoverPass = async (email) => {
    try {
        const response = await post("/recoverPass", {
            email: email,
        });
        return response;
    } catch (error) {
        return error.response &&
        error.response.status === 400 ? "El correo no existe." : "Error desconocido, intente nuevamente.";
    }
};



export const savePhone = async (email) => {
    try {
        const response = await post("/recoverPass", {
            email: email,
        });
        return response;
    } catch (error) {
        return error.response &&
        error.response.status === 400 ? "El correo no existe." : "Error desconocido, intente nuevamente.";
    }
};


export const completeData = async (data, jwt) => {
    try {
        const response = await post("/completeData", data, jwt);

        return !response.data ? response : null;

    } catch (error) {
        return error.response && "No se pudo guardar la información, intentelo nuevamente.";
    }
};

export const savePrivateData = async (endpoint, data, jwt) => {
    try {
        const response = await post(endpoint, data, jwt);
        return !response.data ? response : null;
    } catch (error) {
        return error.response && "No se pudo guardar la información, intentelo nuevamente.";
    }
};

export const getUserData = async (jwt) => {
    try {
        const response = await get("/getUserData", jwt);
        return response;
    } catch (error) {
        return error.response && "No se pudo obtener la información del usuario.";
    }
};
