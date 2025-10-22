configDotenv() // to use .env variables
import { configDotenv } from "dotenv";
import express from "express"

const app = express()

app.listen(process.env.PORT,()=>{
    console.log(`Listenting on port: ${process.env.PORT}`);
})