import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LinkComponent } from "../../atoms/link/link.component";

@Component({
  selector: 'layout-navbar',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {}
}
