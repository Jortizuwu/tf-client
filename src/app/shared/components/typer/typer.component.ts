import { Component, HostListener, Input, OnInit } from '@angular/core';
import { LabelComponent } from '../atoms/label/label.component';
import { CommonModule } from '@angular/common';
import { CaretComponent } from './caret/caret.component';
import { CharacterComponent } from './character/character.component';

const ingnoreKeys = [
  'Backspace',
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

@Component({
  selector: 'app-typer',
  standalone: true,
  imports: [LabelComponent, CommonModule, CaretComponent, CharacterComponent],
  templateUrl: './typer.component.html',
  styleUrl: './typer.component.css',
})
export class TyperComponent implements OnInit {
  text: string[] = [];
  focused = true;
  private textToWrite: string = 'Hola mundo desde mi casa';
  letters: string[] = [];

  constructor() {
    this.letters = this.textToWrite.split('');
  }
  ngOnInit(): void {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.text.length > 0 && event.key === 'Backspace') {
      this.text.pop();
    }

    if (ingnoreKeys.includes(event.key)) {
      return;
    }

    this.text.push(event.key);
  }

  getLengthOfWordOftype(position: number) {
    return this.textToWrite[position].length;
  }

  get getTextToWriteToString() {
    return this.textToWrite;
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = true;
  }
}
