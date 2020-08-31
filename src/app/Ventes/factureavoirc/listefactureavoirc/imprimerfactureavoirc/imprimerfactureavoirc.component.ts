import { Component, OnInit } from '@angular/core';
import {Document} from 'src/app/CLASSES/document'
import { Factureavoirclts } from 'src/app/CLASSES/factureavoirclts';
import { Client } from 'src/app/CLASSES/client';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { Produit } from 'src/app/CLASSES/produit';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprimerfactureavoirc',
  templateUrl: './imprimerfactureavoirc.component.html',
  styleUrls: ['./imprimerfactureavoirc.component.css']
})
export class ImprimerfactureavoircComponent implements OnInit {

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

    produits: Produit[];
  
    produit: Produit ={
      designation:null,
      ref_prod:null,
      code:null,
      nom_prod:null,
      mrg_ben_pub:null,
      stk_alert:null,
      unite_id:null,
      image:null,
      tva_id:null,
      ristourne:null,
      points:null,
      mrg_ben_rev:null,
      prixf:null,
      prixfrev:null,
      prixrispub:null,
      prixrisrev:null,
      prix_min:null,
      prix_revient:null,
      prix_achat:null,
      etat:0,
      marque_id:null,
      categorie_id:null,
      famille_id:null,
     };
     factureavoircltss: Factureavoirclts[];
     factureavoirclts: Factureavoirclts ={
      
      document_id:null,
  
     };
     imp;
     id:number;
   message:string;
  constructor(private clientsService :ClientsService,private lignedocumentsService :LignedocumentsService,private produitsService :ProduitsService,private httpClient:HttpClient, private documentsService:DocumentsService , private activatedRoute: ActivatedRoute) {
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id ){
      this.imp = true;
    this.lignedocumentsService.liste().subscribe( (data:Lignedocument[]) => {
      this.lignedocuments= data;
      this.lignedocument = this.lignedocuments.find((m) => {return m.id == this.id });
      console.log(this.document);
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

    this.produitsService.liste().subscribe((data: Produit[]) =>{
      this.produits= data;
     
    }, (error)=>{
      console.log(error);
      
    });
    this.documentsService.liste().subscribe((data: Document[]) =>{
      this.documents= data;
     
    }, (error)=>{
      console.log(error);
      this.message='Erreur';
    });
   }else {
    this.imp = false;
  }
   }
  ngOnInit(): void {
  }



}
