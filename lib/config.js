const searchItemsPerPage = 15;
const suggestionQuantity = 6;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  var baseUrl = "https://kiero.co";
  var urlApi = "https://kieroapi.net";
  var urlImages = "http://kiero.co/images/";
  //ROUTES for search
  var productsApi = "https://dev-search.kieroapi.net/products";
  var suggestionsApi = "https://dev-search.kieroapi.net/suggest";
  var filtersApi = "https://dev-search.kieroapi.net/filters";
} else {
  var baseUrl = "https://kiero.co";
  var urlApi = "https://kieroapi.net";
  var urlImages = "http://kiero.co/images/";
  //ROUTES for search
  var productsApi = "https://dev-search.kieroapi.net/products";
  var suggestionsApi = "https://dev-search.kieroapi.net/suggest";
  var filtersApi = "https://dev-search.kieroapi.net/filters";
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
    baseUrl: baseUrl,
    productsApi: productsApi,
    suggestionsApi: suggestionsApi,
    filtersApi: filtersApi,
    searchItemsPerPage: searchItemsPerPage,
    suggestionQuantity: suggestionQuantity,
};
