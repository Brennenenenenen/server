import { Component, OnInit } from '@angular/core';
import{ DbdataService } from '../dbdata.service';
import { ActivatedRoute } from "@angular/router";
import { Drugs } from '../models/meds2.model';

@Component({
  selector: 'app-action-select',
  templateUrl: './action-select.component.html',
  styleUrls: ['./action-select.component.css']
})
export class ActionSelectComponent implements OnInit {

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
