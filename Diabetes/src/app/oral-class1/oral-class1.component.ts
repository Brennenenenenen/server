import { Component, OnInit } from '@angular/core';
import { Drugs } from '../models/meds2.model';
import { DbdataService } from '../dbdata.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-oral-class1',
  templateUrl: './oral-class1.component.html',
  styleUrls: ['./oral-class1.component.scss'],
})
export class OralClass1Component implements OnInit {

  meds2: Drugs[];
  drugs;


  constructor(private route: ActivatedRoute, private dbdatService: DbdataService) {
    this.route.params.subscribe(params => this.drugs = params.id);
  }

  ngOnInit() {
    this.fetchMeds();
    console.log(this.drugs);
  }
  
  
  fetchMeds() {
    this.dbdatService.getMeds().subscribe(
      (data: Drugs[]) => {
        this.meds2 = data;
      }
    );
  }

}
