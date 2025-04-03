const express = require('express');
const upload = require('../config/multerConfig');
const router = express.Router();
const { ajouterUtilisateur } = require('../controllers/utilsateur/ajoutUtilisateur');
const { listeToutUtilisateurs } = require('../controllers/utilsateur/listeToutUtilisateur');
const { listeUtilisateurParId } = require('../controllers/utilsateur/listeUtilisateurParId');
const { modifierUtilisateur } = require('../controllers/utilsateur/modifieUtilisateur');
const { supprimerUtilisateur } = require('../controllers/utilsateur/suppressionUtilisateur');
const { connexionUtilisateur } = require('../controllers/utilsateur/connexionUtilisateur');


router.post('/connexion', connexionUtilisateur);
router.post('/ajouter', upload.single('photo'), ajouterUtilisateur);
router.get('/liste', listeToutUtilisateurs);
router.get('/listeParId/:id', listeUtilisateurParId);
router.put('/modifier/:id', upload.single('photo'), modifierUtilisateur);
router.delete('/supprimer/:id', supprimerUtilisateur);


module.exports = router;
