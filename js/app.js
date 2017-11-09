// Empezando las animaciones en el DOM
// Utilizando el evento onload para que las animaciones se realicen cuando nuestra página cargue completamente

window.onload = function() {
  var tdElements = document.getElementsByTagName('td');
  tdElements.addEventListener('keydown', functionKey);
  tdElements.addEventListener('keypress', functionKey);
  tdElements.addEventListener('keyup', functionKey);
};

function functionKey (e) {
  var event = window.e || e;
  var message = "Tipo de evento: " + evento.type + "<br>" +
                "Propiedad keyCode: " + evento.keyCode + "<br>" +
                "Propiedad charCode: " + evento.charCode + "<br>" +
                "Carácter pulsado: " + String.fromCharCode(evento.charCode);
}
