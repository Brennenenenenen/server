import { Component, OnInit } from '@angular/core';
import{ DbdataService } from '../dbdata.service';
import { Injectables } from '../models/inj.model';
import { ActivatedRoute } from "@angular/router";
import { Drugs } from '../models/meds2.model';


@Component({
  selector: 'app-injectables',
  templateUrl: './injectables.component.html',
  styleUrls: ['./injectables.component.css']
})
export class InjectablesComponent implements OnInit {

  inj: Injectables[];
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
