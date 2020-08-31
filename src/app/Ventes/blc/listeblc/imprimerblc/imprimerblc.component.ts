import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/CLASSES/document';
import { Rsc } from 'src/app/CLASSES/rsc';
import { BLClts } from 'src/app/CLASSES/BL_Clts';
import { Client } from 'src/app/CLASSES/client';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Rsf } from 'src/app/CLASSES/rsf';

@Component({
  selector: 'app-imprimerblc',
  templateUrl: './imprimerblc.component.html',
  styleUrls: ['./imprimerblc.component.css']
})
export class ImprimerblcComponent implements OnInit {

  deb:Date;
  fin:Date;
  idclt:number;
 etat_pay:number;
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
   blcltss: BLClts[];
   blclts: BLClts ={
    disabled:null,
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
   message:string;
   id:number;
   imp;
  constructor(private rscsService :RscsService,private lignedocumentsService :LignedocumentsService,private clientsService :ClientsService,private documentsService :DocumentsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 
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

    this.deb= this.activatedRoute.snapshot.params['date'];
    this.fin= this.activatedRoute.snapshot.params['date_fin'];
    this.idclt= this.activatedRoute.snapshot.params['client_id'];
    this.etat_pay= this.activatedRoute.snapshot.params['etat_pay'];
    // pour afficher liste
  
      this.documentsService.liste().subscribe((data: Document[]) =>{
        this.documents= data;
       //this.document = this.documents.find((m) => {return m.date == this.deb , m.date_fin == this.fin , m.client_id == this.idclt , m.etat_pay== this.etat_pay });
       console.log(this.document);
      }, (error)=>{
        console.log(error);
        
      });
    
  }

  ngOnInit(): void {
  }
}
