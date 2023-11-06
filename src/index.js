const express = require('express');
const app = express();
const cors = require('cors');


// cors para peticiones a la API
app.use(cors()) 

//Ejecuto el llamado a mis rutas
const routesApi = require('./routes/adminRoutes');

app.use(express.json())

app.get('/', function (req, res) {
    res.send("Bienvenido a TicketsApp")
})

app.use('/api', routesApi);
//Activando el servidor desde express
const PORT = process.env.PORT || 3001

app.listen(PORT, function(){
    console.log("servidor escuchando en el", PORT)
});