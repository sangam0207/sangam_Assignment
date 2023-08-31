import { Request, Response } from 'express';
import Item from '../models/itemModel';

export const createItem = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newItem = new Item({ name, description });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



export const updateItem = async (req: Request, res: Response) => {
  const itemId = req.params.id;

  try {
    const updatedItem = await Item.findByIdAndUpdate(itemId, req.body, {
      new: true, // Return the updated document
      runValidators: true // Run model validations on the updated data
    });

    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  const itemId = req.params.id;

  try {
    const deletedItem = await Item.findByIdAndRemove(itemId);

    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

