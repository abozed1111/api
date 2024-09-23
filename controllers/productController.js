const productModel = require('../models/productModel');
const { poolPromise } = require('../config/db'); // فقط استيراد poolPromise

const getProducts = async (req, res) => {
    console.log('Received GET /products request'); // رسائل تسجيل
    try {
      const products = await productModel.getProducts();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.getProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createProduct = async (req, res) => {
  const product = req.body;
  try {
    await productModel.createProduct(product);
    res.status(201).send('Product created');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    await productModel.updateProduct(id, product);
    res.status(200).send('Product updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await productModel.deleteProduct(id);
    res.status(200).send('Product deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
