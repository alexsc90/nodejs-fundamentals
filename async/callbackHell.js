function hola(name, callback)  {
    setTimeout(function () {
        console.log('Hola ' + name);
        callback(name);
    }, 1500);
};

function hablar(cbHablar) {
    setTimeout(function() {
        console.log('Bla, bla, bla...');
        cbHablar();
    }, 1000);
}

function adios(name, cb) {
    setTimeout(function () {
        console.log('Adios ' + name);
        cb();
    }, 1000);
}

function conversation (name, times, cb) {
    if(times >= 0) {
        hablar(function() {
            conversation(name, --times, cb);
        })
    } else {
        adios(name, cb);
    }
}

console.log('Iniciando proceso');

hola('Alejandro', function (name) {
    conversation(name, 3, function () {
        console.log('Proceso terminado')
    });
});

/* hola('Alejandro', function (name) {
    hablar(function () {
        hablar(function() {
            hablar(function() {
                adios(name, function () {
                    console.log('Terminando proceso');
                });
            });
        });
    });
}); */
