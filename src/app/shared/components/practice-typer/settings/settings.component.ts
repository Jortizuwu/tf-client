import { TimerService } from './../../../services/timer.service';
import { Component } from '@angular/core';
import { LabelComponent } from '../../ui/label/label.component';
import { DividerComponent } from '../../ui/divider/divider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typer-practice-settings',
  standalone: true,
  imports: [LabelComponent, DividerComponent, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsPracticeComponent {
  public timers: string[] = ['30', '60', '120'];

  constructor(private timerService: TimerService) {}

  onCLick(value: string) {
    this.timerService.setTimer(+value);
  }

  isActive(value: string) {
    return this.timerService.get() === +value;
  }
}
