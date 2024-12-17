import { Component } from '@angular/core';
import { CATEGORIES, SUBCATEGORIES } from '@quiz-app/constants';
import { Category } from '@quiz-app/types';
import { SelectComponent } from '@quiz-app/ui';

@Component({
  selector: 'app-root',
  imports: [SelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'quiz-app';
  categories: Category[] = CATEGORIES;
  subcategories: string[] = SUBCATEGORIES;
  name = 'name';
}
