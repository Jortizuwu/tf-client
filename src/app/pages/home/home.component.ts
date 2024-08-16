import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/atoms/button/button.component';
import { LabelComponent } from '../../shared/components/atoms/label/label.component';
import { DividerComponent } from "../../shared/components/atoms/divider/divider.component";
import { TyperComponent } from "../../shared/components/typer/typer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, LabelComponent, DividerComponent, TyperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
