// por medio de un propmt pido el numero de tarjeta

var cardNumb = prompt('what is your card number?');

// pasar los numeros de tarjeta a un array en orden inverso

function reverseNumb(cardNumb) {
  var numb = [];
  /* var reverse = cardNumb.reverse();
         reverse.push(numb);*
          /* var size = cardNumb.length;
         var lastPosition = size-1 ;*/

  for (var i = cardNumb.length - 1; i >= 0; i--) {
    numb.push(cardNumb[i]);
    return numb;
  }

  parIndex = indexOf(numb) * 2; // deseo obtener numeros de posiciones pares, numeros pares                                  son multiplos de 2
  while (numb == parIndex) {
  // mientras se cumpla que numb es igual a un numero par,se le va a                             multiplicar por 2
    numb *= 2;
    if (numb >= 10) {
    }
  }
}
