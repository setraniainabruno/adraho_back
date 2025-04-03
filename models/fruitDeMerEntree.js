const mongoose = require('mongoose');

const fruitDeMerEntreeSchema = new mongoose.Schema({
    matriculePecheur: { type: String, required: true },
    nomFruitDeMer: { type: String, required: true },
    prixUnitaire: { type: Number, required: true, min: 0 },
    quantite: { type: Number, required: true, min: 1 },
    montant: { type: Number, required: true, min: 0, default: () => { return this.prixUnitaire * this.quantite; } },
    createdDate: { type: Date, default: Date.now }
});

const FruitDeMerEntree = mongoose.models.FruitDeMerEntree || mongoose.model('FruitDeMerEntree', fruitDeMerEntreeSchema);

module.exports = FruitDeMerEntree;
