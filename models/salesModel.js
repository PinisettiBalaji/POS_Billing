const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var salesSchema = new Schema(
    {
        subTotal: {
            type: Number,
            required: true
        }
    }
)
const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;





