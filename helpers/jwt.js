const jwt = require('jsonwebtoken');

const generarJWT = ( uid ) => {

    return new Promise( (resolve, reject) => {

        const payload = {
            uid
        };
        // vamos a firmar lo que esta dentro de esta funcion 
        // El segundo argumento es la clave secreta o nuestra firma secreta
        // El ultimo argumento es la duracion del token 
        jwt.sign( payload, process.env.JWT_SECRET, {
            expiresIn: '24h'
        }, (err, token) => {
    
            if( err ){
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve( token );
            }
    
        });

    });    

}

module.exports = {
    generarJWT
}