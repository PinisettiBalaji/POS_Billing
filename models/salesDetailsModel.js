const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var salesDetailsSchema = new Schema(
    {
        salesId: {
            type: Schema.Types.ObjectId,
            ref: 'Sales',
            required: true
        },
        items: [
            {
                productName: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                total: {
                    type: Number,
                    required: true
                }
            }
        ]
    }
)

salesDetailsSchema.plugin(require('mongoose-autopopulate'));

const SalesDetails = mongoose.model("SalesDetails", salesDetailsSchema);
module.exports = SalesDetails;

