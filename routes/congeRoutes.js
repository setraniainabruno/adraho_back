const express = require('express');
const router = express.Router();
const ajouterConge = require('../controllers/conge/ajoutConge');
const supprimerConge = require('../controllers/conge/suppressionConge');
const modifierConge = require('../controllers/conge/modifieConge');
const listeToutConge = require('../controllers/conge/listeToutConge');
const listeCongeParId = require('../controllers/conge/listeCongeParId');


router.post('/ajouter', ajouterConge);
router.get('/listeParId/:id', listeCongeParId);
router.get('/liste', listeToutConge);
router.put('/modifier/:id', modifierConge);
router.delete('/supprimer/:id', supprimerConge);

module.exports = router;
