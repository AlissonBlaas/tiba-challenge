import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";
import { Product } from "../../entities/Product";

type ProductRequest = {
    name: string;
    description: string;
    status: string;
    category_id: string;
    quantity: number;
    value: number;
}

export class CreateProductService {

    async execute({name, description, status, quantity, value, category_id}: ProductRequest): Promise<Product | Error> {
        const repo = getRepository(Product);
        const repoCategory = getRepository(Category);

        if(!await repoCategory.findOne(category_id)) {
            return new Error("Category doest not exists!");
        }

        const product = repo.create({
            name,
            description,
            status,
            category_id,
            quantity,
            value
        });

        await repo.save(product);

        return product;
    }

}