const mongoose = require('mongoose');

const fruitDeMerSortieSchema = new mongoose.Schema({
    nomFruitDeMer: { type: String, required: true },
    quantite: { type: Number, required: true, min: 1 },
    createdDate: { type: Date, default: Date.now }
});

const FruitDeMerSortie = mongoose.models.FruitDeMerSortie || mongoose.model('FruitDeMerSortie', fruitDeMerSortieSchema);

module.exports = FruitDeMerSortie;