const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var productSchema = new Schema (
    {
            productName: {
                type: String,
                required:true
            },
            description: {
                type: String,
                required:true
            },
            price: {
                type: Number,
                required:true
            },
            status: {
                type: Boolean,
                default:false          
            },
            category: {
                type: Schema.Types.ObjectId,
                ref:'Category'  // reference to the Category model
            },
            brand: {
                type: Schema.Types.ObjectId,
                ref:'Brand'     // reference to the Brand model
            }
    }
)

productSchema.plugin(require('mongoose-autopopulate'));

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

