import { traceLead } from "../services/traceApi";

export const createTraceLead = async (
  email,
  json,
  first_name,
  last_name,
  phone,
  product_category,
  product_subcategory
) => {
  console.log("llego");
  const res = await traceLead(
    email,
    json,
    first_name,
    last_name,
    phone,
    product_category,
    product_subcategory
  );
  if (!res.data) {
    return res;
  }

  return null;
};
