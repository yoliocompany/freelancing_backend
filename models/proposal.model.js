const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    price: Number,
    days: Number,
    cover: String,
    status: {
        type: Boolean,
        default: false
    },
    idService: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
});

module.exports = mongoose.model('Proposal', proposalSchema);
