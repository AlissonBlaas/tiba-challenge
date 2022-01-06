import { getRepository, Equal } from 'typeorm';
import { Product } from '../../entities/Product';

export class GetProductByIdService {
    async execute(id: string) {
        const repo = getRepository(Product);

        const product = await repo.find({
            id: Equal(id),
        });

        if(!product){
            return new Error("Product does not exists!");
        }

        return product;
    }
}