const express = require('express');
const router = express.Router();
const {
  getAllOrderSalesDataTypes,
  getOrderSalesDataTypeById,
  createOrderSalesDataType,
  updateOrderSalesDataType,
  deleteOrderSalesDataType
} = require('../controllers/ordersalesDataTypesController');

// تحقق من أن كل دالة متوفرة وليست undefined
router.get('/', getAllOrderSalesDataTypes); // تحقق من أن getAllOrderSalesDataTypes ليست undefined
router.get('/:id', getOrderSalesDataTypeById); // تحقق من أن getOrderSalesDataTypeById ليست undefined
router.post('/', createOrderSalesDataType); // تحقق من أن createOrderSalesDataType ليست undefined
router.put('/:id', updateOrderSalesDataType); // تحقق من أن updateOrderSalesDataType ليست undefined
router.delete('/:id', deleteOrderSalesDataType); // تحقق من أن deleteOrderSalesDataType ليست undefined

module.exports = router;
