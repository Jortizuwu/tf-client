import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'floating' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() label: string = '';

  get buttonClass() {
    return [
      'button',
      `button--${this.variant}`,
      `button--${this.size}`,
      this.disabled ? 'button--disabled' : '',
    ].join(' ');
  }
}
