import { Component, OnInit } from '@angular/core';
import { DbdataService } from '../dbdata.service';
import { Drugs } from '../models/meds2.model';
import { Cart } from '../models/cart';
import { gvars } from '../variables.js';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Cart[];
  sum: number;
  meds2: Drugs[];
  drugs;
  ComboString: String;
  Flag = false;
  displayedColumns = ['Drugs', 'Class', 'Quantity', 'Dosage', 'Price', 'Action', ];
  pname = gvars.patient

  comboCheck() { 
    for (let index1 = 0; index1 < this.cart.length; index1++) {
      for (let index2 = 0; index2 < this.cart.length; index2++) {
        this.ComboString = this.cart[index1].Class + this.cart[index2].Class;
        if (this.ClassCheck(this.ComboString)) {
          alert("There's a Combo of " + this.cart[index1].Class + " and " + this.cart[index2].Class);
        }
      }
    }   
  }

  constructor(private dbdatService: DbdataService) { }

  ngOnInit() {
    this.fetchcart();
    this.getTotal();
    this.fetchMeds2();
  }

  async fetchMeds2() {
    this.dbdatService.getMeds().subscribe(
      (data: Drugs[]) => {
        this.meds2 = data
      }
    );
  }

  ClassCheck(PassClass) {
      if(this.meds2.find(x => x.Class === PassClass)){
        this.fetchMeds2()
        return true;
      }
      else{
        this.fetchMeds2()
        return false;
      }
  }
  
  fetchcart() {
    this.dbdatService.getCartbyname(this.pname).subscribe(
      (data: Cart[]) => {
        this.cart = data;
      }
    );
  }
  
  getTotal()
  {
    this.dbdatService.getCartbyname(this.pname).subscribe(
      (data: Cart[]) => {
        this.sum = data.reduce( 
          (a: number, b) => a + b.Price, 0);            
      }
    );
  }

  DeleteCart(Drug) {
    this.dbdatService.deleteCartbydrug(Drug).subscribe(() => {
      this.fetchcart();
    });
  }


}
