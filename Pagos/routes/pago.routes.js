const {Router} = require('express');

const router= Router();

/**
 * Importando los metodos
 */

const { ShowPagos, AddPagos, DeletePago, EditPago, ShowPago} = require('../controllers/pagos.controller');

/**
 * Rutas
 */
router.get('/', ShowPagos);
router.post('/', AddPagos);
router.delete('/', DeletePago);
router.put('/:id', EditPago);
router.get('/:id', ShowPago);

module.exports = router;