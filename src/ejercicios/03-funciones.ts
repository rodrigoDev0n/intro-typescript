/* 
Siempre especificar los tipos en typescript ya que es
una buena practica y nos evita las confusiones.
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar( numero: number, numero2?: number, base: number = 2 ): number {
    return numero * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar( personaje: PersonajeLOR, curarX: number ): void {
    personaje.pv += curarX;

    console.log( personaje );
    
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Rodrigo',
    pv: 50,
    mostrarHP() {
        console.log('Puntos de vida: ', this.pv); 
    }
} 

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP() ;