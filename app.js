//requireds
//const exps = require('express');
// const argv = require('yargs')
//     .command('listar', 'Imprime la taba de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//let base = '5';

// let argv = process.argv;
// //console.log(process.argv);

// //let argv2 = process.argv;
// console.log(argv);
// console.log(argv.base);
// console.log(argv.limite);

//console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];
// // console.log(base);


//console.log(argv);
let comando = argv._[0];
//console.log(comando);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${archivo}`);
            })
            .catch(err => {
                console.log(err);
            });
        break;

    default:
        console.log('Comando no reconocido');
        break;
}