import { Component } from '@angular/core';
import { LinkComponent } from '../../ui/link/link.component';

@Component({
  selector: 'app-layout-footer',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
