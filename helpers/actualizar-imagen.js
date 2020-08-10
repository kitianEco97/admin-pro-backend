const fs = require('fs');

const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');
const usuario = require('../models/usuario');

const borrarImagen = (path) => {
    // const pathViejo = `./uploads/medicos/${medico.img}`;
    if ( fs.existsSync( path ) ) {
        // Asi se borra la imagen anterior
        fs.unlinkSync(path);
    }
}

const actualizarImagen = async ( tipo, id, nombreArchivo ) => {
    let pathViejo = '';
    // console.log('Vamos bien');
    // Necesitamos usar el tipo y el id, el path y el nombre del archivo
    switch ( tipo ) {
        case 'medicos':

            const medico = await Medico.findById(id);
            if ( !medico ) {                
                console.log('No se encontro médico por id');
                return false;
            }

            pathViejo = `./uploads/medicos/${medico.img}`;
            borrarImagen( pathViejo );            

            medico.img = nombreArchivo;
            await medico.save();
            return true;

        break;
        case 'hospitales':
            
            const hospital = await Hospital.findById(id);
            if ( !hospital ) {                
                console.log('No se encontro un hospital por ese id');
                return false;
            }

            pathViejo = `./uploads/hospital/${hospital.img}`;
            borrarImagen( pathViejo );            

            hospital.img = nombreArchivo;
            await hospital.save();
            return true;

        break;
        case 'usuarios':

            const usuario = await Usuario.findById(id);
            if ( !usuario ) {                
                console.log('No se encontro un usuario por ese id');
                return false;
            }

            pathViejo = `./uploads/medicos/${usuario.img}`;
            borrarImagen( pathViejo );            

            usuario.img = nombreArchivo;
            await usuario.save();
            return true;

        break;        
    
        default:

        break;
    }


}

module.exports = {
    actualizarImagen
}