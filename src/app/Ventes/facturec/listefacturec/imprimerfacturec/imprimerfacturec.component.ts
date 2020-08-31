import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/CLASSES/document';
import { Factureclts } from 'src/app/CLASSES/factureclts';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { Rsc } from 'src/app/CLASSES/rsc';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';

@Component({
  selector: 'app-imprimerfacturec',
  templateUrl: './imprimerfacturec.component.html',
  styleUrls: ['./imprimerfacturec.component.css']
})
export class ImprimerfacturecComponent implements OnInit {

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
   facturecltss: Factureclts[];
   factureclts: Factureclts ={
    avoir:null,
    dateavoir:null,
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
   id:number;
   message:string;
  constructor(private clientsService :ClientsService,private rscsService :RscsService,private lignedocumentsService :LignedocumentsService,private documentsService :DocumentsService, private httpClient:HttpClient) { 
    this.documentsService.liste().subscribe( (data:Document[]) => {
      this.documents= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    // pour afficher liste
    this.rscsService.liste().subscribe( (data:Rsc[]) => {
      this.rscs= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
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
