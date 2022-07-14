const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const EquipoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    valorMaximo: {
        type: Number,
        required: true
    },
    valorActual: {
        type: Number,
        default: 0
    }
}, { timestamps: true });
const EquipoAlertaSchema = mongoose.Schema({
    nombre: {
        type: String,
    },
    valorMaximo: {
        type: Number,
    },
    valorActual: {
        type: Number
    },
    fechaActualizacionValor: {
        type: Date,
    }

});
const equipos = mongoose.model('equipo', EquipoSchema, 'equipos');
const historialAlerta = mongoose.model('equipoAlerta', EquipoAlertaSchema, 'historialAlerta');
module.exports = {
    historialAlerta, equipos
}
