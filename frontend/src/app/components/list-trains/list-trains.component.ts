import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Train {
  train_number: string;
  train_name: string;
  run_days: string[];
  train_src: string;
  train_dstn: string;
  from_std: string;
  from_sta: string  ;
  local_train_from_sta: number;
  to_sta: string;
  to_std: string;
  from_day: number;
  to_day: number;
  d_day: number;
  from: string;
  to: string;
  from_station_name: string;
  to_station_name: string;
  duration: string;
  special_train: boolean;
  train_type: string;
  train_date: string;
  class_type: string[];
}

@Component({
  selector: 'app-list-trains',
  templateUrl: './list-trains.component.html',
  styleUrl: './list-trains.component.scss'
})
export class ListTrainsComponent implements OnInit {
  constructor(private commonService:CommonService, 
    private router: Router) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }

  trains: Train[] = [];
  dates: string[] = ['Today', 'Tomorrow', 'Choose from Calendar'];
  selectedDate: string = 'Today';
  state: any;
  fromStation: string = '';
  toStation: string = '';

  ngOnInit(): void {
    if(this.state){
      this.trains = JSON.parse(this.state['trains']);
      this.fromStation = this.state['fromStation'];
      this.toStation = this.state['toStation'];
    }
  }

  getTrainDetails(trainNumber: string, fromDay: number) {
    this.router.navigate(['/train-live-status'], {state: {trainNumber, fromDay}});
  }


}
