import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-to-list',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  template: `
    <div class="link-container">
    <a mat-stroked-button routerLink="/" color="accent">Voltar para listagem</a>
</div>
  `,
  styleUrl: './back-to-list.component.scss'
})
export class BackToListComponent {

}
