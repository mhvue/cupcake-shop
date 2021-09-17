//external modules
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {Connection, createConnection} from "typeorm";
import { createClientRouter } from "./routes/apiRoutes/apiRoutes";


const app = express();
const PORT = 3030 
dotenv.config();

//createConnection with typeorm
const connection = async () => {
    await createConnection();

    console.log("connected to mysql successfully")
        //app configuration
        app.use(cors());
        app.use(express.json()); //allows us to parse body of any req we make 
        app.use(createClientRouter)
        app.listen(PORT, () => {
            console.log(`listening on ${PORT}`)
        });
}

connection();