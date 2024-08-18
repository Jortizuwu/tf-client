import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private stompClient: any;
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  private roomId: string | null = null;

  constructor() {
    this.initConnectionSocket();
  }

  private initConnectionSocket() {
    const url = '//localhost:8081/match/room';
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect(
      {},
      (frame: any) => {
        console.log('Connected: ' + frame);
        if (this.roomId) {
          this.subscribeToRoom(this.roomId);
        }
      },
      (error: any) => {
        console.error('STOMP connection error: ', error);
      }
    );
  }

  joinRoom(roomId: string) {
    this.roomId = roomId;
    if (this.stompClient && this.stompClient.connected) {
      this.subscribeToRoom(roomId);
    } else {
      this.stompClient.connect(
        {},
        (frame: any) => {
          console.log('Connected: ' + frame);
          this.subscribeToRoom(roomId);
        },
        (error: any) => {
          console.error('STOMP connection error: ', error);
        }
      );
    }
  }

  private subscribeToRoom(roomId: string) {
    this.stompClient.subscribe(`/room/${roomId}`, (message: any) => {
      const messageContent = JSON.parse(message.body);
      // const currentMessages = this.messageSubject.getValue();
      this.messageSubject.next(messageContent);
    });
  }

  sendMessage(roomId: string, message: string) {
    this.stompClient.send(`/match/room/${roomId}`, {}, JSON.stringify(message));
  }

  getMessageSubject() {
    return this.messageSubject.asObservable();
  }
}
