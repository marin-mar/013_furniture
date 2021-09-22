/* popup 404 for nonexistent links */

const nonexistentLinks = document.querySelectorAll('[href="#"]');
const nonexistentBtns = document.querySelectorAll('.btn[data-scrollTo="#"]');
const furnitureButtons = document.querySelectorAll(".furniture__button");
const furnitureFilterBtns = document.querySelectorAll(".furniture__filter-btn");
const clientsReviewBtns = document.querySelectorAll(".clients-review__btn");
const nonexistentArray = [...nonexistentLinks, ...nonexistentBtns, ...furnitureButtons, ...furnitureFilterBtns, ...clientsReviewBtns];

const popupBg = document.querySelector(".popup404");
const popup = document.querySelector(".popup404__body");
const closePopupButton = document.querySelector(".popup404__close");

nonexistentArray.forEach((nonexistentLink) => {
  nonexistentLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("locked");
    popupBg.classList.add("popup404--active");
    popup.classList.add("popup404__body--active");
  });
});

closePopupButton.addEventListener("click", () => {
  document.body.classList.remove("locked");
  popupBg.classList.remove("popup404--active");
  popup.classList.remove("popup404__body--active");
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    document.body.classList.remove("locked");
    popupBg.classList.remove("popup404--active");
    popup.classList.remove("popup404__body--active");
  }
});
