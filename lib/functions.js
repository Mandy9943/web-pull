export function compareValues (key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

export function getProductImgs(images, index=0) {
  // TODO: Check if the picture works
  return images.length > 0
      ? images[index].url
      : 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'
}


export default {compareValues, getProductImgs}