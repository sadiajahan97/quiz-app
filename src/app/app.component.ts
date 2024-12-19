import { Component } from '@angular/core';

import { CATEGORIES, GROUPS } from '@quiz-app/constants';
import { Option } from '@quiz-app/types';
import { SelectComponent } from '@quiz-app/ui';

@Component({
  imports: [SelectComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  categories: Option[] = CATEGORIES;
  groups: string[] = GROUPS;
  title = 'quiz-app';
}
