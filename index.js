const bodyParser = require('body-parser');
const app = require('./app');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

// bodyParser converte o body da requisição em json
app.use(bodyParser.json());

app.use('/products', productRoutes);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
