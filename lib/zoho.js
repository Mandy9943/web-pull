import redirect from "./redirect";
import { setCookie } from "./session";
import { createlead } from "../services/zohoApi";
import { validateNewLead } from "./validation";

export const createleadClient = async (data) => {
  const error = validateNewLead(data);
  if (error) {
    return error;
  }
  const res = await createlead(data);
  if (!res.data) {
    return res;
  }

  // setCookie("success", `${name}, El cliente fue creado`);
  // redirect("/login");
  return null;
};
