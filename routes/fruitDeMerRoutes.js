const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const { ajouterFruitDeMer } = require('../controllers/fruitDeMer/ajoutFruitDeMer');
const { listeFruitDeMerParId } = require('../controllers/fruitDeMer/listeFruitDeMerParId');
const { listeToutFruiDeMer } = require('../controllers/fruitDeMer/listeToutFruitDeMer');
const { modifierFruitDeMer } = require('../controllers/fruitDeMer/modifieFruitDeMer');


router.post('/ajouter', upload.single('photo'), ajouterFruitDeMer);
router.get('/listeParId/:id', listeFruitDeMerParId);
router.get('/liste', listeToutFruiDeMer);
router.put('/modifier/:id', upload.single('photo'), modifierFruitDeMer);


module.exports = router;
