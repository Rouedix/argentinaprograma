const readlineSync = require('readline-sync');

let numero = readlineSync.question("Ingresa un número: ");

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero == 0) {
  console.log("El número es cero");
} else {
  console.log("El número es negativo");
}