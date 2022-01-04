import CryptoJS from "crypto-js";
const crawlers = require("crawler-user-agents");
const botPattern = crawlers.map((a) => a.pattern).join("|");

// export const Klaviyo = require('node-klaviyo');

// export const KlaviyoClient = new Klaviyo({
//     publicToken: 'pk_ed003c6f6e6c4caae5b524580879169ad0',
//     privateToken: 'Sr8j85'
// });

export const setDiscount = (priceProduct, quantityProduct) => {
  let discountPercentage = 0;
  if (quantityProduct === 2) {
    discountPercentage = 10;
  }
  if (quantityProduct >= 3) {
    discountPercentage = 15;
  }

  let PriceDiscount =
    priceProduct *
    quantityProduct *
    (1 - parseFloat("." + discountPercentage).toFixed(2));

  PriceDiscount = ~~PriceDiscount;

  return PriceDiscount;
};
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
  // console.log("Deshabilitar el atras");
};

// Habilitar el ir atrás del navegador
export const handleActivateBack = () => {
  window.onpopstate = undefined;
  window.history.back();
  // console.log("Habilitar el atras del navegador");
};

export function concatCategories(prod) {
  var dataCategory = [];
  prod.breadcum.forEach((prod) => {
    dataCategory.push(prod.name);
  });
  return dataCategory.join(" / ");
}

// Segment functions -->

function isBot() {
  let re = new RegExp(botPattern, "i");
  let userAgent = navigator.userAgent;
  // console.log(userAgent)
  return re.test(userAgent);
}

export function sendProductListViewed(prod, index, listCategory) {
  try {
    if (isBot()) return;

    let product = {
      name: prod.title,
      product_id: prod.product_id,
      price: prod.price,
      brand: prod.brand,
      category: "fullname" in prod ? prod.fullname : prod.category,
      position: index,
      url: "https://kiero.co" + handleFormatUrl(prod.product_id, prod.title),
      image_url: prod.image,
    };

    const trackEventData = {
      // nonInteraction: 1,
      list_id: listCategory,
      category: product.category,
      products: product,
    };

    // console.log("Product List Viewed", trackEventData)

    analytics.track("Product List Viewed", trackEventData);
  } catch (err) {
    console.log({ err });
  }
}

export function sendProductViewed(prod) {
  try {
    if (isBot()) return;

    let productViewedData = {
      product_id: prod.product_global_id,
      category: concatCategories(prod),
      name: prod.product_global_title,
      brand: prod.brand,
      price: prod.price,
      currency: "COP",
      url:
        "https://kiero.co" +
        handleFormatUrl(prod.product_global_id, prod.product_global_title),
      image_url: prod.images[0].url,
      value: prod.price,
    };

    // console.log('Product Viewed', productViewedData)

    analytics.track("Product Viewed", productViewedData);
  } catch (err) {
    console.log({ err });
  }
}

export function sendIdentifyEvent(user) {
  try {
    if (isBot()) return;

    // Segment Identify method
    // Link your users and their actions
    // Reference: https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#identify

    let identifyData = {
      firstName: "user" in user ? user.user : user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: "mobile_phone" in user ? user.mobile_phone : user.phoneNumber,
      address: {
        city: user.city,
        street: user.address,
      },
    };

    analytics.identify(user.user_id, identifyData);

    // console.log("Identify Event", user.user_id, identifyData);
  } catch (err) {
    console.log({ err });
  }
}

export function sendCheckoutStepViewed(step) {
  try {
    if (isBot()) return;

    // Segment Checkout Step Viewed/Completed events
    // Fire this event whenever a checkout step is completed.
    // Reference: https://segment.com/docs/connections/spec/ecommerce/v2/

    analytics
      .track("Checkout Step Viewed", {
        // checkout_id: '50314b8e9bcf000000000000',	// Checkout transaction ID
        step: step,
        shipping_method: "None", //	String representing the shipping method chosen
        payment_method: "Payu", // representing the payment method chosen
      })
      .then(() => {
        // console.log("Checkout Step Viewed")

        analytics.track("Checkout Step Completed", {
          // checkout_id: '50314b8e9bcf000000000000',	// Checkout transaction ID
          step: step,
          shipping_method: "None", //	String representing the shipping method chosen
          payment_method: "Payu", // representing the payment method chosen
        });

        // console.log("Checkout Step Completed")
      });
  } catch (err) {
    console.log(err.message);
  }
  // Segment functions <--
}
export function createHmacSHA1(data) {
  return CryptoJS.HmacSHA1(data, "abc").toString(CryptoJS.enc.Hex);
}

// Regar una lista
export const shuffleArray = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
export default {
  compareValues,
  getProductImgs,
  findKeyValueInArr,
  handleFormatName,
  concatCategories,
  sendProductListViewed,
  sendProductViewed,
  sendCheckoutStepViewed,
  sendIdentifyEvent,
  createHmacSHA1,
};
