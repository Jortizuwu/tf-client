import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css',
})
export class TypographyComponent {
  @Input() type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small' = 'p';
  @Input() label: string = '';
}
