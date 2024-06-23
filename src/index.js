//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();













/*
import mongoose from "mongoose"; 
import { DB_NAME } from "./constants";

import express from "express";
const app = express()

//There are two approach for connecting a database
//1. function connectDB(){}
//connectDB()

//2. ifi
    ( async () => {
        try {
           await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
           app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
           })

         app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port $ 
                {process.env.PORT}`);
         })

        } catch (error) {
            console.log("ERROR: ", error)
        }
    })()
*/
