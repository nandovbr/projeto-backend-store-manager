const sinon = require('sinon');
const { expect } = require('chai');
const productController = require('../../../controllers/productController');
const productServices = require('../../../services/productServices');
const { response } = require('express');

describe("Teste controller products", () => {
  beforeEach(sinon.restore);

  describe("Listagem de produtos é retornado pela API", () => {
    
    it('Deve retornar o erro de todos os produtos na controller', async () => {
      sinon.stub(productServices, 'getAllProducts').resolves({ error: { code: 404, message: 'Product not found' } });
      const req = {};
      const res = {};
      let next = () => {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // res.end = sinon.stub().returns();
      next = sinon.stub().returns();
      
      await productController.getAllProducts(req, res, next);
      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
    });

    it('Deve retornar o erro dos produtos na controller pelo id', async () => {
      sinon.stub(productServices, 'getProductsId').resolves({ error: { code: 404, message: 'Product not found' } });
      const req = {};
      const res = {};
      let next = () => {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // res.end = sinon.stub().returns();
      next = sinon.stub().returns();
      
      req.params = { id: 1 };
      await productController.getProductsId(req, res, next);
      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
    });

    const newProduct = [ { id: 5, name: 'ProdutoX' } ];

    it('Deve retornar que o produto foi criado com sucesso', async () => {
      sinon.stub(productServices, 'createProduct').resolves({ newProduct });
      const req = {};
      const res = {};
      let next = () => {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // res.end = sinon.stub().returns();
      next = sinon.stub().returns();
      
      req.body = newProduct;
      await productController.createProduct(req, res, next);
      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith([ { id: 5, name: 'ProdutoX' } ])).to.be.false;
    });
  });
});
