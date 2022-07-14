const { Router } = require('express');
const router = Router();
const equipoAlertaControllers = require('../controller/equipoAlertaControllers');

router.get('/', equipoAlertaControllers.ObtenerEquipos);


module.exports = router;