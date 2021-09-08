"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//external modules
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var Images_1 = require("./Entites/Images");
dotenv.config();
var app = (0, express_1.default)();
var PORT = parseInt(process.env.PORT, 10);
//createConnection with typeorm
(0, typeorm_1.createConnection)({
    type: "mysql",
    database: "cupcakesdb",
    host: "localhost",
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: 3007,
    logging: true,
    synchronize: true,
    entities: [Images_1.Images]
}).then(function (connection) {
    console.log(connection);
}).catch(function (error) { return console.log(error); });
//app configuration
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(PORT, function () {
    console.log("listening on " + PORT);
});
