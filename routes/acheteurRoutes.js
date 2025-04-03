const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');

const ajouterAcheteur = require('../controllers/acheteur/ajoutAcheteur');
const listeToutAcheteurs = require('../controllers/acheteur/listeToutAcheteur');
const listeAcheteurParId = require('../controllers/acheteur/listeAcheteurParId');
const modifierAcheteur = require('../controllers/acheteur/modifieAcheteur');
const supprimerAcheteur = require('../controllers/acheteur/suppressionAcheteur');


router.post('/ajouter', upload.single('photo'), ajouterAcheteur);
router.get('/liste', listeToutAcheteurs);
router.get('/listeParId/:id', listeAcheteurParId);
router.put('/modifier/:id', upload.single('photo'), modifierAcheteur)
router.delete('/supprimer/:id', supprimerAcheteur);


module.exports = router;