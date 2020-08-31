import { Component, OnInit } from '@angular/core';
import { Entreecaisse } from 'src/app/CLASSES/entreecaisse';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpClient } from '@angular/common/http';
import { EntreecaissesService } from 'src/app/SERVICES/service entreecaisse/entreecaisses.service';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-entreecaisse',
  templateUrl: './entreecaisse.component.html',
  styleUrls: ['./entreecaisse.component.css']
})
export class EntreecaisseComponent implements OnInit {

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
   
   allItems: any[];
  term;
   pager: any = {};
   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private entreecaissesService :EntreecaissesService, private httpClient:HttpClient, private pagerService: PagerService) { 
   
  // pour afficher liste
  this.entreecaissesService.liste().subscribe( (data:Entreecaisse[]) => {
    this.entreecaisses= data;
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
  this.entreecaisses = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ngOnInit() { 
 
  this.fetchDefaultSupportedUtilisateurs();
  this.fetchDefaultSupportedCaisses();
  this.entreecaissesService.liste().subscribe( (data:Entreecaisse[]) => {
  
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


ajouterE(){
 
    console.log(this.entreecaisse);
      this.entreecaissesService.ajouter(this.entreecaisse).subscribe(data => {
     
        this.message='entree caisses  ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cette entree caisses')){
    this.entreecaissesService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='entree caisses supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

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
search(){     
  
  let entree=[];
  this.entreecaissesService.liste().subscribe( (data:Entreecaisse[]) => {
   this.entreecaisses=data;
   for(var i:number = 1; i<this.entreecaisses.length; i++){
    if(
      this.entreecaisses[i].date==this.entreecaisse.date ||
      this.entreecaisses[i].login==this.entreecaisse.login 

      )      
      entree.push(this.entreecaisses[i]);
      console.log(JSON.stringify(this.entreecaisses[i])); 
   }
   
   this.entreecaisses=entree; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 


}