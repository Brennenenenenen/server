import { Component, OnInit } from '@angular/core';
import{ DbdataService } from '../dbdata.service';
import { ActivatedRoute } from "@angular/router";
import { Drugs } from '../models/meds2.model';

@Component({
  selector: 'app-oral-combo-info',
  templateUrl: './oral-combo-info.component.html',
  styleUrls: ['./oral-combo-info.component.css']
})
export class OralComboInfoComponent implements OnInit {

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
    )
  }
}
