import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/ui/button/button.component';
import { TitleComponent } from '@shared/components/ui/title/title.component';
import { Stack } from './stack.model';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TitleComponent],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent {
  // Instanciamos a classe. Ela mesma gerencia seus sinais internos.
  protected stack = new Stack();

  constructor() {}

  protected addItem(): void {
    this.stack.addItem();
  }

  protected removeItem(): void {
    this.stack.removeItem();
  }
}
