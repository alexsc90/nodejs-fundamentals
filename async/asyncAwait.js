async function hola(name)  {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + name);
            resolve(name);
        }, 1500);
    });
};

async function hablar(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla, bla, bla...');
           /*  resolve(name); */
           resolve('Hay un error');
        }, 1000);
    });
}

async function adios(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ', name);
            resolve();
        }, 1000);
    })
};

async function main() {
    let name = await hola('Alejandro');
    await hablar();
    await hablar();
    await hablar();
    await adios(name);
    console.log('Terminamos proceso');
}

console.log('Emepezamos proceso');
main();
/* console.log('Segundo proceso'); */