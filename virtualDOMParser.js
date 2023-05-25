/* eslint-disable no-unused-vars */
const parseVirtualDom = (virtualDom, parentElement = null) => {
  const {
    type, innerText, events, child, ...otherAttributes
  } = virtualDom;
  const domElement = document.createElement(type);
  if (otherAttributes && otherAttributes.class) {
    domElement.classList.add(...otherAttributes.class.split(' '));
    delete otherAttributes.class;
  }
  if (otherAttributes) {
    Object.keys(otherAttributes).forEach((attribute) => {
      domElement.setAttribute(attribute, otherAttributes[attribute]);
    });
  }
  if (events && events.length) {
    events.forEach((item) => domElement.addEventListener(item.event, item.handler));
  }
  if (innerText) domElement.innerHTML = innerText;
  if (parentElement) {
    parentElement.appendChild(domElement);
  }
  if (child && child.length) {
    child.forEach((childVirtualDom) => parseVirtualDom(childVirtualDom, domElement));
  }
  return domElement;
};