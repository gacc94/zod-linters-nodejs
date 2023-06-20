import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError, ZodIssue } from 'zod';

export const schemaValidator =
    (schema: AnyZodObject) =>
        (request: Request, response: Response, next: NextFunction): void => {
    try {
        const validator = schema.parse({
            body: request.body,
            params: request.params,
            query: request.query,
        });
        console.log({ validator });
        next();
    } catch (err) {
        if (err instanceof ZodError) {
            console.log(err);
            response.status(400)
                .json(
                    err.issues.map((issue: ZodIssue) => ({
                        path: issue.path,
                        message: issue.message,
                    })));
        }
        response.status(500)
            .json({ err: 'INTERNAL_SERVER_ERROR' });
    }

};

export const schemaValidator2 = (): number => 1;