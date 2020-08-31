
import { Component, OnInit } from '@angular/core';
import { Rsc } from 'src/app/CLASSES/rsc';
import { Document } from 'src/app/CLASSES/document';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';

@Component({
  selector: 'app-retenuesourcec',
  templateUrl: './retenuesourcec.component.html',
  styleUrls: ['./retenuesourcec.component.css']
})
export class RetenuesourcecComponent implements OnInit {
  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;
  private supportedTvas: FormArray = new FormArray([]);
  private tvaSubscription: Subscription;
  private supportedReglements: FormArray = new FormArray([]);
  private reglementSubscription: Subscription;
  API = 'http://localhost:8000/api';
  rscs: Rsc[];
  documents: Document[];
  term;
  allItems: any[];
 
  pager: any = {};
  rsc: Rsc ={
    date:null,
    taux:null,
    montant:null,
    rs:null,
    net:null,
    etat_pay:null,
    imp:null,

    client_id:null,
    reglementcls_id:null,
   };
   document: Document ={
    num:null,
    date:null,
    etat:null,
    fodec:null,
    etat_pay:null,
    type_pay:null,
    rs:null,
    etat_rs:null,
    login:null,
    date_retenu:null,
    type:null,
    date_prev:null,
    date_dec:null,
    timbre:null,
    date_fin:null,
    fournisseur_id:null,
    designation:null,
    client_id:null,
   };

   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private rscsService :RscsService,private documentsService :DocumentsService, private httpClient:HttpClient) { 

   
  // pour afficher liste
  this.rscsService.liste().subscribe( (data:Rsc[]) => {
    this.rscs= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });

  // pour afficher liste
  this.documentsService.liste().subscribe( (data:Document[]) => {
    this.documents= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
  
}
ajouterRsc(){

  console.log(this.rsc);
    this.rscsService.ajouter(this.rsc).subscribe(data => {
    
      this.message='rsc ajoutée avec success';
      console.log(data);
    }, error =>{
      console.log(error);

      this.message='Erreur';
    });
  }


ngOnInit() { 
  this.fetchDefaultSupportedClients();
  this.fetchDefaultSupportedTvas();
  this.fetchDefaultSupportedReglements();
}
fetchDefaultSupportedClients() {
  this.clientSubscription = this.httpClient.get(this.API + '/clients').subscribe(
    (response) => {
      const data = response;
      this.supportedClients = this.createFormArrayForClients(data);
    },
    (error) => {
      console.log('error: ' + error);
    }
  );
}
fetchDefaultSupportedTvas() {
  this.tvaSubscription = this.httpClient.get(this.API + '/tvas').subscribe(
    (response) => {
      const data = response;
      this.supportedTvas = this.createFormArrayForTvas(data);
    },
    (error) => {
      console.log('error: ' + error);
    }
  );
}
fetchDefaultSupportedReglements() {
  this.reglementSubscription = this.httpClient.get(this.API + '/reglementclts').subscribe(
    (response) => {
      const data = response;
      this.supportedReglements = this.createFormArrayForReglements(data);
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
   * @param fetchedClients
   */

  createFormArrayForClients(fetchedClients: any): FormArray {
    let clients = new FormArray([]);
    console.log('fetchedClients length: ' + fetchedClients.length);
    for (let entry in fetchedClients) {
      console.log(fetchedClients[entry]);
      clients.push(new FormControl(fetchedClients[entry]));
    }
    return clients;
  }
  //pour le champs select
  get clients(): FormArray {
    return this.supportedClients as FormArray;
  }

  /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedReglements
   */

  createFormArrayForReglements(fetchedReglements: any): FormArray {
    let reglementclts = new FormArray([]);
    console.log('fetchedReglements length: ' + fetchedReglements.length);
    for (let entry in fetchedReglements) {
      console.log(fetchedReglements[entry]);
      reglementclts.push(new FormControl(fetchedReglements[entry]));
    }
    return reglementclts;
  }
  //pour le champs select
  get reglementclts(): FormArray {
    return this.supportedReglements as FormArray;
  }
/**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedTvas
   */

  createFormArrayForTvas(fetchedTvas: any): FormArray {
    let tvas = new FormArray([]);
    console.log('fetchedTvas length: ' + fetchedTvas.length);
    for (let entry in fetchedTvas) {
      console.log(fetchedTvas[entry]);
      tvas.push(new FormControl(fetchedTvas[entry]));
    }
    return tvas;
  }
  //pour le champs select
  get tvas(): FormArray {
    return this.supportedTvas as FormArray;
  }
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  } 
  reset(){
    this.rsc.date=null
    this.rsc.etat_pay=null
    this.rsc.client_id=null
    this.rsc.imp=null
    this.rsc.montant=null
    this.rsc.net=null
    this.rsc.reglementcls_id=null
    this.rsc.rs=null
    this.rsc.taux=null
  }
}
