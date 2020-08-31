import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Retraitcaisse } from 'src/app/CLASSES/retraitcaisse';
import { RetraitcaissesService } from 'src/app/SERVICES/service retraitcaisse/retraitcaisses.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifierretraitcaisse',
  templateUrl: './modifierretraitcaisse.component.html',
  styleUrls: ['./modifierretraitcaisse.component.css']
})
export class ModifierretraitcaisseComponent implements OnInit {

  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;

  private supportedCaisses: FormArray = new FormArray([]);
  private caisseSubscription: Subscription;
  API = 'http://localhost:8000/api';
  retraitcaisses: Retraitcaisse[];
  
  retraitcaisse: Retraitcaisse ={
    montant:null,
    type:null,
    date:null,
    designation:null,
    beneficiaire:null,
    num_cheque:null,
    banque:null,
    login:null,
    caisse_id:null,
   };
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private retraitcaissesService :RetraitcaissesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.retraitcaissesService.liste().subscribe((data: Retraitcaisse[]) =>{
        this.retraitcaisses= data;
       this.retraitcaisse = this.retraitcaisses.find((m) => {return m.id == this.id});
       console.log(this.retraitcaisse);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  this.fetchDefaultSupportedUtilisateurs();
  this.fetchDefaultSupportedCaisses();

}


modifierRetrait(){
  // fonction modifier
  if (this.modif){
    this.retraitcaissesService.modifier(this.retraitcaisse).subscribe(data => {

      this.message='retrait caisse modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
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
  reset(){
  
    this.retraitcaisse.banque=null
    this.retraitcaisse.beneficiaire=null
    this.retraitcaisse.caisse_id=null
    this.retraitcaisse.date=null
    this.retraitcaisse.designation=null
    this.retraitcaisse.login=null
    this.retraitcaisse.montant=null
    this.retraitcaisse.num_cheque=null
    this.retraitcaisse.type=null
    
    
  }
}

