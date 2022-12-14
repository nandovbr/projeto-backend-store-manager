// rescue facilita a escrita de Middlewares com tratamento de erro "embutido"
const rescue = require('express-rescue');
const productServices = require('../services/productServices');

const getAllProducts = rescue(async (_req, res) => {
    const result = await productServices.getAllProducts();

    if (result.error) {
      return res.status(404).json({ message: result.error.message });
    }
    
    return res.status(200).json(result);
});

const getProductsId = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.getProductsId(id);
  
  if (result.error) {
    return res.status(404).json({ message: result.error.message });
  }

  return res.status(200).json(result);
});

const createProduct = rescue(async (req, res) => {
  const { name } = req.body;
  const result = await productServices.createProduct(name);

  if (result.error) {
    return { error: { code: 404, message: 'Product was not created' } };
  }

  return res.status(201).json(result);
});

const updateProduct = rescue(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await productServices.updateProduct(id, name);

  if (result.error) {
    return res.status(404).json({ message: result.error.message });
  }

  return res.status(200).json(result);
});

const deleteProduct = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.deleteProduct(id);

  if (result.error) {
    return res.status(404).json({ message: result.error.message });
  }

  return res.status(204).json(result);
});

module.exports = {
  getAllProducts,
  getProductsId,
  createProduct,
  updateProduct,
  deleteProduct,
};
