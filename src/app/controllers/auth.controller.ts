import { Request, Response } from 'express';

class AuthController {

    async signIn(request: Request, response: Response) {
        try {
            return response.json(request.body);
        } catch (err) {
            return response.status(500)
                .json({ err: 'INTERNAL_SERVER_ERROR' });

        }
    }

}

export default new AuthController();