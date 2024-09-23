const { poolPromise, sql } = require('../config/db'); // تأكد من صحة المسار
const getProducts = async () => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM item');
    return result.recordset;
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
};

const getProductById = async (id) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM item WHERE id = @id');
    return result.recordset[0];
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
};

const createProduct = async (product) => {
  const { name, price, price2, bar, storage, unit, saleprice, clientprice, limit, disc } = product;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('name', sql.NVarChar, name)
      .input('price', sql.Float, price)
      .input('price2', sql.Float, price2)
      .input('bar', sql.NVarChar, bar)
      .input('storage', sql.NVarChar, storage)
      .input('unit', sql.NVarChar, unit)
      .input('saleprice', sql.Float, saleprice)
      .input('clientprice', sql.Float, clientprice)
      .input('limit', sql.Int, limit)
      .input('disc', sql.Float, disc)
      .query('INSERT INTO item (name, price, price2, bar, storage, unit, saleprice, clientprice, [limit], disc) VALUES (@name, @price, @price2, @bar, @storage, @unit, @saleprice, @clientprice, @limit, @disc)');
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
};

const updateProduct = async (id, product) => {
  const { name, price, price2, bar, storage, unit, saleprice, clientprice, limit, disc } = product;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .input('name', sql.NVarChar, name)
      .input('price', sql.Float, price)
      .input('price2', sql.Float, price2)
      .input('bar', sql.NVarChar, bar)
      .input('storage', sql.NVarChar, storage)
      .input('unit', sql.NVarChar, unit)
      .input('saleprice', sql.Float, saleprice)
      .input('clientprice', sql.Float, clientprice)
      .input('limit', sql.Int, limit)
      .input('disc', sql.Float, disc)
      .query('UPDATE item SET name = @name, price = @price, price2 = @price2, bar = @bar, storage = @storage, unit = @unit, saleprice = @saleprice, clientprice = @clientprice, [limit] = @limit, disc = @disc WHERE id = @id');
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
};

const deleteProduct = async (id) => {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .query('DELETE FROM dbo.item WHERE id = @id');
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
