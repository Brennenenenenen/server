import { Component, OnInit } from '@angular/core';
import { Patients } from '../models/patients.model';
import { DbdataService } from '../dbdata.service';
import { gvars } from '../variables';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})

export class PatientsComponent implements OnInit {


  people: Patients[];
  FirstN: String;
  userId: String;
  userIsAuthenticated = false;
  displayedColumns = ['first', 'last', 'middle', 'dob'];

  private authStatusSub: Subscription;
  

  clickMessage = '';
  onClickMeJohnDoe() { this.clickMessage = 'JohnDoe'; }

  constructor(private dbdatService: DbdataService, private authService: AuthService) { }
  
ngOnInit(): void {
  this.fetchMeds();
  this.userId = this.authService.getUserId();
  this.userIsAuthenticated = this.authService.getIsAuth();
  this.authStatusSub = this.authService.getListener().subscribe(
    isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    }
  );
}

keyDownFunction(event) {
  if(event.keyCode == 13) {
    alert('searching');
  }
}



fetchMeds() {
  this.dbdatService.getPatients().subscribe(
    (data: Patients[]) => {
      this.people = data.filter(({ creator }) =>
        creator == this.userId );
    }
  );
}

}
