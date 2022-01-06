import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

export class DeleteProductService {
    async execute(id: string) {
        const repo = getRepository(Product);

        if(!await repo.findOne(id)) {
            return new Error("Product does not exists!");
        }

        await repo.delete(id);

    }
}