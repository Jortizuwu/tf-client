import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private timer = 30;

  public get() {
    return this.timer;
  }

  public setTimer(value: number) {
    this.timer = value;
  }

  public start() {
    if (this.timer > 0) {
      const interval = setInterval(() => {
        if (this.timer === 0) {
          clearInterval(interval);
          this.timer = 0;
        } else {
          this.timer--;
        }
      }, 1000);
    }
  }

  public stop() {
    this.timer = 0;
  }

  public reset() {
    this.timer = 0;
  }
}
