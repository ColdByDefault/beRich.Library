import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDb is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'beRich',
            useNewUrlParser: true,
            useUnifiedTopology: true,       
        });
        isConnected = true;
        console.log("MongoDB connected");
        console.log("Mongo URI:", process.env.MONGO_URI);

        
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
};