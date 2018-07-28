const { crearArchivo } = require('./multiplicar');

let base = '1';

console.log(process.argv);

crearArchivo( base )
.then( nombre => {
    console.log(`El archivo ${ nombre } ha sido creado.`);
})
.catch(e => {
    console.log(e.message);
});