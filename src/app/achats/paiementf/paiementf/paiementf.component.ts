import { Component, OnInit } from '@angular/core';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-paiementf',
  templateUrl: './paiementf.component.html',
  styleUrls: ['./paiementf.component.css']
})
export class PaiementfComponent implements OnInit {

  paiementfrss: Paiementfrs[];
  term;
  allItems: any[];
 
  pager: any = {};
  paiementfrs: Paiementfrs ={
    
    date:null,
    mode:null,
    num:null,
    etat:null,
    montant:null,
    fournisseur:null,
    banque:null,
    ordrepaiement_id:null,
    num_fact:null,
    date_echeance:null,
    solder:null,
    non_solder:null,
    impression:null,
    type_ch:null,
    etat_ch:null,
    type_date:null,
    etat_traite:null,
    type_traite:null,
   };


   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private paiementsfrsService :PaiementsfrsService, private httpClient:HttpClient, private pagerService: PagerService) { 

   
  // pour afficher liste
  this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
    this.paiementfrss= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}


ngOnInit() { 
  this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
  
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
  this.paiementfrss = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 



  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cet paiement frs')){
    this.paiementsfrsService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='paiement frs supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

}
search(){     
  
  let pai=[];
  this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
   this.paiementfrss=data;
   for(var i:number = 1; i<this.paiementfrss.length; i++){
    if(
      this.paiementfrss[i].date==this.paiementfrs.date ||
      this.paiementfrss[i].date_echeance==this.paiementfrs.date_echeance 

      )      
      pai.push(this.paiementfrss[i]);
      console.log(JSON.stringify(this.paiementfrss[i])); 
   }
   
   this.paiementfrss=pai; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 

}
