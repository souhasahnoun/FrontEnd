import { Component, OnInit } from '@angular/core';
import { Garentie } from 'src/app/CLASSES/garentie';
import { GarentiesService } from 'src/app/SERVICES/service fichegarentie/garenties.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-listefichegarentie',
  templateUrl: './listefichegarentie.component.html',
  styleUrls: ['./listefichegarentie.component.css']
})
export class ListefichegarentieComponent implements OnInit {
  term;
  allItems: any[];
  message:string;
  pager: any = {};
  API = 'http://localhost:8000/api';
  garenties: Garentie[];
garentie:Garentie={
  num:null,
    date:null,
    nom:null,
    tel:null,
    piece:null,
    accessoire:null,
    panne:null,
    tache:null,
    prix:null,
    recu_par:null,
    etat:null,
    magasin_id:null,
    login:null,
    utilisateur_id :null,
}
  id:number;
  constructor(private garentiesService :GarentiesService, private httpClient:HttpClient, private pagerService: PagerService) {  
    // pour afficher liste
    this.garentiesService.liste().subscribe( (data:Garentie[]) => {
      this.garenties= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });}

  ngOnInit(): void {
    this.garentiesService.liste().subscribe( (data:Garentie[]) => {
  
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
    this.garenties = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 

  supprimer(id){
    if (confirm('vous etes sur de supprimer cette fiche de garentie')){
      this.garentiesService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='fiche de garentie supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }
  search(){     
  
    let gar=[];
    this.garentiesService.liste().subscribe( (data:Garentie[]) => {
     this.garenties=data;
     for(var i:number = 1; i<this.garenties.length; i++){
      if(
        this.garenties[i].date==this.garentie.date 
     
        )      
        gar.push(this.garenties[i]);
        console.log(JSON.stringify(this.garenties[i])); 
     }
     
     this.garenties=gar; 
    
    
      //prods=data;      
     
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    
    
    
      } 
}


