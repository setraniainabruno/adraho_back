const mongoose = require('mongoose');
const { migrationSchema } = require('../utils/migration');
require('dotenv').config();

class Database {
    static async connect() {
        const mongoURL = process.env.MONGO_URL;
        try {
            const conn = await mongoose.connect(mongoURL);
            migrationSchema();
            console.log(`MongoDB connecté : ${conn.connection.host}`);
        } catch (error) {
            console.error('Erreur de connexion à MongoDB:', error);
            process.exit(1);
        }
    }
}

module.exports = Database;
