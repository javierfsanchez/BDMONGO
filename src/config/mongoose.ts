import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://JAVIERDBMONGO:9O4eLikpg15jY7se@cluster0.vnoeqmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDatabase = async () => {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(MONGO_URL, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            });
            console.log("Conexión a la base de datos establecida");
        } catch (error) {
            console.error("Error al conectar a la base de datos:", error);
        }
    } else {
        console.log("Ya hay una conexión a la base de datos activa");
    }
};

export default connectToDatabase;
