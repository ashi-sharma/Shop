const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin.js');

const router = express.Router();



//router-level middleware function calls
router.get('/add-product', adminController.getAddProduct );

router.post('/add-product', adminController.postAddProduct);

router.get('/admin/products', adminController.getProducts);

router.get('/admin/edit-products', adminController.getEditProducts);



module.exports = router;