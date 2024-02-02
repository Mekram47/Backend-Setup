// require ('dotenv').config({path:'./env'}) // import method is below
import dotenv from "dotenv";
import app from "./app.js"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants"; // THis is not used as second approach is done 
import connectDB from "./db/index.js";

dotenv.config({path:'./env'})



connectDB()
.then(()=>[
    app.listen(process.env.PORT||7000,()=>{
        console.log(`Server is listening at Port no ${process.env.PORT}`);
    })
])
.catch((err)=>{
console.log("MONGODB failed to Connect!!!!!!!!!!",err);
})

//  ---------------------------This is First Approach Of MONGODB connection------------------------------------
// import  express  from "express";
// const app= express()

// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("ERROR SOMETHING WENT WRONG WITH DATABASE CONNECTION",(error)=>{

//             console.log("ERROR",error);

//             throw error


//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening at Port No ${process.env.PORT}`)
//         })
       
//     }

    
//     catch(error){
//         console.error("ERROR",error);
//         throw error

//     }
// })()

//  ---------------------------Second  Approach Of MONGODB connection is in DB Folder------------------------------------


