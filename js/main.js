/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021> <Yurii Andriiko>
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, только хорошо! А можешь? - Делай лучше!"
 */
"use strict";

const showOrderFormButton = document.getElementsByClassName(
    "order-block__add-to-cart-button"
);
const orderForm = document.getElementsByClassName("order-block__form");
const inputName = document.getElementById("order-user-name");
const inputSurname = document.getElementById("order-user-surname");
const inputEmail = document.getElementById("order-user-email");
const inputPhone = document.getElementById("order-user-phone");
const inputCity = document.getElementById("order-user-city");
const inputAddress = document.getElementById("order-user-address");
const inputComment = document.getElementById("order-user-comment");
const errorMessageNode = document.getElementById("order-block__error_message");
const submitMessageNode = document.getElementById("order-block__submit_message");

/**
 * Markers for submit order form. If one of them = false, form will not submit.
 * Маркери для відправки форми замовлення. Якщо хочаб один із них = false, форма не буде відправлена.
 * Маркеры для отправки формы заказа. Если хотябы один из них = false, форма не будет отправлена
 */
let isInputName = false;
let isInputSurname = false;
let isInputEmail = false;
let isInputPhone = false;

/**
 * Function hides main button and shows order form
 * Функція приховує головну кнопку та вікриває форму замовлення
 * Функция скрывает главную кнопку и открывает форму заказа
 */
const handleOpenOrderForm = () => {
    showOrderFormButton[0].classList.add("hidden");
    orderForm[0].classList.add("active");
};

/**
 * Function fixes label's position when input has any value
 * Функція фіксує позицію лейбла, коли інпут має будь-яке значення
 * Функция фиксирует позицию лейбла, когда инпут имеет любое значение
 */
const handleLabelPosition = () => {
    inputCity.value && inputCity.classList.add("active");
    inputCity.value === "" && inputCity.classList.remove("active");

    inputAddress.value && inputAddress.classList.add("active");
    inputAddress.value === "" && inputAddress.classList.remove("active");

    inputComment.value && inputComment.classList.add("active");
    inputComment.value === "" && inputComment.classList.remove("active");
};

/**
 * Function set label position and validate input name data (min. 2 chars)
 * Функція встановлює позицію лейбла та валідує дані інпута імені користувача (мін. 2 символи)
 * Функция устанавливает позицию лейбла и валидирует данные инпута имени пользователя (мин. 2 символа)
 */
const handleUserNameInput = () => {
    inputName.value && inputName.classList.add("active");
    inputName.value === "" && inputName.classList.remove("active");

    if (inputName.value.length < 2) {
        inputName.classList.add("error");
        isInputName = false;
    } else {
        inputName.classList.remove("error");
        isInputName = true;
    }
};

/**
 * Function set label position and validate input surname data (min. 2 chars)
 * Функція встановлює позицію лейбла та валідує дані інпута фамілії користувача (мін. 2 символи)
 * Функция устанавливает позицию лейбла и валидирует данные инпута фамилии пользователя (мин. 2 символа)
 */
const handleUserSurnameInput = () => {
    inputSurname.value && inputSurname.classList.add("active");
    inputSurname.value === "" && inputSurname.classList.remove("active");

    if (inputSurname.value.length < 2) {
        inputSurname.classList.add("error");
        isInputSurname = false;
    } else {
        inputSurname.classList.remove("error");
        isInputSurname = true;
    }
};

/**
 * Function set label position and validate input email data
 * Функція встановлює позицію лейбла та валідує дані інпута email користувача
 * Функция устанавливает позицию лейбла и валидирует данные инпута email пользователя
 */
const handleUserEmailInput = () => {
    inputEmail.value && inputEmail.classList.add("active");
    inputEmail.value === "" && inputEmail.classList.remove("active");

    const regExEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regExEmail.test(String(inputEmail.value).toLowerCase())) {
        inputEmail.classList.add("error");
        isInputEmail = false;
    } else {
        inputEmail.classList.remove("error");
        isInputEmail = true;
    }
};

/**
 * Function set label position and validate input phone data
 * Функція встановлює позицію лейбла та валідує дані інпута телефона користувача
 * Функция устанавливает позицию лейбла и валидирует данные инпута телефона пользователя
 */
const handleUserPhoneInput = () => {
    inputPhone.value && inputPhone.classList.add("active");
    inputPhone.value === "" && inputPhone.classList.remove("active");

    const phoneNumberLength = inputPhone.value.replace(/\D/g, "").length;

    if (phoneNumberLength < 10) {
        inputPhone.classList.add("error");
        isInputPhone = false;
    } else {
        inputPhone.classList.remove("error");
        isInputPhone = true;
    }
};

/**
 * Function gettin all data from inputs and sending E-mail
 * Функція дістає всі данні з полів форми та надсилає E-mail
 * Функция достает все данные с полей формы и отправляет E-mail
 */
const handleSubmitForm = () => {
    let data = {};

    if (isInputName && isInputSurname && isInputEmail && isInputPhone) {
        data.userName = inputName.value;
        data.userSurname = inputSurname.value;
        data.userEmail = inputEmail.value;
        data.userPhone = inputPhone.value;
        data.inputCity = inputCity.value;
        data.inputAddress = inputAddress.value;
        data.inputComment = inputComment.value;

        emailjs.send("andyurii00@gmail.com", "template_532jxx2", {
            message: `Name: ${data.userName}. Surname: ${data.userSurname}. E-mail: ${data.userEmail}. Phone: ${data.userPhone}. City: ${data.inputCity}. Address: ${data.inputAddress}. Comment: ${data.inputComment}`,
        });

        //TODO: Fix cleaning inputs after sending form!
        inputName.value = null;
        inputName.classList.remove("active");
        isInputName = false;

        inputSurname.value = null;
        inputSurname.classList.remove("active");
        isInputSurname = false;

        inputEmail.value = null;
        inputEmail.classList.remove("active");
        isInputEmail = false;

        inputPhone.value = null;
        inputPhone.classList.remove("active");
        isInputPhone = false;

        inputCity.value = null;
        inputCity.classList.remove("active");
        inputAddress.value = null;
        inputAddress.classList.remove("active");
        inputComment.value = null;
        inputComment.classList.remove("active");

        submitMessageNode.classList.add("active");
        setTimeout(() => {
            submitMessageNode.classList.remove("active");
        }, 2000);

    } else {
        errorMessageNode.classList.add("active");

        setTimeout(() => {
            errorMessageNode.classList.remove("active");
        }, 2000);
    }
};
