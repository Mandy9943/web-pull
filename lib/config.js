

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  var baseUrl = "https://dev.kiero.co";
  var urlApi = "https://dev.kieroapi.net";
  var urlImages = "http://dev.kiero.co/images/";
  //TODO: Change route
  var newUrlApi = "http://0.0.0.0:4000/products";
}else{
  var baseUrl = "https://kiero.co";
  var urlApi = "https://kieroapi.net";
  var urlImages = "http://kiero.co/images/";
  var newUrlApi = "http://0.0.0.0:4000/products";
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
    newUrlApi: newUrlApi
};
