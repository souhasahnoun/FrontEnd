import { Component, OnInit } from '@angular/core';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Bordereaux } from 'src/app/CLASSES/bordereaux';
import { BorderauxService } from 'src/app/SERVICES/service bordereau/borderaux.service';
import { Lignebordereau } from 'src/app/CLASSES/lignebordereau';
import { LignebordereauxService } from 'src/app/SERVICES/service bordereau/lignebordereaux.service';

@Component({
  selector: 'app-etatchequesclient',
  templateUrl: './etatchequesclient.component.html',
  styleUrls: ['./etatchequesclient.component.css']
})
export class EtatchequesclientComponent implements OnInit {
  private supportedBanques: FormArray = new FormArray([]);
  private banqueSubscription: Subscription;

  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;

  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;

  reglementclts: Reglementclt[];
  message:string;
  allItems: any[];
  API = 'http://localhost:8000/api';
  
  pager: any = {};
 
  reglementclt: Reglementclt ={
    date:null,
    mode:null,
    num:null,
    etat:null,
    montant:null,
    type_pay:null,
    client:null,
    banque:null,
    date_echeance:null,
    etat_ch:null,
    etat_traite:null,
    type_date:null,
    type_traite:null,
    solder:null,
    non_solder:null,
    impression:null,
    
    
   };
   borderau: Bordereaux ={
    num:null,
    type:null,
   banque_id:null,
    date:null,
    created:null,
    login:null,
   
   };
   lignebordereaux: Lignebordereau[];
   lignebordereau: Lignebordereau ={
    
    reglementcls_id:null,
    source:null,
    source_id:null,
    montant:null,
    rs:null,
    num:null,
    type:null,
    banque:null,
    date:null,
    etat:null,
    type_ch:null,
    created:null,
    login:null,
    bordereaus_id:null,
   };
   
modifiedtext:any;
  modif: boolean = false;
  id: number;
  term;

  constructor(private ligneborderauxService :LignebordereauxService,private borderauxService :BorderauxService,private reglementcltsService :ReglementcltsService, private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
    this.reglementclts= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
  this.ligneborderauxService.liste().subscribe( (data:Lignebordereau[]) => {
    this.lignebordereaux= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
}
ajouterBordereau(){
 
  console.log(this.borderau);
    this.borderauxService.ajouter(this.borderau).subscribe(data => {
   
      this.message='borderau ajoutée avec success';
      console.log(data);
    }, error =>{
      console.log(error);

      this.message='Erreur';
    });
  }




ngOnInit() { 
  this.fetchDefaultSupportedBanques();
  this.fetchDefaultSupportedUtilisateurs();
  this.fetchDefaultSupportedClients();
  this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });
}
fetchDefaultSupportedBanques() {
  this.banqueSubscription = this.httpClient.get(this.API + '/banques').subscribe(
    (response) => {
      const data = response;
      this.supportedBanques = this.createFormArrayForBanques(data);
    },
    (error) => {
      console.log('error: ' + error);
    }
  );
}

fetchDefaultSupportedUtilisateurs() {
  this.utilisateurSubscription = this.httpClient.get(this.API + '/utilisateurs').subscribe(
    (response) => {
      const data = response;
      this.supportedUtilisateurs = this.createFormArrayForUtilisateurs(data);
    },
    (error) => {
      console.log('error: ' + error);
    }
  );
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
/**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedMagasins
   */

  createFormArrayForBanques(fetchedBanques: any): FormArray {
    let banques = new FormArray([]);
    console.log('fetchedBanques length: ' + fetchedBanques.length);
    for (let entry in fetchedBanques) {
      console.log(fetchedBanques[entry]);
      banques.push(new FormControl(fetchedBanques[entry]));
    }
    return banques;
  }
  //pour le champs select
  get banques(): FormArray {
    return this.supportedBanques as FormArray;
  }

  /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedUtilisateurs
   */

  createFormArrayForUtilisateurs(fetchedUtilisateurs: any): FormArray {
    let utilisateurs = new FormArray([]);
    console.log('fetchedUtilisateurs length: ' + fetchedUtilisateurs.length);
    for (let entry in fetchedUtilisateurs) {
      console.log(fetchedUtilisateurs[entry]);
      utilisateurs.push(new FormControl(fetchedUtilisateurs[entry]));
    }
    return utilisateurs;
  }
  //pour le champs select
  get utilisateurs(): FormArray {
    return this.supportedUtilisateurs as FormArray;
  }

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
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  } 
setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.reglementclts = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

trackByRegMode(index: number, reglementclt: any): string {
  return this.reglementclt.mode = "cheque";
}


search(){     
  
  let f=[];
  this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
   this.reglementclts=data;
   for(var i:number = 1; i<this.reglementclts.length; i++){
    if(
   
      this.reglementclts[i].client==this.reglementclt.client ||
      this.reglementclts[i].date==this.reglementclt.date ||
      this.reglementclts[i].date_echeance==this.reglementclt.date_echeance ||
      this.reglementclts[i].type_date==this.reglementclt.type_date 
    

      )      
      f.push(this.reglementclts[i]);
      console.log(JSON.stringify(this.reglementclts[i])); 
   }
   
   this.reglementclts=f; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
    reset(){
      this.reglementclt.client=null
      this.reglementclt.date=null
      this.reglementclt.date_echeance=null
      this.reglementclt.type_date=null
    
    
    }





}




