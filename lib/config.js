const {EmojiEmotionsRounded} = require("@material-ui/icons");

const searchItemsPerPage = 52;
const suggestionQuantity = 5;

if (process.env.NODE_ENV !== "production") {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    var baseUrl = "https://kiero.co";
    var urlApi = "https://api.kieroapi.net";
    var urlImages = "https://kiero.co/images/";
    //ROUTES for search
    var searchBaseUrl = "https://api.kieroapi.net/search";
    var wompi_at_url =
        "https://sandbox.wompi.co/v1/merchants/pub_test_pYoEwV7Vh2UjsXGhNQ5JEYWa1LnXKj9r";
    // var searchBaseUrl = "http://[::1]:5000";
} else {
    var baseUrl = "https://kiero.co";
    var urlApi = "https://api.kieroapi.net";
    var urlImages = "https://kiero.co/images/";
    //ROUTES for search
    var searchBaseUrl = "https://api.kieroapi.net/search";
    var wompi_at_url =
        "https://sandbox.wompi.co/v1/merchants/pub_test_pYoEwV7Vh2UjsXGhNQ5JEYWa1LnXKj9r";
    // var searchBaseUrl = "http://[::1]:5000";
}
// console.log('urlBase', baseUrl, 'urlApi', urlApi);

getImgUrl = (image, size) => {
    // console.log(image, size)
    size = size || 240;
    var img_proxy = baseUrl + "/imgr/" + size + "?img=";
    if (image.substr(0, 7) == "http://" || image.substr(0, 8) == "https://") {
        return img_proxy + "" + image;
    } else {
        return img_proxy + urlImages + image;
    }
};

getImgUrlMin = (image, size) => {
    size = size || 160;
    var img_proxy = "";
    if (image.substr(0, 7) == "http://" || image.substr(0, 8) == "https://") {
        return img_proxy + "" + image;
    } else {
        return img_proxy + urlImages + image;
    }
};

getImgUrlMinMin = (image, size) => {
    size = size || 90;
    var img_proxy = "";
    if (image.substr(0, 7) == "http://" || image.substr(0, 8) == "https://") {
        return img_proxy + "" + image;
    } else {
        return img_proxy + urlImages + image;
        EmojiEmotionsRounded
    }
};

priceFormat = (price) => {
    let decimals = 2;
    return parseFloat(price)
        .toFixed(decimals)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

/*
 Función que dice mediante un string si se puede tratar como JSON
 @param str Texto a enviar para la evaluación
 */
isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

module.exports = {
    urlApi: urlApi,
    urlImages: urlImages,
    getImgUrl: getImgUrl,
    baseUrl: baseUrl,
    productsApi: searchBaseUrl + "/products",
    suggestionsApi: searchBaseUrl + "/suggest",
    filtersApi: searchBaseUrl + "/filters",
    categoryApi: searchBaseUrl + "/category",
    // categoryApi: 'http://10.4.28.179:5000/',
    searchItemsPerPage: searchItemsPerPage,
    suggestionQuantity: suggestionQuantity,
    priceFormat: priceFormat,
    wompi_at_url: wompi_at_url,
    isJson: isJson,
};
