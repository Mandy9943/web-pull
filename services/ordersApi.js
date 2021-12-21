import { sget, put } from "../lib/request";

export const getOrderId = (order_id, jwt) => {
  try {
    let endpoint = "/getOrder/" + order_id;
    let data = sget(endpoint, jwt);
    return data;
  } catch (error) {
    return error;
  }
};

export const modifyData = async (endpoint, data, jwt) => {
  try {
    return await put(endpoint, data, jwt);
  } catch (error) {
    return false;
  }
};
