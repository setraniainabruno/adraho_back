const mongoose = require('mongoose');
const utilisateurSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, unique: true, required: true, match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Veuillez entrer un email valide'] },
    motDePasse: { type: String, required: true, minlength: 1 },
    role: { type: String, default: "utilisateur" },
    dateInscription: { type: Date, default: Date.now },
    photo: { type: String, default: '' },
});
const Utilisateur = mongoose.models.Utilisateur || mongoose.model('Utilisateur', utilisateurSchema);
module.exports = Utilisateur;
