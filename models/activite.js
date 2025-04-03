const mongoose = require('mongoose');
const moment = require('moment');

const heureF = moment().format("DD/MM/YYYY HH:mm:ss");

const activiteSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,  // Le nom de l'activité est requis
    },
    date: {
        type: String,
        required: true,
        default: heureF,
    },
    depense: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Activite = mongoose.model.Activite || mongoose.model('Activite', activiteSchema);

module.exports = Activite;
