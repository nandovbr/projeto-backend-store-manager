const productModel = require('../models/productModel');

const errorMessage = 'Product not found';

const getAllProducts = async () => {
  const response = await productModel.getAllProducts();
  // console.log(response);
  if (!response) {
    return { error: { code: 404, message: errorMessage } };
  }
  return response;
};

const getProductsId = async (id) => {
  const response = await productModel.getProductsId(id);
  if (!response) {
    return { error: { code: 404, message: errorMessage } };
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
    return { error: { code: 404, message: errorMessage } };
  }

  const validId = await productModel.getProductsId(id);
  if (!validId) {
    return { error: { code: 404, message: errorMessage } };
  }

  return response;
};

const deleteProduct = async (id) => {
  const response = await productModel.getProductsId(id);
  if (!response) {
    return { error: { code: 404, message: errorMessage } };
  }
  const result = await productModel.deleteProduct(id);
  if (!result) {
    return { error: { code: 404, message: errorMessage } };
  }

  return result;
};

module.exports = {
  getAllProducts,
  getProductsId,
  createProduct,
  updateProduct,
  deleteProduct,
};
