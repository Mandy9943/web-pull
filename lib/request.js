import axios from "axios";
import { urlApi, baseUrl } from "./config"
const API_HOST = urlApi;

const getUrl = endpoint => API_HOST + endpoint;
const getUrlFront = endpoint => baseUrl + endpoint;

export const post = async (endpoint, data, jwt) => {
    const headers = jwt
        ? {headers: {"Content-Type": "application/json", "Authorization": `Bearer ${jwt}` }}
        : {headers: { "Content-Type": "application/json" }}
    ;

    return axios.post(getUrl(endpoint), data, headers);
};

export const postForm = async (endpoint, data, jwt) => {
    const headers = jwt
        ? {headers: {"Content-Type": "multipart/form-data", "Authorization": `Bearer ${jwt}` }}
        : {headers: {"Content-Type": "multipart/form-data"}}
    ;
    return axios.post(getUrl(endpoint), data, headers);
};

export const putForm = async (endpoint, data, jwt) => {
    const headers = jwt
        ? {headers: {"Content-Type": "multipart/form-data", "Authorization": `Bearer ${jwt}` }}
        : {headers: {"Content-Type": "multipart/form-data"}}
    ;
    return axios.put(getUrl(endpoint), data, headers);
};

export const get = async (endpoint, jwt) => {
    const headers = jwt
        ? {
            headers: { Authorization: `Bearer ${jwt}` }
        }
        : null;
    return axios.get(getUrl(endpoint), headers);
};

export const getFront = async (endpoint, jwt) => {
    const headers = jwt
        ? {
            headers: { Authorization: `Bearer ${jwt}` }
        }
        : null;
    return axios.get(getUrlFront(endpoint), headers);
};

export const rDelete = async (endpoint, jwt) => {
    const headers = jwt
        ? {
            headers: { Authorization: `Bearer ${jwt}` }
        }
        : null;
    return axios.delete(getUrl(endpoint), headers);
};


export const sget = async (endpoint, jwt) => {
    const headers = jwt
        ? {
            headers: {Authorization: `Bearer ${jwt}`}
        }
        : null;
    return await axios.get(getUrl(endpoint), headers);
};

export const apiget = async (endpoint, jwt) => {
    const headers = jwt
        ? {
            headers: {Authorization: `Bearer ${jwt}`}
        }
        : null;
    return await axios.get(endpoint, headers);
};
