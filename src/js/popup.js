const popups = document.querySelector("[data-popup]");

popups
  .querySelector("[data-popup-close]")
  .addEventListener("mouseup", function () {
    popups.classList.remove("active");
  });
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popups.classList.remove("active");
  }
});

popups
  .querySelector("[data-popup-window]")
  .addEventListener("mouseup", function (event) {
    event.stopPropagation();
  });
popups.addEventListener("mouseup", function () {
  popups.classList.remove("active");
});
