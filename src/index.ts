/*
    ===== Código de TypeScript =====
*/

/* GENERICOS. */

/* 
Un valor generico lo definimos con la letra y los signos <T>
de esta manera decimos que el argumento que tendra nuestra función
tomara el tipo de dato segun el dato que le estamos pasando al argumento.

Ejemplo si nosotros tenemos un argumento que debe ser un string pero despues
un numero podriamos definir un generico para no generar conflictos entre los tipos 
de datos de nuestro argumento.

si lo dejaramos sin especificar el tipo de nuestro argumento tendria el tipo de dato any
el any es cualquier cosa que nosotros le pasemos al argumento puede ser un string un objeto
un numero cualquier valor que puedas definir dentro de javascript pero el hacer esto no
es recomendable ya que al estar utilizando typescript es recomendable especificar siempre
de manera explicita que tipo de dato vamos a utilizar y que tipo de dato van a retornar nuestras
funciones..

Debemos recordar que al escribir codigo en typescript nuestro codigo al momento de ejecutarlo 
lo que hara sera transpilarlo a javascript haciendo que en nuestro bundle que se encuentra en 
el navegador no podamos ver las propiedades que son propias de typescript sino que veremos solo
el codigo nativo que nos entrega javascript...
*/

function queTipoSoy<T>( argumento: T ) {
    return argumento;
}

let soyString = queTipoSoy('Hola esto es un texto!!!');
let soyNumber = queTipoSoy(100);