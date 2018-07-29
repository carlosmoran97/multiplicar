const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {
    console.log('=================='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('=================='.green);

    for(let i = 1; i <= limite; i++){
        console.log(`${ base } x ${ i } = ${ base*i }`);
    }
    return;
};

const crearArchivo = async(base, limite = 10) => {
    if(!Number(base)){
        throw new Error(`El valor introducido para la base (${ base }) no es un número.`.red);
    }
    let data = new String();
    let nombre = `tabla-${ base }-lim-${ limite }.txt`;
    for(let i = 1; i <= limite; i++){
        data += `${ base } x ${ i } = ${ base*i }\n`;
    }
    fs.writeFile(`./tablas/${ nombre }`, data,(err) => {
        if(err) throw err;
        return;
    });
    return nombre;
};

module.exports = { 
    crearArchivo,
    listarTabla
};