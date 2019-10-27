export default function getElementsGetter(classname) {
  return function() {
    const elements = document.getElementsByClassName(classname);
    return Array.from(elements);
  };
}
