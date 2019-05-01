import { NgModule, Component } from '@angular/core';                                           //Importing all webapp components
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { TestComponent } from './oral-info/test.component';
import { HomeComponent } from './home/home.component';    
import { OralComboClassComponent } from './oral-combo-class/oral-combo-class.component';
import { OralComboInfoComponent } from './oral-combo-info/oral-combo-info.component';
import { OralComboDataComponent } from './oral-combo-data/oral-combo-data.component';
import { InjComboClassComponent } from './inj-combo-class/inj-combo-class.component';
import { InjComboInfoComponent } from './inj-combo-info/inj-combo-info.component';
import { InjComboDataComponent } from './inj-combo-data/inj-combo-data.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';

import { ClassesComponent } from './classes/classes.component';
import { OralClass1Component } from './oral-class1/oral-class1.component';
import { OralCombosComponent } from './oral-combos/oral-combos.component';

import { HealthInfoComponent } from './health-info/health-info.component';
 
import { CartComponent } from './cart/cart.component';
import { HelppageComponent } from './helppage/helppage.component';
import { ActionsComponent } from './actions/actions.component';
import { ActionSelectComponent } from './action-select/action-select.component';
import { ActionMedicationsComponent } from './action-medications/action-medications.component'; 
import { InjectablesComponent } from './injectables/injectables.component'; 
import { InjectablesClassesComponent } from './injectables-classes/injectables-classes.component';
import { InjectablesInfoComponent } from './injectables-info/injectables-info.component';
import { InhalablesComponent } from './inhalables/inhalables.component'; 
import { InhalableInfoComponent } from './inhalable-info/inhalable-info.component'; 
import { NewpatientComponent } from './newpatient/newpatient.component';
import { Login2Component } from './login2/login2.component';
import { Register2Component } from './register2/register2.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'classes/OralComboClass',
    component: OralComboClassComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'classes/OralComboClass/:id',
    component: OralComboInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'classes/OralComboClass/:id/:meds',
    component: OralComboDataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'injectableClasses/InjComboClass',
    component: InjComboClassComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'injectableClasses/InjComboClass/:id',
    component: InjComboInfoComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'injectableClasses/InjComboClass/:id/:meds/:extra',
    component: InjComboDataComponent,
    canActivate: [AuthGuard]
  },             
  {
    path: '',
    component: HomeComponent,
    
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'login2',
    component: Login2Component
  },
  {
    path: 'register2',
    component: Register2Component
  },

  {
    path: 'health-info',
    component: HealthInfoComponent,
    canActivate: [AuthGuard] 
  },

  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard]
  },
  {  
    path: 'patients',
    component: PatientsComponent,
    canActivate: [AuthGuard]
  },  
  {
    path: 'newpatient',
    component: NewpatientComponent,
    canActivate: [AuthGuard]
  },
  {  
    path: 'patients/:id',
    component: PatientInfoComponent,
    canActivate: [AuthGuard]
  },
  {  
    path: 'patient-info',
    component: PatientInfoComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'classes',
    component: ClassesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'classes/:id',
    component: OralClass1Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'classes/:id/:med',
    component: TestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'oral-class1',
    component: OralClass1Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'oral-combos',
    component: OralCombosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'helppage',
    component: HelppageComponent,
    
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actions',
    component: ActionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'action-select',
    component: ActionSelectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'action-medications',
    component: ActionMedicationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actions/:id',
    component: ActionSelectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actions/:id/:meds',
    component: ActionMedicationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'injectables',
    component: InjectablesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'injectableClasses/:id',
    component: InjectablesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'injectableClasses',
    component: InjectablesClassesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'injectablesInfo',
    component: InjectablesInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'injectableClasses/:id/:meds',
    component: InjectablesInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'injectableClasses/:id/:meds/:extra',
    component: InjectablesInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inhalables',
    component: InhalablesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inhalableInfo',
    component: InhalableInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inhalables/:meds',
    component: InhalableInfoComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '',
    component: HomeComponent, 
  },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }


];                       




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
