import { Component, OnInit } from '@angular/core';
import { Injectables } from '../models/inj.model';
import { DbdataService } from '../dbdata.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-inj-combo-class',
  templateUrl: './inj-combo-class.component.html',
  styleUrls: ['./inj-combo-class.component.css']
})
export class InjComboClassComponent implements OnInit {

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
