import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { FlightappserviceService } from '../flightappservice.service';

@Component({
  selector: 'app-searchhome',
  templateUrl: './searchhome.component.html',
  styleUrls: ['./searchhome.component.css']
})
export class SearchhomeComponent implements OnInit {

  formGroup!: FormGroup;

  
  headers = [

     
  "flightNo",  

  "airlineName",  
    
     "fromPlace",
    "toPlace",
    "startTimeStamp",
   "endTimeStamp",
  "businessSeat",
  "nBusinessSeat",
  "ticketCost",
   "meal"
  ]
  book!: Booking[];
  

  constructor(private service: FlightappserviceService, private router: Router) { }

  ngOnInit(): void {
    this.intiForm();
       }
    intiForm()
    {
             this.formGroup = new FormGroup({
               
                fromPlace: new FormControl('',[Validators.required]),
                toPlace: new FormControl('',[Validators.required]),
                StartDate: new FormControl('',[Validators.required])
               
             })
    }
    
    
  searchProcess()
    {
      if(this.formGroup.valid){
           this.service.search(this.formGroup.value).subscribe(result=>{
               this.formGroup.reset();
               this.router.navigate(['/search']);
             },err=>
             {
              alert("Something went wrong");
             }
           )
      }
    }

    bookProcess()
    {
      if(this.formGroup.valid){
           this.service.book(this.formGroup.value).subscribe(result=>{
               this.router.navigate(['/search']);
             },err=>
             {
              alert("Something went wrong");
             }
           )
      }
    }
  }


