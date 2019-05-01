import { Component, OnInit, OnDestroy } from '@angular/core';
import { DbdataService } from '../dbdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Patients } from '../models/patients.model';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { gvars } from '../variables';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  FirstN: String;
  people: Patients[];
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;


  constructor(private dbdatService: DbdataService, private router: Router, private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe()
  }

  onSearch(){
    this.router.navigate(['/patients/']);
    this.dbdatService.getPatientByName(this.FirstN).subscribe(
      (data: Patients[]) => {
        this.people = data;
    });
  }
  onSearch1() {
    this.router.navigate([`/health-info`]);
  }
}
