var edad = 20;
console.log("He realizado mi examen.");

// Condición (si nota es mayor o igual a 5)
if (edad >= 18) {
  console.log("¡Estoy aprobado!");
}

// ejercicio 1 
edad = 18;
if (edad <18 ){
    console.log("es menor de edad");
}else {
    console.log("es mayor de edad");
}
// ejercicio 2 
contraseña = "MAYKOLMARCA"
password = "MAYKOLMARCA"
if (contraseña == password) {
    console.log("BIENVENIDA")
}else{
    console.log("ERROR")
}
// ejercicioo 3 
let dividendo = 20 
let divisor =  0
if (divisor == 0){
    console.log("error")
}  else{
    console.log(dividendo/divisor)
}
// ESTRUCTURA SWITCH
let numero = 4
switch(numero){
    case 1 :
        console.log("uno")
        break 
    case 2 :
        console.log("dos")
        break 
    case 3 :
        console.log("tres")
        break 
    case 4 :
        console.log("cuatro")
        break 
    case 5 :
        console.log("cinco")
        break 
    default:
            console.log("error numero no encontrado")

}
let numeromes = 5

switch (numeromes) {
    case 1: 
        console.log("enero")
        break
    case 2: 
        console.log("febrero")
        break
    case 3: 
        console.log("marzo")
        break
    case 4: 
        console.log("abril")
        break
    case 5: 
        console.log("mayo")
        break
    default:
        console.log("no se encontro el mes")
}

//
 let vocales="z"
 switch (vocales) {
     case "a":
        console.log("es una vocal")
         break;
     case "e":
        console.log("es una vocal")
         break;
     case "i":
        console.log("es una vocal")
         break;
     case "o":
        console.log("es una vocal")
         break;
     case "u":
        console.log("es una vocal")
         break
     default:
         console.log("no es una vocal")
 }
 //
 let vocal= "m"
 switch(vocal){
    case"a" :case"e":case"i":case"o":case"u":
        console.log("la letra",vocal,"es una vocal")
    break
    default:
       console.log(vocal,"no es una vocal")
 }