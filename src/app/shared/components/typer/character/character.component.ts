import { UserTypingService } from './../../../services/UserTypingService.service';
import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CaretComponent } from '../caret/caret.component';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, CaretComponent],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit, OnChanges {
  @Input() letter: string = '';
  @Input() index: number = 0;
  @Input() text: string[] = [];
  @Input() isMain: boolean = false;

  textToWrite: string = '';
  isSpace: boolean = false;

  isCorrectCharacter: boolean = false;
  isErrorSpace: boolean = false;

  constructor(private userTypingService: UserTypingService) {
    this.textToWrite = this.userTypingService.getTextToWrite();
  }

  ngOnInit(): void {
    this.updateIsSpace();
    this.updateCharacterStatus();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['letter'] || changes['index'] || changes['text'] || changes['isMain']) {
      this.updateIsSpace();
      this.updateCharacterStatus();
    }
  }

  updateCharacterStatus(): void {
    this.isCorrectCharacter = this.checkCorrectCharacter();
    this.isErrorSpace = this.isSpace && this.isCorrectCharacter;
  }

  updateIsSpace(): void {
    this.isSpace = this.letter === ' ';
  }

  checkCorrectCharacter(): boolean {
    const isCorrect = this.text[this.index] === this.letter;
    if (this.isMain) {
      this.letter = this.textToWrite.split('')[this.index];
    }
    return isCorrect;
  }
}
