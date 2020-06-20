var urlApi = "https://kieroapi.net";
var urlImages = "https://kiero.co/images/";
var img_proxy = "https://kiero.co/imgr?img=";
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
