import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Category } from '@quiz-app/types';

@Component({
  selector: 'ui-select',
  imports: [FormsModule, MatSelectModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() name!: string;
  @Input() categories!: Category[];
  @Input() subcategories!: null | string[];

  selectedCategory = 'Any Category';
}
