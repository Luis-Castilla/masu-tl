const express = require('express');
const router = express.Router();
const productController = require('../controllers/products-controller')

/**
 * Module providing configuration for the Dummy Data API URL.
 * @module Routes
 */

router.get('/products', (req, res) => {
  res.status(200).json('Ok message products');
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