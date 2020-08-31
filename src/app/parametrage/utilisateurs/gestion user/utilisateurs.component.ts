import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Utilisateur } from 'src/app/CLASSES/utilisateur';
import { HttpClient } from '@angular/common/http';
import { UtilisateursService } from 'src/app/SERVICES/service utilisateur/utilisateurs.service';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;
  API = 'http://localhost:8000/api';

  term;
  allItems: any[];

  pager: any = {};
  utilisateurs: Utilisateur[];

  utilisateur: Utilisateur ={
   designation:null,
   login:null,
   password:null,
   retaper_password:null,
    magasin_id:null,
   };
   

   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private utilisateursService :UtilisateursService, private httpClient:HttpClient, private pagerService: PagerService) { 

   
  // pour afficher liste
  this.utilisateursService.liste().subscribe( (data:Utilisateur[]) => {
    this.utilisateurs= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
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
 
setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.utilisateurs = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ajouterU(){

    console.log(this.utilisateur);
      this.utilisateursService.ajouter(this.utilisateur).subscribe(data => {
     
        this.message='utilisateur ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cet utilisateur')){
    this.utilisateursService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='utilisateur supprimee avec success';
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
  
  this.utilisateursService.liste().subscribe( (data:Utilisateur[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

}
}
