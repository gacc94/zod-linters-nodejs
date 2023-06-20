import {Router} from "express";
import authRouter from "./auth.route";
import productRouter from "./product.route";

export interface Routes {
    path: string;
    router: Router;
}

export const mainRoutes: Array<Routes> = [
    {
        path: 'auth',
        router: authRouter,
    },
    {
        path: 'product',
        router: productRouter,
    }
]
