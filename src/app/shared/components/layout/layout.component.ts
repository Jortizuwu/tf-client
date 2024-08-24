import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from '../ui/button/button.component';
import { ModalComponent } from '../ui/modal/modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    ModalComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  constructor(private modalService: ModalService) {}
  onClick() {
    this.modalService.onModalAction(true);
  }
}
