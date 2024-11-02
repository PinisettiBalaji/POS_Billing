const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var categorySchema = new Schema (
    {
            categoryName: {
                type: String,
                required:true
            },
            status: {
                type: Boolean,
                default:false          
            }
    }
)
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;





