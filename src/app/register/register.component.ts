import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightappserviceService } from '../flightappservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private service: FlightappserviceService, private router: Router) { }
    ngOnInit() {
      this.intiForm();
       }
    intiForm()
    {
             this.formGroup = new FormGroup({
               
                userName: new FormControl('',[Validators.required]),
                passWord: new FormControl('',[Validators.required]),
                emailId: new FormControl('',[Validators.required])
               
             })
    }
    
    registerProcess()
    {
      if(this.formGroup.valid){
           this.service.register(this.formGroup.value).subscribe(result=>{
               alert("Registered successfully");
               this.formGroup.reset();
               this.router.navigate(['login']);
             },err=>
             
             {
              alert("Something went wrong");
             }
           )
      }
    }
  }