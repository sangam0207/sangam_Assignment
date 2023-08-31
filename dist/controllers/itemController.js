"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getAllItems = exports.createItem = void 0;
const itemModel_1 = __importDefault(require("../models/itemModel"));
const createItem = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newItem = new itemModel_1.default({ name, description });
        await newItem.save();
        res.status(201).json(newItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createItem = createItem;
const getAllItems = async (req, res) => {
    try {
        const items = await itemModel_1.default.find();
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllItems = getAllItems;
const updateItem = async (req, res) => {
    const itemId = req.params.id;
    try {
        const updatedItem = await itemModel_1.default.findByIdAndUpdate(itemId, req.body, {
            new: true,
            runValidators: true // Run model validations on the updated data
        });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(updatedItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateItem = updateItem;
const deleteItem = async (req, res) => {
    const itemId = req.params.id;
    try {
        const deletedItem = await itemModel_1.default.findByIdAndRemove(itemId);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteItem = deleteItem;
