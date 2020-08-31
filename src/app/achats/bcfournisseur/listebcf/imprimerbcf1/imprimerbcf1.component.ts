import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import {Document} from 'src/app/CLASSES/document';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { Produit } from 'src/app/CLASSES/produit';
import { BCFrs } from 'src/app/CLASSES/BC_Frs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprimerbcf1',
  templateUrl: './imprimerbcf1.component.html',
  styleUrls: ['./imprimerbcf1.component.css']
})
export class Imprimerbcf1Component implements OnInit {
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

     bcfrss: BCFrs[];
     bcfrs: BCFrs ={
      document_id:null,
      cloturer:null,
   
  
     };
     imp;
     id:number;
   message:string;
  constructor(private fournisseursService :FournisseursService,private lignedocumentsService :LignedocumentsService,private produitsService :ProduitsService,private httpClient:HttpClient, private documentsService:DocumentsService , private activatedRoute: ActivatedRoute) {
    this.id= this.activatedRoute.snapshot.params['id'];
  
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
  
    this.produitsService.liste().subscribe((data: Produit[]) =>{
      this.produits= data;
     
    }, (error)=>{
      console.log(error);
      this.message='Erreur';
    });
    this.documentsService.liste().subscribe((data: Document[]) =>{
      this.documents= data;
     
    }, (error)=>{
      console.log(error);
      this.message='Erreur';
    });
   }

  ngOnInit(): void {
  }

}
