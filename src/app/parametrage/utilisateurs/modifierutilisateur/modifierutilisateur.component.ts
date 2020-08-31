import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/CLASSES/utilisateur';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UtilisateursService } from 'src/app/SERVICES/service utilisateur/utilisateurs.service';

@Component({
  selector: 'app-modifierutilisateur',
  templateUrl: './modifierutilisateur.component.html',
  styleUrls: ['./modifierutilisateur.component.css']
})
export class ModifierutilisateurComponent implements OnInit {

  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;
  API = 'http://localhost:8000/api';

  utilisateurs: Utilisateur[];
  utilisateur: Utilisateur ={
    designation:null,
    login:null,
    password:null,
    retaper_password:null,
     magasin_id:null,
    };
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private utilisateursService :UtilisateursService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.utilisateursService.liste().subscribe((data: Utilisateur[]) =>{
        this.utilisateurs= data;
       this.utilisateur = this.utilisateurs.find((m) => {return m.id == this.id});
       console.log(this.utilisateur);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
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
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    }




modifierUser(){
  // fonction modifier
  if (this.modif){
    this.utilisateursService.modifier(this.utilisateur).subscribe(data => {

      this.message='utilisateur modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
  reset(){
  
    this.utilisateur.login=null
    this.utilisateur.designation=null
    this.utilisateur.magasin_id=null
    this.utilisateur.password=null
  this.utilisateur.retaper_password=null
    
  }
  ngOnInit() { 
    
    this.fetchDefaultSupportedMagasins();
  }

}
