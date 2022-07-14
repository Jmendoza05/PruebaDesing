const { historialAlerta, equipos } = require('../models/Equipo.models');

exports.guardarEquipo = async (req, res) => {
    try {
        let equipo;
        equipo = new equipos(req.body);
        await equipo.save();
        res.send(equipo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.ObtenerEquipos = async (req, res) => {
    try {
        const Resultequipos = await equipos.find();
        res.json(Resultequipos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.actuaizarEquipo = async (req, res) => {
    try {
        const { nombre, valorMaximo } = req.body;
        let equipo = await equipos.findById(req.params.id);
        if (!equipo) {
            res.status(404).json({ msg: 'No existe el equipo' })
        }
        equipo.nombre = nombre;
        equipo.valorMaximo = valorMaximo;
        equipo = await equipos.findOneAndUpdate({ _id: req.params.id }, equipo, { new: true })
        res.json(equipo);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.obtenerEquipo = async (req, res) => {
    try {
        let equipo = await equipos.findById(req.params.id);
        if (!equipo) {
            res.status(404).json({ msg: 'No existe el Equipo' })
        }
        res.json(equipo);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.eliminarEquipo = async (req, res) => {
    try {
        let equipo = await equipos.findById(req.params.id);
        if (!equipo) {
            res.status(404).json({ msg: 'No existe el equipo' })
        }

        await equipos.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Equipo eliminado con exito' })
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
function valorAleatorio() {
    let inicio = 0;
    let fin = 100;
    let valorActual = inicio + Math.floor(Math.random() * fin);
    return valorActual;
}
setInterval(async () => {

    let Resultequipos = await equipos.find();
    if (Resultequipos.length > 0) {
        await Resultequipos.forEach(async (equipo) => {
            await equipos.findByIdAndUpdate({ _id: equipo._id }, { valorActual: valorAleatorio() });
            if (equipo.valorActual > equipo.valorMaximo) {
                let equipoAlerta;
                let EquipoAlerta = {
                    nombre: equipo.nombre,
                    valorMaximo: equipo.valorMaximo,
                    valorActual: equipo.valorActual,
                    fechaActualizacionValor: equipo.fechaActualizacionValor
                }
                equipoAlerta = new historialAlerta(EquipoAlerta);
                await equipoAlerta.save();            
            }
        });
    }
}, 5000);
