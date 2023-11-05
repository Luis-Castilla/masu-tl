const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  res.status(200).json('Ok message products');
});

router.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  const product = { id: 1, title: '...asda' };
  if (!product) {
    res.status(400).json({ error: 'Product not found' });
  } else {
    res.status(200).json(product);
  }
});

module.exports = router;