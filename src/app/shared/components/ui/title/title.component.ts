import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  /* templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'] */
  template: `<h1 class="titulo-principal">{{ title() }}</h1>`,
  styles: [
    `
      .titulo-principal {
        font-size: 2rem;
        color: #333;
        border-bottom: 2px solid #ccc;
      }
    `,
  ],
})
export class TitleComponent {
  constructor() {}

  title = input.required<string>();

  texto = computed(() => this.title());
}
