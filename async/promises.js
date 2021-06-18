function hola(name)  {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + name);
            resolve(name);
        }, 1500);
    });
};

function hablar(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla, bla, bla...');
           /*  resolve(name); */
           reject('Hay un error');
        }, 1000);
    });
}

function adios(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ', name);
            resolve();
        }, 1000);
    })
};

//...

console.log('Iniciando el proceso...');
hola('Alejandro')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((name) => {
        console.log('Terminando el proceso');
    })
    .catch(error => {
        console.log('Ha habido un error:');
        console.log(error);
    });