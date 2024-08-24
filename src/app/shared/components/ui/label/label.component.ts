import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css',
})
export class LabelComponent {
  @Input() text: string = '';
  @Input() color: 'default' | 'primary' | 'secondary' = 'default';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  get labelClass() {
    return ['label', `label--${this.color}`, `label--${this.size}`].join(' ');
  }
}
