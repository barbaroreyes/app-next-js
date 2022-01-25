const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    picture: String,
    price: Number,
    desc : String
})

module.exports = mongoose.models.Product||mongoose.model('Product',ProductSchema)