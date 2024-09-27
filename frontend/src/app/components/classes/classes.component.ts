import { Component, Input } from '@angular/core';
import { Fare, Seats, Train } from '../../models/train';
import { CommonService } from '../../services/common.service';



@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {
  @Input() trainClass!: string;
  @Input() train!: Train;
  seats!: Seats;
  fare!: Fare;

  constructor(private service: CommonService){}

  getFare(trainDetails: object){
    this.service.getFare(trainDetails).subscribe(
      (res: any) => {
        this.fare = res.data;
      },(err) => {
        console.log(err);
      }
    )
  }

  getSeatAvailability(trainDetails: object){
    this.service.getSeatAvailability(trainDetails).subscribe(
      (res: any) => {
        let i = 0;
        res.data[i].current_status = res.data[i].current_status.split('/')[1].split('.')[0];
        this.seats = res.data[i];
      },(err : any) =>{
        console.log(err)
      }
    )
  }

  getSeatAvailabilityAndFare(classType: string,event: any){
    event.stopPropagation();
    let obj = {
      "classType": classType,
      "fromStationCode": this.train.train_src,
      "quota": "GN",
      "toStationCode": this.train.train_dstn,
      "trainNo": this.train.train_number
    }

    this.getSeatAvailability(obj);
    this.getFare(obj); 
  }
}
