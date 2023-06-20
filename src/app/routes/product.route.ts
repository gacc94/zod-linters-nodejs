import {Router} from "express";
import {schemaValidator} from "../middlewares/schema-validator";
import prdSch from "../schemas/product.schema";
import {productController} from "../controllers/product.controller";

const router: Router = Router()

router.post('/',
    schemaValidator(prdSch.saveSchema),
    productController.saveProduct.bind(productController))
    .put('/:id',
        schemaValidator(prdSch.updateSchema),
        productController.updateProduct.bind(productController) );

export default router;