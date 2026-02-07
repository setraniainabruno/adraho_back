const express = require('express');
const router = express.Router();
const ajouterStock = require('../controllers/stock/ajoutStock');
const modifierStock = require('../controllers/stock/modifieStock');
const supprimerStock = require('../controllers/stock/suppressionStock');
const listeToutStock = require('../controllers/stock/listeToutStock');
const listeStockParId = require('../controllers/stock/listeStockParId');


router.post('/ajouter', ajouterStock);
router.get('/liste', listeToutStock);
router.get('/liste/:id', listeStockParId);
router.put('/modifier/:id', modifierStock);
router.delete('/supprimer/:id', supprimerStock);

module.exports = router;
