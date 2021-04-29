import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

//@desc   fetch all products
//@route   GET  /api/products
//@access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.json(products);
  })
);

//@desc   fetch single product via id
//@route   GET  /api/products/:id
//@access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }

    // const product = products.find(p => p._id === req.params.id);
    // res.json(product);
  })
);

export default router;
