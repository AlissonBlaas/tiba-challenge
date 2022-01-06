import { Request, Response } from 'express';
import { GetProductByIdService } from '../../services/products/GetProductByIdService';

export class GetProductByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const service = new GetProductByIdService();

        response.header("Access-Control-Allow-Origin", "*");

        const result = await service.execute(id);

        return response.json(result);
    }
}