const kiero_logo = require("../assets/img/kiero.png");

const searchItemsPerPage = 52;
const suggestionQuantity = 5;

if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  var baseUrl = "https://kiero.co";
  var urlApi = "https://api.kieroapi.net";
  var urlApiTest = "https://api.kieroapi.org";
  var urlImages = "https://kiero.co/images/";
  //ROUTES for search
  var searchBaseUrl = "https://api.kieroapi.net/search";
  // var searchBaseUrl = "http://30.30.30.110:5001/search";
  var wompi_at_url =
    "https://sandbox.wompi.co/v1/merchants/pub_test_pYoEwV7Vh2UjsXGhNQ5JEYWa1LnXKj9r";
  // var searchBaseUrl = "http://[::1]:5000";
} else {
  var baseUrl = "https://kiero.co";
  var urlApi = "https://api.kieroapi.net";
  var urlApiTest = "https://api.kieroapi.org";
  var urlImages = "https://kiero.co/images/";
  //ROUTES for search
  var searchBaseUrl = "https://api.kieroapi.net/search";
  // var searchBaseUrl = "http://30.30.30.110:5001/search";
  var wompi_at_url =
    "https://sandbox.wompi.co/v1/merchants/pub_test_pYoEwV7Vh2UjsXGhNQ5JEYWa1LnXKj9r";
  // var searchBaseUrl = "http://[::1]:5000";
}
// console.log('urlBase', baseUrl, 'urlApi', urlApi);

const getImgUrl = (image, size) => {
  // console.log(image, size)
  size = size || 240;
  var img_proxy = baseUrl + "/imgr/" + size + "?img=";
  if (image.substr(0, 7) === "http://" || image.substr(0, 8) === "https://") {
    return img_proxy + "" + image;
  } else {
    return img_proxy + urlImages + image;
  }
};

const getImgUrlMin = (image, size) => {
  // size = size || 160; TODO: Revisar que no se usa esta variable
  var img_proxy = "";
  if (image.substr(0, 7) === "http://" || image.substr(0, 8) === "https://") {
    return img_proxy + "" + image;
  } else {
    return img_proxy + urlImages + image;
  }
};

const getImgUrlMinMin = (image, size) => {
  // size = size || 90; TODO: Revisar que no se usa esta variable
  var img_proxy = "";
  if (image.substr(0, 7) == "http://" || image.substr(0, 8) == "https://") {
    return img_proxy + "" + image;
  } else {
    return img_proxy + urlImages + image;
  }
};

const priceFormat = (price) => {
  let decimals = 2;
  return parseFloat(price)
    .toFixed(decimals)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

/*
 Función que dice mediante un string si se puede tratar como JSON
 @param str Texto a enviar para la evaluación
 */
const isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

/*
Obtener URL de la imagen de un producto
@param product Producto donde debe de tener un product_id y un image
@example product.product_id product.image
 */

const getImgProduct = (product) => {
  if (product?.product_id && product?.image) {
    return (
      "https://api.kieroapi.net/img/v1/" +
      product.product_id +
      "?img=" +
      encodeURIComponent(product.image)
    );
  }
  return kiero_logo;
};

const getNumberWhatsapp = () => {
  // Arreglo de números con formato +xx xxx xxxxxx
  const numbers = ["+57 311 6661496", "+57 322 6569293"];
  // Obteninedo un numero aleatorio
  const i = Math.floor(Math.random() * numbers.length);
  const pretty = numbers[i];
  const format = pretty.replace(/[ +]/g, "").trim();
  // console.log("Me llmaron ;)");
  return {
    pretty,
    format,
  };
};

module.exports = {
  urlApi: urlApi,
  urlImages: urlImages,
  getImgUrl: getImgUrl,
  baseUrl: baseUrl,
  // productsApi: searchBaseUrl + "/products",
  productsApi: "https://api.kieroapi.org/search/products",
  suggestionsApi: searchBaseUrl + "/suggest",
  filtersApi: searchBaseUrl + "/filters",
  categoryApi: searchBaseUrl + "/category",
  // categoryApi2: searchBaseUrl + "/products",
  categoryApi2: "https://api.kieroapi.org/search/products",
  searchItemsPerPage: searchItemsPerPage,
  suggestionQuantity: suggestionQuantity,
  priceFormat: priceFormat,
  wompi_at_url: wompi_at_url,
  isJson: isJson,
  getImgProduct: getImgProduct,
  getImgUrlMin: getImgUrlMin,
  getNumberWhatsapp: getNumberWhatsapp,
};
