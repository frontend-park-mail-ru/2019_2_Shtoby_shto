import forEachProp from './forEachProp';

function makeElement(tag, classes, style, id, attributes) {
  const element = document.createElement(tag);

  classes.forEach((style) => element.classList.add(style));

  Object.assign(element.style, style);

  if (id) {
    element.id = id;
  }

  forEachProp(attributes, (...args) => element.setAttribute(...args));
  return element;
}

export default makeElement;
