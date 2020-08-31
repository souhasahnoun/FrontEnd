import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Reception } from 'src/app/CLASSES/reception';
import { ReceptionsService } from 'src/app/SERVICES/service reception/receptions.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-fichereception',
  templateUrl: './fichereception.component.html',
  styleUrls: ['./fichereception.component.css']
})
export class FichereceptionComponent implements OnInit {

  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;

  private supportedCasiers: FormArray = new FormArray([]);
  private casierSubscription: Subscription;

  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;

  private supportedPersonels: FormArray = new FormArray([]);
  private personelSubscription: Subscription;
  API = 'http://localhost:8000/api';


  receptions: Reception[];
  
  reception: Reception ={
    num:null,
    date:null,
    piece:null,
    accessoire	:null,
    nom:null,
    tel:null,
    panne:null,
    tache:null,
    prix:null,
    recu_par:null,
    etat:0,
    login:null,
    magasin_id:null,
    code:null,
    avance:null,
    type:null,
    etat_pay:null,
    client_id:null,
    casier_id:null,
    contact_clt:0,
    affect:null,
    partde:null,
    frais:null,
    designation:null
   };
   

   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private receptionsService :ReceptionsService, private httpClient:HttpClient, private pagerService: PagerService) { 

   
  // pour afficher liste
  this.receptionsService.liste().subscribe( (data:Reception[]) => {
    this.receptions= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}


ngOnInit() { 
  this.fetchDefaultSupportedPersonels();
  this.fetchDefaultSupportedMagasins();
  this.fetchDefaultSupportedClients();
  this.fetchDefaultSupportedCasiers();
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
fetchDefaultSupportedCasiers() {
  this.casierSubscription = this.httpClient.get(this.API + '/casiers').subscribe(
    (response) => {
      const data = response;
      this.supportedCasiers = this.createFormArrayForCasiers(data);
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
/**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedCasiers
   */
  createFormArrayForCasiers(fetchedCasiers: any): FormArray {
    let casiers = new FormArray([]);
    console.log('fetchedCasiers length: ' + fetchedCasiers.length);
    for (let entry in fetchedCasiers) {
      console.log(fetchedCasiers[entry]);
      casiers.push(new FormControl(fetchedCasiers[entry]));
    }
    return casiers;
  }
  //pour le champs select
  get casiers(): FormArray {
    return this.supportedCasiers as FormArray;
  }
  //pour le champs select
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  } 


ajouterReception(){
 
    console.log(this.reception);
      this.receptionsService.ajouter(this.reception).subscribe(data => {
     
        this.message='fiche de reception ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer


reset(){
  
  this.reception.tel=null
  this.reception.nom=null
  this.reception.etat=null
  this.reception.num=null
  this.reception.panne=null
  this.reception.piece=null
  this.reception.prix=null
  this.reception.recu_par=null
  this.reception.tache=null
  this.reception.magasin_id=null
  this.reception.partde=null
  this.reception.type=null
  this.reception.accessoire=null
  this.reception.affect=null
  this.reception.avance=null
  this.reception.casier_id=null
  this.reception.client_id=null
  this.reception.code=null
  this.reception.contact_clt=null
  this.reception.date=null
  this.reception.designation=null
  this.reception.etat_pay=null
  this.reception.frais=null
}



}
