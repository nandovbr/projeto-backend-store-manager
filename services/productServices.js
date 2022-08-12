const productModel = require('../models/productModel');

const getAllProducts = async () => {
  const response = await productModel.getAllProducts();
  // console.log(response);
  if (!response) {
    return { error: { code: 404, message: 'Product not found' } };
  }
  return response;
};

const getProductsId = async (id) => {
  const response = await productModel.getProductsId(id);
  if (!response) {
    return { error: { code: 404, message: 'Product not found' } };
  }
  return response;
};

module.exports = {
  getAllProducts,
  getProductsId,
};