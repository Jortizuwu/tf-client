import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserTypingService {
  private isUserTyping: boolean = false;
  private textUserTyping: string = '';
  private textToWrite: string = '';

  private opponentIsTyping: boolean = false;
  private opponentTextUserTyping: string = '';
  private opponentTextToWrite: string = '';

  constructor() {}

  setIsUserTyping(isUserTyping: boolean) {
    this.isUserTyping = isUserTyping;
  }

  getIsUserTyping(): boolean {
    return this.isUserTyping;
  }

  setTextUserTyping(textUserTyping: string) {
    this.textUserTyping = textUserTyping;
  }

  getTextUserTyping(): string {
    return this.textUserTyping;
  }

  setTextToWrite(textToWrite: string) {
    this.textToWrite = textToWrite;
  }

  getTextToWrite(): string {
    return this.textToWrite;
  }

  setIsOpponentTyping(isOpponentTyping: boolean) {
    this.opponentIsTyping = isOpponentTyping;
  }

  getIsOpponentTyping(): boolean {
    return this.opponentIsTyping;
  }

  setTextOpponentTyping(textOpponentTyping: string) {
    this.opponentTextUserTyping = textOpponentTyping;
  }

  getTextOpponentTyping(): string {
    return this.opponentTextUserTyping;
  }

  setTextOpponentToWrite(textOpponentToWrite: string) {
    this.opponentTextToWrite = textOpponentToWrite;
  }

  getTextOpponentToWrite(): string {
    return this.opponentTextToWrite;
  }
}
