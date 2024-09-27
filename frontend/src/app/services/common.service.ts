import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fare } from '../models/train';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000";

  searchStation(station:string){
    return this.http.post(`${this.baseUrl}/searchStation`, {station});
  }

  searchTrainBetweenStation(fromStation:string, toStation:string, journyDate: Date) {
    return this.http.post(`${this.baseUrl}/getTrainBetStations`, {fromStation, toStation, journyDate})
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

  getFare(trainDetails: object): Observable<Fare>{
    return this.http.post<Fare>(`${this.baseUrl}/getFare`, {trainDetails})
  }

}
