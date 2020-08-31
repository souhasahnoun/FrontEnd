import { Component, OnInit } from '@angular/core';
import {Document} from '../../../CLASSES/document';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-etatfacturef',
  templateUrl: './etatfacturef.component.html',
  styleUrls: ['./etatfacturef.component.css']
})
export class EtatfacturefComponent implements OnInit {
  private supportedFournisseurs: FormArray = new FormArray([]);
  private fournisseurSubscription: Subscription;
  API = 'http://localhost:8000/api';
  documents: Document[];
  document: Document ={
    num:null,
    date:null,
    etat:0,
    fodec:null,
    etat_pay:0,
    type_pay:null,
    rs:null,
    etat_rs:null,
    login:null,
    date_retenu:null,
    type:10,
    date_prev:null,
    date_dec:null,
    timbre:null,
    date_fin:null,
    fournisseur_id:null,
    designation:null,
    client_id:null,
   };
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.fetchDefaultSupportedFournisseurs();

  }
  fetchDefaultSupportedFournisseurs() {
    this.fournisseurSubscription = this.httpClient.get(this.API + '/fournisseurs').subscribe(
      (response) => {
        const data = response;
        this.supportedFournisseurs = this.createFormArrayForFournisseurs(data);
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
     * @param fetchedFournisseurs
     */
  
    createFormArrayForFournisseurs(fetchedFournisseurs: any): FormArray {
      let fournisseurs = new FormArray([]);
      console.log('fetchedFournisseurs length: ' + fetchedFournisseurs.length);
      for (let entry in fetchedFournisseurs) {
        console.log(fetchedFournisseurs[entry]);
        fournisseurs.push(new FormControl(fetchedFournisseurs[entry]));
      }
      return fournisseurs;
    }
    //pour le champs select
    get fournisseurs(): FormArray {
      return this.supportedFournisseurs as FormArray;
    }
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    } 
    reset(){
      this.document.date=null
      this.document.fournisseur_id=null
      this.document.etat_pay=null

      
    }
}
