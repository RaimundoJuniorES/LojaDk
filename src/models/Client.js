const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        require: true,
    },
    createAte: {
        type: Date,
        default: Date.now
    }
});

ClientSchema.plugin(mongoosePaginate);

mongoose.model('Client', ClientSchema);