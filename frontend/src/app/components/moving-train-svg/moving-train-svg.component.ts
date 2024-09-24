import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moving-train-svg',
  templateUrl: './moving-train-svg.component.html',
  styleUrl: './moving-train-svg.component.scss'
})
export class MovingTrainSvgComponent {
  @Input() fromStation: string = '';
  @Input() toStation: string = '';

}
