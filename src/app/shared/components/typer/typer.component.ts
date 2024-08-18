import { UserTypingService } from './../../services/UserTypingService.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatchService } from './../../services/match.service';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage } from '../../models/match.model';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../atoms/label/label.component';
import { CaretComponent } from './caret/caret.component';
import { CharacterComponent } from './character/character.component';
import { keyframes } from '@angular/animations';
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

  messageInput: string = '';
  userId: string = '';
  messageList: ChatMessage[] = [];

  constructor(
    private userTypingService: UserTypingService,
    // private matchService: MatchService,
    private route: ActivatedRoute
  ) {
    this.letters = this.userTypingService.getTextToWrite().split('');
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
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
    // this.userId = this.route.snapshot.params['userId'];
    // const roomId = 'f8183a7e-f91b-4e81-bef9-7123f9c76a28';
    // this.matchService.joinRoom(roomId);
    // this.matchService.getMessageSubject().subscribe((messages: string) => {
    //   this.userType = messages;
    // });
  }

  sendMessage(message: string) {
    // this.matchService.sendMessage(
    //   'f8183a7e-f91b-4e81-bef9-7123f9c76a28',
    //   message
    // );
    // this.messageInput = '';
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }
}
