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

const createProduct = async (name) => {
  const response = await productModel.createProduct(name);
  // if (!response) {
  //   return { error: { code: 404, message: 'Product was not created' } };
  // }
  return response;
};

const updateProduct = async (id, name) => {
  const response = await productModel.updateProduct(id, name);
  if (!response) {
    return { error: { code: 404, message: 'Product not found' } };
  }

  const validId = await productModel.getProductsId(id);
  if (!validId) {
    return { error: { code: 404, message: 'Product not found' } };
  }

  return response;
};

module.exports = {
  getAllProducts,
  getProductsId,
  createProduct,
  updateProduct,
};
