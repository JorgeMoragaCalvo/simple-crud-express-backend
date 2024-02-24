const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect("mongodb+srv://jorgemoragac:tb3XaPggbC1v6Y10@backenddb.0ej9lzc.mongodb.net/NODE-API?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected database!");
})
.catch(() => {
    console.log("Connected failed!");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.get('/', (req, res) => {
    res.send("Hello from Node API Updated Again");
});


// routes
app.use("/api/products", productRoute);

// list products
/*
app.get('/api/products', async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});
*/

//create Product
/*
app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message})
    }
});
*/

// get product by id
/*
app.get('/api/products/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message});
    }
})
*/

/*
//update a product
app.put('/api/products/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch(error){
        res.status(500).json({message: error.message});
    }
})
*/

/*
//delete product
app.delete('/api/products/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message: "Product deleted successfully"});

    } catch(error){
        res.status(500).json({message: error.message});
    }
})
*/