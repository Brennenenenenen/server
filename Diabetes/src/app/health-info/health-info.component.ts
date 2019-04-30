import { Component, OnInit } from '@angular/core';
import { DbdataService } from '../dbdata.service';
import { Drugs } from '../models/meds2.model';
import { Patients } from '../models/patients.model';

@Component({
  selector: 'app-health-info',
  templateUrl: './health-info.component.html',
  styleUrls: ['./health-info.component.scss']
})
export class HealthInfoComponent implements OnInit {

  meds2: Drugs[];
  people: Patients[];
  term: String;
  cls: String;
  price: String;
  type: String;
  act: String;
  searchterm: any;
  test: any;
  test2: any;

  constructor(private dbdatService: DbdataService) { }

  ngOnInit() {
    this.fetchMeds();
    this.fetchPeople();
  }

  SearchMeds() {

    this.fetchMeds();
    this.fetchPeople();
  

      if(this.meds2.find(x => x.Brand === this.term)){
        this.test = this.meds2.find(x => x.Brand === this.term);
        this.test2 == ""
      } else if (this.people.find(x => x.FirstN === this.term)) {
        this.test2 = this.people.find(x => x.FirstN === this.term);
        this.test == ""
      } else {
      }

  }
  
  fetchMeds() {
    this.dbdatService.getMeds().subscribe(
      (data: Drugs[]) => {
        this.meds2 = data;
    });
  }

  fetchPeople() {
    this.dbdatService.getPatients().subscribe(
      (data: Patients[]) => {
        this.people = data;
    });
  }
}
