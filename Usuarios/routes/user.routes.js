const {Router} = require('express');

const router= Router();

/**
 * Importando los metodos
 */

const {AddUsers, ShowUsers, DeleteUsers, EditUsers, ShowUser} = require('../controllers/user.controller');

/**
 * Rutas
 */
router.get('/', ShowUsers);
router.post('/', AddUsers);
router.delete('/', DeleteUsers);
router.put('/:id', EditUsers);
router.get('/:id', ShowUser);

module.exports = router;