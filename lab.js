console.log("hello")

const dropTarget = document.getElementById('dropTarget');
const dropApparition = document.getElementById('dropApparition');

function slideDrop(menuActif) {
  menuActif.classList.toggle("notHiddenPosition");
  dropTarget.classList.toggle("active");
  if (dropTarget.src == "https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png") {
    dropTarget.src = 'https://res.cloudinary.com/ebc-industries/image/upload/v1539892568/croixicone.png';
  } else {
    dropTarget.src = "https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png";
  }
}

dropTarget.addEventListener("click", function() { slideDrop(dropApparition) });

// function slideShare(menuActif) {
//   menuActif.classList.toggle("positionPasCachée");
// }
// shareTarget.addEventListener("click", function() { slideShare(shareApparition) });
// const shareApparition = document.getElementById('shareApparition');
//const shareTarget = document.getElementById('shareTarget');
