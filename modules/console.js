/* 
console.log('Something');
console.error('Again');
console.warn('Something else');
 */

/* 
var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Otra'
    }
]

console.table(tabla); 
*/
/* 
console.group('Conversation')
console.log('Hola');
console.group('bla');
console.log('Bla, bla, bla');
console.log('Bla, bla, bla');
console.log('Bla, bla, bla');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('Conversation')

console.log('Otra cosa de otra funcion');
 */

/* 
function function1() {
    console.group('Funcion1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    function2();
    console.log('Hemos vuelto a la 1')
    console.groupEnd('Funcion1')
}

function function2() {
    console.group('Funcion2')
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('Funcion2')
}

console.log('Emepezamos')
function1();
 */


console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces'); 

