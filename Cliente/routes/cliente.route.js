const {Router} = require('express');

const router= Router();

/**
 * Importando los metodos
 */

const { ShowClientes, AddClientes, DeleteCliente, EditClientes, ShowClients} = require('../controllers/cliente.controller');

/**
 * Rutas
 */
router.get('/', ShowClientes);
router.post('/', AddClientes);
router.delete('/', DeleteCliente);
router.put('/:id', EditClientes);
router.get('/:id', ShowClients);

module.exports = router;