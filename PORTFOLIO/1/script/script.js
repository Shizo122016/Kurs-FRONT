

//Skrypt poruszania sie drzwi!
var id = null;
function myMove() {
  var elem = document.getElementById("lewe");
  var elem2 = document.getElementById("prawe");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 3);
  function frame() {
    if (pos == 700) {
      clearInterval(id);
      document.getElementById("lewe").remove();
      document.getElementById("prawe").remove();
    } else {
      pos++;
      elem2.style.top = pos + 'px';
      elem.style.bottom = pos + 'px';
    }
  }
}