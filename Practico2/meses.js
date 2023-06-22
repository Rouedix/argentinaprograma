const readlineSync = require('readline-sync');

const meses = {
  1: "enero",
  2: "febrero",
  3: "marzo",
  4: "abril",
  5: "mayo",
  6: "junio",
  7: "julio",
  8: "agosto",
  9: "septiembre",
  10: "octubre",
  11: "noviembre",
  12: "diciembre"
};

let numeroMes = readlineSync.question("Ingresa un numero del 1 al 12 para representar un mes: ");

if (numeroMes >= 1 && numeroMes <= 12) {
  let mes = meses[numeroMes];
  let cantidadDias = 31;

  if (numeroMes === 2) {
    cantidadDias = 28;
  }

  console.log("La cantidad de días del mes de " + mes + " es " + cantidadDias);
} else {
  console.log("El numero ingresado no representa un mes valido.");
}
