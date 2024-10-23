import { inject } from "@angular/core";
import { ProductsService } from "../services/products.service";

export const getAllProductsResolver = () => 
    {
        const productService = inject(ProductsService);
        return productService.getAllProducts()
    }
