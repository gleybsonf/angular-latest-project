import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from '@shared/components/ui/title/title.component';

@Component({
  selector: 'app-data-structure',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleComponent],
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.scss'],
})
export class DataStructureComponent {}
