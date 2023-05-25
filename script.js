var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contender-parrafo");
var resultado = document.querySelector(".texto-resultado");



botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
  console.log("entrando a encriptar");
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  console.log(cajatexto);
  resultado.textContent = encriptarTexto(cajatexto);
  console.log("##############")
  console.log(resultado.textContent);
}
function desencriptar() {
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  resultado.textContent = desencriptarTexto(cajatexto);
  console.log(resultado.textContent);
  
}
function recuperarTexto() {
  var cajatexto = document.querySelector(".cajatexto");
  return cajatexto.value;
}
function ocultarAdelante() {
  munieco.classList.add("ocultar");
  contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  console.log("encriptar texto");
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}
const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener(
  "click",
  (copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
  })
);
