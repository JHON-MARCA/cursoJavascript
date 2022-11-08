//Funciones por declaración
function saludar() {
    let mensage = "maykol"
   console.log(mensage)
 }
 
 saludar(); // 'maykol'
 typeof saludar; // 'function'

// Funciones por expresión

const suma = function () {
   var a = 11
   var b = 06
   console.log(a+b)
 };
 
 suma();

// Funciones como objetos
const saludarse = new Function;
var saludo = "hola maykol"
console.log(saludo)
saludarse();