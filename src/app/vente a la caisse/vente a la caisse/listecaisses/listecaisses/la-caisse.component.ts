import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Caisse } from 'src/app/CLASSES/caisse';
import { CaissesService } from 'src/app/SERVICES/service caisse/caisses.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-la-caisse',
  templateUrl: './la-caisse.component.html',
  styleUrls: ['./la-caisse.component.css']
})
export class LaCaisseComponent implements OnInit {

  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;

  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;
  API = 'http://localhost:8000/api';
  term;
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
   
   allItems: any[];
  
   pager: any = {};
   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private caissesService :CaissesService, private httpClient:HttpClient, private pagerService: PagerService) { 
   
   
  // pour afficher liste
  this.caissesService.liste().subscribe( (data:Caisse[]) => {
    this.caisses= data;
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
  this.caisses = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ngOnInit() { 
 
  this.fetchDefaultSupportedMagasins();
  this.fetchDefaultSupportedUtilisateurs();
  this.caissesService.liste().subscribe( (data:Caisse[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

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


ajouterCais(){
 
    console.log(this.caisse);
      this.caissesService.ajouter(this.caisse).subscribe(data => {
     
        this.message='caisses  ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cette caisses')){
    this.caissesService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='caisses supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

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