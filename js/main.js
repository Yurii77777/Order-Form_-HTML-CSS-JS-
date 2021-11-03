"use strict";

// const handleSubmitForm = (e) => {

//     emailjs.send("andyurii00@gmail.com","template_532jxx2", {
//         message: 'Hi there!'
//     });

//     console.log("Hello from handleSubmitForm");
// };

const showOrderFormButton = document.getElementsByClassName('order-block__add-to-cart-button');
const orderForm = document.getElementsByClassName('order-block__form');
const inputName = document.getElementById('order-user-name');
const inputSurname = document.getElementById('order-user-surname');
const inputEmail = document.getElementById('order-user-email');
const inputPhone = document.getElementById('order-user-phone');
const inputCity = document.getElementById('order-user-city');
const inputAddress = document.getElementById('order-user-address');
const inputComment = document.getElementById('order-user-comment');

/**
 * Function hides main button and shows order form
 * Функція приховує головну кнопку та вікриває форму замовлення
 * Функция скрывает главную кнопку и открывает форму заказа
 */
const handleOpenOrderForm = () => {
    showOrderFormButton[0].classList.add('hidden');
    orderForm[0].classList.add('active');
};

/**
 * Function fixes label's position when input has any value
 * Функція фіксує позицію лейбла, коли інпут має будь-яке значення
 * Функция фиксирует позицию лейбла, когда инпут имеет любое значение
 */
const handleLabelPosition = () => {
    inputName.value && inputName.classList.add('active');
    inputName.value === '' && inputName.classList.remove('active');

    inputSurname.value && inputSurname.classList.add('active');
    inputSurname.value === '' && inputSurname.classList.remove('active');

    inputEmail.value && inputEmail.classList.add('active');
    inputEmail.value === '' && inputEmail.classList.remove('active');

    inputPhone.value && inputPhone.classList.add('active');
    inputPhone.value === '' && inputPhone.classList.remove('active');

    inputCity.value && inputCity.classList.add('active');
    inputCity.value === '' && inputCity.classList.remove('active');

    inputAddress.value && inputAddress.classList.add('active');
    inputAddress.value === '' && inputAddress.classList.remove('active');

    inputComment.value && inputComment.classList.add('active');
    inputComment.value === '' && inputComment.classList.remove('active');
}
