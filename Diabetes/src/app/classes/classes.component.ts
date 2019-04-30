import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";



@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})

export class ClassesComponent implements OnInit {


  clickMessage = '';

  onClickMeAlpha() { 
    this.clickMessage = 'alpha-glucosidase inhibitor'; 
    this.router.navigate(['/classes/' + this.clickMessage]); 
  }
  onClickMeBiguanides() { 
    this.clickMessage = 'biguanide'; 
    this.router.navigate(['/classes/' + this.clickMessage]);
  }
  onClickMeBile() { 
    this.clickMessage = 'bile acid sequestrant'; 
    this.router.navigate(['/classes/' + this.clickMessage]);
  }
  onClickMeDopamine() { 
    this.clickMessage = 'dopamine agonist'; 
    this.router.navigate(['/classes/' + this.clickMessage]);
  }
  onClickMeDPP() { 
    this.clickMessage = 'DPP-4 inhibitor'; 
    this.router.navigate(['/classes/' + this.clickMessage]);
  }
  onClickMeMeglitinides() { 
    this.clickMessage = 'meglitinide'; 
    this.router.navigate(['/classes/' + this.clickMessage]);
  }
  onClickMeSGLT() { 
    this.clickMessage = 'SGLT-2 Inhibitors'; 
    this.router.navigate(['/classes/' + this.clickMessage]);
  }
  onClickMeSulfonylureas() { 
    this.clickMessage = 'sulfonylurea'; 
    this.router.navigate(['/classes/' + this.clickMessage]);
  }
  onClickMeThiazolidinediones() { 
    this.clickMessage = 'thiazolidinedione'; 
    this.router.navigate(['/classes/' + this.clickMessage]);
  }
  onClickMeCombos() { 
    this.clickMessage = 'OralComboClass'; 
    this.router.navigate(['/classes/' + this.clickMessage]);
  }


  constructor(private router: Router) { }

  ngOnInit() {

  }



onSearch() {
  this.router.navigate([`/health-info`]);

}


}
