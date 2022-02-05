const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String , 
       
    }
})

module.exports = mongoose.models.Product||mongoose.model('Product',ProductSchema)