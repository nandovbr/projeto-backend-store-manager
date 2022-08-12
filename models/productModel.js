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

module.exports = {
  getAllProducts,
  getProductsId,
};
