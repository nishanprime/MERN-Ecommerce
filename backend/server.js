import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import bodyParser from 'body-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();
connectDB();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));

app.get('/', (req, res) => {
  res.json({
    msg: 'Home Route called. API calling successful',
  });
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(
    `Server is running on port ${process.env.PORT}, in ${process.env.NODE_ENV}`
      .yellow.bold
  )
);
