import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config()
const connectDB  = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://anjanee:Av7cNbc1PLDUSoQT@cluster0.xgs7bhx.mongodb.net/`)
        console.log(`\n MongoDb connected `);
        //console.log(connectionInstance); do it for knowledge 
    } catch (error) {
        console.log ("MONGODB connection FAILD",error);
        process.exit(1)
    }
}

export default connectDB
