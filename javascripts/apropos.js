var content = document.getElementById('content');
var target = document.getElementById('target');

target.addEventListener('click', function(){
  var ctr = 1;
  var rotation = document.querySelector('.logotarget');
  if (rotation.style.transform === 'rotate(0deg)') {
    rotation.style.transform = 'rotate(360deg)';
  } else {
    rotation.style.transform = 'rotate(0deg)';
  }



  content.className = content.className !== 'show' ? 'show' : 'hide';

  if (content.className === 'show') {
    content.style.display = 'block';
    window.setTimeout(function(){
      content.style.opacity = 1;
      content.style.transform = 'scale(1)';
    }, 0);
  }
  if (content.className === 'hide') {
    content.style.opacity = 0;
    content.style.transform = 'scale(0)';
    window.setTimeout(function(){
      content.style.display = 'none';
    },700); // timed to match animation-duration
  }
});
