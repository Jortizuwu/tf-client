import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserTypingService {
  private isUserTyping: boolean = false;
  private textUserTyping: string = '';
  private textToWrite: string =
    '';

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
}
