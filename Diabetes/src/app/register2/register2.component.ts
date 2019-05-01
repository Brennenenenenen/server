import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

import { gvars } from '../variables.js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit, OnDestroy {

  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) { }

  onRegister(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.authService.createUser(form.value.email, form.value.password)
    gvars.username = form.value.email;
  }


  ngOnInit() {
    this.authStatusSub = this.authService.getListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
