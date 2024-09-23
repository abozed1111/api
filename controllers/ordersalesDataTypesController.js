const {
    getOrderSalesDataTypes,
    getOrderSalesDataTypeById: getOrderSalesDataTypeByIdModel,
    createOrderSalesDataType: createOrderSalesDataTypeModel,
    updateOrderSalesDataType: updateOrderSalesDataTypeModel,
    deleteOrderSalesDataType: deleteOrderSalesDataTypeModel
  } = require('../models/ordersalesDataTypesModel');
  
  const getAllOrderSalesDataTypes = async (req, res) => {
    try {
      const data = await getOrderSalesDataTypes();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const getOrderSalesDataTypeById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await getOrderSalesDataTypeByIdModel(id); // استخدام الاسم المعدل
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const createOrderSalesDataType = async (req, res) => {
    try {
      await createOrderSalesDataTypeModel(req.body); // استخدام الاسم المعدل
      res.status(201).json({ message: 'Created' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const updateOrderSalesDataType = async (req, res) => {
    const { id } = req.params;
    try {
      await updateOrderSalesDataTypeModel(id, req.body); // استخدام الاسم المعدل
      res.status(200).json({ message: 'Updated' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const deleteOrderSalesDataType = async (req, res) => {
    const { id } = req.params;
    try {
      await deleteOrderSalesDataTypeModel(id); // استخدام الاسم المعدل
      res.status(200).json({ message: 'Deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = {
    getAllOrderSalesDataTypes,
    getOrderSalesDataTypeById,
    createOrderSalesDataType,
    updateOrderSalesDataType,
    deleteOrderSalesDataType
  };
  