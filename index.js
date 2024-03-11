const PORT = 5000;
const express = require('express');
const path = require('path');
const apiRoute = require('./routes/api') 

const app = express();

app.use(express.urlencoded())

// Para garantir que uma chamada a api não busque por uma pasta chamada api, devemos inverter a chamada de rotas.
app.use('/api', apiRoute) // essa linha deve ser chamada primeiro
app.use('/',express.static(path.join(__dirname, "public")))



app.listen(PORT, () => {
    console.log("Server running on port:", PORT)
})