// estructura siclo 
// FOR : este tipo de siclo es determindo por la cantidad de datos, que contiene un objeto por ejemplo
// un areglo , una matris.
// si la condicion es verdadera, en seguida repetira siempre y cuando la condicion se cumpla.
for (let iu =1; i<=20;i++) {
    console.log(i)
}
for (let i =1; i<=20;i+=2) {
    console.log(i)
}
for (let i =1; i<=20;i++){
    if(i%2==0){
        console.log(i)
    }else{
        console.log(i)
}
}
let vocales="aeiou"
console.log(vocales.length)
for(let i =0; i<vocales.length;i++){
    console.log(vocales[i])
}
let texto= "hola como estas como te llamas"
console.log(texto.length)
let contadr = 0
for(let i =0; i<texto.length;i++) {
    if (texto[i]=="a"){
        contador+=1
        console.log(texto[3])
 }
}
console.log ("tienes,",contador,"vocales a")
let text= "eucalipto"
console.log(text.length)
let contadr =0
console.log(text.length;i++){
    if(text[i]=="a","e","i","o","u" ){
contador=5
    }
}
console.log("tienes",contador,"vocales a,e,i,o,u")
//WHILE: este tipo de ciclo se ejecutan siempre y cuando una condicion espesifica sea verdadero(true)
var i = 0;
while(i< 20){
    console.log(i);
    i++;
}
// DO WHILE:variante del ciclo while,este tipo de ciclo primero ejecutael bloque de codigos in importar la condicion
var z = 11
do{
    console.log("contadoe en"+ z);
    z++;
}
//hacer un prograama que me muestre el factorial de un munero
5!=4*3*2*1
// hacer un programa que me determine si un texto es palimdromo
//hacer un programa que muestre los 6 primeros numeros de la serie de fibonacci