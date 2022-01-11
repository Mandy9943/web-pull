import {
  apiget,
  apiget2,
  get,
  post,
  postForm,
  putForm,
  sget,
} from "../lib/request";
import {
  categoryApi2,
  filtersApi,
  postProduct,
  productsApi,
  suggestionsApi,
} from "../lib/config";

export const getProducts8 = () => {
  try {
    let endpoint = "/getProducts";
    return sget(endpoint);
  } catch (error) {
    return error;
  }
};

export const getProductDetail = (id_product, params = {}) => {
  try {
    let endpoint = "/variations/product_global/" + id_product;
    return apiget2(endpoint, params);
  } catch (error) {
    return error;
  }
};

export const getProductGlobalDetail = (id_product_global, params = {}) => {
  try {
    let endpoint = "/variations/product_global_shortcut/" + id_product_global;
    return apiget2(endpoint, params);
  } catch (error) {
    return error;
  }
};

export const getVariantAvailable = (id_product, params) => {
  try {
    let endpoint = "/variations/variantAvailable/" + id_product;
    return apiget2(endpoint, params);
  } catch (error) {
    return error;
  }
};

export const getRecommendProducts = (category) => {
  let categoryName = category.replace(/-/g, " ");
  try {
    let endpoint = "/search/category/" + categoryName + "?size=" + 20;
    return sget(endpoint);
  } catch (error) {
    return error;
  }
};

export const getRatingByProduct = (product) => {
  try {
    let endpoint = "/getRating/" + product;
    return sget(endpoint);
  } catch (error) {
    return error;
  }
};

export const getSellerByProduct = (product) => {
  try {
    let endpoint = "/getSellerByIdProduct/" + product;
    return sget(endpoint);
  } catch (error) {
    return error;
  }
};

export const searchProduct = (string) => {
  try {
    let endpoint = "https://dev.kieroapi.net/api/v1.0/search?keyword=" + string;
    return apiget(endpoint);
  } catch (error) {
    return error;
  }
};

export const searchProducts = (
  type,
  size,
  page,
  ots = "",
  brand = "",
  price = "",
  category = "",
  sort_by = "",
  order_by = "",
  level = ""
) => {
  let categoryName = category.replace(/-/g, " ");
  let categoryNameOts = ots.replace(/-/g, " ");
  try {
    const params = new URLSearchParams();
    if (categoryNameOts !== "") params.append("ots", categoryNameOts);
    if (brand !== "") params.append("brand", brand);
    if (price !== "") params.append("price", price);
    if (categoryName !== "") params.append("category", categoryName);
    if (sort_by !== "") params.append("sort_by", sort_by);
    if (order_by !== "") params.append("order_by", order_by);
    if (level !== "") params.append("level", level === 0 ? 1 : level);

    let endpoint1 = productsApi + `?size=${size}&page=${page}`;
    // let endpoint2 = categoryApi + `/${categoryNameOts}?size=${size}&page=${page}`;
    let endpoint2 = categoryApi2 + `?&size=${size}&page=${page}`;
    let endpoint = type === "search" ? endpoint1 : endpoint2;
    if (params.toString().length) endpoint = endpoint + "&" + params.toString();
    // console.log(endpoint)
    return apiget(decodeURI(endpoint));
  } catch (error) {
    return error;
  }
};

export const searchSuggestions = (size, ots) => {
  let categoryNameOts = ots.replace(/-/g, " ");
  try {
    let endpoint = suggestionsApi + `?size=${size}&ots=${categoryNameOts}`;
    return apiget(endpoint);
  } catch (error) {
    return error;
  }
};

export const searchFilters = (ots, level, category) => {
  let categoryNameOts = ots.replace(/-/g, " ");
  let categoryName = category.replace(/-/g, " ");
  try {
    const params = new URLSearchParams();
    // console.log('level', level);
    if (level !== "") params.append("level", level);
    if (categoryName !== "") params.append("category", categoryName);

    let endpoint = filtersApi + `?ots=${categoryNameOts}`;
    // if (params.toString().length) endpoint = endpoint + '&' + params.toString();
    return apiget(endpoint);
  } catch (error) {
    return error;
  }
};

export const getProductsBasic = (category, limit) => {
  let categoryName = category.replace(/-/g, " ");
  try {
    let endpoint = "/search/category/" + categoryName + "?size=" + limit;
    return sget(endpoint);
  } catch (error) {
    return error;
  }
};

export const getCategories = () => {
  try {
    let endpoint = "/getCategories";
    return get(endpoint);
  } catch (error) {
    return error;
  }
};

export const saveProduct = (data, jwt) => {
  try {
    return postForm("/newProduct", data, jwt);
  } catch (error) {
    return error;
  }
};

export const updateProduct = (data, jwt) => {
  try {
    return putForm("/updateProduct", data, jwt);
  } catch (error) {
    return error;
  }
};

export const sendQuestion = (msg, product_id, jwt) => {
  try {
    const msgData = {
      question: msg,
      product_id: product_id,
    };
    return post("/newQuestion", msgData, jwt);
  } catch (error) {
    return error;
  }
};

export const sendAnswer = (msg, product_id, jwt) => {
  try {
    const msgData = {
      answer: msg,
      question_id: product_id,
    };
    return post("/replyQuestion", msgData, jwt);
  } catch (error) {
    return error;
  }
};

export const getOrderDetails = (order_id, jwt) => {
  try {
    let endpoint = "/getOrderDetails/" + order_id;
    return sget(endpoint, jwt);
  } catch (error) {
    return error;
  }
};

export const sellProduct = (jwt, info) => {
  try {
    return postProduct("localhost:5000/publicate", info, jwt);
  } catch (error) {
    return error;
  }
};

export const seeSelledProduct = (jwt, endpoint) => {
  try {
    return get(endpoint);
  } catch (error) {
    return error;
  }
};

export const getProductURL = (id_product, params = {}) => {
  try {
    let endpoint = "/variations/product_url/" + id_product;
    return apiget2(endpoint, params);
  } catch (error) {
    return error;
  }
};
