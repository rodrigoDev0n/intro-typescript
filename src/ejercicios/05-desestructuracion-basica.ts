/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015,
    }
}

/* 
Intentar siempre mantener nuestras desestructuraciones de esta manera
ya que asi podremos mantener un codigo limpio y simple de leer ya que 
al utilizar las otras maneras de desestructurar un objeto anidado
por ejemplo a pesar de ser una forma valida y que funciona nuestro
codigo ya no es tan simple de leer como tener una constante aparte
con los valores de nuestro objeto anidado...

Intentar mantener siempre los nombres de nuestras propiedades intactas
para no dificultar mas el codigo ya que otro problema que podriamos tener
al cambiar el nombre de nuestras propiedades es el siguiente ==>
const {volumen, segundo, cancion} = reproductor; 
si nosotros necesitamos cambiar el nombre de alguna propiedad se veria asi
const {volumen: vol, segundo, cancion} = reproductor
cual es el problema con este tipo de cambios que hacemos a nuestras propiedades
pues el problema es que si estamos utilizando typescript por ejemplo esto podria 
confundirnos y hacernos pensar que volumen es del tipo vol y no que le estamos 
cambiando el nombre. 
*/
const {volumen, segundo, cancion, detalles} = reproductor; 
const {autor, anio} = detalles

// Otra manera no tan limpia para desestructurar datos de un objeto:
/* const {volumen, segundo, cancion, detalles: {autor, anio}} = reproductor; */
// Si necesitamos cambiar el nombre de alguna propiedad de nuestra desestructuración
/* const {volumen: vol, segundo: sec, cancion: can, detalles: detail} = reproductor; */

/* console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La canción actual es: ', cancion);
console.log('La canción es del año: ', autor);
console.log('El autor es: ', anio);
 */

/* DESESTRUCTURACIÓN DE ARREGLOS.... */

const dbz: string[] = ['Goku', 'Vegeta', 'Truks'];

// De esta manera lo hacemos si solo necesitamos un valor del array:
// Esto se hace de esta manera por que la desestructuración de arreglos
// Se basa en la posición de cada elemento.
// A diferencia de los objetos que cada propiedad tiene un nombre.

const [,,p3] = dbz;

// Si nosotros quisieramos extraer todos los elementos de este array:

const [goku, vegeta, trunks] = dbz;



console.log('Personaje 1: ', goku);
console.log('Personaje 2: ', vegeta);
console.log('Personaje 3: ', trunks);


