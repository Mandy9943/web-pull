import {get, post, postForm, putForm, sget, apiget} from "../lib/request";
import {filtersApi, productsApi, suggestionsApi} from "../lib/config";

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

export const getRecommendProducts = (category) => {
    try {
        let endpoint = ("/search/category/"+category+"?size="+20);
        let data = sget(endpoint)
        return data;
    } catch (error) {
        return error;
    }
};

export const searchProduct = (string, limit) => {
    try {
                
        let endpoint = ("https://dev.kieroapi.net/api/v1.0/search?keyword="+string);
        let data = apiget(endpoint)
        return data;
    } catch (error) {
        return error;
    }
};

export const searchProducts = (size, page, ots='', brand='', price='', category='', sort_by='', order_by='', level='') => {
    try {
        const params = new URLSearchParams();

        if (ots !== '') params.append('ots', ots);
        if (brand !== '') params.append('brand', brand);
        if (price !== '') params.append('price', price);
        if (category !== '') params.append('category', category);
        if (sort_by !== '') params.append('sort_by', sort_by);
        if (order_by !== '') params.append('order_by', order_by);
        if (level !== '') params.append('level', level);

        let endpoint = productsApi + `?size=${size}&page=${page}`
        if (params.toString().length)
            endpoint = endpoint + '&' + params.toString();

        return  apiget(endpoint)
    } catch (error) {
        return error;
    }
};

export const searchSuggestions = (size, ots) => {
    try {
        let endpoint = suggestionsApi + `?size=${size}&ots=${ots}`

        return  apiget(endpoint)
    } catch (error) {
        return error;
    }
};

export const searchFilters = (ots, level, category) => {
    try {
        const params = new URLSearchParams();

        if (level !== '') params.append('level', level);
        if (category !== '') params.append('category', category);

        let endpoint = filtersApi + `?ots=${ots}`
        if (params.toString().length)
            endpoint = endpoint + '&' + params.toString();

        return  apiget(endpoint)
    } catch (error) {
        return error;
    }
};

export const getProductsBasic = (category, limit) => {
    try {
        let endpoint = ("/search/category/"+category+"?size="+limit);
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

export const sendAnswer = (msg, product_id, jwt) => {
    try {
        const msgData = {
            "answer": msg,
            "question_id": product_id
        }
        let data = post("/replyQuestion", msgData, jwt)

        return data;
    } catch (error) {
        return error;
    }
};