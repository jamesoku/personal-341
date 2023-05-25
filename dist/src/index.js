"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DB_1 = require("../DB/DB");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
(0, DB_1.connectToMongoDB)().then(() => {
    app.listen(3000, () => {
        console.log("yo");
        console.log("Server started on port 3000");
    });
});
//# sourceMappingURL=index.js.map