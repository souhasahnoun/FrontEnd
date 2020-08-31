import { Component, OnInit } from '@angular/core';
import { Paiementpersonel } from 'src/app/CLASSES/paiementpersonel';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { PaiementpersonelsService } from 'src/app/SERVICES/service paiementpersonel/paiementpersonels.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifierpaiementpersonel',
  templateUrl: './modifierpaiementpersonel.component.html',
  styleUrls: ['./modifierpaiementpersonel.component.css']
})
export class ModifierpaiementpersonelComponent implements OnInit {

  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;
 
  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;

  private supportedPersonels: FormArray = new FormArray([]);
  private personelSubscription: Subscription;
  API = 'http://localhost:8000/api';
  paiementpersonels: Paiementpersonel[];
  
  paiementpersonel: Paiementpersonel ={
    montant:null,
    date:null,
    date_salaire	:null,
    remarque:null,
    personnel_id:null,
    magasin_id:null,
    login:null,
   };
  
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private paiementpersonelsService :PaiementpersonelsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.paiementpersonelsService.liste().subscribe((data: Paiementpersonel[]) =>{
        this.paiementpersonels= data;
       this.paiementpersonel = this.paiementpersonels.find((m) => {return m.id == this.id});
       console.log(this.paiementpersonel);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  





modifierPP(){
  // fonction modifier
  if (this.modif){
    this.paiementpersonelsService.modifier(this.paiementpersonel).subscribe(data => {

      this.message='paiement personel modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
  reset(){
  
    this.paiementpersonel.date=null
    this.paiementpersonel.date_salaire=null
    this.paiementpersonel.login=null
    this.paiementpersonel.magasin_id=null
    this.paiementpersonel.montant=null
    this.paiementpersonel.personnel_id=null
    this.paiementpersonel.remarque=null
    
    
    
  }
  
  ngOnInit() { 
    this.fetchDefaultSupportedUtilisateurs();
    this.fetchDefaultSupportedMagasins();
    this.fetchDefaultSupportedPersonels();
  }
  fetchDefaultSupportedMagasins() {
    this.magasinSubscription = this.httpClient.get(this.API + '/magasins').subscribe(
      (response) => {
        const data = response;
        this.supportedMagasins = this.createFormArrayForMagasins(data);
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
  fetchDefaultSupportedPersonels() {
    this.personelSubscription = this.httpClient.get(this.API + '/personels').subscribe(
      (response) => {
        const data = response;
        this.supportedPersonels = this.createFormArrayForPersonels(data);
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
     * @param fetchedMagasins
     */
  
    createFormArrayForMagasins(fetchedMagasins: any): FormArray {
      let magasins = new FormArray([]);
      console.log('fetchedMagasins length: ' + fetchedMagasins.length);
      for (let entry in fetchedMagasins) {
        console.log(fetchedMagasins[entry]);
        magasins.push(new FormControl(fetchedMagasins[entry]));
      }
      return magasins;
    }
    //pour le champs select
    get magasins(): FormArray {
      return this.supportedMagasins as FormArray;
    }
  
    
    
  
   //pour le champs select
 /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedPersonels
   */

  createFormArrayForPersonels(fetchedPersonels: any): FormArray {
    let personels = new FormArray([]);
    console.log('fetchedPersonels length: ' + fetchedPersonels.length);
    for (let entry in fetchedPersonels) {
      console.log(fetchedPersonels[entry]);
      personels.push(new FormControl(fetchedPersonels[entry]));
    }
    return personels;
  }
  //pour le champs select
  get personels(): FormArray {
    return this.supportedPersonels as FormArray;
  }
    //pour le champs select
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    } 
  

}

