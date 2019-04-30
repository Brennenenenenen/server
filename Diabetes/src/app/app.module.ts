import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './oral-info/test.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { ClassesComponent } from './classes/classes.component';
import { OralClass1Component } from './oral-class1/oral-class1.component';
import { OralCombosComponent } from './oral-combos/oral-combos.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { MatMenuModule } from '@angular/material/menu';
import { HealthInfoComponent } from './health-info/health-info.component';
import { CartComponent } from './cart/cart.component';
import { DbdataService } from './dbdata.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NewpatientComponent } from './newpatient/newpatient.component';
import { MatSnackBarModule, MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HelppageComponent } from './helppage/helppage.component';
import { ActionsComponent } from './actions/actions.component';
import { InjectablesComponent } from './injectables/injectables.component';
import { InhalablesComponent } from './inhalables/inhalables.component';
import { Login2Component } from './login2/login2.component';
import { Register2Component } from './register2/register2.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InjectablesClassesComponent } from './injectables-classes/injectables-classes.component';
import { InjectablesInfoComponent } from './injectables-info/injectables-info.component';
import { InhalableInfoComponent } from './inhalable-info/inhalable-info.component';


import {MatExpansionModule} from '@angular/material/expansion';
import { AuthInterceptor } from './auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { ActionSelectComponent } from './action-select/action-select.component';
import { ActionMedicationsComponent } from './action-medications/action-medications.component';
import { OralComboClassComponent } from './oral-combo-class/oral-combo-class.component';
import { OralComboInfoComponent } from './oral-combo-info/oral-combo-info.component';
import { InjComboClassComponent } from './inj-combo-class/inj-combo-class.component';
import { InjComboInfoComponent } from './inj-combo-info/inj-combo-info.component';
import { InjComboDataComponent } from './inj-combo-data/inj-combo-data.component';
import { OralComboDataComponent } from './oral-combo-data/oral-combo-data.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    HomeComponent,
    PatientsComponent,
    ClassesComponent,

    OralClass1Component,
    OralCombosComponent,
    PatientInfoComponent,

    HealthInfoComponent,
  
    CartComponent,
    NewpatientComponent,
    HelppageComponent,
    ActionsComponent,
    InjectablesComponent,
    InhalablesComponent,
    Login2Component,
    Register2Component,
    CheckoutComponent,
    InjectablesClassesComponent,
    InjectablesInfoComponent,
    InhalableInfoComponent,
    ErrorComponent,
    ActionSelectComponent,
    ActionMedicationsComponent,
    OralComboClassComponent,
    OralComboInfoComponent,
    InjComboClassComponent,
    InjComboInfoComponent,
    InjComboDataComponent,
    OralComboDataComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [
    DbdataService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
