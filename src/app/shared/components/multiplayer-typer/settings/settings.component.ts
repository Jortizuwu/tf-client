import { Component } from '@angular/core';
import { LabelComponent } from '../../ui/label/label.component';
import { DividerComponent } from '../../ui/divider/divider.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [LabelComponent, DividerComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {}
