import { Component, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-train-info',
  templateUrl: './train-info.component.html',
  styleUrl: './train-info.component.scss'
})

export class TrainInfoComponent implements OnInit {
  @Input() train: any;
  @Input() isCurrentStation!: string;
  @Input() isStation!: boolean;
  isPrevStation: boolean = true;
  count: number = 1;
  constructor() { }

    ngOnInit(): void {
    }

}
