require('dotenv').config();
// Asi se importa en nodeJS
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );


// Base de datos
dbConnection();
// console.log( process.env );

//  dbKitianUser // dbUserMongo
//  YW057LEmtylYkv8j // password 

// Rutas
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Ecoja'
    });

});


app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en el puerto ' + process.env.PORT);
});