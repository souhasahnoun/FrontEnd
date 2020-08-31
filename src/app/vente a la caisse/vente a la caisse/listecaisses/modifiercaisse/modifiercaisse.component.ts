import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Caisse } from 'src/app/CLASSES/caisse';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CaissesService } from 'src/app/SERVICES/service caisse/caisses.service';

@Component({
  selector: 'app-modifiercaisse',
  templateUrl: './modifiercaisse.component.html',
  styleUrls: ['./modifiercaisse.component.css']
})
export class ModifiercaisseComponent implements OnInit {

  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;

  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;
  API = 'http://localhost:8000/api';
  caisses: Caisse[];
  
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
  id: any;
  modif: boolean = false;
  constructor(private caissesService :CaissesService,private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.caissesService.liste().subscribe((data: Caisse[]) =>{
        this.caisses= data;
       this.caisse = this.caisses.find((m) => {return m.id == this.id});
       console.log(this.caisse);
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


modifierCaisse(){
  // fonction modifier
  if (this.modif){
    this.caissesService.modifier(this.caisse).subscribe(data => {

      this.message='caisse modifiée avec success';
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
  
    this.caisse.login=null
    this.caisse.cloture=null
    this.caisse.date=null
    this.caisse.fond_caisse=null
    this.caisse.magasin_id=null
    this.caisse.montant_final=null
  
    
    
  }
}