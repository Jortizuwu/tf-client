import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalIsOpen = false;

  constructor() {}

  onModalAction(value: boolean) {
    this.modalIsOpen = value;
  }

  getModalStatus() {
    return this.modalIsOpen;
  }
}
