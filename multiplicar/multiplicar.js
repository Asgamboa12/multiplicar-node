const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {
    console.log('------------TABLA DE MULTIPLICAR------------'.rainbow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El valor introducido no es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve('The file has been saved!')
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}