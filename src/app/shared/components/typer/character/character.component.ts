import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent implements OnInit {
  @Input()
  letter: string = '';

  @Input()
  index: number = 0;

  @Input()
  text: string[] = [];

  isSpace: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.letter === ' ') {
      this.isSpace = true;
    }
  }

  checkCorrectCharacter() {
    return this.text[this.index] === this.letter;
  }
}
