import { z } from 'zod';

export const answerFilterSchema = z.object({
    body: z.object({
        hostname: z.string().min(1, 'Hostname cannot be empty'),
        
        examId: z.union([z.string(), z.number()]).optional(),
        
        examGroupId: z.union([z.string(), z.number()]).optional(),
        
        examDetailsId: z.union([
            z.string(), 
            z.number(), 
            z.array(z.union([z.string(), z.number()]))
        ]).optional()
    })
});
