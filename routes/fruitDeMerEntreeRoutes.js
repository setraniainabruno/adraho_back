const express = require('express');
const router = express.Router();

const { ajouterFruitDeMerEntree } = require("../controllers/fruitDeMerEtree/ajoutFruitDeMerEntree");
const { listeFruitDeMerEntreeParId } = require("../controllers/fruitDeMerEtree/listeFruitDeMerEntreeParId");
const { modifierFruitDeMerEntree } = require("../controllers/fruitDeMerEtree/modifieFruitDeMerEntree");
const { listeToutFruitDeMerEntree } = require("../controllers/fruitDeMerEtree/listeToutFruitDeMerEntree");
const { supprimerFruitDeMerEntree } = require("../controllers/fruitDeMerEtree/suppressionFruitDeMerEntree");


router.post('/ajouter', ajouterFruitDeMerEntree);
router.get('/liste/:id', listeFruitDeMerEntreeParId);
router.put('/modifier/:id', modifierFruitDeMerEntree);
router.get('/liste', listeToutFruitDeMerEntree);
router.delete('/supprimer/:id', supprimerFruitDeMerEntree);

module.exports = router;


