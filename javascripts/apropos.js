var content = document.getElementById('content');
var target = document.getElementById('target');
var text2 = document.getElementById('text-2');
var img = document.getElementById("litourné");

//Beginning of the rotation function//

var deg = 0; // starting
var rotation_diff = 1; // --> change le degré de rotation de la bétonnière.


function myFunction() {
if (running === 1) {
img.style.webkitTransform = "rotate("+deg+"deg)";
img.style.transform = "rotate("+deg+"deg)";
img.style.MozTransform = "rotate("+deg+"deg)";
img.style.msTransform = "rotate("+deg+"deg)";
img.style.OTransform = "rotate("+deg+"deg)";
deg = deg + rotation_diff;
return deg;
}
}

//Need to set a variable to stop the interval afterwards//

var start;
var running = 0;

function litourné(){

  running = 1;
  start = setInterval(myFunction, 10);
  content.style.display = 'block';
  window.setTimeout(function(){
    content.style.opacity = '1'; //fait apparaître les icons
    content.style.transform = 'scale(1)';
    text2.style.opacity = '1'; // fait apparaître le texte à côté
  }, 300);
  return running, start;
};


function lipatourné(){

  var rotation = document.querySelector('.logotarget');
  // console.log(rotation.style.transform);
  rotation.style.transform = 'rotate(' + (deg - 720) + 'deg)';
  deg = (deg - 720);

  clearInterval(start)
  content.style.opacity = '0';
  content.style.transform = 'scale(0)';
  window.setTimeout(function(){
    content.style.display = 'none';
  },700);
  text2.style.opacity = '0';
  running = 0;
  return running, deg, start;
};

function rolling(){

  window.setTimeout(litourné, 7000);

  img.addEventListener('click', function() {
    if (running === 0) {
      deg = deg + 720
      img.style.webkitTransform = "rotate("+deg+"deg)";
      img.style.transform = "rotate("+deg+"deg)";
      img.style.MozTransform = "rotate("+deg+"deg)";
      img.style.msTransform = "rotate("+deg+"deg)";
      img.style.OTransform = "rotate("+deg+"deg)";
      window.setTimeout(litourné, 1000);
    } else if (running === 1) {
      lipatourné();
    }
  });
};

rolling();



























// console.log('je suis' + deg)
//     img.style.webkitTransform = "rotate("+(deg + 720)+"deg)";
//     img.style.transform = "rotate("+(720 + deg)+"deg)";
//     img.style.MozTransform = "rotate("+(720+deg)+"deg)";
//     img.style.msTransform = "rotate(" + (720 + deg) + "deg)";
//     img.style.OTransform = "rotate(" + (720 + deg) + "deg)";


// function rolling(){
//   window.setTimeout(litourné, 8000);
//   console.log('activated because no event')
//   console.log('running variable before the if ' + running)
//   if (running === 1) {
//     console.log('value if running = 1 ' + running)
//     console.log('Cant be activated twice');
//     img.addEventListener('click', lipatourné)
//   } else if (running === 0) {
//     console.log('value if running = 0 ' + running)
//     img.addEventListener('click', litourné);
//   }
// };


// var startRotation;

//   img.addEventListener('mouseover', function() {

//     // var rotation = document.querySelector('.logotarget');
//     // console.log(rotation.style.transform);
//     // rotation.style.transform = 'rotate(360deg)';


//     window.setTimeout(function(){
//     startRotation = setInterval(myFunction, 10);
//     },1000);

//     content.style.display = 'block';
//     window.setTimeout(function(){
//       content.style.opacity = 1;
//       content.style.transform = 'scale(1)';
//     }, 500);
//     text2.style.opacity = '1';

//     img.addEventListener('mouseout', function (){
//       clearInterval(startRotation);
//       content.style.opacity = 0;
//       content.style.transform = 'scale(0)';
//       window.setTimeout(function(){
//         content.style.display = 'none';
//       },700);
//       text2.style.opacity = '0'
//     });
//   });


//var rotation = setInterval(myFunction, 10);

// var rotation = document.querySelector('.logotarget');
//   if (rotation.style.transform === 'rotate(0deg)') {
//     rotation.style.transform = 'rotate(360deg)';
//   } else {
//     rotation.style.transform = 'rotate(0deg)';
//   }

//On veut activer la roue au bout d'un certain temps si on a pas over dessus//Il faut cliquer pour le rentrer/

