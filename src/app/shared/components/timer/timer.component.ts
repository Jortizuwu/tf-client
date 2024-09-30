import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  constructor(private timerService: TimerService) {}

  get timer() {
    return this.timerService.get();
  }
}
