import { Component, HostListener, OnInit } from '@angular/core';
import { UserTypingService } from '../../services/UserTypingService.service';
import { NgClass, NgFor } from '@angular/common';
import { CharacterComponent } from '../character/character.component';
import { CaretComponent } from '../caret/caret.component';

@Component({
  selector: 'app-opponent',
  standalone: true,
  imports: [CharacterComponent, CaretComponent, NgClass, NgFor],
  templateUrl: './opponent.component.html',
  styleUrl: './opponent.component.css',
})
export class OpponentComponent implements OnInit {
  text: string[] = [];
  letters: string[] = [];

  constructor(private userTypingService: UserTypingService) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (
      this.text.length === this.userTypingService.getTextToWrite().length &&
      event.key !== 'Backspace'
    ) {
      return;
    }

    const ignoreKeys = [
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Control',
      'Alt',
      'Shift',
      'Meta',
      'CapsLock',
      'NumLock',
      'ScrollLock',
      'PrintScreen',
      'Pause',
      'Insert',
      'Home',
      'End',
      'PageUp',
      'PageDown',
      'Tab',
      'Enter',
      'Escape',
      'Space',
    ];

    if (ignoreKeys.includes(event.key)) {
      return;
    }

    if (event.key === 'Backspace') {
      this.text.pop();
    } else {
      this.text.push(event.key);
    }

    this.userTypingService.setTextUserTyping(this.text.join(''));
  }

  ngOnInit(): void {}
}
