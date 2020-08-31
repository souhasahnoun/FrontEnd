import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Personel } from 'src/app/CLASSES/personel';
import { PersonelsService } from 'src/app/SERVICES/service personel/personels.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-personels',
  templateUrl: './personels.component.html',
  styleUrls: ['./personels.component.css'],
  providers: [DatePipe]
})
export class PersonelsComponent implements OnInit {

  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;

  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;
  API = 'http://localhost:8000/api';
  myDate = new Date();
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
   
   allItems: any[];
  term;
   pager: any = {};
   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private personelsService :PersonelsService, private httpClient:HttpClient, private pagerService: PagerService,private datePipe: DatePipe) { 
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
   
  // pour afficher liste
  this.personelsService.liste().subscribe( (data:Personel[]) => {
    this.personels= data;
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
  this.personels = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ngOnInit() { 
 
  this.fetchDefaultSupportedMagasins();
  this.fetchDefaultSupportedUtilisateurs();
  this.personelsService.liste().subscribe( (data:Personel[]) => {
  
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


ajouterP(){
 
    console.log(this.personel);
      this.personelsService.ajouter(this.personel).subscribe(data => {
     
        this.message='personel  ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cette personel')){
    this.personelsService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='personel supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

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