export default function forEachProp(obj, callback, valFirst) {
  for (const prop in obj) {
    if (Object.hasOwnProperty.call(obj, prop)) {
      if (valFirst) {
        callback(obj[prop], prop);
      } else {
        callback(prop, obj[prop]);
      }
    }
  }
}
