const { Router } = require('express');
const router = Router();
const equiposControllers = require('../controller/equipos.controllers');

router.post('/', equiposControllers.guardarEquipo);
router.get('/', equiposControllers.ObtenerEquipos);
router.put('/:id', equiposControllers.actuaizarEquipo);
router.delete('/:id', equiposControllers.eliminarEquipo);


module.exports = router;