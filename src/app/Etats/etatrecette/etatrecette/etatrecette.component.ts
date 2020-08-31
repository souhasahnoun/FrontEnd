import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Caisse } from 'src/app/CLASSES/caisse';

@Component({
  selector: 'app-etatrecette',
  templateUrl: './etatrecette.component.html',
  styleUrls: ['./etatrecette.component.css']
})
export class EtatrecetteComponent implements OnInit {

  private supportedCaisses: FormArray = new FormArray([]);
  private caisseSubscription: Subscription;
  API = 'http://localhost:8000/api';
  
  caissess: Caisse[];
  
  caisse: Caisse ={
    date:null,
    cloture:0,
    montant_final:null,
    login:null,
    fond_caisse:null,
    utilisateur_id:null,
    magasin_id:null,
    client_id:null,
  
   };
  constructor( private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.fetchDefaultSupportedCaisses();

  }

  fetchDefaultSupportedCaisses() {
    this.caisseSubscription = this.httpClient.get(this.API + '/caisses').subscribe(
      (response) => {
        const data = response;
        this.supportedCaisses = this.createFormArrayForCaisses(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }
  //pour le champs select
 /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedCaisses
   */

  createFormArrayForCaisses(fetchedCaisses: any): FormArray {
    let caisses = new FormArray([]);
    console.log('fetchedCaisses length: ' + fetchedCaisses.length);
    for (let entry in fetchedCaisses) {
      console.log(fetchedCaisses[entry]);
      caisses.push(new FormControl(fetchedCaisses[entry]));
    }
    return caisses;
  }
  //pour le champs select
  get caisses(): FormArray {
    return this.supportedCaisses as FormArray;
  }
  //pour le champs select
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  } 
}
