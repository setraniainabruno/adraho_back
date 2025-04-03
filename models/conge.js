const mongoose = require('mongoose');

const congeSchema = new mongoose.Schema({
    idEmploye: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employe',
        required: true
    },
    type: {
        type: String,
        required: true
    },
    motif: {
        type: String,
        required: true
    },
    nombreDeJour: {
        type: Number,
        required: true,
        min: 0
    },
    dateDebut: {
        type: String,
        required: true
    },
    dateFin: {
        type: String,
        required: true
    }
});

const Conge = mongoose.models.Conge || mongoose.model('Conge', congeSchema);

module.exports = Conge;
