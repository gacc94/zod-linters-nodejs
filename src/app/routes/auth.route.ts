import {Router} from "express";
import {authController} from "../controllers";
import {schemaValidator} from "../middlewares/schema-validator";
import {loginSchema} from "../schemas/auth.schema";

const router: Router = Router()

router.post('/',
    schemaValidator(loginSchema),
    authController.signIn.bind(authController));

export default router;