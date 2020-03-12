"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const Add = (a, b) => a + b;
app.get('/', (req, res) => {
    console.log(Add(5, 5));
    res.send('Welcome To TypeScript Based Express Application');
});
app.listen(5000, () => console.log('Server is Running on 5000'));
