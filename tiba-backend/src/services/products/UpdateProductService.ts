import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

type ProductUpdateRequest = {
    id: string;
    name: string;
    description: string;
    status: string;
    category_id: string;
    quantity: number;
    value: number;
}

export class UpdateProductService {
    async execute({
        id,
        name,
        description,
        status,
        category_id,
        quantity,
        value
    }: ProductUpdateRequest) {
        const repo = getRepository(Product);

        const product = await repo.findOne(id);

        if(!product) {
            return new Error("Product does not exists!");
        }

        product.name = name ? name : product.name;
        product.description = description  ? description : product.description;
        product.status = status ? status : product.status;
        product.category_id = category_id ? category_id : product.category_id;
        product.value = value ? value : product.value;
        product.quantity = quantity ? quantity : product.quantity;
        
        await repo.save(product);

        return product;
    }
}