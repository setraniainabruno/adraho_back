const mongoose = require('mongoose');

const pecheurSchema = new mongoose.Schema({
    matricule: { type: String, unique: true, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    adresse: { type: String, required: true },
    CIN: { type: String, default: "" },
    phone: { type: String, unique: true, required: true },
    photo: { type: String, default: "" },
    enginePeche: { type: String, required: true },
    anneeEntree: { type: Date, default: Date.now },
    zonePeche: { type: String, required: true },
});


const Pecheur = mongoose.models.Pecheur || mongoose.model('Pecheur', pecheurSchema);

module.exports = Pecheur;
