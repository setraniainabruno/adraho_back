const express = require('express');
const router = express.Router();

// Importer les fonctions du contrôleur
const { ajouterFruitDeMerSortie } = require('../controllers/fruitDeMerSortie/ajoutFruitDeMerSortie');
const { listeToutFruitsDeMerSortie } = require('../controllers/fruitDeMerSortie/listeToutFruitDeMerSortie');
const { listeFruitDeMerSortieParId } = require('../controllers/fruitDeMerSortie/listeFruitDeMerSortieParId');
const { modifierFruitDeMerSortie } = require('../controllers/fruitDeMerSortie/modifieFruitDeMerSortie');
const { supprimerFruitDeMerSortie } = require('../controllers/fruitDeMerSortie/suppressionFruitDeMerSortie');


router.post('/ajouter', ajouterFruitDeMerSortie);
router.get('/liste', listeToutFruitsDeMerSortie);
router.get('/listeParId/:id', listeFruitDeMerSortieParId);
router.put('/modifier/:id', modifierFruitDeMerSortie);
router.delete('/supprimer/:id', supprimerFruitDeMerSortie);

module.exports = router;
