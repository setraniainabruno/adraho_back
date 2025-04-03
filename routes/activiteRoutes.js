const express = require('express');
const router = express.Router();


const listeToutActivite = require('../controllers/activite/listeToutActivite');
const listeActiviteParId = require('../controllers/activite/listeActiviteParId');
const supprimerActivite = require('../controllers/activite/suppressionActivite');
const ajouterActivite = require('../controllers/activite/ajoutActivite');


router.post('/ajouter', ajouterActivite);
router.get('/liste', listeToutActivite);
router.get('/listeParId/:id', listeActiviteParId);
router.delete('/supprimer/:id', supprimerActivite);

module.exports = router;
