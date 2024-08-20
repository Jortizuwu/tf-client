import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserTypingService {
  private isUserTyping: boolean = false;
  private textUserTyping: string = '';
  private textToWrite: string =
    'Hola mundo desde mi casa un saludo a todos ustedes hola mundo desde mi casa un saludo a todos ustedes jsadkj akj sdkajhsd gakjsdhagksdjhagskd jahsdg akjshdgak jshdg akjshdgakjh';

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
