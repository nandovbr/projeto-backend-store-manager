const router = require('express').Router();
const productController = require('../controllers/productController');
const { validName } = require('../middlewares/productValidations');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductsId);
router.post('/', validName, productController.createProduct);
router.put('/:id', validName, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
