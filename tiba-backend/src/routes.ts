import { Router } from "express";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/category/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/category/UpdateCategoryController";
import { CreateProductController } from "./controllers/products/CreateProductController";
import { DeleteProductController } from "./controllers/products/DeleteProductController";
import { GetAllProductsController } from "./controllers/products/GetAllProductsController";
import { GetProductByIdController } from "./controllers/products/GetProductByIdController";
import { UpdateProductController } from "./controllers/products/UpdateProductController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/products", new CreateProductController().handle);
routes.get("/products", new GetAllProductsController().handle);
routes.delete("/products/:id", new DeleteProductController().handle);
routes.put("/products/:id", new UpdateProductController().handle);
routes.get("/product/:id", new GetProductByIdController().handle);

export { routes };