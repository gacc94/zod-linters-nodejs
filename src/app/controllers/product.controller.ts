import { Request, Response } from 'express';
import { productType } from '../schemas/product.schema';

class ProductController {

    // constructor() {
    // }

    async saveProduct(request: Request<unknown, unknown, productType>, response: Response) {
        try {

            response.status(200)
                .json({ body: request.body.price });
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    }

    async updateProduct(request: Request, response: Response) {
        try {

            response.status(200)
                .json({ body: request.body });
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    }

}

export default new ProductController();