import { Component, OnInit } from '@angular/core';
import {Document} from 'src/app/CLASSES/document';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { Factureavoirclts } from 'src/app/CLASSES/factureavoirclts';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { Lignebordereau } from 'src/app/CLASSES/lignebordereau';
import { LignebordereauxService } from 'src/app/SERVICES/service bordereau/lignebordereaux.service';

@Component({
  selector: 'app-suivireglement5',
  templateUrl: './suivireglement5.component.html',
  styleUrls: ['./suivireglement5.component.css']
})
export class Suivireglement5Component implements OnInit {

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

       factureavoircltss: Factureavoirclts[];
       factureavoirclts: Factureavoirclts ={
        
        document_id:null,
    
       };

       lignebordereaux: Lignebordereau[];
       lignebordereau: Lignebordereau ={
        reglementcls_id:null,
        source:null,
        source_id:null,
        montant:null,
        rs:null,
        num:null,
        type:null,
        banque:null,
        date:null,
        etat:null,
        type_ch:null,
        created:null,
        login:null,
        bordereaus_id:null,
       };
  constructor(private lignebordereauxService :LignebordereauxService,private documentsService :DocumentsService,private reglementcltsService :ReglementcltsService) {
    this.reglementcltsService.liste().subscribe((data: Reglementclt[]) =>{
      this.reglementclts= data;
     console.log(this.reglementclt);
    }, (error)=>{
      console.log(error);
      
    });
    this.lignebordereauxService.liste().subscribe((data: Lignebordereau[]) =>{
      this.lignebordereaux= data;
     console.log(this.reglementclt);
    }, (error)=>{
      console.log(error);
      
    });
    this.documentsService.liste().subscribe((data: Document[]) =>{
      this.documents= data;
    }, (error)=>{
      console.log(error);
      
    });
   }
   supprimer(id){
    if (confirm('vous etes sur de supprimer cet reglement')){
      this.reglementcltsService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='reglement supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }
  ngOnInit(): void {
  }


}
