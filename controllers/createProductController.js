const productModel = require('../models/product');

const createProductController = async function(req, res) {
    try {
        let { name, price } = req.body;
        let image = req.file.buffer; // Assuming you want to store the image as binary data

        // Creating a new product instance and saving it to the database
        let product = await productModel.create({
            name,
            price,
            image: image
        });

        res.redirect('/owner');
    } catch (error) {
        console.log('Error creating product:', error);
        res.status(500).send('Server error while creating product');
    }
};

module.exports = createProductController;
