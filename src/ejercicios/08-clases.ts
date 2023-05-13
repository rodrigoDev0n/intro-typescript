/*
    ===== Código de TypeScript =====
*/

/*
A diferencia de una interface que solo podemos definir el tipo de retorno
o tipo de dato de un metodo o función en cambio dentro de una clase podemos
definir la accesibilidad que tendra una propiedad de una clase y ademas podemos
definir su comportamiento. 

Ademas al momento de compilar el codigo de typescript el codigo se transpila a 
javascript osea se transforma a codigo javascript nativo lo cual hace que las
interfaces desaparezcan ya que estas solo son propias de typescript y solo 
visibles dentro de nuestro codigo de typescript.

*/

/* CLASES Y CONSTRUCTORES TYPESCRIPT */

/* 
De esta manera podemos simplificar nuestro codigo para no llenar de 
propiedades nuestro constructor y nuestra clase asi nos evitamos
escribir codigo de mas... 
*/

class PersonaNormal {
    constructor( 
        public nombre: string, 
        public direccion: string 
    ) {}
}

/* 
Extender una clase:
-------------------

Al extender una clase lo que estamos haciendo basicamente es
extender las propiedades de una clase hacia otra por ejemplo
en la clase Heroe tenemos una propiedad nombreReal la cual
corresponde al nombre de una persona normal comun y corriente
por eso la extendemos con la propiedad del super dentro de 
nuestro constructor y enviamos el nombre real como nombre
de una persona normal y le asignamos una dirección.
de esta manera obviamos la propiedad nombreReal de nuestra clase
heroe ya que en teoria el nombre real de un super heroe deberia
estar dentro de nuestra clase persona normal por que no es su nombre
de super heroe o alter ego...
*/

class Heroe extends PersonaNormal {
    /* 
    Asi se definen las propiedades normalmente dentro de una clase...

    alterEgo: string;
    edad: number; 
    nombreReal: string;
 */

    /* 
    De esta manera podemos simplificar y obviar nuestro codigo para evitar
    tener tanto codigo escrito dentro de nuestro constructor... 
    */
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) {
        super( nombreReal, 'New York USA' );
    }
}

const ironman = new Heroe('Ironman', 30, 'Tony Stark');
console.log(ironman);
