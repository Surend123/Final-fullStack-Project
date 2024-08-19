// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"



import express from "express"
import connectDB from "./db/index.js";

connectDB();
dotenv.config({path:'./env'})//packege.jaosn me dev me change hai iske karan


















/*
const app = express()
(async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        app.on("error",(error) => {
            console.log("ERROR:",error);
            throw error
            
        })


        app.listen(process.env.PORT,() =>{
            console.log(`App is listening on port${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR:",error)
        throw err
    }
})()*/ 