const mongoose = require('mongoose');
require('dotenv').config();

class Database {
    static async connect() {
        const mongoURL = "mongodb+srv://brunoharison18:xE2NGihtznNYH9Hv@cluster0.cufza.mongodb.net/adraho?retryWrites=true&w=majority&appName=Cluster0";
        try {
            const conn = await mongoose.connect(mongoURL,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
            );
            console.log(`MongoDB connecté : ${conn.connection.host}`);
        } catch (error) {
            console.error('Erreur de connexion à MongoDB:', error);
            process.exit(1);
        }
    }
}

module.exports = Database;
