const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
);

const getProductsFromFile = (cb)=>{
    fs.readFile(p, (err, fileContent)=>{
        if(err){
            cb([]);
        }
        else{
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product{
    constructor(title, imageURL, description, price){
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }

    save(){
        this.id = Math.random().toString();
        getProductsFromFile((products)=>{
            this.id = Math.random().toString();
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log();
            });
        });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);  
    };

    static findById(id, cb){
        getProductsFromFile(products =>{
            const product = products.find(p => p.id===id);
            cb(product);
        });
    };
}