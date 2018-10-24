var content = document.getElementById('content');
var target = document.getElementById('target');
var text2 = document.getElementById('text-2');

var deg = 2; // starting
var rotation_diff = 2; // you can change it to 2 if you want to rotate 2 deg in each second

var img = document.getElementById("litourné");

function myFunction()
{
var img = document.getElementById("litourné");

img.style.webkitTransform = "rotate("+deg+"deg)";
img.style.transform = "rotate("+deg+"deg)";
img.style.MozTransform = "rotate("+deg+"deg)";
img.style.msTransform = "rotate("+deg+"deg)";
img.style.OTransform = "rotate("+deg+"deg)";

deg = deg + rotation_diff;
}

var startRotation;

  img.addEventListener('mouseover', function() {

    var rotation = document.querySelector('.logotarget');
    console.log(rotation.style.transform);
    rotation.style.transform = 'rotate(360deg)';


    window.setTimeout(function(){
    startRotation = setInterval(myFunction, 10);
    },1000);

    content.style.display = 'block';
    window.setTimeout(function(){
      content.style.opacity = 1;
      content.style.transform = 'scale(1)';
    }, 500);
    text2.style.opacity = '1';

    img.addEventListener('mouseout', function (){
      clearInterval(startRotation);
      content.style.opacity = 0;
      content.style.transform = 'scale(0)';
      window.setTimeout(function(){
        content.style.display = 'none';
      },700);
      text2.style.opacity = '0'
    });
  });


//var rotation = setInterval(myFunction, 10);

var rotation = document.querySelector('.logotarget');
  if (rotation.style.transform === 'rotate(0deg)') {
    rotation.style.transform = 'rotate(360deg)';
  } else {
    rotation.style.transform = 'rotate(0deg)';
  }


