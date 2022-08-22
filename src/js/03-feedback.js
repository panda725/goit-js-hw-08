import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';
const parseJson = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener(
  'input',
  throttle(evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

getValueFromLocalstorage();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log('натякніть як вивести?)', 'email:', 'message:');
}

function getValueFromLocalstorage() {
  const savedText = parseJson;
  if (savedText) {
    const values = Object.entries(savedText);
    values.forEach(function ([name, value]) {
      refs.form.elements[name].value = value;
    });
  }
}
