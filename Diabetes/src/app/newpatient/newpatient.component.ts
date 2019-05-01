import { Component, OnInit } from '@angular/core';
import { DbdataService } from '../dbdata.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gvars } from '../variables';

@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css']
})
export class NewpatientComponent implements OnInit {

  createForm: FormGroup;
  user = gvars.username;

  constructor(private dbDataService: DbdataService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      fname: ['', Validators.required], 
      lname: ['', Validators.required],
      mname: '',
      dob: ['', Validators.required],
      ssn: ['', Validators.required],
      phone: '',
      weight: '',
      height: '',
      gender: Validators.required,
    });
   }

   addpatient(fname, lname, mname, dob, ssn, phone, weight, height, gender){
     this.dbDataService.addPatient(fname, lname, mname, dob, ssn, phone, weight, height, this.user, gender).subscribe(() => {
       console.log(gender);
       this.router.navigate(['/patients']);
     });

   }

 

  ngOnInit() {
  }

}
