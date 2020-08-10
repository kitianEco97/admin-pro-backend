require('dotenv').config();
// Asi se importa en nodeJS
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();
// Middlewares
// Configurar CORS
app.use( cors() );
// Lectura y parseo del body
app.use( express.json() );

// Base de datos
dbConnection();
// console.log( process.env );

//  dbKitianUser // dbUserMongo
//  YW057LEmtylYkv8j // password 

// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/upload', require('./routes/uploads') );



app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en el puerto ' + process.env.PORT);
});