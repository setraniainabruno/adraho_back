const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const { ajouterPecheur } = require('../controllers/pecheur/ajoutPecheur');
const { listeToutPecheurs } = require('../controllers/pecheur/listeToutPecheurs');
const { modifierPecheur } = require('../controllers/pecheur/modifiePecheur');
const { listePecheurParMatricule } = require('../controllers/pecheur/listePecheurParMatricule');
const { listePecheurParId } = require('../controllers/pecheur/listeParId');


router.post('/ajouter', upload.single('photo'), ajouterPecheur);
router.get('/liste', listeToutPecheurs);
router.get('/liste/:id', listePecheurParId);
router.put('/modifier/:matricule', upload.single('photo'), modifierPecheur);
router.get('/liseParMatricule/:matricule', listePecheurParMatricule);

module.exports = router;
