function hola(name, callback)  {
    setTimeout(function () {
        console.log('Hola ' + name);
        callback(name);
    }, 1500);
};

function adios(name, cb) {
    setTimeout(function () {
        console.log('Adios ' + name);
        cb();
    }, 1000);
}

console.log('Iniciando proceso');

hola('Alejandro', function (name) {
    adios(name, function () {
        console.log('Terminando proceso');
    });
});



