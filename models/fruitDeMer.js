const mongoose = require('mongoose');

const fruitDeMerSchema = new mongoose.Schema({
  nom: { type: String, required: true, trim: true },
  photo: { type: String, required: true },
  prixUnitaire: { type: Number, required: true, min: 0 },
  type: { type: String, required: true },
  qualite: { type: String, required: true },
  createdDate: { type: Date, default: Date.now }
});

const FruitDeMer = mongoose.models.FruitDeMer || mongoose.model('FruitDeMer', fruitDeMerSchema);

module.exports = FruitDeMer;
