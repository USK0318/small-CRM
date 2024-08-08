const connection = require('../models/connection');


const paymentSchema = new connection.Schema({
    name: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    totalamount: {
        type: Number,
        required: true
    },
    paidamount: {
        type: Number,
        required: true
    },
    pendingamount: {
        type: Number,
        required: true
    },
    starteddate: {
        type: String,
        required: true
    },
    enddate: {
        type: String,
        required: true
    }
});

const Payment = connection.model('Payment', paymentSchema);


module.exports = Payment;
