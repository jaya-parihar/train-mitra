import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainInfoComponent } from '../train-info/train-info.component';

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
  trainClasses: object[] = [];
  seats: any = null;

  ngOnInit(): void {

    if(this.state){
      this.fromStation = this.state['fromStation'];
      this.toStation = this.state['toStation'];
      this.getTrains();
    }
  }

  getTrains(){
    this.commonService.searchTrainBetweenStation(this.fromStation, this.toStation).subscribe(
      (res: any) => {
        this.trains = res.data;
        // this.trains.map(async (e: any) => {
        //   e['classes'] = await this.getTrainClasses(e.train_number);
        // })
      },(err) => {
        console.log(err);
      }
    )
  }

  // getTrainClasses(trainNumber: string){
  //   this.commonService.getTrainClasses(trainNumber).subscribe(
  //     (res: any) => {
  //       return res.data;
  //     },(err) => {
  //       console.log(err);
  //     }
  //   )
  // }

  getTrainDetails(trainNumber: string, fromDay: number) {
    this.router.navigate(['/train-live-status'], {state: {trainNumber, fromDay}});
  }

  checkSeatAvailability(train: Train, classType: string, event: any){
    event.stopPropagation();
    let obj = {
      "classType": classType,
      "fromStationCode": train.train_src,
      "quota": "GN",
      "toStationCode": train.train_dstn,
      "trainNo": train.train_number
    }
    this.commonService.getSeatAvailability(obj).subscribe(
      (res: any) => {
        // train["class_type"] = [...train.class_type, res.data[0].current_status]
        // console.log(train["class_type"])


          // console.log(train[class_type[classType]])
          // classType["seats"] = res.data[0];
          // this.seats = res.data[0];
          console.log(this.seats);
          console.log(this.seats.length);
          
      },(err : any) =>{
        console.log(err)
      }
    )
  }


}
