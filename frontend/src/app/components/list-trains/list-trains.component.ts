import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private commonService:CommonService, private route: ActivatedRoute) {
  }

  trains: Train[] = [];
  dates: string[] = ['Today', 'Tomorrow', 'Choose from Calendar'];
  selectedDate: string = 'Today';

  fromStation: string = '';
  toStation: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: any) => {
        this.trains = JSON.parse(params['trains']);
        this.fromStation = params['fromStation'];
        this.toStation = params['toStation'];
      }
    )
  }

}
