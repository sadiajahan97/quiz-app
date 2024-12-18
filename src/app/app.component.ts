import { Component } from '@angular/core';

import { CATEGORIES, SUBCATEGORIES } from '@quiz-app/constants';
import { Category } from '@quiz-app/types';
import { SelectComponent } from '@quiz-app/ui';

@Component({
  imports: [SelectComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'quiz-app';
  categories: Category[] = CATEGORIES;
  subcategories: string[] = SUBCATEGORIES;
  name = 'name';
}
