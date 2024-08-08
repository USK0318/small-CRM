const Payment = require('../models/paymentDetails');

async function getPaymentDetails(req, res) {
    try{
        const paymentDetails = await Payment.find();
        res.status(200).json(paymentDetails);
    }
    catch(err){
        res.status(400).json({message: err});
    }
}

async function addPaymentDetails(req, res) {

        if(req.body.name == "" || req.body.project == "" || req.body.totalamount == "" || req.body.paidamount == "" || req.body.pendingamount == "" || req.body.starteddate == "" || req.body.enddate == ""){
            return res.status(400).json({message: "Please fill all the fields"});
        }
        if(isNaN(req.body.totalamount) || isNaN(req.body.paidamount) || isNaN(req.body.pendingamount)){
            return res.status(400).json({message: "Amount must be a number"});
        }
        
        try{
            const payment = new Payment({
                name: req.body.name,
                project: req.body.project,
                totalamount: req.body.totalamount,
                paidamount: req.body.paidamount,
                pendingamount: req.body.pendingamount,
                starteddate: req.body.starteddate,
                enddate: req.body.enddate
            });
            const savedPayment = await payment.save();
            res.status(200).json(savedPayment);
        }
        catch(err){
            res.status(400).json({message: err});
        }
    }


async function updatePaymentDetails(req, res) {
    if(req.body.name == "" || req.body.project == "" || req.body.totalamount == "" || req.body.paidamount == "" || req.body.pendingamount == "" || req.body.starteddate == "" || req.body.enddate == ""){
        return res.status(400).json({message: "Please fill all the fields"});
    }
    if(isNaN(req.body.totalamount) || isNaN(req.body.paidamount) || isNaN(req.body.pendingamount)){
        return res.status(400).json({message: "Amount must be a number"});
    }

    try{
        const updatedPayment = await Payment.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    name: req.body.name,
                    project: req.body.project,
                    totalamount: req.body.totalamount,
                    paidamount: req.body.paidamount,
                    pendingamount: req.body.pendingamount,
                    starteddate: req.body.starteddate,
                    enddate: req.body.enddate
                }
            }
        );
        res.status(200).json(updatedPayment);
    }
    catch(err){
        res.status(400).json({message: err});
    }
}

async function deletePaymentDetails(req, res) {
    try{
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedPayment);
    }
    catch(err){
        res.status(400).json({message: err});
    }
}

module.exports = {
    getPaymentDetails,
    addPaymentDetails,
    updatePaymentDetails,
    deletePaymentDetails
}

