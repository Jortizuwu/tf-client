import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  HostBinding,
  Input,
  OnInit,
  signal,
} from '@angular/core';

export default interface IButtonProps {
  variant: 'primary' | 'secondary' | 'floating';
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
  label: string;
}
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements IButtonProps {
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
