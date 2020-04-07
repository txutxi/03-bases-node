const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {



        if (!Number(base)) {
            reject(`La base: '${base}' debe ser un numero`.red);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite: '${limite}' debe ser un numero`.red);
            return;
        }
        console.log('=================================='.green);
        for (let i = 1; i <= limite; i++) {
            //texto += `${base} * ${i} = ${base * i} \n`;
            console.log(`${base} * ${i} = ${base * i}`.green);
        };
        console.log('=================================='.green);

    });


}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base '${base}' no es un numero`.red);
            return
        }

        if (!Number(limite)) {
            reject(`El limite '${limite}' no es un numero`.red);
            return
        }


        let tabla = (base) => {
            let texto = '';
            for (let i = 1; i <= limite; i++) {
                texto += `${base} * ${i} = ${base * i} \n`;
                //console.log(`${base} * ${i} = ${base * i}`);
            }
            return texto;
        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, tabla(base), (err) => {
            if (err)
                reject(err.red)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

//tabla(3);