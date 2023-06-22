const readlineSync = require('readline-sync');

let numeroDia = readlineSync.question("Ingresa un número del 1 al 7 para representar un día de la semana: ");

let diaSemana;

switch (numeroDia) {
  case '1':
    diaSemana = "lunes";
    break;
  case '2':
    diaSemana = "martes";
    break;
  case '3':
    diaSemana = "miercoles";
    break;
  case '4':
    diaSemana = "jueves";
    break;
  case '5':
    diaSemana = "viernes";
    break;
  case '6':
    diaSemana = "sabado";
    break;
  case '7':
    diaSemana = "domingo";
    break;
  default:
    diaSemana = "Numero invalido";
}

console.log("Hoy es " + diaSemana);
