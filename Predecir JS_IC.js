// Desestructuración en objetos anidados
const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};
const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);


// 1. Predice la salida del código: Pensé que no saldría nada
// 2. Registra la salida obtenida. : 30 y undifined
// 3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript:  El 30 aparece porque existe la propiedad dentro del arreglo y el undifined aparece ya que a la variable salario no se le asignó un valor.

// Uso del operador spread en la fusión de objetos 
const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);
// 1. Predice la salida del código: Se muestran ambos objetos concatenados en una solo objeto
// 2. Registra la salida obtenida: { a: 1, b: 4, c: 5, d: 6 }
// 3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript: Al usar spread si se unen los arreglos sin embargo b y c toman los valores de objetoB ya que spread usa los valores de derecha a izquierda.


// Ámbito de variables en funciones y bloques
const verificar = () => {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    console.log(a);
    console.log(b);
}
verificar();
// 1. Predice la salida del código: Aparece solo c
// 2. Registra la salida obtenida: Solo se muestra el var y menciona que a no está definido
// 3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript: a y b solo existen en el bloque donde fueron declaradas por eso no aparecen. 


// Propiedades de objetos inmutables
const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);

// 1. Predice la salida del código: Muestra 29
// 2. Registra la salida obtenida. : 29
// 3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript: Se utiliza Object.freeze lo que hace que la variable se mantenga a pesar de los cambios.

// Manipulación de arreglos sin modificar el original
const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);
// 1. Predice la salida del código: Se mostraran 2 arreglos y uno de ellos llevará el cuatro
// 2. Registra la salida obtenida. : [ 1, 2, 3 ][ 1, 2, 3, 4 ]
// 3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript: Al utlizar concat se combinan los arreglos y se agrega el valor entre paréntesis


// Acceso a elementos de un arreglo con destructuración
const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);
// 1. Predice la salida del código: Se muestran el mismo arreglo dos veces
// 2. Registra la salida obtenida: manzana , naranja
// 3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript: Se les asígna variables a los elementos del areglo eso hace que al llamar las variables se muestren.

// Comportamiento del ámbito de let en bucles anidados 
for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}
// 1. Predice la salida del código: Imprime 1 tres veces
// 2. Registra la salida obtenida:0 1 0 1 0 1
// 3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript: Let crea un valor para cada iteración del bucle ya que el uso de let permite reutilizar la misma variable en diferentes bucles sin generar conflicto.

// Uso del operador spread para combinar arreglos
const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);
// 1. Predice la salida del código: [1,2,3,3,4,5]
// 2. Registra la salida obtenida: [ 1, 2, 3, 3, 4, 5 ]
// 3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript: A diferencia de los objetos en arreglos como son elementos se concatenan de manera normal.

// Alcance y captura de variables dentro de una función
const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();
// 1. Predice la salida del código: Luis 25
// 2. Registra la salida obtenida: Luis 25
// 3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript: Var nombre es reasignado de Ana a Luis y en el segundo let crea una nueva variable para ese if .