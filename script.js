window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 522);
});

// const cards = document.querySelectorAll(".card");
// const cardIcons = document.querySelector(".card-icon");

// cards.forEach((element) => {
//   element.addEventListener("mouseover", () => {
//     element.style.backgroundColor = "red";

//     cardIcons.forEach((element) => {
//       element.style.backgroundColor = "black";
//     });
//   });

//   element.addEventListener("mouseout", () => {
//     element.style.backgroundColor = "";
//   });
// });

// cards.addEventListener("mouseover", () => {
//   cards.style.backgroundColor = "red";
// });

// cards.addEventListener("mouseout", () => {
//   cards.style.backgroundColor = "";
// });
