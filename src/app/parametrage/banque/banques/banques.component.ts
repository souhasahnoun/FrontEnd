import { Component, OnInit } from '@angular/core';
import { Banque } from 'src/app/CLASSES/banque';
import { PagerService } from 'src/app/SERVICES/pager.service'
import {BanquesService } from 'src/app/SERVICES/service banque/banques.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banques',
  templateUrl: './banques.component.html',
  styleUrls: ['./banques.component.css']
})
export class BanquesComponent implements OnInit {

  
  term;
  allItems: any[];
  
  pager: any = {};
  banques: Banque[];
  banque: Banque ={
   
    libelle:null,
    rib:null,
    titulaire_cheque:null,
    titulaire_traite:null,
    adresse:null
   };


   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private banquesService :BanquesService, private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.banquesService.liste().subscribe( (data:Banque[]) => {
    this.banques= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}


ngOnInit() { 
  this.banquesService.liste().subscribe( (data:Banque[]) => {
  
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
  this.banques = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ajouterB(){

    console.log(this.banque);
      this.banquesService.ajouter(this.banque).subscribe(data => {
      
        this.message='banque ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cette banque')){
    this.banquesService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='banque supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

}

reset(){
  this.banque.libelle=null
  this.banque.adresse=null
  this.banque.titulaire_cheque=null
  this.banque.titulaire_traite=null
  
}
}
