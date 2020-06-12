export const validateNewUser = (
  name,
  last_name,
  email,
  password,
  password_confirmation
) => {
  if (!name) {
    return "El nombre es un campo requerido.";
  }

  if (!last_name) {
    return "El apellido es un campo requerido.";
  }

  if (password !== password_confirmation) {
    return "Las contraseñas no coinciden";
  }

  return validateCredentials(email, password);

};

export const validateCredentials = (email, password) => {
  if (!email || !password) {
    return "Por favor ingrese usuario y contraseña.";
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return "El correo no es válido";
  }

  if (!(password.length >= 8)) {
    return "La contraseña debe ser de al menos 8 caracteres";
  }

  return null;
};

export const validateEmail = (email) => {
  if (!email) {
    return "Por favor ingrese un correo";
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return "El correo no es válido";
  }

  return null;
}