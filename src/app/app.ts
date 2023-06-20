import express,{Express} from "express";
import config from "./config/config";
import cors from 'cors';
import {mainRoutes as routes, Routes} from "./routes";
import morgan from "morgan";

class App {
    app: Express;
    port: number;
    constructor() {
        this.app = express();
        this.port = config.get('server.port');
        this.middlewares();
    }

    private middlewares() {
        this.app.set('port', this.port);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.routes()
    }

    private routes(): void {
        // const routes = new Routes().getRoutes();
        routes.forEach(({path, router}: Routes) => {
            this.app.use(`/api/v1/${path}`, router)
        })
        // this.app.use('/', routes);
    }

    listen() {
        this.app.listen(this.app.get('port'), ()=> {
            console.log(`Server running por on http://localhost:${this.port}`)
        })
    }

}

export const app: App = new App();