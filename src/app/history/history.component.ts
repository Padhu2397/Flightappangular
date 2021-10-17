import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightappserviceService } from '../flightappservice.service';
import { Ticket } from '../Ticket';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  headers = ["pnr", "airline_name", "email_id", "end_time_stamp", "flight_no", "from_place", "meal", "start_time_stamp", "ticket_cost", "to_place", "total_cost", "total_seat", "user_name"];
  // index = ["pnr", "airline_name", "email_id", "end_time_stamp", "flight_no", "from_place", "meal", "start_time_stamp", "ticket_cost", "to_place", "total_cost", "total_seat", "user_name"];
  
  ticket!: Ticket[];
  
  
  
  formGroup!: FormGroup;
  
  constructor(private service: FlightappserviceService, private router: Router) { }
    ngOnInit() {
      this.intiForm();
      
       }
    intiForm()
    {
             this.formGroup = new FormGroup({
               
                email_id: new FormControl('',[Validators.required]),
                
             })
    }
    
    historyProcess()
    {
      if(this.formGroup.valid){
           this.service.history(this.formGroup.value).subscribe(result=>{
            this.ticket = result; 
             },err=>
             
             {
              alert("No Pnr Matches");
             }
           )
      }
    }

    cancelProcess()
    {
      if(this.formGroup.valid){
           this.service.cancel(this.formGroup.value).subscribe(result=>{
            alert("ticket canceled");

          },err=>
             
             {
              alert("could not able to cancel");
             }
           )
      }
    }

  }
  