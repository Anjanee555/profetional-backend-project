import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB  = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! DB HOST: ${connectionInstance.Connection.host}`);
        //console.log(connectionInstance); do it for knowledge 
    } catch (error) {
        console.log ("MONGODB connection FAILD",error);
        process.exit(1)
    }
}

export default connectDB
