import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {Document} from '../../../CLASSES/document';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { Devis } from 'src/app/CLASSES/devis';
import { Client } from 'src/app/CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';

@Component({
  selector: 'app-imprimerdevis',
  templateUrl: './imprimerdevis.component.html',
  styleUrls: ['./imprimerdevis.component.css'],
  providers: [DatePipe]
})
export class ImprimerdevisComponent implements OnInit {
  myDate = new Date();
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
   deviss:Devis[];
   devis:Devis={
    document_id:null,
   };

   lignedocuments: Lignedocument[];
   lignedocument: Lignedocument ={
    prix:null,
    qte:null,
    tva:null,
    designation:null,
    remise:null,
    produit_id:null,
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
   message:string;
  constructor(private clientsService :ClientsService,private lignedocumentsService :LignedocumentsService,private datePipe: DatePipe,private documentsService :DocumentsService,private httpClient:HttpClient) { 
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
   
      this.documentsService.liste().subscribe((data: Document[]) =>{
        this.documents= data;
    
      }, (error)=>{
        console.log(error);
        
      });
      this.lignedocumentsService.liste().subscribe( (data:Lignedocument[]) => {
        this.lignedocuments= data;
      }, error => {
        console.log(error);
        this.message='Erreur';
      });
      this.clientsService.liste().subscribe( (data:Client[]) => {
        this.clientss= data;
      }, error => {
        console.log(error);
        this.message='Erreur';
      });
  }

  ngOnInit(): void {
  }

}
