import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/CLASSES/document';
import { BCClts } from 'src/app/CLASSES/BC_Clts';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';

@Component({
  selector: 'app-imprimerbcc',
  templateUrl: './imprimerbcc.component.html',
  styleUrls: ['./imprimerbcc.component.css']
})
export class ImprimerbccComponent implements OnInit {

  prev:Date;
  fin:Date;
  nomclts:string;
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
   bccltss: BCClts[];
   bcclts: BCClts ={
    cloturer:null,
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
   id:number;
   imp;
   message:string;
  constructor(private clientsService :ClientsService,private documentsService :DocumentsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 
  
    // pour afficher liste
 
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
