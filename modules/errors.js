function anotherFunction() {
    seRompe();
}

function seRompe () {
    return 3 + z;
}

function asyncBreak(cb) {
    setTimeout(function () {
        try{
            return 3 + z;
        } catch(err) {
            console.error('Error en mi funcion asincrona');
            cb(err);
        }
    })
}

try {
    // anotherFunction();
    asyncBreak(function (err) {
        console.log(err.message)
    });
} catch(err) {
    console.error('Vaya, algo se ha roto...', err);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto de aqui, esta al final');
