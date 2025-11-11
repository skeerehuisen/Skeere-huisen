var showbanner = funtion()

document.querySelectorAll('img').forEach(img => {
  img.onmouseover = function() {
    img.style.border = 'solid 6px';
  };
  img.onmouseout = function() {
    img.style.border = '';
  };
});

document.getElementById("clickaway").onclick = function(){
  document.getElementById("videoad").innerHTML = "";
};


