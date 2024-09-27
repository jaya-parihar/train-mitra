import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainInfoComponent } from '../train-info/train-info.component';
import { SortOption, Train } from '../../models/train';


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
  journyDate!: Date;
  trainClasses: object[] = [];
  seats: any = null;
  minDate: Date = new Date();
  loadingTrain: boolean = false;
  
  sortingOptions: SortOption[] = [
    { name:'Price', icon: 'currency_rupee'},
    { name: 'Early Departure', icon: 'wb_sunny' }, 
    { name: 'Late Departure', icon: 'wb_twilight' }, 
    { name: 'Early Arrival', icon: 'sunny' }, 
    { name: 'Late Arrival', icon: 'wb_twilight' }, 
  ]

  ngOnInit(): void {

    if(this.state){
      this.fromStation = this.state['fromStation'];
      this.toStation = this.state['toStation'];
      this.journyDate = this.state['journyDate'];
      
      this.getTrains();
    }
  }

  onDateChange(event: any){
    this.getTrains();
  }

  getTrains(){
    this.loadingTrain = true;
    this.commonService.searchTrainBetweenStation(this.fromStation, this.toStation, this.journyDate).subscribe(
      (res: any) => {
        this.trains = res.data;
        setTimeout(()=>{
          this.loadingTrain = false;
        }, 2000000)
        // this.trains.map(async (e: any) => {
        //   e['classes'] = await this.getTrainClasses(e.train_number);
        // })
      },(err) => {
        console.log(err);
      }
    )
  }

  getTrainDetails(trainNumber: string, fromDay: number) {
    this.router.navigate(['/train-live-status'], {state: {trainNumber, fromDay}});
  }
  modifySearch(){
    this.router.navigate(['/search-train'] , {state: {src: this.fromStation, dstn: this.toStation, date: this.journyDate}})
  }
  sortTrains(sortParam: SortOption){

  }

}
