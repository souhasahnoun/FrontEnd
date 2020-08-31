import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/CLASSES/document';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { Produit } from 'src/app/CLASSES/produit';
import { BRFrs } from 'src/app/CLASSES/BR_Frs';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
@Component({
  selector: 'app-retour-be',
  templateUrl: './retour-be.component.html',
  styleUrls: ['./retour-be.component.css']
})
export class RetourBeComponent implements OnInit {
  API = 'http://localhost:8000/api';
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
   produitss: Produit[];
  
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
     brfrss: BRFrs[];
   brfrs: BRFrs ={
    
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
   message:string;
  constructor(private lignedocumentsService :LignedocumentsService,private produitsService :ProduitsService,private documentsService :DocumentsService,private httpClient:HttpClient) { 
    this.produitsService.liste().subscribe((data: Produit[]) =>{
      this.produitss= data;
     
    }, (error)=>{
      console.log(error);
      
    });
    this.lignedocumentsService.liste().subscribe( (data:Lignedocument[]) => {
      this.lignedocuments= data;
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
  ajouterBRFrs(){

    console.log(this.document);
      this.documentsService.ajouter(this.document).subscribe(data => {
      
        this.message='BR ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }
    reset(){
      this.document.num=null
      this.document.date=null
      this.document.type=null
      this.document.fournisseur_id=null
      this.document.timbre=null
      this.document.date_dec=null
      this.document.fodec=null
     
    }
}
