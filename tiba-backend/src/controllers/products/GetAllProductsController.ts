import { Request, Response } from 'express';
import { GetAllProductsService } from '../../services/products/GetAllProductsService';

export class GetAllProductsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllProductsService();
        
        response.header("Access-Control-Allow-Origin", "*");
    
        const product = await service.execute();

        if(product instanceof Error) {
            return response.status(400).json(product.message);
        }

        return response.json(product);
    }
}