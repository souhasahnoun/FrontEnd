import { Component, OnInit } from '@angular/core';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import {Document} from 'src/app/CLASSES/document';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import { Facturefrs } from 'src/app/CLASSES/facture_frs';
import { Factureavoirfrs } from 'src/app/CLASSES/factureavoirfrs';
import { ActivatedRoute } from '@angular/router';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imprimersuivireglement3',
  templateUrl: './imprimersuivireglement3.component.html',
  styleUrls: ['./imprimersuivireglement3.component.css']
})
export class Imprimersuivireglement3Component implements OnInit {

  message:string;
  paiementfrss: Paiementfrs[];
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
   fournisseurss: Fournisseur[];
   fournisseur: Fournisseur ={
    code_frs:null,
    raison_social:null,
    email:null,
    site_web:null,
    tel:null,
    gsm:null,
    personne_contacter:null,
    fax:null,
    adresse:null,
    date_aff:null,
    etat:null,
    mf:null,
    rc:null,
    archive:null
   };
   factureavoiefrss: Factureavoirfrs[];
   factureavoirfrs: Factureavoirfrs ={
   
    document_id:null,

   };

   id:number;
   imp;
  constructor(private activatedRoute: ActivatedRoute,private paiementsfrsService :PaiementsfrsService,private fournisseursService :FournisseursService,private documentsService :DocumentsService,private httpClient:HttpClient) {
    
    //this.id= this.activatedRoute.snapshot.params['id'];
    //if(this.id){
     // this.imp = true;
      this.paiementsfrsService.liste().subscribe((data: Paiementfrs[]) =>{
        this.paiementfrss= data;
      // this.paiementfrs = this.paiementfrss.find((m) => {return m.id == this.id});
       console.log(this.paiementfrs);
      }, (error)=>{
        console.log(error);
        
      });

      this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
        this.fournisseurss= data;
      }, error => {
        console.log(error);
        this.message='Erreur';
      });
  
        this.documentsService.liste().subscribe((data: Document[]) =>{
          this.documents= data;
        }, (error)=>{
          console.log(error);
          
        });
      
    //else {
      //this.imp = false;
    //}
  

   
    }
 
 

  ngOnInit(): void {
  }

}
