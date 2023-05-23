// Buenas practicas:
/* 
- No usar semicolon(;)
- No usar comillas dobles("")
usar comillas simples('')
*/

const persona = {
    nombre: 'Rodrigo',
    apellido: 'Poblete',
}

// Como obtener un valor:
console.log(persona.nombre)

// Desestructuración:
const { nombre } = persona

const personas = [
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
    {nombre: 'Rodrigo', apellido: 'Poblete'},
    {nombre: 'Javier', apellido: 'Cid'},
]

const numeros = [
    1,2,3,4,4,5,6,4,7,8,9
]

// ECMASCRIPT 6 
// const.
// let.
// var no se usa.
// const => su valor es inmutable y no se puede modificar
// let => es solo accesible desde su propio scope.

// numeros.map((n) => n % 2 === 0 && console.log(n))
const cuatros = numeros.filter((n) => n === 4)
console.log(cuatros)

// 0 = 1 
/* 
n en la primera vuelta = 1 le asigna el valor de la 
posición 0.
n en la segunfa vuelta = 2 le asigna el valor de la
posición 1.
*/ 

// .map()
// .map basicamente recorre el array es como un for..... 
personas.map(({nombre}) => {
   // console.log(nombre)
})

// callback = función

// Estas no
/* function hola() {

} */

// Funciones de tipo flecha
const saludo = () => {
    return 'Hola'
} 

const comoEstas = () => {
    return 'Como estas'
}

console.log(saludo(), comoEstas())

// implicita
const suma = (a, b) => a + b

console.log(suma(1, 2))
