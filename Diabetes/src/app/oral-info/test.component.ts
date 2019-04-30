import { Component, OnInit } from '@angular/core';
import { DbdataService } from '../dbdata.service';
import { ActivatedRoute } from "@angular/router";
import { Cart } from '../models/cart';
import { MatSnackBar } from '@angular/material';
import { gvars } from '../variables';
import { Drugs } from '../models/meds2.model';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  meds2: Drugs[];
  cart: Cart[];
  drugs;
  drugClass: any;
  dosage: String;
  lowerdrugs;
  lowerclass;
  array: Array<any> = []; 
  array1: Array<any> = []; 
  array2: Array<any> = [];

  pname = gvars.patient;

  displayedColumns = ['first', 'last', 'middle', 'dob'];

  constructor(private route: ActivatedRoute, private dbdatService: DbdataService, private snackBar: MatSnackBar) {
    this.route.params.subscribe(params => this.drugs = params.med);
    this.route.params.subscribe(params => this.drugClass = params.id);
  }



  ngOnInit() {
    this.fetchMeds();
    this.fetchDosage();
    this.fetchQuantity();
    this.fetchPrice();
    this.fetchcart();
  }

  fetchMeds() {
    this.dbdatService.getMeds().subscribe(
      (data: Drugs[]) => {
        this.meds2 = data;
      }
    );
  }

  fetchDosage() {
    this.dbdatService.getMeds().subscribe(
      (data: Drugs[]) => {
        //length of me
        var lengthofmed = this.meds2.length;
        //name of meds and all the other info
        var nameofmed = this.meds2;
        var drugselected = this.drugs;
     
        for(let i = 0; i < lengthofmed; i++)
        {
            if(this.meds2[i].Brand == drugselected)
            {              
              var dosagestring = this.meds2[i].dqp;

              var splittingbycomma = dosagestring.split(",,");

              for(let k = 0; k < splittingbycomma.length; k++)
              {
                if(splittingbycomma[k] == "")
                {
                  continue;

                }else{
                  var stringfromarray = splittingbycomma[k];
                  var splitbylparen = stringfromarray.split("(");
                  let popped = splitbylparen.pop();
                  var storestring = this.array.push(splitbylparen);

                }   
              }
            }//end of if 
        } // end of first for loop
return this.array;
      }//end of function
    );
  }


fetchQuantity()
{
  this.dbdatService.getMeds().subscribe(
    (data: Drugs[]) => {
      //length of me
      var lengthofmed = this.meds2.length;
      //name of meds and all the other info
      var nameofmed = this.meds2;
      var drugselected = this.drugs;
  
      for(let i = 0; i < lengthofmed; i++){
          if(this.meds2[i].Brand == drugselected){              
            var dosagestring = this.meds2[i].dqp;
            var splittingbycomma = dosagestring.split(",,");

            for(let k = 0; k < splittingbycomma.length; k++){
              if(splittingbycomma[k] == ""){
                continue;

              }else{
                var stringfromarray = splittingbycomma[k];
                var splitbyrparen = stringfromarray.split(")");
                let popped = splitbyrparen.pop();

                for(let a=0; a<splitbyrparen.length; a++){
                  if(splitbyrparen[a] == ""){
                    continue;
                  }
                  else{
                    var stringfromarr = splitbyrparen[a];
                    var splitbylparen = stringfromarr.split("(");
                    let popped = splitbylparen.shift();
                  }
                }
                var storestring = this.array1.push(splitbylparen);
              }           
            }
          }//end of if  
      } // end of first for loop
      return this.array1;
    }//end of function
  );

}

fetchPrice()
{
  this.dbdatService.getMeds().subscribe(
    (data: Drugs[]) => {
      //length of me
      var lengthofmed = this.meds2.length;
      //name of meds and all the other info
      var nameofmed = this.meds2;
      var drugselected = this.drugs;
  
      for(let i = 0; i < lengthofmed; i++){
          if(this.meds2[i].Brand == drugselected){              
            var dosagestring = this.meds2[i].dqp;
            var splittingbycomma = dosagestring.split(",,");

            for(let k = 0; k < splittingbycomma.length; k++){
              if(splittingbycomma[k] == ""){
                continue;
              }else{
                var stringfromarray = splittingbycomma[k];
                var splitbycolon = stringfromarray.split("$");
                let popped = splitbycolon.pop();
                var storestring = this.array2.push(popped);
              }  
            }
          }//end of if 
      } // end of first for loop
      for(var i = 0; i < this.array2.length; i++){
        this.array2[i] = this.array2[i].replace(/,+/g, '');
      }
      return this.array2;
    }//end of function
  );
}

  async fetchcart() {
    this.dbdatService.getCart().subscribe(
      (data: Cart[]) => {
        this.cart = data;
      }
    );
  }


  async findDrug(Drugs) {
    
    if(this.cart.find(x => x.Drugs === Drugs)){
      await this.fetchcart();
      return true;
      
    }
    await this.fetchcart();
    return false;
  }

  async addtocart(Drugs, Price, Class, qty, dose) {
    await this.fetchcart();
    if(await this.findDrug(Drugs)) {
      alert("Item alread in cart");
      return; 
    }
    if(gvars.patient == ''){
      alert("No patient selected");
      return;
    }
    this.dbdatService.addCart(Drugs, Price, Class, this.pname, qty, dose).subscribe(() => {
      alert("item added to the cart");
    });

    await this.fetchcart();
  }

}

  

  

