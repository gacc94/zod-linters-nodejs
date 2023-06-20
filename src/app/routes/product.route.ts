import {Router} from "express";
import {schemaValidator} from "../middlewares/schema-validator";
import {saveSchema, updateSchema} from "../schemas";
import {productController} from "../controllers";

const router: Router = Router()

router.post('/',
    schemaValidator(saveSchema),
    productController.saveProduct.bind(productController))
    .put('/:id',
        schemaValidator(updateSchema),
        productController.updateProduct.bind(productController) );

export default router;