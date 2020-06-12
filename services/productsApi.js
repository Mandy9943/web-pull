import {get, post, postForm, putForm, sget} from "../lib/request";

const getDataJWT = (endpoint, jwt) => {
    try {
        return get(endpoint, jwt);
    } catch (error) {
        return error;
    }
};


const getData = (endpoint) => {
    try {
        return get(endpoint);
    } catch (error) {
        return error;
    }
};


export const getProducts8 = () => {
    try {
        let endpoint = ("/getProducts");
        let data = sget(endpoint)
        return data;
    } catch (error) {
        return error;
    }
};

export const getProductDetail = (id_product) => {
    try {
        let endpoint = ("/getProduct/"+id_product);
        let data = sget(endpoint)
        return data;
    } catch (error) {
        return error;
    }
};

export const searchProduct = (string, limit) => {
    try {
        let endpoint = ("/search/"+limit+"/"+string);
        let data = sget(endpoint)
        return data;
    } catch (error) {
        return error;
    }
};


export const getProductsBasic = (category, limit) => {
    try {
        let endpoint = ("/getProductsCategory/"+limit+"/"+category);
        let data = sget(endpoint)
        return data;
    } catch (error) {
        return error;
    }
};


export const getCategories = () => {
    try {
        let endpoint = ("/getCategories");
        let data = get(endpoint)
        return data;
    } catch (error) {
        return error;
    }
};


export const saveProduct = (data, jwt) => {
    try {
        let postFormData = postForm("/newProduct", data, jwt)
        return postFormData;
    } catch (error) {
        return error;
    }
};


export const updateProduct = (data, jwt) => {
    try {
        let postFormData = putForm("/updateProduct", data, jwt)
        return postFormData;
    } catch (error) {
        return error;
    }
};

export const sendQuestion = (msg, product_id, jwt) => {
    try {
        const msgData = {
            "question": msg,
            "product_id": product_id
        }
        let data = post("/newQuestion", msgData, jwt)

        return data;
    } catch (error) {
        return error;
    }
};