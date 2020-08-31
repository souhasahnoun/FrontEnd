import { Component, OnInit } from '@angular/core';
import {Document} from '../../../CLASSES/document';
import { Client } from 'src/app/CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';

@Component({
  selector: 'app-imprimeretatfacturec',
  templateUrl: './imprimeretatfacturec.component.html',
  styleUrls: ['./imprimeretatfacturec.component.css']
})
export class ImprimeretatfacturecComponent implements OnInit {
  date: Date;
  client_id:number;
  etat_pay:number;
  date_fin:Date;
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
    message:string;
  constructor(route: ActivatedRoute,private reglementcltsService :ReglementcltsService,private router: Router,private clientsService :ClientsService,private httpClient:HttpClient, private documentsService:DocumentsService) {
  
     
     //this.date= route.snapshot.params['date'];
    // this.date_fin= route.snapshot.params['date_fin'];
    // this.etat_pay= route.snapshot.params['etat_pay'];
    // this.client_id= route.snapshot.params['client_id'];
    //if(this.date && this.etat_pay && this.client_id){
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
 //  }
  }
  ngOnInit(): void {
  }
 /* imprimer(){     
  
    let et=[];
    this.documentsService.liste().subscribe( (data:Document[]) => {
     this.documents=data;
     for(var i:number = 1; i<this.documents.length; i++){
      if(
        this.documents[i].date==this.document.date ||
        this.documents[i].date_fin==this.document.date_fin && 
        this.documents[i].etat_pay==this.document.etat_pay && 
        this.documents[i].client_id==this.document.client_id 
        ) 
     
        et.push(this.documents[i]);
        console.log(JSON.stringify(this.documents[i])); 
     }
     
     this.documents=et; 
    
    
      //prods=data;      
     
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    
    
    
      } */

}
