## TEST - 1

Основна мета - робота із Parcel. Parcel - це інтерфейс із серидовищем, які
дозволяють об'єднати розрізнені частини коду в один проект із використанням
сторонніх бібліотек для готових рішень.

---

The main goal is working with Parcel. Parcel is an interface with an environment
that allows you to combine separate pieces of code into one project using
third-party libraries for ready-made solutions.

## TEST - 2

// 1. Import Player from the "@vimeo/player" library and the throttle function
from the "lodash.throttle" library. // 2. Select the iframe element with the id
"vimeo-player" and create a new Player object. // 3. Call the rebootPage()
function. // 4. Declare the onPlay() function which takes a parameter "data" and
stores the value of the "seconds" property of the "data" parameter in the "time"
variable. The function then returns the value of the
"getCurrentTimeAddLocalStorage()" function with the "time" parameter. // 5.
Declare the getCurrentTimeAddLocalStorage() function which takes a parameter
"second" and stores the value of the "second" parameter in the
"videoplayer-current-time" item of localStorage. The function then returns the
value of the "videoplayer-current-time" item of localStorage. // 6. Add an event
listener for the "timeupdate" event to the player object and pass the "onPlay"
function as the first parameter and the throttle() function with the parameters
"onPlay" and "1000" as the second parameter. // 7. Set the current time of the
player object to the value of the "videoplayer-current-time" item of
localStorage. // 8. Declare the rebootPage() function which checks if the
"videoplayer-current-time" item of localStorage is null and if so, sets the
value of the "videoplayer-current-time" item of localStorage to 0.

// 1. Імпортуйте програвач із бібліотеки "@vimeo/player", а функцію дроселю – з
бібліотеки "lodash.throttle". // 2. Виберіть елемент iframe з id «vimeo-player»
і створіть новий об’єкт Player. // 3. Викликати функцію rebootPage(). // 4.
Оголосити функцію onPlay(), яка приймає параметр "data" і зберігає значення
властивості "seconds" параметра "data" у змінній "time". Потім функція повертає
значення функції "getCurrentTimeAddLocalStorage()" із параметром "time". // 5.
Оголошення функції getCurrentTimeAddLocalStorage(), яка приймає параметр
«second» і зберігає значення параметра «second» в елементі
«videoplayer-current-time» localStorage. Потім функція повертає значення
елемента «videoplayer-current-time» локального сховища. // 6. Додайте
прослуховувач подій для події "timeupdate" до об'єкта програвача та передайте
функцію "onPlay" як перший параметр і функцію throttle() з параметрами "onPlay"
і "1000" як другий параметр. // 7. Встановіть для поточного часу об’єкта
програвача значення елемента «videoplayer-current-time» localStorage. // 8.
Оголошуйте функцію rebootPage(), яка перевіряє, чи елемент
«videoplayer-current-time» localStorage є нульовим, і якщо так, встановлює
значення елемента «videoplayer-current-time» localStorage рівним 0.

## TEST - 3

// 1 імпорт throttle з 'lodash.throttle': // Цей рядок коду імпортує функцію
throttle з бібліотеки lodash.throttle. Throttle — це функція, яка обмежує
швидкість, з якою функція може бути виконана.

// 2 const STORAGE_KEY = 'feedback-form-state': // Цей рядок коду створює
константу під назвою STORAGE_KEY і встановлює її значення як
'feedback-form-state'. Ця константа буде містити рядкове значення, яке
використовуватиметься як ключ для об’єкта локального зберігання.

// 3 let localStorageObject = {}; // Цей рядок коду створює порожній об’єкт під
назвою localStorageObject. Цей об’єкт буде використовуватися для зберігання
даних форми в локальному сховищі.

// 4 const refs = { // форма: document.querySelector('.feedback-form'), //
електронна адреса: document.querySelector('.feedback-form input'), // textarea:
document.querySelector('.feedback-form textarea'), // }; // Цей рядок коду
створює константу під назвою refs, яка є об’єктом, що містить посилання на
елементи DOM (форма, електронна пошта, текстове поле).

// 5 refs.form.addEventListener('submit', onFormSubmit); //
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500)); //
refs.email.addEventListener('input', throttle(onEmailInput, 500)); // Цей блок
коду додає слухачі подій до елементів форми, електронної пошти та текстового
поля. Прослуховувачі подій запускаються, коли у формі виявляється подія
надсилання, а також коли в елементах email і textarea виявляється подія
введення. Прослуховувач подій для форми запускає функцію onFormSubmit, а функції
onEmailInput і onTextareaInput викликаються за допомогою функції throttle, яка
обмежує швидкість, з якою вони можуть виконуватися.

// 6 refs.form.addEventListener('input', (e) => { //
localStorageObject[e.target.name] = e.target.value; // }); // Цей рядок коду
додає прослуховувач подій до елемента форми, який запускається при виявленні
вхідної події. Прослуховувач подій викликає анонімну функцію, яка встановлює
значення об’єкта localStorageObject у значення вхідного елемента.

// 7 populateTextarea(); // Цей рядок коду викликає функцію populateTextarea,
яка використовується для заповнення форми даними, збереженими з локального
сховища.

// 8 функція onFormSubmit(evt) { // evt.preventDefault(); //
evt.currentTarget.reset();

// localStorage.removeItem('formData'); // }; // Це функція onFormSubmit, яка
запускається, коли в елементі форми виявляється подія надсилання. Функція
запобігає типовій поведінці події та скидає форму. Це також видаляє всі
збережені дані форми з локального сховища.

// 9 функція onTextareaInput(evt) { // const messageValue = evt.target.value; //
localStorage.setItem('formData', JSON.stringify({...localStorageObject, message:
messageValue})); // }; // Це функція onTextareaInput, яка запускається, коли в
елементі textarea виявляється подія введення. Функція отримує значення елемента
textarea та встановлює його як значення об’єкта localStorageObject.

// 10 функція onEmailInput(evt) { // const emailValue = evt.target.value; //
localStorage.setItem('formData', JSON.stringify({...localStorageObject, email:
emailValue})); // }; // Це функція onEmailInput, яка запускається, коли в
елементі електронної пошти виявляється подія введення. Функція отримує значення
елемента email і встановлює його як значення об’єкта localStorageObject.

// 11 функція populateTextarea() { // const savedData =
localStorage.getItem('formData'); // if (savedData) { // const { email, message
} = JSON.parse(savedData);

// refs.textarea.value = повідомлення; // refs.email.value = email; // } // };
// Це функція populateTextarea, яка використовується для заповнення форми
даними, збереженими з локального сховища. Функція отримує збережені дані з
локального сховища та встановлює значення елементів текстового поля та
електронної пошти для збережених даних.
