let contenido = document.getElementById("contenido");
let footer = document.getElementById("footer");
let header = document.getElementById("header");
let body = document.getElementById("body");

console.log(footer.offsetHeight);
console.log(header.offsetHeight);
console.log(body.offsetHeight);

let alto = body.offsetHeight - (header.offsetHeight + footer.offsetHeight);

contenido.style.minHeight = alto + "px";
