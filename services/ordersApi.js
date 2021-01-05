import {sget} from "../lib/request";

export const getOrderId = (order_id, jwt) => {
    try {
        let endpoint = ("/getOrder/"+order_id);
        let data = sget(endpoint, jwt)
        return data;
    } catch (error) {
        return error;
    }
};
