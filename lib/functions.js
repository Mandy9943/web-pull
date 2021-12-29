// export const Klaviyo = require('node-klaviyo');

// export const KlaviyoClient = new Klaviyo({
//     publicToken: 'pk_ed003c6f6e6c4caae5b524580879169ad0',
//     privateToken: 'Sr8j85'
// });

export const handleFormatNumber = (number) => {
  return number
    .toString()
    .split(".")[0]
    .replace(/(.)(?=(\d{3})+$)/g, "$1.");
};

export const handleFormatName = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const handleFormatUrl = (idProduct, nameProduct) => {
  nameProduct = nameProduct.substring(0, 80);
  nameProduct = nameProduct.replace(/^\s+|\s+$/g, ""); // trim
  nameProduct = nameProduct.replace(/ñ/g, "n");
  nameProduct = nameProduct.toLowerCase();

  // remove accents, swap ñ for n, etc
  let from = "ãàáäâáº½èéëêìíïîõòóöôùúüûñç·/_,:;";
  let to = "aaaaaeeeeeiiiiooooouuuunc------";
  let i = 0,
    l = from.length;
  for (; i < l; i++) {
    nameProduct = nameProduct.replace(
      new RegExp(from.charAt(i), "g"),
      to.charAt(i)
    );
  }

  nameProduct = nameProduct
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return "/detalle/" + idProduct + "_" + handleFormatName(nameProduct);
};

export function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

export function getProductImgs(images, index = 0) {
  if (images) {
    // TODO: Check if the picture works
    return images.length > 0
      ? images[index].url
      : "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
  }
  return "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
}

export function findKeyValueInArr(key, value, arr) {
  return arr.find((obj) => obj[key] === value);
}

// Deshabilitar el ir atrás del navegador
export const handleDeactivateBack = (callBack) => {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = () => {
    window.history.pushState(null, "", window.location.href);
    callBack();
    window.onpopstate = undefined;
  };
  console.log("Deshabilitar el atras");
};

// Habilitar el ir atrás del navegador
export const handleActivateBack = () => {
  window.onpopstate = undefined;
  window.history.back();
  console.log("Habilitar el atras del navegador");
};
