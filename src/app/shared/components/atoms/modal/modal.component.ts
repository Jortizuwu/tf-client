import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  constructor(private modalService: ModalService) {}

  get isModalOpen() {
    return this.modalService.getModalStatus() ? 'flex' : 'none';
  }

  onClick() {
    this.modalService.onModalAction(false);
  }
}
