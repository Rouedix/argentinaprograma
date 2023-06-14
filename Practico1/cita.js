// Paso 1: Declarar las variables cita y substring
var cita = "Tres tristes tigres comen trigo en un trigal";
var substring = "tigres comen trigo";

// Paso 2: Obtener la longitud de cita
var tamañoDeCita = cita.length;

// Paso 3: Buscar el índice del substring en la cita
var indice = cita.indexOf(substring);

// Paso 4: Recortar la cita original
var citaRevisada = cita.slice(0, indice) + substring + cita.slice(indice + substring.length);
