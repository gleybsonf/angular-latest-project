import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  //values
  clickButton = output<void>();
  textButton: InputSignal<string> = input.required<string>();
  ///attributes
  disabled = input(false, {
    transform: (value: string | boolean) =>
      typeof value === 'string' ? value === '' || value === 'true' : value,
  });

  constructor() {}

  protected onClick(event: string): void {
    console.log('Button clicked!');
    this.clickButton.emit();
  }
}
