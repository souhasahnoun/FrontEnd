import { Component, OnInit } from '@angular/core';
import { BEFrs } from 'src/app/CLASSES/BE_Frs';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Document } from 'src/app/CLASSES/document';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { Rsf } from 'src/app/CLASSES/rsf';
import { RsfsService } from 'src/app/SERVICES/service rsf/rsfs.service';
import { BefrsService } from 'src/app/SERVICES/service befrs/befrs.service';
@Component({
  selector: 'app-imprimerbef',
  templateUrl: './imprimerbef.component.html',
  styleUrls: ['./imprimerbef.component.css']
})
export class ImprimerbefComponent implements OnInit {
  deb:Date;
  fin:Date;
  nomfrs:number;
  numbl:number;
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
   befrss: BEFrs[];
   befrs: BEFrs ={
    import:null,
    document_id:null,

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
   message:string;
   id:number;
   imp;
  constructor(private befrsService :BefrsService,private rsfsService :RsfsService,private lignedocumentsService :LignedocumentsService,private fournisseursService :FournisseursService,private documentsService :DocumentsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 
    this.rsfsService.liste().subscribe( (data:Rsf[]) => {
      this.rsfs= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    this.befrsService.liste().subscribe( (data:BEFrs[]) => {
      this.befrss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    this.lignedocumentsService.liste().subscribe( (data:Lignedocument[]) => {
      this.lignedocuments= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
      this.fournisseurss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.deb= this.activatedRoute.snapshot.params['date'];
    this.fin= this.activatedRoute.snapshot.params['date_fin'];
    this.nomfrs= this.activatedRoute.snapshot.params['fournisseur_id'];
    this.numbl= this.activatedRoute.snapshot.params['num'];
    // pour afficher liste
  
      this.documentsService.liste().subscribe((data: Document[]) =>{
        this.documents= data;
       console.log(this.document);
      }, (error)=>{
        console.log(error);
        
      });
   
  }

  ngOnInit(): void {
  }
}
