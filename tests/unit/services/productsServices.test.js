const sinon = require('sinon');
const { expect } = require('chai');
const productServices = require('../../../services/productServices');
const connection = require('../../../models/connection');

describe("Teste services products", () => {
  beforeEach(sinon.restore);

  describe("Listagem de produtos", () => {

    // variável com os dados da função getAllProducts
    const allProducts = [
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
      { id: 3, name: 'Escudo do Capitão América' }
    ];

    it('Deve listar todos os produtos na services', async () => {
      sinon.stub(connection, 'execute').resolves([ allProducts ]);
      
      const products = await productServices.getAllProducts();
      expect(products).to.be.an('array');
    });

    // variável com um dado da função getProductsId
    const productId = [{ id: 1, name: 'Martelo de Thor' }];

    it('Deve listar os produtos na services pelo id', async () => {
      sinon.stub(connection, 'execute').resolves([ productId ]);

      const productsId = await productServices.getProductsId(1);
      expect(productsId).to.be.an('object');
    });

    it('Deve criar um produto com sucesso', async () => {
      sinon.stub(connection, 'execute').resolves([ [ { id: 4, name: 'ProdutoX' } ] ]);

      const newProd = await productServices.createProduct();
      expect(newProd).to.be.an('object');
    });

    it('Deve retornar erro sem o id do produto', async () => {
      sinon.stub(connection, 'execute').resolves([{ error: { code: 404, message: 'Product not found' } }]);

      const newProd = await productServices.getAllProducts();
      expect(newProd).to.be.an('object');
    });

    it('Deve retornar erro sem o id do produto', async () => {
      sinon.stub(connection, 'execute').resolves([{ error: { code: 404, message: 'Product not found' } }]);

      const newProd = await productServices.deleteProduct();
      expect(newProd).to.be.an('object');
    });

    it('Deve retornar erro 404 com produto inexistente', async () => {
      sinon.stub(connection, 'execute').resolves([{ error: { code: 404, message: 'Product not found' } }]);

      const newProd = await productServices.deleteProduct();
      expect(newProd).to.have.status(404);
    });
  });
});
