//external modules
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {createConnection} from "typeorm";
import { Image } from "./Entites/Image";
import { createClientRouter } from "./routes/apiRoutes/apiRoutes";
import { Order } from "./Entites/Order";
import { Customer } from "./Entites/Customer";

const app = express();
const PORT = 3030 
dotenv.config();

//createConnection with typeorm
const connect = async() => {
 try{
    await createConnection({
        type: "mysql",
        database: "cupcakesdb",
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: 3307,
        logging: true,
        synchronize: true,
        migrations: ["migration/*.js"],
        cli: {
            "migrationsDir": "migration"
        },
        entities: [Image, Order, Customer],
    }) 
    console.log("connected to mysql successfully")
    //app configuration
    app.use(cors());
    app.use(express.json()); //allows us to parse body of any req we make 
    app.use(createClientRouter)
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`)
    });
    
}catch(e){
    console.log(e)
    throw new Error("unable to connect to db")
    }
};

connect();
