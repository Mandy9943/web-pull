import { traceLead } from "../services/traceApi";

export const createTraceLead = async (email,json) => {
  console.log('llego')
  const res = await traceLead(email,json);
  if (!res.data) {
    return res;
  }

  return null;
};
