const express = require("express");
const router = express.Router();


const ajouterPointage = require('../controllers/pointage/ajoutPointage')
const listePointageParId = require('../controllers/pointage/listePointageParId')
const modifierPointage = require('../controllers/pointage/modifiePointage')
const supprimerPointage = require('../controllers/pointage/suppressionPointage')
const listeToutPointage = require('../controllers/pointage/listeToutPointage')

router.post("/ajouter", ajouterPointage);
router.get("/liste", listeToutPointage);
router.get("/listeParId/:id", listePointageParId);
router.put("/modifier/:id", modifierPointage);
router.delete("/supprimer/:id", supprimerPointage);

module.exports = router;
