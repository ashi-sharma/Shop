const express = require('express');

const shopController = require('../controllers/shop.js');

const router = express.Router();

router.get('/', shopController.getIndex );

router.get('/product-list', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/checkout', shopController.getCheckout);

module.exports = router;