import { Component, OnInit } from '@angular/core';
import { Inhalables } from '../models/inh.model';
import { DbdataService } from '../dbdata.service';
import { ActivatedRoute } from "@angular/router";
import { Cart } from '../models/cart';
import { MatSnackBar } from '@angular/material';
import { gvars } from '../variables';
import { Drugs } from '../models/meds2.model';

@Component({
  selector: 'app-action-medications',
  templateUrl: './action-medications.component.html',
  styleUrls: ['./action-medications.component.css']
})
export class ActionMedicationsComponent implements OnInit {

  cart: Cart[];
  inh: Inhalables[];
  meds: Drugs[];
  drugs;

  pname = gvars.patient;

  constructor(private route: ActivatedRoute, private service: DbdataService, private snackBar: MatSnackBar) {
    this.route.params.subscribe(params => this.drugs = params.meds);
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

  /*addtocart(Drugs, Price, Cdate) {
    this.service.addCart(Drugs, Price, Cdate, this.pname).subscribe(() => {
      //this.router.navigate(['/patients']);
      this.snackBar.open('Item added to cart', 'OK', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
    
  }*/

}
