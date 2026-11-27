"use strict";

const formValidate = () => {
    const name = document.querySelector("#name");
    const surname = document.querySelector("#surname");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");
    const inputArr = [name, surname, email, phone, subject, message];
    let isEmpty = false;

    for (let input of inputArr) {
        if (!input.value.trim()) {
            isEmpty = true;
        }
    }

    if (isEmpty) alert("Enter all the required fields");

    if (name.value.length < 3 || name.value.length > 20) {
      document.querySelector(".name-err").textContent = "Please enter the correct name";
    } else {
        checkName(name.value);
    }
}

const checkName = (name) => {
  const cleanedName = name.trim().replace(/\s+/g, " ")
    const validNameReg = /^[\p{L}\s'.-]+$/u;

    if (!validNameReg.test(cleanedName)) {
        document.querySelector(".name-err").textContent = "Please enter the correct name";
    }
}

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
