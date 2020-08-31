import { Component, OnInit } from '@angular/core';
import {Document} from '../../../CLASSES/document';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { Client } from 'src/app/CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-imprimeretatrecouvrementc',
  templateUrl: './imprimeretatrecouvrementc.component.html',
  styleUrls: ['./imprimeretatrecouvrementc.component.css'],
  providers: [DatePipe]

})
export class ImprimeretatrecouvrementcComponent implements OnInit {
  myDate = new Date();

  documents: Document[];
  document: Document ={
    num:null,
    date:null,
    etat:0,
    fodec:null,
    etat_pay:0,
    type_pay:null,
    rs:null,
    etat_rs:null,
    login:null,
    date_retenu:null,
    type:10,
    date_prev:null,
    date_dec:null,
    timbre:null,
    date_fin:null,
    fournisseur_id:null,
    designation:null,
    client_id:null,
   };
   clients: Client[];
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
    etat:0,
    montant:0,
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
  constructor(private datePipe: DatePipe,private clientsService :ClientsService,private reglementcltsService :ReglementcltsService, private httpClient:HttpClient, private documentsService:DocumentsService) {
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
    this.clientsService.liste().subscribe( (data:Client[]) => {
      this.clients= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
      this.reglementclts= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.documentsService.liste().subscribe( (data:Document[]) => {
      this.documents= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
   }

  ngOnInit(): void {
  }

}
