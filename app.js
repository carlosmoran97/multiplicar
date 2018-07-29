const {argv} = require('./conf/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar');


const comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
    crearArchivo(argv.base, argv.limite)
        .then( nombre => {
            console.log(`Archivo creado:`, nombre.green);
        })
        .catch(e => {
            console.log(e.message);
        });
    break;

    default:
        console.log('Comando no reconocido');
        break;
}

