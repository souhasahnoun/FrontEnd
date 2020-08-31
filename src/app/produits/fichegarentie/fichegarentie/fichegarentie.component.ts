import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { Garentie } from 'src/app/CLASSES/garentie';
import { GarentiesService } from 'src/app/SERVICES/service fichegarentie/garenties.service';

@Component({
  selector: 'app-fichegarentie',
  templateUrl: './fichegarentie.component.html',
  styleUrls: ['./fichegarentie.component.css']
})
export class FichegarentieComponent implements OnInit {

  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;

  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;
  API = 'http://localhost:8000/api';

  garenties: Garentie[];
  
  garentie: Garentie ={
    num:null,
    nom:null,
    date:null,
    tel	:null,
    piece:null,
    accessoire:null,
    panne:null,
    tache:null,
    prix:null,
    recu_par:null,
    etat:0,
    login:null,
    utilisateur_id:null,
    magasin_id:null,
   };
   

   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private garentiesService :GarentiesService, private httpClient:HttpClient, private pagerService: PagerService) { 

   
  // pour afficher liste
  this.garentiesService.liste().subscribe( (data:Garentie[]) => {
    this.garenties= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}


ngOnInit() { 
 
  this.fetchDefaultSupportedMagasins();
  this.fetchDefaultSupportedUtilisateurs();

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


ajouterFiche(){
 
    console.log(this.garentie);
      this.garentiesService.ajouter(this.garentie).subscribe(data => {
     
        this.message='fiche de garentie ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer


reset(){
  
  this.garentie.tel=null
  this.garentie.nom=null
  this.garentie.etat=null
  this.garentie.num=null
  this.garentie.panne=null
  this.garentie.piece=null
  this.garentie.prix=null
  this.garentie.recu_par=null
  this.garentie.tache=null
  this.garentie.magasin_id=null
  
  
}



}