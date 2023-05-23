const humberger= document.getElementById('humberger');
const menu = document.getElementById('menu');
const menuClose= document.getElementById('menu-close');

const showMenu=()=>{
  menu.classList.add('show-menu')
}
const hideMenu=()=>{
  menu.classList.remove('show-menu')
}

humberger.addEventListener('click',showMenu)
menuClose.addEventListener('click',hideMenu)