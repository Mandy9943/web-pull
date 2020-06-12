import {get, post, sget} from "../lib/request";

export const getChat = (user_id, jwt) => {
    try {
        let endpoint = "/loadChat/"+user_id;
        let data = get(endpoint, jwt)
        return data;
    } catch (error) {
        return error;
    }
};

export const sendMsg = (msg, user_id, jwt) => {
    try {
        const msgData = {
            "message": msg,
            "user_id": user_id
        }
        let data = post("/sendMsg", msgData, jwt)

        return data;
    } catch (error) {
        return error;
    }
};
