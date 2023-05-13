/*
    ===== Código de TypeScript =====
*/
/* 
    Asi se definen las variables en typescript 
    se debe especificar que tipo de dato se esta
    utilizando.

    Las constantes solo se les asigna el valor que
    nosotros le dimos a la variable ya que las constantes
    son inmutables
*/
let nombre: string = 'Strider'
let hp: number | string = 95
let vivo: boolean = false

hp = 'FULL'

console.log(nombre, hp);
