//require(`dotenv`).config({path: './env'})
import dotenv from "dotenv"


// import mongoose from "mpngoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";
import {app} from './app.js';

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    application.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is runinig at port : ${process.env.PORT} `);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!".err);
})








/*
import express from "express"
const app = express()

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error", (error) => {
            console.log("ERROR:".error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})() */