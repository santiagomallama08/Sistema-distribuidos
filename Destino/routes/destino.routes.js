const {Router} = require('express');

const router= Router();

/**
 * Importando los metodos
 */

const { ShowDestinos, ShowDestino, AddDestino, DeleteDestino, EditDestino} = require('../controllers/destino.controller');

/**
 * Rutas
 */
router.get('/', ShowDestinos);
router.post('/', AddDestino);
router.delete('/', DeleteDestino);
router.put('/:id', EditDestino);
router.get('/:id', ShowDestino);

module.exports = router;