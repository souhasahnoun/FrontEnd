import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Personel } from 'src/app/CLASSES/personel';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PersonelsService } from 'src/app/SERVICES/service personel/personels.service';

@Component({
  selector: 'app-modifierpersonel',
  templateUrl: './modifierpersonel.component.html',
  styleUrls: ['./modifierpersonel.component.css']
})
export class ModifierpersonelComponent implements OnInit {
  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;

  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;
  API = 'http://localhost:8000/api';
  personels: Personel[];
  
  personel: Personel ={
    nom:null,
    prenom:null,
    tel:null,
    adresse:null,
    dateNaiss:null,
    salaire:null,
    cin:null,
    login:null,
    magasin_id:null,
    utilisateur_id:null
   };
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private personelsService :PersonelsService,private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.personelsService.liste().subscribe((data: Personel[]) =>{
        this.personels= data;
       this.personel = this.personels.find((m) => {return m.id == this.id});
       console.log(this.personel);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  this.fetchDefaultSupportedMagasins();
  this.fetchDefaultSupportedUtilisateurs();

}


modifierPersonel(){
  // fonction modifier
  if (this.modif){
    this.personelsService.modifier(this.personel).subscribe(data => {

      this.message='personel modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
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
  
  reset(){
  
    this.personel.tel=null
    this.personel.nom=null
    this.personel.adresse=null
    this.personel.cin=null
    this.personel.login=null
    this.personel.magasin_id=null
    this.personel.salaire=null
    this.personel.dateNaiss=null
    this.personel.prenom=null
    
    
  }
}





