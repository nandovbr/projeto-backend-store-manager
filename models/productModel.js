const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products ORDER BY id'); 
  if (!products) {
    return false;
  }

  return products;
};

const getProductsId = async (id) => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', 
    [id],
  );
  if (!products) {
    return false;
  }
  return products[0];
};

const createProduct = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', 
    [name],
  );
  if (!product) {
    return false;
  }
  return { id: product.insertId, name };
};

const updateProduct = async (id, name) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  // if (!product) {
  //   return false;
  // }

  return { id, name };
};

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );

  return id;
};

module.exports = {
  getAllProducts,
  getProductsId,
  createProduct,
  updateProduct,
  deleteProduct,
};
