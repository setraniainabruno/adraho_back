const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');

const ajouterProduit = require('../controllers/produit/ajoutProduit');
const listeProduitParId = require('../controllers/produit/listeProduitParId');
const listeToutProduit = require('../controllers/produit/listeToutProduit');
const modifierProduit = require('../controllers/produit/modifieProduit');
const supprimerProduit = require('../controllers/produit/suppressionProduit');
const getProduitsByNomAndFormat = require('../controllers/produit/listeProduitParNomFormat');

router.post('/ajouter', upload.single('photo'), ajouterProduit);
router.get('/liste', listeToutProduit);
router.get('/liste/:id', listeProduitParId);
router.put('/modifier/:id', upload.single('photo'), modifierProduit);
router.delete('/supprimer/:id', supprimerProduit);
router.get('/getIdProduit', getProduitsByNomAndFormat)


module.exports = router;