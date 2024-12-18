import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { Category } from '@quiz-app/types';

@Component({
  imports: [FormsModule, MatSelectModule],
  selector: 'ui-select',
  styleUrl: './select.component.css',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() name!: string;
  @Input() categories!: Category[];
  @Input() subcategories!: null | string[];

  selectedCategory = 'Any Category';
}
