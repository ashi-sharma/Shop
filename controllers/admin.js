const Product = require('../models/product.js');

exports.getAddProduct=(req, res, next)=>{
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/add-product',
    });
};

exports.postAddProduct=(req, res, next)=>{
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const product = new Product(title, imageURL, description, price);
    product.save();
    res.redirect('/');
};

exports.getProducts=(req, res, next)=>{
    Product.fetchAll((products)=>{
            res.render('admin/products', {
            path: 'admin/products',
            pageTitle: 'Products',
            prods: products
        });
    });
};

exports.getEditProducts=(req, res, next)=>{
    res.render('admin/edit-products', {
        path: '/edit-products',
        pageTitle: 'Edit Product'
    });
};