import { Component } from '@angular/core';
import { LabelComponent } from "../../atoms/label/label.component";
import { DividerComponent } from "../../atoms/divider/divider.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [LabelComponent, DividerComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
