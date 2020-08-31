import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/CLASSES/document';
import { Facturefrs } from 'src/app/CLASSES/facture_frs';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { Rsf } from 'src/app/CLASSES/rsf';
import { RsfsService } from 'src/app/SERVICES/service rsf/rsfs.service';
@Component({
  selector: 'app-imprimerfacturef',
  templateUrl: './imprimerfacturef.component.html',
  styleUrls: ['./imprimerfacturef.component.css']
})
export class ImprimerfacturefComponent implements OnInit {
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
   facturefrss: Facturefrs[];
   facturefrs: Facturefrs ={
    
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

    rsfs: Rsf[];
  rsf: Rsf ={
    date:null,
    taux:null,
    montant:null,
    rs:null,
    net:null,
    etat_pay:null,
    imp:null,
    etat_imp:null,
    created:null,
    fournisseur_id:null,
    paiementfrs_id:null,
    
   };
   //
   id:number;
   message:string;
  constructor(private rsfsService :RsfsService,private lignedocumentsService :LignedocumentsService,private documentsService :DocumentsService, private httpClient:HttpClient) { 
    this.documentsService.liste().subscribe( (data:Document[]) => {
      this.documents= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    // pour afficher liste
    this.rsfsService.liste().subscribe( (data:Rsf[]) => {
      this.rsfs= data;
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
  }

  ngOnInit(): void {
  }

}
