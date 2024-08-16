import { Component } from '@angular/core';
import { LinkComponent } from '../../atoms/link/link.component';

@Component({
  selector: 'layout-footer',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
