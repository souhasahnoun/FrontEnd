import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Entreecaisse } from 'src/app/CLASSES/entreecaisse';
import { EntreecaissesService } from 'src/app/SERVICES/service entreecaisse/entreecaisses.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifierenraitcaisse',
  templateUrl: './modifierenraitcaisse.component.html',
  styleUrls: ['./modifierenraitcaisse.component.css']
})
export class ModifierenraitcaisseComponent implements OnInit {

  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;

  private supportedCaisses: FormArray = new FormArray([]);
  private caisseSubscription: Subscription;
  API = 'http://localhost:8000/api';
  entreecaisses: Entreecaisse[];
  
  entreecaisse: Entreecaisse ={
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
  constructor(private entreecaissesService :EntreecaissesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.entreecaissesService.liste().subscribe((data: Entreecaisse[]) =>{
        this.entreecaisses= data;
       this.entreecaisse = this.entreecaisses.find((m) => {return m.id == this.id});
       console.log(this.entreecaisse);
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


modifierEntree(){
  // fonction modifier
  if (this.modif){
    this.entreecaissesService.modifier(this.entreecaisse).subscribe(data => {

      this.message='entree caisse modifiée avec success';
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
  
    this.entreecaisse.banque=null
    this.entreecaisse.beneficiaire=null
    this.entreecaisse.caisse_id=null
    this.entreecaisse.date=null
    this.entreecaisse.designation=null
    this.entreecaisse.login=null
    this.entreecaisse.montant=null
    this.entreecaisse.num_cheque=null
    this.entreecaisse.type=null
    
    
  }
}
