var urlApi = "https://kieroapi.net"
var urlImages = "https://kiero.co/images/"

getImgUrl = (image) => {
    if(image.substr(0,7)=="http://" || image.substr(0,8)=="https://"){
      return image;
    }else{
      return urlImages+image;
    }  
  }

module.exports = {
    urlApi: urlApi,
    urlImages: urlImages,
    getImgUrl: getImgUrl
};
