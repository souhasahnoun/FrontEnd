import { Component, OnInit } from '@angular/core';
import {Document} from 'src/app/CLASSES/document';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { Factureavoirfrs } from 'src/app/CLASSES/factureavoirfrs';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';

@Component({
  selector: 'app-suivireglement2',
  templateUrl: './suivireglement2.component.html',
  styleUrls: ['./suivireglement2.component.css']
})
export class Suivireglement2Component implements OnInit {
  documents: Document[];
  document: Document ={
    num:null,
    date:null,
    etat:null,
    fodec:null,
    etat_pay:null,
    type_pay:null,
    rs:null,
    etat_rs:null,
    login:null,
    date_retenu:null,
    type:null,
    date_prev:null,
    date_dec:null,
    timbre:null,
    date_fin:null,
    fournisseur_id:null,
    designation:null,
    client_id:null,
   };
  message:string;
  paiementfrss: Paiementfrs[];
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

   factureavoirfrss: Factureavoirfrs[];
   factureavoirfrs: Factureavoirfrs ={
   
    document_id:null,

   };
  constructor(private documentsService :DocumentsService,private paiementsfrsService :PaiementsfrsService) {
    this.paiementsfrsService.liste().subscribe((data: Paiementfrs[]) =>{
      this.paiementfrss= data;
     console.log(this.paiementfrs);
    }, (error)=>{
      console.log(error);
      this.message="erreur"
    });

    this.documentsService.liste().subscribe((data: Document[]) =>{
      this.documents= data;
    }, (error)=>{
      console.log(error);
      this.message="erreur"

    });
   }
   supprimer(id){
    if (confirm('vous etes sur de supprimer cet paiement')){
      this.paiementsfrsService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='paiement supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }
  ngOnInit(): void {
  }


}
