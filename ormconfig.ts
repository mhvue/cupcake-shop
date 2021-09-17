import * as dotenv from "dotenv";
import { ConnectionOptions } from 'typeorm';
dotenv.config();
export const config: ConnectionOptions = 
    {
        "type": "mysql",
        "database": "cupcakesdb",
        "host": process.env.DB_HOST,
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "port": 3307,
        "logging": true,
        "synchronize": false,
        "migrations": ["./src/migration/*.ts"],
        "cli": {
            "migrationsDir": "./src/migration"
        },
       "entities": ["./src/Entites/*.ts"]
    }

export default config;