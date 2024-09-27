import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

interface Station {
  name: string;
  distance: number;
  platform: number;
  arrivalTime: string;
  departureTime: string;
  scheduledArrival?: string;
  scheduledDeparture?: string;
}

@Component({
  selector: 'app-train-status',
  templateUrl: './train-status.component.html',
  styleUrl: './train-status.component.scss'
})
export class TrainStatusComponent implements OnInit{
  state: any;
  trainNumber: string = '';
  fromDay: number = 0;
  train:any;
  upcomingStations:any;
  previousStations:any;

  stations: Station[] = [
    { name: 'Mathura Junction', distance: 1400, platform: 2, arrivalTime: '6:40 PM', departureTime: '6:45 PM', scheduledDeparture: '6:47 PM' },
    { name: 'Kosi Kalan', distance: 1442, platform: 3, arrivalTime: '7:08 PM', departureTime: '7:10 PM', scheduledArrival: '7:34 PM', scheduledDeparture: '7:39 PM' },
    { name: 'Faridabad', distance: 1513, platform: 2, arrivalTime: '8:35 PM', departureTime: '8:37 PM',scheduledArrival: '8:15 PM', scheduledDeparture: '8:30 PM' },
    { name: 'Hazrat Nizamuddin', distance: 1534, platform: 2, arrivalTime: '8:55 PM', departureTime: '8:57 PM', scheduledArrival: '8:56 PM', scheduledDeparture: '8:58 PM' }
  ];

  currentStationIndex = 1;

  constructor(private router: Router,
    private commonService: CommonService
  ) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
   if(this.state){
    this.trainNumber = this.state['trainNumber'];
    this.fromDay = this.state['fromDay'];
   }
   this.getTrainLiveStatus()

   
  }

  getTrainLiveStatus(){

    this.commonService.getTrainLiveStatus(this.trainNumber, this.fromDay).subscribe({
      next: (res: any) => {
        this.train = res
        this.train = this.train.data
        console.log(this.train);
        
        this.train['sta'] = this.train.cur_stn_sta;
        this.train['std'] = this.train.cur_stn_std;
        this.upcomingStations = res.data.upcoming_stations.slice(0,2)
        this.previousStations = res.data.previous_stations.slice(-2)
        // this.currentStationIndex = this.previousStations.length;
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('Train live status fetched successfully');
      }
    });
  }

  getTrainUpdates(){
    
  }
}
