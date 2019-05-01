import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gvars } from './variables';


@Injectable({
  providedIn: 'root'
})

export class DbdataService {

  uri = 'http://ec2-52-14-159-236.us-east-2.compute.amazonaws.com:8080';//'http://localhost:8080';
  Cdate = new Date();


  constructor(private http: HttpClient) { }

//works for oral meds
  getData() {
    return this.http.get(`${this.uri}/oral`);    
  }

  getMeds() {
    return this.http.get(`${this.uri}/api/meds/allmeds`);
  }

  //works for oral combos
  getCombos() {
    return this.http.get(`${this.uri}/combos`);
  }

  getCart()
  {
    return this.http.get(`${this.uri}/api/cart/cartinfo`)
  }

  getCartbyname(pname: String)
  {
    return this.http.get(`${this.uri}/api/cart/cartinfo2/${pname}`)
  }

  getPatients() {
    return this.http.get(`${this.uri}/api/patient/patient`); 
  }

  getPatientByName(FirstN) {
    return this.http.get(`${this.uri}/patient/${FirstN}`);
  }

  getDrugsByName(term) {
    return this.http.get(`${this.uri}/oral/${term}`);
  }

  getDrugsByClass(cls) {
    return this.http.get(`${this.uri}/oral/${cls}`); 
  }

  
  getDrugsByPrice(price) {
    return this.http.get(`${this.uri}/oral/${price}`); 
  }
  getDrugsByDosage(dqp) {
    return this.http.get(`${this.uri}/test/${dqp}`); 

  }
  deleteCartbydrug(cartId: string) {
    return this.http.delete(`${this.uri}/api/cart/${cartId}`);
  }
 
  getHistory(pname) {
    return this.http.get(`${this.uri}/api/phistory/gethistory/${pname}`);
  }


  deleteCartbypatient(pname: string) {
    return this.http.delete(`${this.uri}/api/cart/patient/${pname}`);
  }

  deletepatientbyid(id) {
    return this.http.delete(`${this.uri}/api/patient/${id}`);
  }

  addCart(Drugs, Price, Class, pname, qty, dose){
    const cart = {
      checkoutdate: this.Cdate,
      Drugs: Drugs,
      Price: Price,
      Class: Class,
      pname: pname,
      qty: qty,
      dose: dose
    };
    return this.http.post(`${this.uri}/api/cart/additem`, cart);
  }

  getTest() {
    return this.http.get(`${this.uri}/test`);    
  }
  
  addPatient(fname, lname, mname, dob, ssn, phone, weight, height, user, gender){
    const patient = {
      FirstN: fname,
      LastN: lname,
      MiddleN: mname,
      DoB: dob,
      SSN: ssn,
      Phone: phone,
      Weight: weight,
      Height: height,
      user: user,
      Gender: gender
    };
    return this.http.post(`${this.uri}/api/patient/newpatient`, patient)
  }

  patientHistory(drugs, date, pname, user) {
    const history = {
      drugs: drugs,
      date: date,
      pname: pname,
      user: user
    };
    return this.http.post(`${this.uri}/api/phistory/history`, history)
  }
 
  


}

