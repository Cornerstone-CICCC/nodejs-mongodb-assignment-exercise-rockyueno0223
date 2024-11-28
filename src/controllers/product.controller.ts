import { Request, Response } from "express";
import { Product, IProduct } from "../models/product.model";

// get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get all products' });
  }
}

// add new product
const addProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add product' });
  }
}

// get product by id
const getProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(400).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get product by id' });
  }
}

// update product by id
const updateProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, {
      $set: {
        productName: req.body.productName,
        productPrice: req.body.productPrice
      }
    }, { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update product by id' });
  }
}

const deleteProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete product by id' });
  }
}

export default {
  getAllProducts,
  addProduct,
  getProductById,
  updateProductById,
  deleteProductById,
}
