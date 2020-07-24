import {parse} from "@fortawesome/fontawesome-svg-core";

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

export const validatePayCC = (payload) => {

    if(!payload.card_number || payload.card_number.length !== 16){
        return "Su número de tarjeta debe tener 16 digitos";
    }
    if(!payload.card_holder || payload.card_holder.length < 2){
        return "Ingrese el nombre impreso en la tarjeta";
    }
    if(!payload.card_type || payload.card_type == "0"){
        return "Seleccione su tipo de tarjeta.";
    }
    console.log(payload.expiration_date);
    if(!payload.expiration_date || payload.expiration_date.length !== 7 || payload.expiration_date.indexOf("/")===-1){
        return "Ingrese una fecha válida en el formato AA/MM";
    }

    if(parseInt(payload.expiration_date.split("/")[1]) > 12){
        return "El mes no es válido el formato es: AÑO/MES";
    }

    var date = new Date();

    if( parseInt(payload.expiration_date.split("/")[0]) < date.getFullYear()
        ||
        (parseInt(payload.expiration_date.split("/")[0]) === date.getFullYear()
            &&
        parseInt(payload.expiration_date.split("/")[1]) < date.getMonth()+1)
    ){
        return "La fecha que ingresó ya paso, la fecha debe ser superior o igual al mes actual";
    }

    if(!payload.ccv || payload.ccv.length < 2){
        return "Ingrese un CCV válido";
    }
    if(!payload.monthly_fees || payload.monthly_fees <= 0){
        return "Debe ingresar una cantidad de meses válidas";
    }
    if(!payload.document_number || payload.document_number.length < 7){
        return "Ingrese un documento de identificación válido";
    }
    return true;
}