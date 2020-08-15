
// PLEASE, JUST USE FOR DEV ENVIRONMENT.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var urlApi = "https://dev.kieroapi.net";
var urlImages = "http://dev.kiero.co/images/";
getImgUrl = (image, size) => {
  size = size || 240;
  var img_proxy = "http://dev.kiero.co/imgr/"+size+"?img=";
    if(image.substr(0,7)=="http://" || image.substr(0,8)=="https://"){
      return img_proxy+""+image;
    }else{
      return img_proxy+urlImages+image;
    }  
  }

module.exports = {
    urlApi: urlApi,
    urlImages: urlImages,
    getImgUrl: getImgUrl
};
