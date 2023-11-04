const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => { res.send('All products') });
router.get('/product/:id', (req, res) => { res.send('One product') });

module.exports = router; // Export the router for use in your main app