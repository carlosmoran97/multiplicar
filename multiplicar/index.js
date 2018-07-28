const fs = require('fs');

const crearArchivo = async( base ) => {
    if(!Number(base)){
        throw new Error(`El valor introducido para la base (${ base }) no es un número.`);
    }
    let data = new String();
    let nombre = `tabla-${ base }.txt`;
    for(let i = 1; i <= 10; i++){
        data += `${ base } x ${ i } = ${ base*i }\n`;
    }
    fs.writeFile(`./tablas/${ nombre }`, data,(err) => {
        if(err) throw err;
        return;
    });
    return nombre;
};

module.exports = { crearArchivo }