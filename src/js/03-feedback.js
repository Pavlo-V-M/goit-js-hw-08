/* 1.
Next code-line imports the throttle function from the lodash.throttle library. 
Throttle is a function that limits the rate at which a function can be executed.
*/
import throttle from 'lodash.throttle'

/* 2.
Next code-line creates a constant called STORAGE_KEY and sets its value to 'feedback-form-state'. 
This constant will hold a string value which will be used as the key for the local storage object.
*/
const STORAGE_KEY = 'feedback-form-state';

/* 3.
Next code-line creates an empty object called localStorageObject. 
This object will be used to store the data of the form in local storage.
*/

let localStorageObject = {};
// -----------------------------------------------------
// - Незрозумілий гайд із уроків і лекцій ... ??????
// -----------------------------------------------------
{ 
// const refs = {
// form: document.querySelector('.feedback-form'), 
// textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// // Додаємо збереження поля email

// refs.form.addEventListener('input', (e) => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   localStorageObject[e.target.name] = e.target.value;
//   console.log(localStorageObject);
// });

// populateTextarea();

// // Поведінка за замовчк=уванням.
// // Прибириємо повідомлення із сховища.
// // Очищуємо форму.

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();

//   localStorage.removeItem('STORAGE_KEY');
// };

// // Отримуємо значення поляю
// // Зберігаємо значення в сховищє.
// // Додаємо throttle.

// function onTextareaInput(evt) { 
//   const messageValue = evt.target.value;
//   localStorage.setItem('STORAGE_KEY', messageValue);
// };

// // Отримуємо значення із сховища.
// // Якщо там щьось було - оновлюємо DOM.

// function populateTextarea() {
//   const savedMessage = localStorage.getItem('STORAGE_KEY');
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// };
}

// ------------------------------------------
// Solution obtained by the experimental way.
// ------------------------------------------

/* 4.
Next code-line creates a constant called refs, which is an object 
containing references to DOM elements (form, email, textarea).
*/
const refs = {
  form: document.querySelector('.feedback-form'), 
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

/* 5.
Next code-line adds event listeners to the form, email, and textarea elements. 
The event listeners are triggered when the submit event is detected on the form, 
and when the input event is detected on email and textarea elements. 
The event listener for the form triggers the onFormSubmit function, 
while the onEmailInput and onTextareaInput functions are called with the throttle function, 
which limits the rate at which they can be executed.
*/

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.email.addEventListener('input', throttle(onEmailInput, 500));

/* 6.
Next code-line adds an event listener to the form element which is 
triggered when the input event is detected. The event listener calls 
an anonymous function which sets the value of the localStorageObject object 
to the value of the input element.
*/

refs.form.addEventListener('input', (e) => {
  localStorageObject[e.target.name] = e.target.value;
});

/* 7.
Next code-line calls the populateTextarea function, which is used 
to populate the form with saved data from local storage.
*/

populateTextarea();

/* 8.
Next code-line сreates onFormSubmit function which is triggered when 
the submit event is detected on the form element. The function prevents 
the default behavior of the event and resets the form. It also removes 
any saved form data from local storage.
*/

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();

//   localStorage.removeItem('STORAGE_KEY');
// };

// ---------------------------------------------------------------
// ----------------- FIXED ABOVE CODE IN POINT 8 -----------------
// ---------------------------------------------------------------

function onFormSubmit(evt) {
  if (!refs.email.value || !refs.textarea.value) {
    alert('Please fill in all fields!');
    return;
  }

  evt.preventDefault();
  evt.currentTarget.reset();

  console.log({ email: refs.email.value, message: refs.textarea.value });
  localStorage.removeItem('STORAGE_KEY');
  localStorageObject = {};
};

/* 9.
Next code-line сreates onTextareaInput function which is triggered when 
the input event is detected on the textarea element. The function gets the value 
of the textarea element and sets it as the value of the localStorageObject object.
*/

function onTextareaInput(evt) { 
  const messageValue = evt.target.value;
  localStorage.setItem('STORAGE_KEY', JSON.stringify({...localStorageObject, message: messageValue}));
};

/* 10.
Next code-line сreates onEmailInput function which is triggered when the input event 
is detected on the email element. The function gets the value of the email element 
and sets it as the value of the localStorageObject object.
*/

function onEmailInput(evt) { 
  const emailValue = evt.target.value;
  localStorage.setItem('STORAGE_KEY', JSON.stringify({...localStorageObject, email: emailValue}));
};

/* 11.
Next code-line сreates populateTextarea function which is used to populate 
the form with saved data from local storage. The function gets the saved data 
from local storage and sets the value of the textarea and email elements to the saved data.
*/

function populateTextarea() {
  const savedData = localStorage.getItem('STORAGE_KEY');

  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    localStorageObject = JSON.parse(savedData);

    refs.textarea.value = message || '';
    refs.email.value = email || '';
  }
};
