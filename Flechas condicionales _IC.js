//  Ejercicio 1: Conversor de temperatura
// Crea una función flecha que convierta temperaturas de grados Celsius a Fahrenheit. La fórmula para convertir Celsius a Fahrenheit es: Fahreneit = (Celsius * 9 / 5) + 32
const conver = input => (input*9/5)+32;
console.log(conver(95))

//  Ejercicio 2: Generador de mensajes personalizados
// Implementa una función flecha que tome un nombre y una edad como argumentos y devuelva un mensaje en formato de cadena, por ejemplo:
// "Hola Juan, tienes 30 años de edad."
const gen = (nom,age)=> `Hola ${nom},tienes ${age} años de edad`
console.log(gen("Laura","15"));

//  Ejercicio 3: Convertir de millas a kilómetros
// Crea una función flecha que convierta millas a kilómetros. Considera que: 1 milla = 1.60934 km
const convermilla = input => (input*1.60934);
console.log(convermilla(18))


//  Ejercicio 4: Consejos según el clima
// Crea una función flecha que, según el clima ingresado como argumento, retorne un consejo adecuado. Por ejemplo:
// Si el clima es “lluvioso”, debe sugerir llevar un paraguas.
// Si el clima es “soleado”, debe sugerir llevar un sombrero.
// Utiliza el operador ternario para simplificar la evaluación condicional en este ejercicio.
const clima = input => input == "lluvioso"?" llevar un paraguas": input=="soleado"?" llevar un sombrero":"Toma tus propias precausiones";
console.log(clima("lluvioso"));