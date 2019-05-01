import { Component, OnInit } from '@angular/core';
import { Injectables } from '../models/inj.model';
import { DbdataService } from '../dbdata.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-oral-combo-class',
  templateUrl: './oral-combo-class.component.html',
  styleUrls: ['./oral-combo-class.component.css']
})
export class OralComboClassComponent implements OnInit {

  inj: Injectables[];
  drugs;

  constructor(private route: ActivatedRoute, private service: DbdataService) {
    this.route.params.subscribe(params => this.drugs = params.id);
   }

  ngOnInit() {
    //this.fetchTest();
  }

  fetchTest(){
    this.service.getTest().subscribe( 
      (data: Injectables[]) => {
        this.inj = data;
        console.log(this.inj);
      }
    );
  }
}
