import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { Option } from '@quiz-app/types';

@Component({
  imports: [FormsModule, MatSelectModule],
  selector: 'ui-select',
  styleUrl: './select.component.css',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() groups!: string[];
  @Input() options!: Option[];

  selectedOption = 'Any Category';
}
