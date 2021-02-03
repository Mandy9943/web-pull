const searchItemsPerPage = 50;
const suggestionQuantity = 5;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  var baseUrl = "https://kieroapi.org/";
  var urlApi = "https://api.kieroapi.org";
  var urlImages = "http://kieroapi.org/images/";
  //ROUTES for search
  var searchBaseUrl = "https://api.kieroapi.org/search";
  // var searchBaseUrl = "http://[::1]:5000";
} else {
  var baseUrl = "https://kiero.co";
  var urlApi = "https://api.kieroapi.org";
  var urlImages = "http://kiero.co/images/";
  //ROUTES for search
  var searchBaseUrl = "https://api.kieroapi.org/search";
  // var searchBaseUrl = "http://[::1]:5000";
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


priceFormat = (price) => {
    let decimals = 2;
    return parseFloat(price).toFixed(decimals).replace(/\d(?=(\d{3})+\.)/g, '$&,');
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
    searchItemsPerPage: searchItemsPerPage,
    suggestionQuantity: suggestionQuantity,
    priceFormat: priceFormat,
};
