import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-no-items',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
    <mat-card-content>Nenhum produto cadastrado :(</mat-card-content>
  </mat-card>
  `,
  styleUrl: './no-items.component.scss'
})
export class NoItemsComponent {

}
