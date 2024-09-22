import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';


export interface Station{
  name: string;
  code: string;
  state_name: string;
  eng_name: string;
} 

@Component({
  selector: 'app-search-train',
  templateUrl: './search-train.component.html',
  styleUrl: './search-train.component.scss'
})


export class SearchTrainComponent implements OnInit {
  @ViewChild('input1') input1!: ElementRef<HTMLInputElement>;
  @ViewChild('input2') input2!: ElementRef<HTMLInputElement>;
  trainSearchForm!: FormGroup;
  filteredOptions!: Station[];
  options: Station[] = [];

  constructor(private commonService:CommonService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filteredOptions = this.options.slice();
  }

  ngOnInit(): void {
    
    this.trainSearchForm = new FormGroup({
      fromStation: new FormControl('', [Validators.required]), 
      toStation: new FormControl('', [Validators.required])
    })

    this.route.queryParams.subscribe(
      (params: any) => {
        this.trainSearchForm.patchValue({
          fromStation: params['src'],
          toStation: params['dstn']
        })
      }
    ) 
  }

  findTrain(){
    this.commonService.searchTrainBetweenStation(this.trainSearchForm.value.fromStation, this.trainSearchForm.value.toStation).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/trains'], { queryParams: { trains: JSON.stringify(res.data), fromStation: this.trainSearchForm.value.fromStation, toStation: this.trainSearchForm.value.toStation } });
      },(err) => {
        console.log(err);
      }
    )
  }

  swapStation(){
    this.trainSearchForm.patchValue({
      fromStation: this.trainSearchForm.value.toStation,
      toStation: this.trainSearchForm.value.fromStation
    })  
  }
  

  filter(input:any): void {
    // console.log(`${this.input}`.nativeElement.value);
    if(input == 'input1'){
      console.log(this.input1.nativeElement.value);
      if(this.input1.nativeElement.value.length > 0){
        this.commonService.searchStation(this.input1.nativeElement.value).subscribe((res:any)=>{
          
          this.options = [];
          this.options = res.data;
          this.filteredOptions = this.options.slice();
  
          const filterValue = this.input1.nativeElement.value.toLowerCase();
          this.filteredOptions = this.options?.filter((o : Station) => o.name.toLowerCase().includes(filterValue));
          
        })
      } else {
        this.filteredOptions = this.options.slice();
      }
      
    }
    else if(input == 'input2'){
      console.log(this.input2.nativeElement.value);
      if(this.input2.nativeElement.value.length > 0){
        this.commonService.searchStation(this.input2.nativeElement.value).subscribe((res:any)=>{
          console.log(res);
          this.options = [];
          this.options = res.data;
          this.filteredOptions = this.options.slice();
  
          const filterValue = this.input2.nativeElement.value.toLowerCase();
          this.filteredOptions = this.options?.filter((o : Station) => o.name.toLowerCase().includes(filterValue));
          
        })
      } else {
        this.filteredOptions = this.options.slice();
      }
      
    }
    
    
  }
}
