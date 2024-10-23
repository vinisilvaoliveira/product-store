import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProductsService } from "../services/products.service";

export const getProductResolver =  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const productService = inject(ProductsService);
    return productService.getProductsById(route.paramMap.get('id') as string)
  }