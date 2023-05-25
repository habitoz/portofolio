const humberger = document.getElementById('humberger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');
const menuItemsNode = document.getElementById('menu-items').childNodes;
const worksSection = document.getElementById('works');

const showMenu = () => {
  menu.classList.add('show-menu');
};
const hideMenu = () => {
  menu.classList.remove('show-menu');
};

humberger.addEventListener('click', showMenu);
menuClose.addEventListener('click', hideMenu);
menuItemsNode.forEach((menuItem) => menuItem.addEventListener('click', hideMenu));

/* global projects, parseVirtualDom, WorkVirtualDom */
projects.forEach((project, index) => (
  worksSection.appendChild(parseVirtualDom(WorkVirtualDom({ ...project, index })))
));
