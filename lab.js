const dropTarget = document.getElementById('dropTarget');
const dropApparition = document.getElementById('dropApparition');

function slideDrop(menuActif) {
  menuActif.classList.toggle("notHiddenPosition");
  dropTarget.classList.toggle("active");
  document.querySelector('.navbar').classList.toggle("navbar-gradient");
  if (dropTarget.src == "https://res.cloudinary.com/ebc-industries/image/upload/v1539962317/menuicone.png") {
    dropTarget.src = 'https://res.cloudinary.com/ebc-industries/image/upload/v1540041871/croixicone.png';
  } else {
    dropTarget.src = "https://res.cloudinary.com/ebc-industries/image/upload/v1539962317/menuicone.png";
  }
}

dropTarget.addEventListener("click", function() {slideDrop(dropApparition)});

// function slideShare(menuActif) {
//   menuActif.classList.toggle("positionPasCachée");
// }
// shareTarget.addEventListener("click", function() { slideShare(shareApparition) });
// const shareApparition = document.getElementById('shareApparition');
//const shareTarget = document.getElementById('shareTarget');
