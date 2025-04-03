const mongoose = require('mongoose');

const acheteurSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: ""
    },
    photo: {
        type: String,
        default: ""
    }
});

const Acheteur = mongoose.models.Acheteur || mongoose.model('Acheteur', acheteurSchema);

module.exports = Acheteur;
