require('dotenv').config();
const path = require('path');
// Asi se importa en nodeJS
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');
const { resolve } = require('path');

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

// Directorio público  -  aplicando un middleware
app.use( express.static('public') );

//  dbKitianUser // dbUserMongo
//  YW057LEmtylYkv8j // password 

// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/upload', require('./routes/uploads') );

// Lo último
app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});


app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en el puerto ' + process.env.PORT);
});