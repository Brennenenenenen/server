import { Component, OnInit } from '@angular/core';
import {  DbdataService } from '../dbdata.service';
import {  Inhalables } from '../models/inh.model';
import { ActivatedRoute } from "@angular/router";
import { Drugs } from '../models/meds2.model';

@Component({
  selector: 'app-inhalables',
  templateUrl: './inhalables.component.html',
  styleUrls: ['./inhalables.component.css']
})
export class InhalablesComponent implements OnInit {

  inh: Inhalables[]
  meds: Drugs[];
  drugs;

  constructor(private route: ActivatedRoute, private service: DbdataService) {
    this.route.params.subscribe(params => this.drugs = params.id);
   }
  ngOnInit() {

    this.fetchMeds();

  }

  fetchMeds() {
    this.service.getMeds().subscribe(
      (data: Drugs[]) => {
        this.meds = data;
      }
    );
  }


}
