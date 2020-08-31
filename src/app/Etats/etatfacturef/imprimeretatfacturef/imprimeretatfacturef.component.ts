import { Component, OnInit } from '@angular/core';

import {Document} from '../../../CLASSES/document';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
@Component({
  selector: 'app-imprimeretatfacturef',
  templateUrl: './imprimeretatfacturef.component.html',
  styleUrls: ['./imprimeretatfacturef.component.css']
})
export class ImprimeretatfacturefComponent implements OnInit {

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
    message:string;
  constructor(private fournisseursService :FournisseursService,private httpClient:HttpClient, private documentsService:DocumentsService) {
    this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
      this.fournisseurs= data;
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
