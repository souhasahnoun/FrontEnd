import { Component, OnInit } from '@angular/core';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { Ordrepaiement } from 'src/app/CLASSES/ordrepaiement';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { OrdrepaiementsService } from 'src/app/SERVICES/service ordrepaiement/ordrepaiements.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-etatchequesfournisseur',
  templateUrl: './etatchequesfournisseur.component.html',
  styleUrls: ['./etatchequesfournisseur.component.css']
})
export class EtatchequesfournisseurComponent implements OnInit {

  

 
  message:string;
  allItems: any[];
  API = 'http://localhost:8000/api';
  
  pager: any = {};
  paiementfrs: Paiementfrs[];
  paiementfr: Paiementfrs ={
    date:null,
    mode:null,
    num:null,
    etat:null,
    montant:null,
    fournisseur:null,
    banque:null,
    date_echeance:null,
    solder:null,
    non_solder:null,
    impression:null,
    etat_ch:null,
    etat_traite:null,
    type_date:null,
    num_fact:null,
    ordrepaiement_id:null,
    type_ch:null,
    type_traite:null
   };
   ordrepaiements: Ordrepaiement[];
   ordrepaiement: Ordrepaiement ={
    
    num:null,
    date:null,
    login:null,
    created:null,
    montant:null,
   };
modifiedtext:any;
  modif: boolean = false;
  id: number;
  term;

  constructor(private paiementsfrsService :PaiementsfrsService,private ordrepaiementsService :OrdrepaiementsService,private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
    this.paiementfrs= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
  
  this.ordrepaiementsService.liste().subscribe( (data:Ordrepaiement[]) => {
    this.ordrepaiements= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
}
ajouterOrdre(){
 
  console.log(this.ordrepaiement);
    this.ordrepaiementsService.ajouter(this.ordrepaiement).subscribe(data => {
   
      this.message='ordre paiements ajoutée avec success';
      console.log(data);
    }, error =>{
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
  this.paiementfrs = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 


search(){     
  
  let f=[];
  this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
   this.paiementfrs=data;
   for(var i:number = 1; i<this.paiementfrs.length; i++){
    if(
   
      this.paiementfrs[i].type_date==this.paiementfr.type_date ||
      this.paiementfrs[i].date==this.paiementfr.date ||
      this.paiementfrs[i].date_echeance==this.paiementfr.date_echeance ||
      this.paiementfrs[i].etat_ch==this.paiementfr.etat_ch 
    

      )      
      f.push(this.paiementfrs[i]);
      console.log(JSON.stringify(this.paiementfrs[i])); 
   }
   
   this.paiementfrs=f; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
    reset(){
      this.paiementfr.type_date=null
      this.paiementfr.date=null
      this.paiementfr.date_echeance=null
      this.paiementfr.etat_ch=null
    
    
    }
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    }

}
