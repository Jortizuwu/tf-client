import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/atoms/button/button.component';
import { LabelComponent } from '../../shared/components/atoms/label/label.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, LabelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
