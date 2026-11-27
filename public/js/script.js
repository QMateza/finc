"use strict";

const formValidate = () => {
    const name = document.querySelector("#name");
    const surname = document.querySelector("#surname");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    validateName(name.value, "name");
    validateName(surname.value, "surname");
    validateEmail(email.value);
    validatePhone(phone.value);

    if (subject.value === "none") {
        errorStyling("#subject")
        document.querySelector(".subject-err").textContent = "Please select the correct option."
    } else {
        localStorage.setItem("subject", subject.value);
    }

    if (message.value.length < 10) {
        errorStyling("#message")
        document.querySelector(".message-err").textContent = "Please enter a message."
    }else {
        localStorage.setItem("subject", message.value);
    }
}

const validateName = (name, val) => {
    const cleanedName = name.trim().replace(/\s+/g, " ")
    const validNameReg = /^[\p{L}\s'.-]+$/u;
    const title = val === "name" ? "name" : "surname"

    if (!validNameReg.test(cleanedName)) {
        errorStyling(`#${val}`)
        document.querySelector(`.${title}-err`).textContent = "Please enter the correct name";
    } else {
        localStorage.setItem(title, cleanedName);
    }
}

const validateEmail = (email) => {
    const emailCleaned = email.trim();
    const validEmailReg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!validEmailReg.test(emailCleaned)) {
        errorStyling("#email")
        document.querySelector(".email-err").textContent = "Please enter the correct email.";
    } else {
        localStorage.setItem("email", emailCleaned)
    }
}

const validatePhone = (phone) => {
    const cleanedPhone = phone.trim();
    const validPhoneReg = /^(?:\+27|27|0)[1-8][0-9]{8}$/;

    if (!validPhoneReg.test(cleanedPhone)) {
        errorStyling("#phone");
        document.querySelector(".phone-err").textContent = "Please enter the correct phone number"
    } else {
        localStorage.setItem("phone", cleanedPhone)
    }
}

const errorStyling = (element) => {
    document.querySelector(element).style.border = "2px";
    document.querySelector(element).style.borderStyle = "solid";
    document.querySelector(element).style.borderColor = "#ff0000";
}

const successStyling = (element) => {
    document.querySelector(element).style.border = "2px";
    document.querySelector(element).style.borderStyle = "solid";
    document.querySelector(element).style.borderColor = "#37ff00";
}

document.querySelector("#name").addEventListener("input", (e) => {
    if(e.target.value.length > 3) successStyling("#name");
})

const setUpPage = () => {
    document.getElementById("menu").addEventListener("click", () => {
        document.getElementById("nav-links").classList.toggle("isOpen");
    });
    document.querySelector(".last-form form").addEventListener("submit", e => {
        e.preventDefault();
        formValidate();
    })


};

window.addEventListener("load", setUpPage);
