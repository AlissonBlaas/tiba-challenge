import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

export class GetAllProductsService {
    async execute() {
        const repo = getRepository(Product);

        const products = await repo.find({
            relations: ['category']
        });
        
        return products;
    }
}