const yargs = require('yargs');
const args = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = yargs
            .command('listar','Imprime en la consola la tabla de multiplicar', args)
            .command('crear','Crear un archivo de texto con la tabla de multiplicar', args)
            .help()
            .argv;

module.exports = {
    argv
}