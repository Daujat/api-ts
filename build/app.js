"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongo_1 = require("./config/mongo");
const users_1 = __importDefault(require("./modules/users"));
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/users", users_1.default);
(0, mongo_1.connectToDatabase)()
    .then(() => {
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
})
    .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
});
app.get("/", (_, res) => {
    res.sendFile(process.cwd() + "/src/views/index.html");
});
