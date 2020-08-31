import { Component, OnInit } from '@angular/core';
import { Marque } from '../../../CLASSES/marque';
import { MarquesService } from 'src/app/SERVICES/service marque/marques.service';
import { HttpClient } from '@angular/common/http';

import { PagerService } from 'src/app/SERVICES/pager.service';

 

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {

message:string;
marques: Marque[];

  marque: Marque ={
    libelle:"",
    logo:null,
    etat:0,
   
   };
  allItems: any[];
  
   pager: any = {};
modifiedtext:any;
  
  id: number;
  term;
  

  constructor(private marquesService :MarquesService, private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.marquesService.liste().subscribe( (data:Marque[]) => {
  
    this.marques=data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });


  
}




ngOnInit() { 
  this.marquesService.liste().subscribe( (data:Marque[]) => {
  
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
  this.marques = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ajouterM(){

    console.log(this.marque);
      this.marquesService.ajouter(this.marque).subscribe(data => {
      
        this.message='Marque ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur'
      });
    }






// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cette marque')){
    this.marquesService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='marque supprimée avec success';
    }, error =>{
      console.log(error);
    });
  }

}
onSelectType(htmlElement: any) {
  let element = htmlElement;
  console.log('element id: ' + element.value);
} 
reset(){
  this.marque.libelle=null,
  this.marque.logo=null
}


archiver(marque){
    
  this.marquesService.archiver(marque).subscribe(data => {
    
    console.log(data);
    this.message='marque archiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });
}
desarchiver(marque){

  this.marquesService.desarchiver(marque).subscribe(data => {
    
    console.log(data);
    this.message='marque desarchiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });
}
search(){     
  
let marq=[];
this.marquesService.liste().subscribe( (data:Marque[]) => {
 this.marques=data;
 for(var i:number = 1; i<this.marques.length; i++){
  if(
    this.marques[i].etat==this.marque.etat 
 
    )      
    marq.push(this.marques[i]);
    console.log(JSON.stringify(this.marques[i])); 
 }
 
 this.marques=marq; 


  //prods=data;      
 
}, error => {
  console.log(error);
  this.message='il ya un erreur';
});



  } 

}
