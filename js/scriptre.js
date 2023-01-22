`use strict`;

// // // Mobile Navigation Button // // //
const btnNavEl = document.querySelector(`.menu-nav`);
const headerEl = document.querySelector(`.header`);

btnNavEl.addEventListener(`click`, function () {
  headerEl.classList.toggle(`open-nav`);
});

// // // Sticky Header // // //
