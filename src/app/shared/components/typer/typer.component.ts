import { UserTypingService } from './../../services/UserTypingService.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatchService } from './../../services/match.service';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage } from '../../models/match.model';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../atoms/label/label.component';
import { CaretComponent } from './caret/caret.component';
import { CharacterComponent } from './character/character.component';
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
  letters: string[] = [];
  isPractice: boolean = false;

  messageInput: string = '';
  matchId: string = '';
  messageList: ChatMessage[] = [];

  constructor(
    private userTypingService: UserTypingService,
    private matchService: MatchService,
    private route: ActivatedRoute
  ) {}

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
    // this.sendMessage(this.userType);
  }

  get getTextToWriteToString() {
    return this.userTypingService.getTextToWrite();
  }

  ngOnInit(): void {
    this.isPracticeMode();
    if (!this.isPractice) {
      this.matchId = this.route.snapshot.params['id'];
      this.getMatchData();
      // const roomId = 'f8183a7e-f91b-4e81-bef9-7123f9c76a28';
    }

    // this.matchService.joinRoom(roomId);
    // this.matchService.getMessageSubject().subscribe((messages: string) => {
    //   this.userType = messages;
    // });
  }

  isPracticeMode() {
    const id = this.route.snapshot.params['id'];

    if (!id) {
      this.isPractice = true;
    }
  }

  sendMessage(message: string) {
    // this.matchService.sendMessage(
    //   'f8183a7e-f91b-4e81-bef9-7123f9c76a28',
    //   message
    // );
    // this.messageInput = '';
  }

  getMatchData() {
    this.matchService.getMatch(this.matchId).subscribe(data => {
      if (
        data &&
        data.data &&
        data.data.quotes &&
        data.data.quotes.length > 0
      ) {
        const quote = data.data.quotes[0];
        if (quote && quote.content) {
          this.userTypingService.setTextToWrite(quote.content);
          this.letters = quote.content.split('');
        }
      }
    });
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }
}
