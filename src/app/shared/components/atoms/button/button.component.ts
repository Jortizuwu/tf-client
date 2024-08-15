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
  variant: 'primary' | 'secondary' | 'tertiary';
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
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() label: string = '';

  private _variant = signal<'primary' | 'secondary' | 'tertiary'>(this.variant);
  private _size = signal<'small' | 'medium' | 'large'>(this.size);
  private _disabled = signal<boolean>(this.disabled);

  get buttonClass() {
    return [
      'button',
      `button--${this._variant()}`,
      `button--${this._size()}`,
      this._disabled() ? 'button--disabled' : '',
    ].join(' ');
  }
}
