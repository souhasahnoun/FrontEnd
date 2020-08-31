import { Component, OnInit } from '@angular/core';
import { GarentiesService } from 'src/app/SERVICES/service fichegarentie/garenties.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Garentie } from 'src/app/CLASSES/garentie';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-modifierfichegarentie',
  templateUrl: './modifierfichegarentie.component.html',
  styleUrls: ['./modifierfichegarentie.component.css']
})
export class ModifierfichegarentieComponent implements OnInit {
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
    utilisateur_id:null,
    login:null,
    magasin_id:null,
   };
  
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private garentiesService :GarentiesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.garentiesService.liste().subscribe((data: Garentie[]) =>{
        this.garenties= data;
       this.garentie = this.garenties.find((m) => {return m.id == this.id});
       console.log(this.garentie);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  





modifierGarentie(){
  // fonction modifier
  if (this.modif){
    this.garentiesService.modifier(this.garentie).subscribe(data => {

      this.message='Garentie modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
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
    this.garentie.utilisateur_id=null
    
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
  

}
