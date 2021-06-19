// const p = require('process')

process.on('beforeExit', () => {
    console.log('Ale, el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ale, el proceso termino');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca')
    }, 0);
});

setTimeout(() => {
    console.log('Esto si se va a ver')
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya, se nos olvido capturar el error');
    console.error(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});

//nonFunction();
console.log('Esto, si el error no se recoje, no sale');
