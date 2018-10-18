console.log("hello")
const dropTarget = document.getElementById('dropTarget');
const shareTarget = document.getElementById('shareTarget');
const dropApparition = document.getElementById('dropApparition');
const shareApparition = document.getElementById('shareApparition');


dropTarget.addEventListener("click", function() { slideDrop(dropApparition) });
shareTarget.addEventListener("click", function() { slideShare(shareApparition) });

function slideDrop(menuActif) {
  menuActif.classList.toggle("notHiddenPosition");
  dropTarget.classList.toggle("active");
}

function slideShare(menuActif) {
  menuActif.classList.toggle("positionPasCachée");
}
