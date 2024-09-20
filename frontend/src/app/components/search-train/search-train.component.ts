import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-train',
  templateUrl: './search-train.component.html',
  styleUrl: './search-train.component.scss'
})
export class SearchTrainComponent implements OnInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  trainSearchForm!: FormGroup;
  filteredOptions!: string[];
  options: string[] = ['Indore', 'Ujjain'];

  constructor() {
    this.filteredOptions = this.options.slice();
  }

  ngOnInit(): void {
    this.trainSearchForm = new FormGroup({
      fromStation: new FormControl('', [Validators.required]), 
      toStation: new FormControl('', [Validators.required])
    })
  }

  findTrain(){
    console.log(this.trainSearchForm.value.toStation);
    
  }

  swapStation(){
    
  }
  

  filter(): void {
    console.log(this.input.nativeElement.value);
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }
}
