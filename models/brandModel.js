const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var brandSchema = new Schema (
    {
            brandName: {
                type: String,
                required:true
            },
            status: {
                type: Boolean,
                default:false          
            }
    }
)
const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;





