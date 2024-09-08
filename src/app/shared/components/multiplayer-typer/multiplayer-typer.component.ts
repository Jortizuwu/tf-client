import { UserTypingService } from '../../services/UserTypingService.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage } from '../../models/match.model';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../ui/label/label.component';
import { OpponentComponent } from '../opponent-typer/opponent.component';
import { CaretComponent } from '../caret/caret.component';
import { CharacterComponent } from '../character/character.component';
import { RoomService } from '../../services/room.service';
@Component({
  selector: 'app-multiplayer-typer',
  standalone: true,
  imports: [
    LabelComponent,
    CommonModule,
    CaretComponent,
    CharacterComponent,
    OpponentComponent,
  ],
  templateUrl: './multiplayer-typer.component.html',
  styleUrl: './multiplayer-typer.component.css',
})
export class TyperMultiplayerComponent implements OnInit {
  text: string[] = [];
  focused = true;
  letters: string[] = [];

  messageInput: string = '';
  matchId: string = '';
  messageList: ChatMessage[] = [];

  constructor(
    private userTypingService: UserTypingService,
    private roomService: RoomService,
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
    this.sendMessage();
  }

  get getTextToWriteToString() {
    return this.userTypingService.getTextToWrite();
  }

  ngOnInit(): void {
    this.matchId = this.route.snapshot.params['id'];
    this.getMatchData();
    this.roomService.joinRoom(this.matchId);
    this.roomService.getMessageSubject().subscribe((messages: string) => {
      console.log({ messages });
      // this.text = messages.split('');
    });
  }

  sendMessage() {
    this.roomService.sendMessage(
      'f8183a7e-f91b-4e81-bef9-7123f9c76a28',
      this.text.join('')
    );
    this.messageInput = '';
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
