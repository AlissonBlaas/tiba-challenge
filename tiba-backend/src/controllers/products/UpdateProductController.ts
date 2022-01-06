import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/products/UpdateProductService';

export class UpdateProductController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const {
            name,
            description,
            status,
            category_id,  
            quantity,
            value
        } = request.body;

        const service = new UpdateProductService();

        const result = await service.execute({ 
            id,
            name,
            description,
            status,
            category_id,
            quantity,
            value 
        });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}