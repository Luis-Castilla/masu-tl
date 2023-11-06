const express = require('express');
const router = express.Router();
const productController = require('../controllers/products-controller')

/**
 * Module Routes.
 * @module Routes
 */

/**
 * Route to retrieve all products.
 * @name GET /api/v1/products
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/products', (req, res) => {
  productController.getProducts(req, res);
});

/**
 * Route to retrieve a product by its ID.
 * @name GET /api/v1/product/:id
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/product/:id', (req, res) => {
  productController.getProductById(req, res);
});

module.exports = router;