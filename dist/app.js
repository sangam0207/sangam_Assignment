"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const itemRoutes_1 = __importDefault(require("./routes/itemRoutes"));
const app = (0, express_1.default)();
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = 'mongodb://localhost:27017/todo';
mongoose_1.default.connect(MONGO_URI)
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
app.use(body_parser_1.default.json());
app.use('/items', itemRoutes_1.default);
app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});
