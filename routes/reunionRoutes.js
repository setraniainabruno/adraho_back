const express = require('express');
const router = express.Router();

const ajouterReunion = require('../controllers/reunion/ajoutReunion');
const supprimerReunion = require('../controllers/reunion/suppressionReunion');
const listeToutReunion = require('../controllers/reunion/listeToutReunion');
const listeReunionParId = require('../controllers/reunion/listeReunionParId');

router.post('/ajouter', ajouterReunion);
router.get('/liste', listeToutReunion);
router.get('/listeParId/:id', listeReunionParId);
router.delete('/supprimer/:id', supprimerReunion);

module.exports = router;
