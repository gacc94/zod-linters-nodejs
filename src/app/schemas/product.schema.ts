import { z } from 'zod';

export const saveSchema = z.object({
    body: z.object({
        name: z.string().nonempty().nonempty(),
        price: z.number().nonnegative(),
    }),
});

export const updateSchema = z.object({
    body: z.object({
        name: z.string().nonempty().optional(),
        price: z.number().nonnegative(),
    }),
    params: z.object({
        id: z.string().min(6),
    }),
    query: z.object({
        title: z.string().nonempty(),
    }),
});

export type productType = z.infer<typeof saveSchema>['body'];

export type productBodyType = z.infer<typeof updateSchema>['body'];
export type productParamsType = z.infer<typeof updateSchema>['params'];
export type productQueryType = z.infer<typeof updateSchema>['query'];


