import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { DbdataService } from '../dbdata.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Patients } from '../models/patients.model';
import { gvars } from '../variables';
import { MatSnackBar } from '@angular/material';
import { patientHistory } from '../models/patientHistory.model'

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {


  people: Patients[];
  patient;
  cart: Cart[];
  phistory: patientHistory[];

  constructor(private route: ActivatedRoute, private dbdatService: DbdataService, private snackBar: MatSnackBar, private router: Router) {
    this.route.params.subscribe(params => this.patient = params.id);
  }



  ngOnInit(): void {
    this.fetchpatients();
    this.getHistory();
  }

  getHistory() {
    this.dbdatService.getHistory(this.patient).subscribe(
      (data: patientHistory[]) => {
        this.phistory = data;
    });
  }

    
  fetchpatients() {
    this.dbdatService.getPatients().subscribe(
      (data: Patients[]) => {
        this.people = data;
      }
    );
  }

  Delete(id) {
    var con = confirm("Are you sure you would like to delete this patient?");
    if (con == true) {
      this.dbdatService.deletepatientbyid(id).subscribe(() => {
        this.router.navigate(['/patients']);
      });
    } else {
      return;
    }
    
  }
  

  SetVars(first, middle, last) {
    gvars.patient = first + middle + last;
    alert("Patient selected")
  }

  public imagePath;
  url: string;
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result; //add source to image
        
      }
    }
     }
  public delete(){
    this.url = null;
  }
  
  

  
}


