import { Component, OnInit } from '@angular/core';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { Ordrepaiement } from 'src/app/CLASSES/ordrepaiement';
import { OrdrepaiementsService } from 'src/app/SERVICES/service ordrepaiement/ordrepaiements.service';
import { PagerService } from 'src/app/SERVICES';
import { HttpClient } from '@angular/common/http';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';

@Component({
  selector: 'app-etattraitesfournisseur',
  templateUrl: './etattraitesfournisseur.component.html',
  styleUrls: ['./etattraitesfournisseur.component.css']
})
export class EtattraitesfournisseurComponent implements OnInit {

  
  
  message:string;
  allItems: any[];
  API = 'http://localhost:8000/api';
  
  pager: any = {};
 
  paiementfrss: Paiementfrs[];
  paiementfrs: Paiementfrs ={
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

  constructor(private paiementsfrsService :PaiementsfrsService,private ordrepaiementsService :OrdrepaiementsService, private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
    this.paiementfrss= data;
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
  this.paiementfrss = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

search(){     
  
  let f=[];
  this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
   this.paiementfrss=data;
   for(var i:number = 1; i<this.paiementfrss.length; i++){
    if(
   
      this.paiementfrss[i].type_date==this.paiementfrs.type_date ||
      this.paiementfrss[i].date==this.paiementfrs.date ||
      this.paiementfrss[i].date_echeance==this.paiementfrs.date_echeance ||
      this.paiementfrss[i].etat_traite==this.paiementfrs.etat_traite 
    

      )      
      f.push(this.paiementfrss[i]);
      console.log(JSON.stringify(this.paiementfrss[i])); 
   }
   
   this.paiementfrss=f; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
    reset(){
      this.paiementfrs.type_date=null
      this.paiementfrs.date=null
      this.paiementfrs.date_echeance=null
      this.paiementfrs.etat_traite=null
    
    
    }
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    }


}
