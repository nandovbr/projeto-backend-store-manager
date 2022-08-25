const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../models/productModel');
const connection = require('../../../models/connection');

describe("Teste Model products", () => {
  beforeEach(sinon.restore);

  describe("Listagem de produtos", () => {

    // variável com os dados da função getAllProducts
    const allProducts = [
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
      { id: 3, name: 'Escudo do Capitão América' }
    ];

    it('Deve listar todos os produtos', async () => {
      sinon.stub(connection, 'execute').resolves([ allProducts ]);
      
      const products = await productModel.getAllProducts();
      expect(products).to.be.an('array');
    });

    // variável com um dado da função getProductsId
    const productId = [{ id: 1, name: 'Martelo de Thor' }];

    it('Deve listar os produtos pelo id', async () => {
      sinon.stub(connection, 'execute').resolves([ productId ]);

      const productsId = await productModel.getProductsId(1);
      expect(productsId).to.be.an('object');
    });

    it('Deve retornar falso com erro na listagem de produtos', async () => {
      sinon.stub(connection, 'execute').resolves([ false ]);

      const products = await productModel.getAllProducts();
      expect(products).to.be.an('boolean');
    });

    it('Deve retornar falso com erro na listagem de produtos pelo id', async () => {
      sinon.stub(connection, 'execute').resolves([ false ]);

      const productsId = await productModel.getAllProducts();
      expect(productsId).to.be.an('boolean');
    });

    const newProduct = [ { id: 4, name: 'ProdutoX' } ];

    it('Deve criar/inserir um produto no banco com sucesso', async () => {
      sinon.stub(connection, 'execute').resolves([ newProduct ]);

      const newProd = await productModel.createProduct();
      expect(newProd).to.be.an('object');
    });

    it('Deve retornar falso com erro na criação do produto', async () => {
      sinon.stub(connection, 'execute').resolves([ false ]);

      const newProd = await productModel.createProduct();
      expect(newProd).to.be.an('boolean');
    });

    const updateProduct = [ { id: 8, name: 'Martelo do Hulk' } ];
    
    it('Deve retornar o produto atualizado', async () => {
      sinon.stub(connection, 'execute').resolves(updateProduct);

      const updateProd = await productModel.updateProduct();
      expect(updateProd).to.be.an('object');
    });

    const product = '';

    it('Deve retornar false com query inexistente', async () => {
      sinon.stub(connection, 'execute').resolves(product);

      const noProduct = await productModel.createProduct();
      expect(noProduct).to.be.false;
    });

    it('Deve retornar false com query inexistente', async () => {
      sinon.stub(connection, 'execute').resolves(product);

      const noProduct = await productModel.getProductsId();
      expect(noProduct).to.be.false;
    });

    const productDeleted = [ { id: 1, name: 'Martelo de Thor' } ];
    it('Deve retornar o produto deletado do banco de dados', async () => {
      sinon.stub(connection, 'execute').resolves(productDeleted);

      const deleteProd = await productModel.deleteProduct();
      expect(deleteProd).to.be.an('undefined');
    });
  });
});
