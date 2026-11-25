"use strict";

const setUpPage = () => {
  document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("isOpen");
  });
};

window.addEventListener("load", setUpPage);
