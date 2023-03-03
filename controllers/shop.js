const Product = require('../models/product.js');
const { checkout } = require('../routes/admin.js');

exports.getProducts=(req, res, next)=>{
    Product.fetchAll((products)=>{
        //console.log(products);
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'All Products', 
            path: '/product-list' 
        });
    });
};

exports.getProduct = (req, res, next)=>{
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            pageTitle: product.title,
            path: '/products',
            product: product
        });
    });
    
};

exports.getIndex=(req, res, next)=>{
    Product.fetchAll((products)=>{
        //console.log(products);
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/'
        });
    });
};

exports.getCart=(req, res, next)=>{
    res.render('shop/cart',{
        pageTitle: 'Your cart',
        path: '/cart'
    });
};

exports.postCart=(req, res, next) =>{
    const prodId = req.body.productId;
    console.log(prodId);
    res.redirect('/cart');
};

exports.getCheckout=(req, res, next)=>{
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    });
};
