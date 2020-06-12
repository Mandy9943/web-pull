var urlApi = "http://158.69.183.108"
var urlImages = "http://158.69.183.107/images/"

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
