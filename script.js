const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function() {
  if (menu.classList.contains("invisible")) {
    menu.classList.remove("invisible");
  } else {
    menu.classList.add("invisible");
  }
});