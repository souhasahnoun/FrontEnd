import { Component, OnInit } from '@angular/core';
import { Famille } from 'src/app/CLASSES/famille';
import { FamillesService } from 'src/app/SERVICES/service famille/familles.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Categorie } from 'src/app/CLASSES/categorie';
import { CategoriesService } from 'src/app/SERVICES/service categorie/categories.service';

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent implements OnInit {
  private supportedCategories: FormArray = new FormArray([]);
  private categorieSubscription: Subscription;
  API = 'http://localhost:8000/api';
  familles: Famille[];


  famille: Famille ={
    libelle:null,
    etat:0,
    merg_ben:null,
    categorie_id:null,
    prix:null,
   };

   message:string;
modifiedtext:any;
  modif: boolean = false;
  id: number;
  term;
  allItems: any[];
  
  pager: any = {};
  categoriess: Categorie[];


  categorie: Categorie ={
    libelle:"",
    etat:0,
   
   };
  constructor(private categoriesService :CategoriesService,private famillesService :FamillesService, private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.famillesService.liste().subscribe( (data:Famille[]) => {
    this.familles= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  this.categoriesService.liste().subscribe( (data:Categorie[]) => {
    this.categoriess= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
}



ngOnInit() { 
  this.fetchDefaultSupportedCategories();
  this.famillesService.liste().subscribe( (data:Famille[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

}
fetchDefaultSupportedCategories() {
  this.categorieSubscription = this.httpClient.get(this.API + '/categories').subscribe(
    (response) => {
      const data = response;
      this.supportedCategories = this.createFormArrayForCategories(data);
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
   * @param fetchedCategories
   */

  createFormArrayForCategories(fetchedCategories: any): FormArray {
    let categories = new FormArray([]);
    console.log('fetchedCategories length: ' + fetchedCategories.length);
    for (let entry in fetchedCategories) {
      console.log(fetchedCategories[entry]);
      categories.push(new FormControl(fetchedCategories[entry]));
    }
    return categories;
  }
  //pour le champs select
  get categories(): FormArray {
    return this.supportedCategories as FormArray;
  }
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
  this.familles = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 
ajouterFamille(){

    console.log(this.famille);
      this.famillesService.ajouter(this.famille).subscribe(data => {
      
        this.message='Famille ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }






// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cet famille')){
    this.famillesService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='famille supprimée avec success';
     
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

}

reset(){
  this.famille.libelle=null
 this.famille.merg_ben=null
 this.famille.categorie_id=null
 this.famille.etat=null
 this.famille.prix=null
}

archiver(famille){
    
  this.famillesService.archiver(famille).subscribe(data => {
    
    console.log(data);
    this.message='famille archiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });
}
desarchiver(famille){

  this.famillesService.desarchiver(famille).subscribe(data => {
    
    console.log(data);
    this.message='famille desarchiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });

}
search(){     
  
  let fam=[];
  this.famillesService.liste().subscribe( (data:Famille[]) => {
   this.familles=data;
   for(var i:number = 1; i<this.familles.length; i++){
    if(
      this.familles[i].etat==this.famille.etat 
   
      )      
      fam.push(this.familles[i]);
      console.log(JSON.stringify(this.familles[i])); 
   }
   
   this.familles=fam; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
}
