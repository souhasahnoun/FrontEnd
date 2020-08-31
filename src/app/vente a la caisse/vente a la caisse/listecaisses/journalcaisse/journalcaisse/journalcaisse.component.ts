import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { Caisse } from 'src/app/CLASSES/caisse';
import { CaissesService } from 'src/app/SERVICES/service caisse/caisses.service';

@Component({
  selector: 'app-journalcaisse',
  templateUrl: './journalcaisse.component.html',
  styleUrls: ['./journalcaisse.component.css']
})
export class JournalcaisseComponent implements OnInit {
  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;
  private supportedCaisses: FormArray = new FormArray([]);
  private caisseSubscription: Subscription;
  API = 'http://localhost:8000/api';
  reglementclts: Reglementclt[];
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
   message:string;
  constructor(private caissesService :CaissesService,private reglementcltsService :ReglementcltsService,private httpClient:HttpClient) {
    this.caissesService.liste().subscribe( (data:Caisse[]) => {
      this.caissess= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    
    this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
      this.reglementclts= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
   }

  ngOnInit(): void {
    this.fetchDefaultSupportedUtilisateurs();
    this.fetchDefaultSupportedCaisses();
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
  //pour le champs select
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  } 
  search(){     
  
    let caiss=[];
    this.caissesService.liste().subscribe( (data:Caisse[]) => {
     this.caissess=data;
     for(var i:number = 1; i<this.caissess.length; i++){
      if(
        this.caissess[i].login==this.caisse.login ||
        this.caissess[i].date==this.caisse.date 

        )      
        caiss.push(this.caissess[i]);
        console.log(JSON.stringify(this.caissess[i])); 
     }
     
     this.caissess=caiss; 
    
    
      //prods=data;      
     
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    
    
    
      } 
}
