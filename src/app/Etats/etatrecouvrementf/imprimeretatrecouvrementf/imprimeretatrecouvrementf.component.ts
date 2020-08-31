import { Component, OnInit } from '@angular/core';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { Client } from 'src/app/CLASSES/client';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import {Document} from '../../../CLASSES/document';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-imprimeretatrecouvrementf',
  templateUrl: './imprimeretatrecouvrementf.component.html',
  styleUrls: ['./imprimeretatrecouvrementf.component.css'],
  providers: [DatePipe]
})
export class ImprimeretatrecouvrementfComponent implements OnInit {
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
   fournisseurs: Fournisseur[];
   fournisseur: Fournisseur ={
     code_frs:"40000",
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
     archive:0
    };
   paiementsfrss: Paiementfrs[];

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
  constructor(private datePipe: DatePipe,private fournisseursService :FournisseursService,private paiementfrsService :PaiementsfrsService, private httpClient:HttpClient, private documentsService:DocumentsService) {
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 

    this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
      this.fournisseurs= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.paiementfrsService.liste().subscribe( (data:Paiementfrs[]) => {
      this.paiementsfrss= data;
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
