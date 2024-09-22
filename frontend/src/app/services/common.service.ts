import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000";

  searchStation(station:string){
    return this.http.get(`${this.baseUrl}/searchStation?station=${station}`);
  }

  searchTrainBetweenStation(fromStation:string, toStation:string) {
    return this.http.get(`${this.baseUrl}/getTrainBetStations?fromStation=${fromStation}&toStation=${toStation}`)
  }
}
