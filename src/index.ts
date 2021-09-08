//external modules
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {createConnection} from "typeorm";
import { Images } from "./Entites/Images";
dotenv.config();
console.log(process.env)
const app = express();
const PORT = parseInt(process.env.PORT as string, 10);

//createConnection with typeorm
createConnection({
    type: "mysql",
    database: "cupcakesdb",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 3307,
    logging: true,
    synchronize: true,
    entities: [Images]
}).then(connection => {
    console.log(connection)
}).catch(error => console.log(error))

//app configuration
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});