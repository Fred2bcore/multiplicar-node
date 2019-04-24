const fs = require('fs');

const colors = require('colors');

let listTable = (base, limite = 10) => {

    console.log('================'.blue);
    console.log(`Tabla del ${base}`.blue);
    console.log('================'.blue);
    for (let i = 1; i <= limite; i++) {
        let a = base * i;
        console.log(`${base} x ${ i } = ${ a } `);
    }
}

let createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor Introducido ${base} No es valido!`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let a = base * i;
            data += (`${base} x ${ i } = ${ a } \n`);
        }
        fs.writeFile(`Tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla-${base}-al-${limite}.txt`.red);
        });
    });
}

module.exports = {
    createFile,
    listTable
}