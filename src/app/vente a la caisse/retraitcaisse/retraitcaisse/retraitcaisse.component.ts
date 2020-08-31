import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Retraitcaisse } from 'src/app/CLASSES/retraitcaisse';
import { RetraitcaissesService } from 'src/app/SERVICES/service retraitcaisse/retraitcaisses.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-retraitcaisse',
  templateUrl: './retraitcaisse.component.html',
  styleUrls: ['./retraitcaisse.component.css']
})
export class RetraitcaisseComponent implements OnInit {

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
   
   allItems: any[];
  term;
   pager: any = {};
   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private retraitcaisseService :RetraitcaissesService, private httpClient:HttpClient, private pagerService: PagerService) { 
   
  // pour afficher liste
  this.retraitcaisseService.liste().subscribe( (data:Retraitcaisse[]) => {
    this.retraitcaisses= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}
setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.retraitcaisses = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ngOnInit() { 
 
  this.fetchDefaultSupportedUtilisateurs();
  this.fetchDefaultSupportedCaisses();
  this.retraitcaisseService.liste().subscribe( (data:Retraitcaisse[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

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


ajouterDepenses(){
 
    console.log(this.retraitcaisse);
      this.retraitcaisseService.ajouter(this.retraitcaisse).subscribe(data => {
     
        this.message='depense  ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cette retrait caisse')){
    this.retraitcaisseService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='retrait caisse supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

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

search(){     
  
  let retrait=[];
  this.retraitcaisseService.liste().subscribe( (data:Retraitcaisse[]) => {
   this.retraitcaisses=data;
   for(var i:number = 1; i<this.retraitcaisses.length; i++){
    if(
      this.retraitcaisses[i].date==this.retraitcaisse.date  ||

   this.retraitcaisses[i].login==this.retraitcaisse.login 
      )      
      retrait.push(this.retraitcaisses[i]);
      console.log(JSON.stringify(this.retraitcaisses[i])); 
   }
   
   this.retraitcaisses=retrait; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 

}
