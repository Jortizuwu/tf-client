import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LinkComponent } from '../../atoms/link/link.component';

@Component({
  selector: 'app-layout-navbar',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
