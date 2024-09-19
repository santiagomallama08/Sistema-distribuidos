const {Router} = require('express');

const router= Router();

/**
 * Importando los metodos
 */

const {  ShowAdministradors, AddAdministrador, DeleteAdministrador, EditAdministrador} = require('../controller/administrador.controller');

/**
 * Rutas
 */
router.get('/', ShowAdministradors);
router.post('/', AddAdministrador);
router.delete('/', DeleteAdministrador);
router.put('/:id', EditAdministrador);
router.get('/:id', ShowAdministradors);

module.exports = router;