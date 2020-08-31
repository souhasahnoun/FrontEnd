import { Component, OnInit } from '@angular/core';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-reglementc',
  templateUrl: './reglementc.component.html',
  styleUrls: ['./reglementc.component.css']
})
export class ReglementcComponent implements OnInit {

  term;
  allItems: any[];
 
  pager: any = {};
  reglementclts: Reglementclt[];

  reglementclt: Reglementclt ={
    date:null,
    mode:null,
    num:null,
    etat:null,
    montant:null,
    type_pay:null,
    client:null,
    banque:null,
    date_echeance:null,
    etat_ch:null,
    etat_traite:null,
    type_date:null,
    type_traite:null,
    solder:null,
    non_solder:null,
    impression:null,
    
    
   };


   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private reglementcltsService :ReglementcltsService, private httpClient:HttpClient, private pagerService: PagerService) { 
  // pour afficher liste
  this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
    this.reglementclts= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}


ngOnInit() { 
  this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
  
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
  this.reglementclts = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 



  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cet reglement clts')){
    this.reglementcltsService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='reglement clts supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

}
search(){     
  
  let reg=[];
  this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
   this.reglementclts=data;
   for(var i:number = 1; i<this.reglementclts.length; i++){
    if(
   
      this.reglementclts[i].date==this.reglementclt.date ||
      this.reglementclts[i].date_echeance==this.reglementclt.date_echeance 
      )      
      
      reg.push(this.reglementclts[i]);
      console.log(JSON.stringify(this.reglementclts[i])); 
   }
   
   this.reglementclts=reg; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
}
