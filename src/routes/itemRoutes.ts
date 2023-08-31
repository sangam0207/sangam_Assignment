import express from 'express';
import { createItem, getAllItems, updateItem, deleteItem } from '../controllers/itemController';

const router = express.Router();

router.post('/', createItem);
router.get('/', getAllItems);
router.put('/:id', updateItem); // New route for updating an item
router.delete('/:id', deleteItem); // New route for deleting an item

export default router;
//curl -X POST -H "Content-Type: application/json" -d '{"name":"Item 1","description":"Description for Item 1"}' http://localhost:8000/items
