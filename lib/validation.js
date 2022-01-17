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
};

export const validatePayCC = (payload) => {
  console.log(payload);
  let tips = {};

  if (!payload.card_holder || payload.card_holder.length < 2) {
    tips["card_holder"] = "Ingrese el nombre impreso en la tarjeta";
  }

  if (!payload.card_type || payload.card_type == "0") {
    tips["card_type"] = "Seleccione su tipo de tarjeta.";
  }

  if (
    !payload.expiration_date ||
    payload.expiration_date.length !== 7 ||
    payload.expiration_date.indexOf("/") === -1
  ) {
    tips["expiration_date"] = "Ingrese una fecha válida en el formato AA/MM";
  }

  if (parseInt(payload.expiration_date.split("/")[1]) > 12) {
    tips["expiration_date"] = "El mes no es válido el formato es: AÑO/MES";
  }

  var date = new Date();

  if (
    parseInt(payload.expiration_date.split("/")[0]) < date.getFullYear() ||
    (parseInt(payload.expiration_date.split("/")[0]) === date.getFullYear() &&
      parseInt(payload.expiration_date.split("/")[1]) < date.getMonth() + 1)
  ) {
    tips["expiration_date"] =
      "La fecha que ingresó ya pasó, la fecha debe ser superior o igual al mes actual";
  }

  if (!payload.ccv || payload.ccv.length < 2) {
    tips["ccv"] = "Ingrese un CCV válido";
  }
  if (!payload.monthly_fees || payload.monthly_fees <= 0) {
    tips["monthly_fees"] = "Debe ingresar una cantidad de meses válidas";
  }
  if (!payload.document_number || payload.document_number.length < 7) {
    tips["document_number"] = "Ingrese un documento de identificación válido";
  }
  return tips;
};

export const validateNewLead = (data) => {
  if (!data["first_name"]) {
    return "El nombre es un campo requerido.";
  }
  if (!data["email"]) {
    return "El correo es un campo requerido.";
  }
  // if (!data["last_name"]) {
  //   return "Los apellidos son un campo requerido.";
  // }
  return null;
};
