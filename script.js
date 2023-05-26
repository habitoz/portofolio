const humberger = document.getElementById('humberger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');
const menuItemsNode = document.getElementById('menu-items').childNodes;
const worksSection = document.getElementById('works');
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const formInputs = document.querySelectorAll('.form-input');

const showMenu = () => {
  menu.classList.add('show-menu');
};
const hideMenu = () => {
  menu.classList.remove('show-menu');
};

const handleInputChange = async (event) => {
  const formData = await localStorage.getItem('formData');
  if (formData) {
    const data = { ...(JSON.parse(formData)), [event.target.name]: event.target.value };
    await localStorage.setItem('formData', JSON.stringify(data));
  } else {
    const data = { [event.target.name]: event.target.value };
    await localStorage.setItem('formData', JSON.stringify(data));
  }
};

const showFormValidationError = () => {
  const errorElement = document.createElement('p');
  errorElement.innerText = 'email validation failed. the form is not sent.';
  errorElement.style.marginTop = '12px';
  errorElement.style.color = 'red';
  errorElement.style.textAlign = 'center';
  contactForm.appendChild(errorElement);
};

const formValidation = (event) => {
  if (emailInput.value !== (emailInput.value).toLowerCase()) {
    showFormValidationError();
    event.preventDefault();
  }
};

humberger.addEventListener('click', showMenu);
menuClose.addEventListener('click', hideMenu);
menuItemsNode.forEach((menuItem) => menuItem.addEventListener('click', hideMenu));
contactForm.addEventListener('submit', formValidation);
/* global projects, parseVirtualDom, WorkVirtualDom */
projects.forEach((project, index) => (
  worksSection.appendChild(parseVirtualDom(WorkVirtualDom({ ...project, index })))
));

//
const existingData = localStorage.getItem('formData');

formInputs.forEach((formInput) => {
  formInput.addEventListener('input', handleInputChange);
  if (existingData) {
    const data = JSON.parse(existingData);
    formInput.value = data[formInput.name] || '';
  }
});