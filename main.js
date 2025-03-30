"use strict";

const unread = document.querySelectorAll(".card-unread");
const readText = document.querySelector(".read");
const dots = document.querySelectorAll(".dot");
const number = document.querySelector("#number");
let unreadCount = unread.length;
number.innerHTML = unreadCount;

unread.forEach((card) => {
  card.addEventListener("click", (e) => {
    const dot = card.querySelector(".dot");
    dot.classList.add("hide");
    card.style.backgroundColor = "white";
    card.style.border = "none";

    unreadCount--;
    number.innerHTML = unreadCount;
  });
});

readText.addEventListener("click", (e) => {
  unread.forEach((card) => {
    card.style.backgroundColor = "white";
    card.style.border = "none";
  });
  dots.forEach((item) => {
    item.classList.add("hide");
  });
  number.innerHTML = "0";
});
