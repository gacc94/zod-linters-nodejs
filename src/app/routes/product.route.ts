import { Router } from 'express';
import { schemaValidator } from '../middlewares/schema-validator';
import { saveSchema, updateSchema } from '../schemas/product.schema';
import productController from '../controllers/product.controller';

const router: Router = Router();

router.post('/',
    schemaValidator(saveSchema),
    productController.saveProduct.bind(productController))
    .put('/:id',
        schemaValidator(updateSchema),
        productController.updateProduct.bind(productController));

export default router;