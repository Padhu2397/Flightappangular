import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightappserviceService } from '../flightappservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class HomeComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private service: FlightappserviceService,private router: Router) { }
    ngOnInit() {
      this.intiForm();
       }
    intiForm()
    {
             this.formGroup = new FormGroup({
               
                userName: new FormControl('',[Validators.required]),
                passWord: new FormControl('',[Validators.required])
               
             })
    }
    loginProcess()
    {
      if(this.formGroup.valid){
           this.service.login(this.formGroup.value).subscribe(result=>{
             
               alert("Logged in successfully");
               this.formGroup.reset();
               this.router.navigate(['userhome']);
             },err=>
             
             {
              alert("Something went wrong");
             }
           )
      }
    }
  }