const {Router} = require('express');

const router= Router();

/**
 * Importando los metodos
 */

const {AddPersons, DeletePersons, EditPersons, ShowPerson, ShowPersons} = require('../controllers/persons.controller');

/**
 * Rutas
 */
router.get('/', ShowPersons);
router.post('/', AddPersons);
router.delete('/:id', DeletePersons);
router.put('/:id', EditPersons);
router.get('/:id', ShowPerson);

module.exports = router;