// Paso 1 Función para obtener la jugada de la computadora
function obtenerJugadaComputadora() {
    const opciones = ["piedra", "papel", "tijeras"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
  }
  
  // Paso 2 (Función para obtener la jugada del usuario)
  function obtenerJugadaUsuario() {
    const jugadaUsuario = prompt("Ingresa tu jugada (piedra, papel o tijeras):");
    return jugadaUsuario.toLowerCase(); // (Convierte la jugada en minúsculas para hacer la comparación despues)
  }
  
  // Paso 3 (Función para determinar el ganador)
  function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
      return "Empate";
    } else if (
      (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
      (jugadaComputadora === "tijeras" && jugadaUsuario === "papel") ||
      (jugadaComputadora === "papel" && jugadaUsuario === "piedra")
    ) {
      return "Gana la computadora";
    } else {
      return "Gana el usuario";
    }
  }
  
  // Paso 4 (Llamar a las funciones y jugar el número de partidas seleccionado)
  function jugarPartidas(numeroPartidas) {
    let puntajeComputadora = 0;
    let puntajeUsuario = 0;
  
    for (let i = 0; i < numeroPartidas; i++) {
      console.log("Jugada #" + (i + 1));
  
      const jugadaComputadora = obtenerJugadaComputadora();
      const jugadaUsuario = obtenerJugadaUsuario();
      const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
  
      console.log("La computadora eligió: " + jugadaComputadora);
      console.log("El usuario eligió: " + jugadaUsuario);
      console.log("El resultado fue: " + resultado);
  
      if (resultado === "Gana la computadora") {
        puntajeComputadora++;
      } else if (resultado === "Gana el usuario") {
        puntajeUsuario++;
      }
    }
  
    console.log("Puntaje final:");
    console.log("Computadora: " + puntajeComputadora);
    console.log("Usuario: " + puntajeUsuario);
  
    if (puntajeComputadora > puntajeUsuario) {
      console.log("Gana la computadora");
    } else if (puntajeComputadora < puntajeUsuario) {
      console.log("Gana el usuario");
    } else {
      console.log("Empate");
    }
  }
  
  // Paso 5 (Llamar a la función jugarPartidas con la cantidad deseada de jugadas)
  const numeroPartidas = parseInt(prompt("¿Cuántas partidas queres jugar?"));
  jugarPartidas(numeroPartidas);
  