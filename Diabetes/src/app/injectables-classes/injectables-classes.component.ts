import { Component, OnInit } from '@angular/core';
import { Injectables } from '../models/inj.model';
import { DbdataService } from '../dbdata.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-injectables-classes',
  templateUrl: './injectables-classes.component.html',
  styleUrls: ['./injectables-classes.component.css']
})
export class InjectablesClassesComponent implements OnInit {

  inj: Injectables[];
  drugs;

  constructor(private route: ActivatedRoute, private service: DbdataService) {
    this.route.params.subscribe(params => this.drugs = params.id);
   }

  ngOnInit() {
  }



}
