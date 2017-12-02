// Empezando las animaciones en el DOM
// Utilizando el evento onload para que las animaciones se realicen cuando nuestra página cargue completamente

window.onload = function() {
  window.addEventListener('keyup', function(event) {
    var ascii = event.keyCode;
    console.log(ascii);
    var square = document.querySelector('div');
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
