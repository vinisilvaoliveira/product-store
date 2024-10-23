import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';
import { FormComponent } from "../../shared/components/form/form.component";
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';
import { take } from 'rxjs';
@Component({
    selector: 'app-create',
    standalone: true,
    template: `
    <app-back-to-list></app-back-to-list>
    <app-form (done)="onSubmit($event)"></app-form>
  `,
    imports: [FormComponent, BackToListComponent
    ]
})
export class CreateComponent {
  productService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar)
  router = inject(Router);

  onSubmit(product: Product) {
    console.log(product)
    this.productService.postProduct(product).pipe(take(1)).subscribe(() => {
        this.matSnackBar.open('Produto criado com sucesso!', 'Ok')
        this.router.navigateByUrl('/');
      })
  }
}
