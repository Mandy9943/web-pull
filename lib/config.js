var urlApi = "https://dev.kieroapi.net";
var urlImages = "http://dev.kiero.co/images/";
var img_proxy = "http://dev.kiero.co/imgr?img=";
getImgUrl = (image) => {
    if(image.substr(0,7)=="http://" || image.substr(0,8)=="https://"){
      return img_proxy+image;
    }else{
      return img_proxy+urlImages+image;
    }  
  }

module.exports = {
    urlApi: urlApi,
    urlImages: urlImages,
    getImgUrl: getImgUrl
};
