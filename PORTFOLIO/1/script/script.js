

//Skrypt poruszania sie drzwi!
var id = null;
function myMove() {
  var elem = document.getElementById("lewe");
  var elem2 = document.getElementById("prawe");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == -700) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.left = pos + 'px';
      elem2.style.right = pos + 'px';
    }
  }
}