//- Una cadena de texto con tu Nombre
const nombre="Mariams"
//Otra cadena de texto con tu Apellido
const apellido="Diaz"
//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estuadiantes= "   "+ nombre +" "+apellido+"   "

console.log(estuadiantes)
//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus=estuadiantes.toUpperCase();
console.log("mayusculas:"+estudianteMayus)

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

const estudianteMinus=estuadiantes.toLowerCase();
console.log("minusculas:"+estudianteMinus)
//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

const espacio= estuadiantes
console.log("número de letras de la cadena 'estudiante' contando  los espacios:"+espacio.trim().length)
//- Una variable que contenga la primera letra del Nombre
const nombree = nombre.charAt(0)
console.log("la primera letra del Nombre es: "+nombree)

//- Otra variable que contenga la última letra del Apellido
const nombres = nombre.charAt(nombre.length - 1)
console.log("la ultima letra del Nombre es: "+nombres)
//- Una cadena de texto que elimine los espacios de la variable "estudiante"
const menosespacio= estuadiantes.trim()
console.log( "número de letras de la cadena 'estudiante' Sin  los espacios:"+menosespacio)
//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const booleana =  estuadiantes
console.log(booleana.endsWith("   Mariam Diaz   "))