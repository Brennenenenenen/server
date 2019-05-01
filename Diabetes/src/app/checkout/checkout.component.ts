import { Component, OnInit } from '@angular/core';
import { gvars } from '../variables.js';
import { DbdataService } from '../dbdata.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  //columns that are displayed in the table
  displayedColumns = ['Drugs', 'Class', 'Dosage', 'Quantity', 'Price'];

  //hold the cart data
  cart: Cart[];

  pname = gvars.patient;
  user = gvars.username;
  
  date = new Date();
  sum: number;

  //used to get all drugs in cart as one string seperated by a comma
  drugsString: String;


  constructor(private dbdatService: DbdataService) { }

  ngOnInit() {
    this.fetchcartbyname();
    this.getTotal();
  }

  fetchcartbyname() {
    this.dbdatService.getCartbyname(this.pname).subscribe(
      (data: Cart[]) => {
        this.cart = data;
      }
    );
  }

  getTotal() {
    this.dbdatService.getCartbyname(this.pname).subscribe(
      (data: Cart[]) => {
        this.sum = data.reduce( 
          (a: number, b) => a + b.Price, 0);            
    }
  );
}

  onDelete() {
    this.dbdatService.deleteCartbypatient(this.pname).subscribe(() => {
    });
  }

  //called when done button is pressed
  //runs through the cart array to get the drug names
  //adds the names to a single string and posts to the DB
  addHistory() {
    for(var i = 0; i < this.cart.length; i++){
      let names = this.cart.map(item => item.Drugs)
      this.drugsString = names.join(',')
    }
    this.pname = this.pname.replace(/\s+/g, '');
    this.dbdatService.patientHistory(this.drugsString, this.date, this.pname, this.user).subscribe(() => {
      alert("Added to patient history");
      this.onDelete();
    });


    
  }

  
}
