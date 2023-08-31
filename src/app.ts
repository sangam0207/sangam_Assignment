import express from 'express';
import bodyParser from 'body-parser';
import itemRoutes from './routes/itemRoutes';

const app = express();
import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/todo';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


app.use(bodyParser.json());
app.use('/items', itemRoutes);


app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
