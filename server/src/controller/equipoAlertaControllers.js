const { historialAlerta } = require('../models/Equipo.models');
exports.ObtenerEquipos = async (req, res) => {
    try {
        const Resultequipos = await historialAlerta.find();
        res.json(Resultequipos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}