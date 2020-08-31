import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Souche } from 'src/app/CLASSES/souche';
import { SouchesService } from 'src/app/SERVICES/service souche/souches.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-gestionsouches',
  templateUrl: './gestionsouches.component.html',
  styleUrls: ['./gestionsouches.component.css']
})
export class GestionsouchesComponent implements OnInit {

  private supportedBanques: FormArray = new FormArray([]);
  private banqueSubscription: Subscription;
  API = 'http://localhost:8000/api';

 
  term;
  allItems: any[];

  pager: any = {};
  souches: Souche[];
  souche: Souche ={
    num:null,
    du:null,
    au:null,
    banque_id:null,
    etat:0,
   };
   

   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private souchesService :SouchesService, private httpClient:HttpClient, private pagerService: PagerService) { 

   
  // pour afficher liste
  this.souchesService.liste().subscribe( (data:Souche[]) => {
    this.souches= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}


ngOnInit() { 
 
  this.fetchDefaultSupportedBanques();
  this.souchesService.liste().subscribe( (data:Souche[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

}

fetchDefaultSupportedBanques() {
  this.banqueSubscription = this.httpClient.get(this.API + '/banques').subscribe(
    (response) => {
      const data = response;
      this.supportedBanques = this.createFormArrayForBanques(data);
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
   * @param fetchedBanques
   */

  createFormArrayForBanques(fetchedBanques: any): FormArray {
    let banques = new FormArray([]);
    console.log('fetchedBanques length: ' + fetchedBanques.length);
    for (let entry in fetchedBanques) {
      console.log(fetchedBanques[entry]);
      banques.push(new FormControl(fetchedBanques[entry]));
    }
    return banques;
  }
  //pour le champs select
  get banques(): FormArray {
    return this.supportedBanques as FormArray;
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
  this.souches = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ajouterSouche(){
 
    console.log(this.souche);
      this.souchesService.ajouter(this.souche).subscribe(data => {
     
        this.message='souche ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cette souche')){
    this.souchesService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='souche supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

}

reset(){
  
  this.souche.banque_id=null
  this.souche.etat=null
  this.souche.num=null
  this.souche.du=null
  this.souche.au=null
  
}
archiver(souche){
    
  this.souchesService.archiver(souche).subscribe(data => {
    
    console.log(data);
    this.message='souche archiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });
}
desarchiver(souche){

  this.souchesService.desarchiver(souche).subscribe(data => {
    
    console.log(data);
    this.message='souche desarchiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });

}

}
