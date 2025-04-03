const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');


const ajouterEmploye = require('../controllers/employe/ajoutEmploye')
const modifierEmploye = require('../controllers/employe/modifieEmploye')
const supprimereEmploye = require('../controllers/employe/suppressionEmploye')
const listeToutEmploye = require('../controllers/employe/listeToutEmploye')
const listeEmployeParId = require('../controllers/employe/listeEmployeParId')
const listeEmployesEnConge = require('../controllers/employe/listeEmployeEnConge')



router.post('/ajouter', upload.single('photo'), ajouterEmploye);
router.get('/listeParId/:id', listeEmployeParId);
router.get('/liste', listeToutEmploye);
router.get('/listeEnConge', listeEmployesEnConge);
router.put('/modifier/:id', upload.single('photo'), modifierEmploye);
router.delete('/supprimer/:id', supprimereEmploye);

module.exports = router;
