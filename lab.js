console.log("hello")
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const toggle1 = document.getElementById('toggle1');
const toggle2 = document.getElementById('toggle2');

menu1.addEventListener("click", function() { yo(toggle1) });
menu2.addEventListener("click", function() { yo(toggle2) });

function yo(which) {
  which.classList.toggle("showm");
}
