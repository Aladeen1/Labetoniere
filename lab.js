console.log("hello")
const menu = document.getElementById('menu');
const toggle = document.querySelector('.toggle');
menu.addEventListener("click", (event) => {
  toggle.classList.toggle("showm");
  toggle.classList.toggle("");
});
