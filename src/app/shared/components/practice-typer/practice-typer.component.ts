import { UserTypingService } from '../../services/UserTypingService.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../ui/label/label.component';
import { OpponentComponent } from '../opponent-typer/opponent.component';
import { CaretComponent } from '../caret/caret.component';
import { CharacterComponent } from '../character/character.component';

const LOCAL_QUOTES = [
  'Hello, how are you?',
  "What's up?",
  'Good morning!',
  'Good afternoon!',
  'Good evening!',
  'How are you doing?',
  "What's up?",
  "I'm good. How are you?",
  "I'm good. What's up?",
  "I'm good. Good morning!",
];

@Component({
  selector: 'app-practice-typer',
  standalone: true,
  imports: [
    LabelComponent,
    CommonModule,
    CaretComponent,
    CharacterComponent,
    OpponentComponent,
  ],
  templateUrl: './practice-typer.component.html',
  styleUrl: './practice-typer.component.css',
})
export class TyperPracticeComponent implements OnInit {
  text: string[] = [];
  focused = true;
  letters: string[] = [];

  constructor(private userTypingService: UserTypingService) {}

  ngOnInit(): void {
    this.startPractice();
  }

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

  get getTextToWriteToString() {
    return this.userTypingService.getTextToWrite();
  }

  startPractice() {
    const randomIndex = Math.floor(Math.random() * LOCAL_QUOTES.length);
    this.userTypingService.setTextToWrite(LOCAL_QUOTES[randomIndex]);
    this.letters = LOCAL_QUOTES[randomIndex].split('');
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }
}
