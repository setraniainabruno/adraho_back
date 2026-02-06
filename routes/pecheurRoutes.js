const express = require("express");
const router = express.Router();
const upload = require("../config/multerConfig");
const { ajouterPecheur } = require("../controllers/pecheur/ajoutPecheur");
const {
  listeToutPecheurs,
} = require("../controllers/pecheur/listeToutPecheurs");
const { modifierPecheur } = require("../controllers/pecheur/modifiePecheur");
const {
  listePecheurParMatricule,
} = require("../controllers/pecheur/listePecheurParMatricule");
const { listePecheurParId } = require("../controllers/pecheur/listeParId");
const { nombrePecheurs } = require("../controllers/pecheur/nombrePecheur");

router.post("/ajouter", upload.single("photo"), ajouterPecheur);
router.get("/liste", listeToutPecheurs);
router.get("/nombre", nombrePecheurs);
router.get("/liste/:id", listePecheurParId);
router.put("/modifier/:id", upload.single("photo"), modifierPecheur);
router.get("/liseParMatricule/:matricule", listePecheurParMatricule);

module.exports = router;
