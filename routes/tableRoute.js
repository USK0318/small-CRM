const express = require('express');
const router = express.Router();

const tableController = require('../controllers/tableController');

router.get('/', tableController.getPaymentDetails);
router.post('/', tableController.addPaymentDetails);
router.put('/:id', tableController.updatePaymentDetails);
router.delete('/:id', tableController.deletePaymentDetails);


module.exports = router;