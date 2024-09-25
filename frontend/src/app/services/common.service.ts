import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000";

  searchStation(station:string){
    return this.http.post(`${this.baseUrl}/searchStation`, {station});
  }

  searchTrainBetweenStation(fromStation:string, toStation:string) {
    return this.http.post(`${this.baseUrl}/getTrainBetStations`, {fromStation, toStation})
  }

  getTrainLiveStatus(trainNumber:string, fromDay:number){
    return this.http.post(`${this.baseUrl}/getTrainLiveStatus`, {trainNumber, fromDay})
  }

  getTrainClasses(trainNumber:string){
    return this.http.post(`${this.baseUrl}/getTrainClasses`, {trainNumber})
  }

  getSeatAvailability(trainDetails:any){
    return this.http.post(`${this.baseUrl}/checkSeatAvailability`, {trainDetails})
  }

}
