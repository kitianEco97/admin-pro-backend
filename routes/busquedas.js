/*
    ruta: api/todo/:busqueda    
*/
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt'); 

const { getTodo, getDocumentosColeccion } = require('../controllers/busquedas');

const router = Router();
// aca la validacion del jwt se hace atraves de un middleware
router.get('/:busqueda', validarJWT, getTodo);

router.get('/coleccion/:tabla/:busqueda', validarJWT, getDocumentosColeccion);


module.exports = router;