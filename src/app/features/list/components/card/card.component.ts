import { Component, EventEmitter, Output, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `
        <mat-card>
            <mat-card-header>
              <mat-card-title>{{ productTitle() }}</mat-card-title>
            </mat-card-header>
            <mat-card-actions>
              <button mat-button (click)="onEdit()">Editar</button>
              <button mat-button (click)="onDelete()">Deletar</button>
            </mat-card-actions>
          </mat-card>
  `,
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>();

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  productTitle = computed(() => this.product().title);

  onEdit() {
    this.edit.emit();
  }
  onDelete() {
    this.delete.emit();
  }

}
