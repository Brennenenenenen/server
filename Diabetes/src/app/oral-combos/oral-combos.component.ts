import { Component, OnInit } from '@angular/core';
import { Combos } from '../models/combos.model';
import { DbdataService } from '../dbdata.service';

@Component({
  selector: 'app-oral-combos',
  templateUrl: './oral-combos.component.html',
  styleUrls: ['./oral-combos.component.scss']
})
export class OralCombosComponent implements OnInit {

  meds: Combos[];

  constructor(private dbdatService: DbdataService) { }

  ngOnInit() {
    this.fetchMeds();
  }


  fetchMeds() {
    this.dbdatService.getCombos().subscribe(
      (data: Combos[]) => {
        this.meds = data;
        //this.jsonObject = JSON.parse(data);
        console.log('data requested ...');
        console.log(this.meds);
      }
    );
  }

}
