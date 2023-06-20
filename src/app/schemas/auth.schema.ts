import { z } from 'zod';

export default  z.object({
    body: z.object({
        email: z.string()
            .nonempty('Email is required')
            .email({ message: 'Write a correct email' }),
        password: z.string()
            .nonempty('Password is required')
            .min(6, 'Password too short '),
    }),
    // params: z.object()
});