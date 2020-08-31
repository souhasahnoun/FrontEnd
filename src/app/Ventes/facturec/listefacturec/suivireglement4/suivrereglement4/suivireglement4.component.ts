import { Component, OnInit } from '@angular/core';
import {Document} from 'src/app/CLASSES/document';
import { Lignebordereau } from 'src/app/CLASSES/lignebordereau';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { Factureclts } from 'src/app/CLASSES/factureclts';
import { LignebordereauxService } from 'src/app/SERVICES/service bordereau/lignebordereaux.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';

@Component({
  selector: 'app-suivireglement4',
  templateUrl: './suivireglement4.component.html',
  styleUrls: ['./suivireglement4.component.css']
})
export class Suivireglement4Component implements OnInit {

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
   facturecltss: Factureclts[];
   factureclts: Factureclts ={
    avoir:null,
    dateavoir:null,
    document_id:null,

   };
  constructor(private lignebordereauxService :LignebordereauxService,private documentsService :DocumentsService,private reglementcltsService :ReglementcltsService) {
    this.reglementcltsService.liste().subscribe((data: Reglementclt[]) =>{
      this.reglementclts= data;
     console.log(this.reglementclt);
    }, (error)=>{
      console.log(error);
      
    });
    this.lignebordereauxService.liste().subscribe( (data:Lignebordereau[]) => {
      this.lignebordereaux= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
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
