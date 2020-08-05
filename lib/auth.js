import redirect from "./redirect";
import { setCookie, getCookie, removeCookie } from "./session";
import { authenticate } from "../services/authApi";
import { createUser, recoverPass, socialLogin } from "../services/userApi";
import { validateCredentials, validateNewUser, validateEmail } from "./validation";

export const signIn = async (email, password) => {
  const error = validateCredentials(email, password);
  if (error) {
    return error;
  }
  const res = await authenticate(email, password);

  if (!res.access_token) {
    return res;
  }
  console.log(res.data)
  setCookie("jwt", res.access_token);
  setCookie("success", "Logged in");
  setCookie("user_id", res.data.user_id);
  setCookie("user", res.data.name);
  setCookie("user_type", res.data.role_id);
  setCookie("email", res.data.email);
  setCookie("name", res.data.name);
  setCookie("last_name", res.data.last_name);
  setCookie("full_name", res.data.name+" "+res.data.last_name);

  redirect("/");

  return null;
};

export const social = async (name, last_name, email, red, id, token) => {

  const error = validateNewUser(name, last_name, email, "123qwe123", "123qwe123");
  if (error) {
    return error;
  }
  
  const res = await socialLogin(name, last_name, email, red, id, token);

  console.log("SOCIAL LOGIN DATA.");  
  console.log(res)

  if (!res.data.access_token) {
    return res;
  }


  setCookie("jwt", res.access_token);
  setCookie("success", "Logged in");
  setCookie("user_id", res.data.user_id);
  setCookie("user", res.data.name);
  setCookie("user_type", res.data.role_id);
  setCookie("email", res.data.email);
  setCookie("name", res.data.name);
  setCookie("last_name", res.data.last_name);
  setCookie("full_name", res.data.name+" "+res.data.last_name);

  redirect("/");

  return null;
};

export const recover = async (email) => {
  const error = validateEmail(email);
  if (error) {
    return error;
  }
  const res = await recoverPass(email);

  if (!res.data) {
    return res;
  }
  setCookie("success", "Se ha enviado un correo de recuperación.");
  redirect("/recuperar");
  return null;
};

export const signUp = async (name, last_name, email, password, password_confirmation) => {
  const error = validateNewUser(name, last_name, email, password, password_confirmation);
  if (error) {
    return error;
  }

  const res = await createUser(name, last_name, email, password, password_confirmation);

  if (!res.data) {
    return res;
  }

  setCookie("success", `${name}, Tu cuenta ha sido creada.`);
  redirect("/login");
  return null;
};

export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie("jwt");
    removeCookie("success");
    removeCookie("user_id");
    removeCookie("user_type");
    removeCookie("user");
    removeCookie("email");
    removeCookie("name");
    removeCookie("last_name");
    removeCookie("full_name");
    redirect("/login", ctx);
  }
};

export const getJwt = ctx => {
  return getCookie("jwt", ctx.req);
};

export const getUser = ctx => {
  return getCookie("user", ctx.req);
};

export const getUserType = ctx => {
  return getCookie("user_type", ctx.req);
};


export const getName = ctx => {
  return getCookie("name", ctx.req);
};

export const getEmail = ctx => {
  return getCookie("email", ctx.req);
};

export const getLastName = ctx => {
  return getCookie("last_name", ctx.req);
};

export const getUserId = ctx => {
  return getCookie("user_id", ctx.req);
};

export const getFullName = ctx => {
  return getCookie("full_name", ctx.req);
};

export const isAuthenticated = ctx => !!getJwt(ctx);

export const redirectIfAuthenticated = ctx => {
  if (isAuthenticated(ctx)) {
    redirect("/cuenta", ctx);
    return true;
  }
  return false;
};

export const redirectIfNotAuthenticated = ctx => {
  if (!isAuthenticated(ctx)) {
    redirect("/login", ctx);
    return true;
  }
  return false;
};
