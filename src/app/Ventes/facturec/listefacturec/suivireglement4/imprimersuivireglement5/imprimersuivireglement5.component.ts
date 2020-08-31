import { Component, OnInit } from '@angular/core';
import {Document} from 'src/app/CLASSES/document';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { Factureclts } from 'src/app/CLASSES/factureclts';
import { Client } from 'src/app/CLASSES/client';
import { Lignebordereau } from 'src/app/CLASSES/lignebordereau';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { LignebordereauxService } from 'src/app/SERVICES/service bordereau/lignebordereaux.service';
import { ActivatedRoute } from '@angular/router';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { Rsc } from 'src/app/CLASSES/rsc';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';

@Component({
  selector: 'app-imprimersuivireglement5',
  templateUrl: './imprimersuivireglement5.component.html',
  styleUrls: ['./imprimersuivireglement5.component.css']
})
export class Imprimersuivireglement5Component implements OnInit {

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
   clientss: Client[];
   client: Client ={
     code_clt:"21100",
     raison_social:null,
     email:null,
     site_web:null,
     tel:null,
     gsm:null,
     personne_contacter:null,
     fax:null,
     adresse:null,
     date_aff: null,
     etat:0,
     mf:null,
     rc:null,
     archive:0,
     type:null,
     timbre:null,
     plafond:null,
    };
   facturecltss: Factureclts[];
   factureclts: Factureclts ={
   
    document_id:null,
    avoir:null,
    dateavoir:null
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
   rscs: Rsc[];
   rsc: Rsc ={
     date:null,
     taux:null,
     montant:null,
     rs:null,
     net:null,
     etat_pay:null,
     imp:null,

    client_id:null,
    reglementcls_id:null,
     
    };
   id:number;
   imp;
  constructor(private rscsService :RscsService,private clientsService :ClientsService,private lignebordereauxService :LignebordereauxService,private activatedRoute: ActivatedRoute,private reglementcltsService :ReglementcltsService,private documentsService :DocumentsService,private httpClient:HttpClient) {
    
   // this.id= this.activatedRoute.snapshot.params['id'];
   // if(this.id){
      //this.imp = true;
      this.reglementcltsService.liste().subscribe((data: Reglementclt[]) =>{
        this.reglementclts= data;
       //this.reglementclt = this.reglementclts.find((m) => {return m.id == this.id});
       console.log(this.reglementclts);
      }, (error)=>{
        console.log(error);
        
      });
      this.lignebordereauxService.liste().subscribe( (data:Lignebordereau[]) => {
        this.lignebordereaux= data;
      }, error => {
        console.log(error);
        alert('il ya un erreur');
      });

      this.clientsService.liste().subscribe( (data:Client[]) => {
        this.clientss= data;
      }, error => {
        console.log(error);
        this.message='Erreur';
      });
      this.rscsService.liste().subscribe( (data:Rsc[]) => {
        this.rscs= data;
      }, error => {
        console.log(error);
        this.message='il ya un erreur';
      });
        this.documentsService.liste().subscribe((data: Document[]) =>{
          this.documents= data;
        }, (error)=>{
          console.log(error);
          
        });
      
    //} else {
      //this.imp = false;
    //}
  

   
    }
 
 

  ngOnInit(): void {
  }


}
