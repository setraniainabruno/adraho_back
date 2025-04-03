const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    quantite: {
        type: Number,
        required: true,
        min: 0
    },
    produitId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produit',
        required: true
    }
});

const Stock = mongoose.models.Stock || mongoose.model('Stock', stockSchema);

module.exports = Stock;
