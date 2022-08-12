const bodyParser = require('body-parser');
const app = require('./app');
require('dotenv').config();

const productController = require('./controllers/productController');

// bodyParser converte o body da requisição em json
app.use(bodyParser.json());

app.get('/products', productController.getAllProducts);
app.get('/products/:id', productController.getProductsId);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
