import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonComponent } from '@shared/components/ui/button/button.component';
import { Stack } from './stack.model';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent {
  protected items = signal<Stack>(new Stack());

  constructor() {}

  protected addItem(): void {
    this.items().addItem();
  }

  protected removeItem(): void {
    this.items().removeItem();
  }
}
