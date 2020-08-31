import { Component, OnInit } from '@angular/core';
import { Rsf } from 'src/app/CLASSES/rsf';
import { Document } from 'src/app/CLASSES/document';
import { RsfsService } from 'src/app/SERVICES/service rsf/rsfs.service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';

@Component({
  selector: 'app-retenuesourcef',
  templateUrl: './retenuesourcef.component.html',
  styleUrls: ['./retenuesourcef.component.css']
})
export class RetenuesourcefComponent implements OnInit {
  private supportedFournisseurs: FormArray = new FormArray([]);
  private fournisseurSubscription: Subscription;
  private supportedTvas: FormArray = new FormArray([]);
  private tvaSubscription: Subscription;
  private supportedPaiements: FormArray = new FormArray([]);
  private paiementSubscription: Subscription;
  API = 'http://localhost:8000/api';
  rsfs: Rsf[];
  documents: Document[];
  term;
  allItems: any[];
 
  pager: any = {};
  rsf: Rsf ={
    date:null,
    taux:null,
    montant:null,
    rs:null,
    net:null,
    etat_pay:null,
    imp:null,
    etat_imp:null,
    created:null,
    fournisseur_id:null,
    paiementfrs_id:null,
   
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
  

  constructor(private rsfsService :RsfsService,private documentsService :DocumentsService, private httpClient:HttpClient) { 

   
  // pour afficher liste
  this.rsfsService.liste().subscribe( (data:Rsf[]) => {
    this.rsfs= data;
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
ajouterRsf(){

  console.log(this.rsf);
    this.rsfsService.ajouter(this.rsf).subscribe(data => {
    
      this.message='rsf ajoutée avec success';
      console.log(data);
    }, error =>{
      console.log(error);

      this.message='Erreur';
    });
  }


ngOnInit() { 
  this.fetchDefaultSupportedFournisseurs();
  this.fetchDefaultSupportedTvas();
  this.fetchDefaultSupportedPaiements();

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
fetchDefaultSupportedPaiements() {
  this.paiementSubscription = this.httpClient.get(this.API + '/paiementfrs').subscribe(
    (response) => {
      const data = response;
      this.supportedPaiements = this.createFormArrayForPaiements(data);
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

  /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedPaiements
   */

  createFormArrayForPaiements(fetchedPaiements: any): FormArray {
    let paiementfrs = new FormArray([]);
    console.log('fetchedPaiements length: ' + fetchedPaiements.length);
    for (let entry in fetchedPaiements) {
      console.log(fetchedPaiements[entry]);
      paiementfrs.push(new FormControl(fetchedPaiements[entry]));
    }
    return paiementfrs;
  }
  //pour le champs select
  get paiementfrs(): FormArray {
    return this.supportedPaiements as FormArray;
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
    this.rsf.date=null
    this.rsf.etat_imp=null
    this.rsf.etat_pay=null
    this.rsf.fournisseur_id=null
    this.rsf.imp=null
    this.rsf.montant=null
    this.rsf.net=null
    this.rsf.paiementfrs_id=null
    this.rsf.rs=null
    this.rsf.taux=null
  }
}
