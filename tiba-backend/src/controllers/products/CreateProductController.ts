import { Request, Response } from 'express';
import { CreateProductService } from '../../services/products/CreateProductService';

export class CreateProductController {
    async handle(request: Request, response: Response) {
        const {
            name,
            description,
            status,
            category_id,
            quantity,
            value 
        } = request.body
        const service = new CreateProductService();

        const result = await service.execute({
            name,
            description,
            status,
            category_id,
            quantity,
            value
        })

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}