const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require:[true, 'Please type a name'],
        unique: true,
        trim: true,
    }
})

module.exports = mongoose.models.Product||mongoose.model('Product',ProductSchema)