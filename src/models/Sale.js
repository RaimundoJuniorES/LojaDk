const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SaleSchema = new mongoose.Schema({
    idClient:{
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    remains: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

SaleSchema.plugin(mongoosePaginate);

mongoose.model('Sale', SaleSchema)