const mongoose = require('mongoose');
const Stock = require('./stock');

const produitSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true,
        min: 0
    },
    photo: {
        type: String,
        default: ""
    }
});

produitSchema.pre('findOneAndDelete', async function (next) {
    const produitId = this.getQuery()._id;

    try {
        await Stock.deleteMany({ produitId });
        next();
    } catch (error) {
        console.error(` ${produitId}: ${error.message}`);
        next(error);
    }
});

const Produit = mongoose.models.Produit || mongoose.model('Produit', produitSchema);

module.exports = Produit;
