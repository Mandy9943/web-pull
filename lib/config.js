const searchItemsPerPage = 15;
const suggestionQuantity = 6;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  var baseUrl = "https://kiero.co";
  var urlApi = "https://kieroapi.net";
  var urlImages = "http://kiero.co/images/";
  //TODO: Change route
  // var productsApi = "http://0.0.0.0:4000/products";
  // var suggestionsApi = "http://0.0.0.0:4000/suggest";
  // var filtersApi = "http://0.0.0.0:4000/filters";
  var productsApi = "http://[::1]:4000/products";
  var suggestionsApi = "http://[::1]:4000/suggest";
  var filtersApi = "http://[::1]:4000/filters";

} else {
  var baseUrl = "https://kiero.co";
  var urlApi = "https://kieroapi.net";
  var urlImages = "http://kiero.co/images/";
  //TODO: Change route
  var productsApi = "http://0.0.0.0:4000/products";
  var suggestionsApi = "http://0.0.0.0:4000/suggest";
  var filtersApi = "http://0.0.0.0:4000/filters";
}

getImgUrl = (image, size) => {
  size = size || 240;
  var img_proxy = baseUrl+"/imgr/"+size+"?img=";
    if(image.substr(0,7)=="http://" || image.substr(0,8)=="https://"){
      return img_proxy+""+image;
    }else{
      return img_proxy+urlImages+image;
    }  
  }

module.exports = {
    urlApi: urlApi,
    urlImages: urlImages,
    getImgUrl: getImgUrl,
    productsApi: productsApi,
    suggestionsApi: suggestionsApi,
    filtersApi: filtersApi,
    searchItemsPerPage: searchItemsPerPage,
    suggestionQuantity: suggestionQuantity,
};
