import redirect from "./redirect";
import { setCookie} from "./session";
import { createlead} from "../services/zohoApi";
import { validateNewLead} from "./validation";

export const createleadClient = async (name) => {
  const error = validateNewLead(name);
  if (error) {
    return error;
  }

  const res = await createlead(name);
  console.log(res)
  if (!res.data) {
    return res;
  }

  setCookie("success", `${name}, El cliente fue creado`);
  redirect("/login");
  return null;
};
