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

  date = new Date();
  state: any;

  constructor(private commonService:CommonService, 
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.filteredOptions = this.options.slice();
    this.state = this.router.getCurrentNavigation()?.extras.state;

    this.trainSearchForm = new FormGroup({
      fromStation: new FormControl('', [Validators.required]), 
      toStation: new FormControl('', [Validators.required]),
      journyDate: new FormControl('', []),
    })

  }

  ngOnInit(): void {
    console.log(this.trainSearchForm.value.journyDate);
    

    if(this.state){
      console.log(this.state);
      
      this.trainSearchForm.patchValue({
        fromStation: this.state['src'],
        toStation: this.state['dstn'],
        journyDate: this.state['date']})
    }
        
        
    console.log(this.trainSearchForm.value.journyDate);
    
    this.trainSearchForm.value.journyDate ? this.setDefaultSearchDate(this.trainSearchForm.value.journyDate): '';
    console.log(this.trainSearchForm.value.journyDate);
    
  }

  setDefaultSearchDate(date = new Date()){
    this.trainSearchForm.patchValue({
      journyDate: date,
    })
  }

  findTrain(){
    this.router.navigate(['/trains'], {state: { fromStation: this.trainSearchForm.value.fromStation, toStation: this.trainSearchForm.value.toStation, journyDate: this.trainSearchForm.value.journyDate }});
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
