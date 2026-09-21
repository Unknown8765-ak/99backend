import "./config/env.js";
import dbConnection from "./db/index.js";
import { app } from "./app.js"



const PORT = process.env.PORT || 8000;
console.log("PORT",PORT)

dbConnection()
    .then(()=>{
        app.listen(PORT ,()=>{
            console.log(`server is running on Port ${process.env.PORT || 5000}`)
        })
    })
    .catch((error)=>{
        console.log("mongoose connection error" , error);
    })