// rescue facilita a escrita de Middlewares com tratamento de erro "embutido"
const rescue = require('express-rescue');
const productServices = require('../services/productServices');

const getAllProducts = rescue(async (_req, res) => {
    const result = await productServices.getAllProducts();
    // console.log(result);
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

module.exports = {
  getAllProducts,
  getProductsId,
};