const {Router} = require('express');

const router= Router();

/**
 * Importando los metodos
 */

const { ShowTiquete, AddTiquete, DeleteTiquet, EditTiquet, ShowTiquet} = require('../controllers/tiquetes.controller');

/**
 * Rutas
 */
router.get('/', ShowTiquete);
router.post('/', AddTiquete);
router.delete('/:id', DeleteTiquet);
router.put('/:id', EditTiquet);
router.get('/:id', ShowTiquet);

module.exports = router;