// models/ordersalesDataTypesModel.js
const { poolPromise, sql } = require('../config/db'); // تأكد من صحة المسار

const getOrderSalesDataTypes = async () => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM ordersalesdatatypess'); // تأكد من صحة الاستعلام
    return result.recordset;
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
};

const getOrderSalesDataTypeById = async (id) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM ordersalesdatatypess WHERE id = @id'); // تأكد من صحة الاستعلام
    return result.recordset[0];
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
};

const createOrderSalesDataType = async (data) => {
  const { shiftnumber, item, price, quantity, discount, total, orderdate, saler, customer, bar, unit, cash_type, type, delevry_cleint, total_discount, total_invoice, branch, device_name, serv } = data;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('shiftnumber', sql.Int, shiftnumber)
      .input('item', sql.NVarChar, item)
      .input('price', sql.Float, price)
      .input('quantity', sql.Int, quantity)
      .input('discount', sql.Float, discount)
      .input('total', sql.Float, total)
      .input('orderdate', sql.DateTime, orderdate)
      .input('saler', sql.NVarChar, saler)
      .input('customer', sql.NVarChar, customer)
      .input('bar', sql.NVarChar, bar)
      .input('unit', sql.NVarChar, unit)
      .input('cash_type', sql.NVarChar, cash_type)
      .input('type', sql.NVarChar, type)
      .input('delevry_cleint', sql.NVarChar, delevry_cleint)
      .input('total_discount', sql.Float, total_discount)
      .input('total_invoice', sql.Float, total_invoice)
      .input('branch', sql.NVarChar, branch)
      .input('device_name', sql.NVarChar, device_name)
      .input('serv', sql.NVarChar, serv)
      .query('INSERT INTO ordersalesdatatypess (shiftnumber, item, price, quantity, discount, total, orderdate, saler, customer, bar, unit, cash_type, type, delevry_cleint, total_discount, total_invoice, branch, device_name, serv) VALUES (@shiftnumber, @item, @price, @quantity, @discount, @total, @orderdate, @saler, @customer, @bar, @unit, @cash_type, @type, @delevry_cleint, @total_discount, @total_invoice, @branch, @device_name, @serv)');
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
};

const updateOrderSalesDataType = async (id, data) => {
  const { shiftnumber, item, price, quantity, discount, total, orderdate, saler, customer, bar, unit, cash_type, type, delevry_cleint, total_discount, total_invoice, branch, device_name, serv } = data;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .input('shiftnumber', sql.Int, shiftnumber)
      .input('item', sql.NVarChar, item)
      .input('price', sql.Float, price)
      .input('quantity', sql.Int, quantity)
      .input('discount', sql.Float, discount)
      .input('total', sql.Float, total)
      .input('orderdate', sql.DateTime, orderdate)
      .input('saler', sql.NVarChar, saler)
      .input('customer', sql.NVarChar, customer)
      .input('bar', sql.NVarChar, bar)
      .input('unit', sql.NVarChar, unit)
      .input('cash_type', sql.NVarChar, cash_type)
      .input('type', sql.NVarChar, type)
      .input('delevry_cleint', sql.NVarChar, delevry_cleint)
      .input('total_discount', sql.Float, total_discount)
      .input('total_invoice', sql.Float, total_invoice)
      .input('branch', sql.NVarChar, branch)
      .input('device_name', sql.NVarChar, device_name)
      .input('serv', sql.NVarChar, serv)
      .query('UPDATE ordersalesdatatypess SET shiftnumber = @shiftnumber, item = @item, price = @price, quantity = @quantity, discount = @discount, total = @total, orderdate = @orderdate, saler = @saler, customer = @customer, bar = @bar, unit = @unit, cash_type = @cash_type, type = @type, delevry_cleint = @delevry_cleint, total_discount = @total_discount, total_invoice = @total_invoice, branch = @branch, device_name = @device_name, serv = @serv WHERE id = @id');
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
};

const deleteOrderSalesDataType = async (id) => {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .query('DELETE FROM ordersalesdatatypess WHERE id = @id');
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
};

module.exports = {
  getOrderSalesDataTypes,
  getOrderSalesDataTypeById,
  createOrderSalesDataType,
  updateOrderSalesDataType,
  deleteOrderSalesDataType
};
