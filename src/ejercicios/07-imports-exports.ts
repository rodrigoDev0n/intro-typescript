import { calculaISV, Producto } from "./06-desestructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100,
    },
    {
        desc: 'Telefono 2',
        precio: 150,
    },
    {
        desc: 'Telefono 3',
        precio: 200,
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('El total es: ', total);
console.log('El ISV es: ', isv);
