import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/CLASSES/categorie';
import { CategoriesService } from 'src/app/SERVICES/service categorie/categories.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service'
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categories: Categorie[];


  categorie: Categorie ={
    libelle:"",
    etat:0,
   
   };

   message:string;
modifiedtext:any;
  modif: boolean = false;
  id: number;
  term;
  allItems: any[];
  
  pager: any = {};
  constructor(private categoriesService :CategoriesService, private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.categoriesService.liste().subscribe( (data:Categorie[]) => {
    this.categories= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}



ngOnInit() { 
  this.categoriesService.liste().subscribe( (data:Categorie[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

}

setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.categories = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 
ajouterC(){

    console.log(this.categorie);
      this.categoriesService.ajouter(this.categorie).subscribe(data => {
      
        this.message='Categorie ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }



    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    }


// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer ce categorie')){
    this.categoriesService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='categorie supprimée avec success';
    }, error =>{
      console.log(error);
    });
  }

}

reset(){
  this.categorie.libelle=null
 
}
archiver(categorie){
    
  this.categoriesService.archiver(categorie).subscribe(data => {
    
    console.log(data);
    this.message='categorie archiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });
}
desarchiver(categorie){

  this.categoriesService.desarchiver(categorie).subscribe(data => {
    
    console.log(data);
    this.message='categorie desarchiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });

}
search(){     
  
  let cat=[];
  this.categoriesService.liste().subscribe( (data:Categorie[]) => {
   this.categories=data;
   for(var i:number = 1; i<this.categories.length; i++){
    if(
      this.categories[i].etat==this.categorie.etat 
   
      )      
      cat.push(this.categories[i]);
      console.log(JSON.stringify(this.categories[i])); 
   }
   
   this.categories=cat; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
}
