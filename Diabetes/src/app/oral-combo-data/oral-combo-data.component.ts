import { Component, OnInit } from '@angular/core';
import{ DbdataService } from '../dbdata.service';
import { Injectables } from '../models/inj.model';
import { ActivatedRoute } from "@angular/router";
import { Drugs } from '../models/meds2.model';
import { gvars } from '../variables';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-oral-combo-data',
  templateUrl: './oral-combo-data.component.html',
  styleUrls: ['./oral-combo-data.component.css']
})
export class OralComboDataComponent implements OnInit {

  inj: Injectables[];
  meds: Drugs[];
  cart: Cart[];
  drugs;
  pname = gvars.patient;
  array: Array<any> = []; // needs to be declared outside the function to display on the page
  array1: Array<any> = []; // needs to be declared outside the function to display on the page
  array2: Array<any> = []; // needs to be declared outside the function to display on the page

  constructor(private route: ActivatedRoute, private service: DbdataService) {
    this.route.params.subscribe(params => this.drugs = params.meds);
   }

  ngOnInit() {
    this.fetchMeds();
    this.fetchDosage();
    this.fetchQuantity();
    this.fetchPrice();
    this.fetchcart();
  }

  fetchMeds() {
    this.service.getMeds().subscribe(
      (data: Drugs[]) => {
        this.meds = data;
      }
    )
  }
  fetchDosage() {
    this.service.getMeds().subscribe(
      (data: Drugs[]) => {
        //length of me
        var lengthofmed = this.meds.length;
        //name of meds and all the other info
        var nameofmed = this.meds;
        var drugselected = this.drugs;
     
        for(let i = 0; i < lengthofmed; i++)
        {
            if(this.meds[i].Brand == drugselected)
            {              
              var dosagestring = this.meds[i].dqp;

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
  this.service.getMeds().subscribe(
    (data: Drugs[]) => {
      //length of me
      var lengthofmed = this.meds.length;
      //name of meds and all the other info
      var nameofmed = this.meds;
      var drugselected = this.drugs;
  
      for(let i = 0; i < lengthofmed; i++)
      {
          if(this.meds[i].Brand == drugselected)
          {              
            var dosagestring = this.meds[i].dqp;

            var splittingbycomma = dosagestring.split(",,");
             
            for(let k = 0; k < splittingbycomma.length; k++)
            {
              if(splittingbycomma[k] == "")
              {
                continue;

              }else{
                var stringfromarray = splittingbycomma[k];
                var splitbyrparen = stringfromarray.split(")");
                let popped = splitbyrparen.pop();

            
                for(let a=0; a<splitbyrparen.length; a++)
                {
                  if(splitbyrparen[a] == "")
                  {
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
  this.service.getMeds().subscribe(
    (data: Drugs[]) => {
      //length of me
      var lengthofmed = this.meds.length;
      //name of meds and all the other info
      var nameofmed = this.meds;
      var drugselected = this.drugs;
  
      for(let i = 0; i < lengthofmed; i++)
      {
          if(this.meds[i].Brand == drugselected)
          {              
            var dosagestring = this.meds[i].dqp;
       
            var splittingbycomma = dosagestring.split(",,");
            for(let k = 0; k < splittingbycomma.length; k++)
            {
              if(splittingbycomma[k] == "")
              {
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
  this.service.getCart().subscribe(
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
  this.service.addCart(Drugs, Price, Class, this.pname, qty, dose).subscribe(() => {
    alert("item added to the cart");
  });

  await this.fetchcart();
}
  
}
