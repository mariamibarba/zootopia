const kgBtns = document.querySelectorAll(".kg-btn-single");
const dropDown = document.querySelector("#drop-down-p")
const dropDownn = document.querySelector("#drop-down-paragraf")
const more = document.querySelector("#more")
const cart = document.querySelector(".green-box")
const add = document.querySelector(".add-cart")
const added = document.querySelector(".added-cart")





kgBtns.forEach((kg) => {
    kg.addEventListener('click', () => {
      kg.classList.toggle('active');
    });
  });

dropDown.addEventListener('click', () => {
  more.classList.toggle('active');
});

cart.addEventListener('click', () => {
  add.classList.toggle('active');
  added.classList.toggle('active')
});