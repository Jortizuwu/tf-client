import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private stompClient: any;
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  private roomId: string | null = null;
  constructor(private http: HttpClient) {
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
  private subscribeToRoom(roomId: string) {
    this.stompClient.subscribe(`/room/${roomId}`, (message: any) => {
      const messageContent = JSON.parse(message.body);
      this.messageSubject.next(messageContent);
    });
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
  sendMessage(roomId: string, message: string) {
    this.stompClient.send(`/match/room/${roomId}`, {}, JSON.stringify(message));
  }
  getMessageSubject() {
    return this.messageSubject.asObservable();
  }
}
