document.addEventListener("DOMContentLoaded", () => {
  // Kod który zostatnie wywołany po załadowaniu się BODY z HTML

  let burger = document.querySelector("#burger");
  let menu = document.querySelector("#menu");

  burger.addEventListener("click", () => {
    // Kod który wykona się kazdorazowo po kliknięciu elementu burger
    // console.log("Burger został kliknięty!");
    burger.classList.toggle("burger--open");
    menu.classList.toggle("menu--open");
  });
});















// const hamburger = document.querySelector('#mobile-menu-hamburger');
// const closeBtn = document.querySelector('#mobile-menu-close');

// const navBar = document.querySelector('.menu-list');

// burger.addEventListener("click", () => {
//     // Kod który wykona się kazdorazowo po kliknięciu elementu burger
//     burger.classList.toggle("burger--open");
//     menu.classList.toggle("menu--open");
//   });
  // });

// const navbarToggle = () => navBar.classList.toggle('active');

// hamburger.addEventListener('click',navbarToggle);
// closeBtn.addEventListener('click', navbarToggle);


// document.addEventListener("DOMContentLoaded", () => {
//   // Kod który zostatnie wywołany po załadowaniu się BODY z HTML

//   let burger = document.querySelector("#mobile-menu-hamburger");
//   let menu = document.querySelector("#menu-list");

//   burger.addEventListener("click", () => {
//     // Kod który wykona się kazdorazowo po kliknięciu elementu burger
//     // console.log("Burger został kliknięty!");
//     burger.classList.toggle("burger--open");
//     menu.classList.toggle("menu--open");
//   });
// });