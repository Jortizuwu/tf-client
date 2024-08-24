import { Component } from '@angular/core';
import { LabelComponent } from '../../shared/components/ui/label/label.component';
import { DividerComponent } from '../../shared/components/ui/divider/divider.component';
import { TyperComponent } from '../../shared/components/typer/typer.component';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [LabelComponent, DividerComponent, TyperComponent],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css',
})
export class PracticeComponent {}
