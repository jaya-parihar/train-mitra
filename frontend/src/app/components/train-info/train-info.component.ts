import { Component, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-train-info',
  templateUrl: './train-info.component.html',
  styleUrl: './train-info.component.scss'
})
export class TrainInfoComponent {
  @Input() train: any;
  @Input() status!: string;
  @Input() index!: number;
  currentTime: Date = new Date();
  private timeSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.timeSubscription = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }

  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  getTrainPosition(stationIndex: number): number {
    const currentStation = this.train[stationIndex];
    const nextStation = this.train[stationIndex + 1];
    console.log(currentStation);
    console.log(nextStation);
    const departureTime = this.parseTime(currentStation.departure);
    const arrivalTime = this.parseTime(nextStation.arrival);
    const currentTime = this.parseTime(this.currentTime.toTimeString().slice(0, 5));

    if (currentTime < departureTime || currentTime > arrivalTime) {
      return currentTime > arrivalTime ? 100 : 0;
    }

    const totalMinutes = this.getMinutesBetween(departureTime, arrivalTime);
    const elapsedMinutes = this.getMinutesBetween(departureTime, currentTime);
    
    return (elapsedMinutes / totalMinutes) * 100;
  }

  private parseTime(timeString: string): number {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  }

  private getMinutesBetween(start: number, end: number): number {
    return end - start;
  }

}
