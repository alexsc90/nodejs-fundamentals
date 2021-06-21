/* let i = 0;
let intervalo = setInterval(function () {
    console.log('Hola');
    if(i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000); */

/* setImmediate(function () {
    console.log('Hola')
}); */

/* console.log(process);
console.log(setInterval);
console.log(global);
console.log(__filename);
*/

globalThis.myVar = 'value';
console.log(myVar);