const mongoose = require('mongoose');
const moment = require('moment');

const heureF = moment().format("DD/MM/YYYY HH:mm:ss");

const reunionSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
        default: heureF,
    },
}, {
    timestamps: true,
});

const Reunion = mongoose.model.Reunion || mongoose.model("Reunion", reunionSchema);

module.exports = Reunion;