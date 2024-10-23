import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { DialogConfirmationService } from '../../shared/services/dialog-confirmation.service';
import { filter } from 'rxjs';
import { NoItemsComponent } from './components/no-items/no-items.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, NoItemsComponent],
  template: `
  <div class="action-container">
    <a mat-raised-button color="primary" [routerLink]="['create-product']">Criar Produto</a>
  </div>
  
  @for (product of products(); track product.id) {
    
    @defer (on immediate){
      <div class="item-container">
        <app-card [product]="product" (delete)="onDelete(product)" (edit)="onEdit(product)"></app-card>
      </div>
    }
    
  }
  @empty {
    @defer (on immediate){
    <app-no-items></app-no-items>
    }
  }
  `,
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  productsService = inject(ProductsService);
  router = inject(Router);
  dialogConfirmationService = inject(DialogConfirmationService);
  products = signal<Product[]>(
    inject(ActivatedRoute).snapshot.data['products'],
  );

  ngOnInit() {
    this.getAllProductsList();
  }
  getAllProductsList() {
    this.productsService.getAllProducts()
      .subscribe((products) => {
        this.products.set(products)
      })
  }
  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id])
  }
  onDelete(product: Product) {
    this.dialogConfirmationService.openDialog()
    .pipe(filter((answer) => answer === true))
    .subscribe((answer) => {
        this.productsService.deleteProduct(product.id).subscribe(() => {
          this.getAllProductsList();
        })
    })

  }

}
