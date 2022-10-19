// averiguar el methodo de javascript
// que me permite saber que tipo de dato tengo
//RESPUESTA
// el metodo es el operador typeof,que devuelve una cadena  de texto
// que describe el tipo del operador  que estamos comprobando
// El operador typeof devuelve una cadena que indica el tipo de
// operando sin evaluarlo. operando es la cadena, variable, palabra
//clave u objeto para el que se devolverá su tipo. Los paréntesis 
//son opcionales.
//Suponga que define las siguientes variables:
var miFuncion = new Function("5+2")
var forma = "redonda"
var tamano = 1
var hoy = new Date()
//El operador typeof devuelve los siguientes resultados para estas variables
typeof miFuncion === 'function'
typeof forma === 'string'
typeof tamano === 'number'
typeof hoy === 'object'
typeof noExiste === 'undefined'
//Para las palabras clave true y null, el operador typeof devuelve los siguientes resultados:
typeof true === 'boolean'
typeof null === 'object'