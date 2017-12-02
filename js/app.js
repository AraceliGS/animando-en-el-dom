// Empezando las animaciones en el DOM
// Utilizando el evento onload para que las animaciones se realicen cuando nuestra página cargue completamente

window.onload = function() {
  window.addEventListener('keyup', function(event) {
    var ascii = event.keyCode;
    console.log(ascii);
    var square1 = document.getElementById('square-1');
    var square2 = document.getElementById('square-2');
    var square3 = document.getElementById('square-3');
    var square4 = document.getElementById('square-4');
    var square5 = document.getElementById('square-5');
    var square6 = document.getElementById('square-6');
    var square7 = document.getElementById('square-7');
    var square8 = document.getElementById('square-8');
    var square9 = document.getElementById('square-9');
    var square10 = document.getElementById('square-10');
    var square11 = document.getElementById('square-11');
    var square12 = document.getElementById('square-12');
    if (square1) {
      if (ascii === 38) {
        square.classList.add('red');
        square.classList.remove('white');
      } else if (ascii === 40) {
        square.classList.add('red');
        square.classList.remove('white');
      } else if (ascii === 37) {
        square.classList.add('red');
        square.classList.remove('white');
      } else if (ascii === 39) {
        square.classList.add('red');
        square.classList.remove('white');
      } else {
        square.classList.add('white');
        square.classList.remove('red');
      }
    }
  });
  // var tdElements = document.getElementsByTagName('td');
  // var onlyOneSquare;
  // for (var i = 0; i < tdElements.length;i++) {
  //   onlyOneSquare = tdElements[i];
  //   onlyOneSquare.addEventListener('keyup', function(event) {
  //     var ascii = event.keyCode;
  //     console.log(ascii);
  //   });
  // }
};
