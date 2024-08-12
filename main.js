let menu = document.getElementById("menu");
let menu_btn = document.getElementById("menu-btn");
let close_btn = document.getElementById("close-btn");

menu_btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu_btn.classList.toggle("hidden");
  close_btn.classList.toggle("hidden");
});

close_btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu_btn.classList.toggle("hidden");
  close_btn.classList.toggle("hidden");
});
