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
    var squares = document.querySelectorAll('div');
    for (var i = 0; i < squares.length;i++) {
      if (squares[0] === square1) {
        if (ascii === 40) {
          square5.classList.add('red');
          square5.classList.remove('white');
        } else if (ascii === 39) {
          square2.classList.add('red');
          square2.classList.remove('white');
          square3.classList.add('white');
          square4.classList.add('white');
        } else {
          square3.classList.add('white');
          square4.classList.add('white');
          // square6.classList.add('white');
          // square7.classList.add('white');
          // square8.classList.add('white');
          // square10.classList.add('white');
          // square11.classList.add('white');
          // square12.classList.add('white');
          square3.classList.remove('red');
          square4.classList.remove('red');
          // square6.classList.remove('red');
          // square7.classList.remove('red');
          // square8.classList.remove('red');
          // square10.classList.remove('red');
          // square11.classList.remove('red');
          // square12.classList.remove('red');
        }
      }
    }

    if (squares[1] === square2) {
      if (ascii === 40) {
        square6.classList.add('red');
        square6.classList.remove('white');
      } else if (ascii === 37) {
        square1.classList.add('red');
        square1.classList.remove('white');
      } else if (ascii === 39) {
        square3.classList.add('red');
        square3.classList.remove('white');
        square2.classList.add('white');
        square4.classList.add('white');
      } else {

      }
    }
    // if (square1) {
    //   if (ascii === 38) { arriba
    //     square.classList.add('red');
    //     square.classList.remove('white');
    //   } else if (ascii === 40) { abajo
    //     square.classList.add('red');
    //     square.classList.remove('white');
    //   } else if (ascii === 37) { izquierda
    //     square.classList.add('red');
    //     square.classList.remove('white');
    //   } else if (ascii === 39) { derecha
    //     square.classList.add('red');
    //     square.classList.remove('white');
    //   } else {
    //     square.classList.add('white');
    //     square.classList.remove('red');
    //   }

    /*
    if (ascii === 38) {
      square5.classList.add('red');
      square5.classList.remove('white');
    }
    */

    /*
    else {
     square.classList.add('white');
     square.classList.remove('red');
    }
    */
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
/* square3.classList.add('white');
   square4.classList.add('white');
   square6.classList.add('white');
   square7.classList.add('white');
   square8.classList.add('white');
   square10.classList.add('white');
   square11.classList.add('white');
   square12.classList.add('white');
   square3.classList.remove('red');
   square4.classList.remove('red');
   square6.classList.remove('red');
   square7.classList.remove('red');
   square8.classList.remove('red');
   square10.classList.remove('red');
   square11.classList.remove('red');
   square12.classList.remove('red');
*/
