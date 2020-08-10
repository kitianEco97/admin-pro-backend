const { response } = require('express');

const Usuario = require('../models/usuario');
const Medicos = require('../models/medico');
const Hospital = require('../models/hospital');

const getTodo = async (req, res = response) => {
    // Auqui se esta recibiendo el paramtro de la url 
    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, 'i');
    
    const [ usuarios, medico, hospitales ] = await Promise.all([
        Usuario.find({ nombre: regex }),
        Medicos.find({ nombre: regex }),
        Hospital.find({ nombre: regex }),
    ])

    res.json({
        ok: true,
        // msg: 'getTodo',
        // busqueda        
        usuarios,
        medico,
        hospitales
    });

}

const getDocumentosColeccion = async (req, res = response) => {
    // Auqui se esta recibiendo el paramtro de la url 
    const tabla    = req.params.tabla;
    const busqueda = req.params.busqueda;
    const regex    = new RegExp(busqueda, 'i');

    let data = [];

    switch (tabla) {
        case 'medicos':
            data = await Medicos.find({ nombre: regex })
                                .populate('usuario', 'nombre, img')
                                .populate('hospital', 'nombre, img');                                
            
            break;

        case 'hospitales':
            data = await Hospital.find({ nombre: regex })
                                .populate('usuario', 'nombre, img');

            break;

        case 'usuarios':
            data = await Usuario.find({ nombre: regex });
            
            break;            
    
        default:
            return res.status(400).json({
                ok: false,
                msg: 'La tabla tiene que ser usuarios/medicos/hospitales'
            });                            
    }    

    res.json({
        ok: true,
        resultados: data
    })

}

module.exports = {
    getTodo,
    getDocumentosColeccion
}
