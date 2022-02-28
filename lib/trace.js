import { traceLead } from "../services/traceApi";

export const createTraceLead = async (data) => {
  const res = await traceLead(data);
  if (!res.data) {
    return res;
  }

  return null;
};
