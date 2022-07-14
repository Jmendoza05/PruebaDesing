const express = require('express');
const conectarDB = require('./database');
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(cors());
conectarDB();

app.use('/api/equipos', require('./routes/equipos.routes'));
app.use('/api/equipos/equipoAlerta', require('./routes/equipoAlerta.routes'));

app.listen(app.get('port'),() =>{
    console.log("Server Success on port",app.get('port'));
});
module.exports = app;