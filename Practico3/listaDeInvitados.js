const personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
const admitidos = [];
const rechazados = [];

for (let i = 0; i < personas.length; i++) {
  if (personas[i] === "Jose" || personas[i] === "Sofia") {
    rechazados.push(personas[i]);
  } else {
    admitidos.push(personas[i]);
  }
}

console.log("La lista de invitados admitidos es:");
for (let i = 0; i < admitidos.length; i++) {
  console.log(admitidos[i]);
}

console.log("La lista de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
  console.log(rechazados[i]);
}

// Lista ordenada alfabéticamente de invitados admitidos
console.log("La lista ordenada de invitados admitidos es:");
admitidos.sort();
for (let i = 0; i < admitidos.length; i++) {
  console.log(admitidos[i]);
}

// Lista ordenada alfabéticamente de invitados rechazados
console.log("La lista ordenada de invitados rechazados es:");
rechazados.sort();
for (let i = 0; i < rechazados.length; i++) {
  console.log(rechazados[i]);
}
