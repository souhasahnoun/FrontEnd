import { Component, OnInit } from '@angular/core';
import {Document} from 'src/app/CLASSES/document'
import { Factureavoirclts } from 'src/app/CLASSES/factureavoirclts';
import { Client } from 'src/app/CLASSES/client';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { Rsc } from 'src/app/CLASSES/rsc';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprimersuivireglement6',
  templateUrl: './imprimersuivireglement6.component.html',
  styleUrls: ['./imprimersuivireglement6.component.css']
})
export class Imprimersuivireglement6Component implements OnInit {
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

   factureavoircltss: Factureavoirclts[];
     factureavoirclts: Factureavoirclts ={
      
      document_id:null,
  
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
        message:string;
  constructor(private reglementcltsService :ReglementcltsService,private rscsService :RscsService,private clientsService :ClientsService,private httpClient:HttpClient, private documentsService:DocumentsService , private activatedRoute: ActivatedRoute) {
   // this.id= this.activatedRoute.snapshot.params['id'];
    // pour afficher liste
    //if(this.id){
    // this.imp = true;
      this.reglementcltsService.liste().subscribe((data: Reglementclt[]) =>{
        this.reglementclts= data;
       //this.reglementclt = this.reglementclts.find((m) => {return m.id == this.id});
       console.log(this.reglementclt);
      }, (error)=>{
        console.log(error);
        
      });

      this.rscsService.liste().subscribe( (data:Rsc[]) => {
        this.rscs= data;
      }, error => {
        console.log(error);
        this.message='il ya un erreur';
      });
   // } else {
    //  this.imp = false;
    //}
    this.clientsService.liste().subscribe( (data:Client[]) => {
      this.clientss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.documentsService.liste().subscribe((data: Document[]) =>{
      this.documents= data;
    }, (error)=>{
      console.log(error);
      
    });
   }

  ngOnInit(): void {
  }

}
