import { Component, OnInit } from '@angular/core';
import {Document} from '../../../CLASSES/document';
import { FormArray, FormControl } from '@angular/forms';
import { BLClts } from 'src/app/CLASSES/BL_Clts';
import { Produit } from 'src/app/CLASSES/produit';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { Subscription } from 'rxjs';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { Devis } from 'src/app/CLASSES/devis';

@Component({
  selector: 'app-bldevisclt',
  templateUrl: './bldevisclt.component.html',
  styleUrls: ['./bldevisclt.component.css']
})
export class BldeviscltComponent implements OnInit {

  private supportedDocuments: FormArray = new FormArray([]);
  private documentSubscription: Subscription;
  API = 'http://localhost:8000/api';
  

   blcltss: BLClts[];
   blclts: BLClts ={
    disabled:null,
    document_id:null,

   };
   deviss: Devis[];
   devis: Devis ={
   
    document_id:null,

   };
  documentss: Document[];
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
  constructor(private produitsService :ProduitsService,private lignedocumentsService :LignedocumentsService,private documentsService :DocumentsService,private httpClient:HttpClient) { 
    this.lignedocumentsService.liste().subscribe( (data:Lignedocument[]) => {
      this.lignedocuments= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    this.documentsService.liste().subscribe( (data:Document[]) => {
      this.documentss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.produitsService.liste().subscribe((data: Produit[]) =>{
      this.produitss= data;
     
    }, (error)=>{
      console.log(error);
      
    });
  }
  ajouterbl(){

    console.log(this.document);
      this.documentsService.ajouter(this.document).subscribe(data => {
      
        this.message='BL ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }
  ngOnInit(): void {
    this.fetchDefaultSupportedDocuments();
  }
  fetchDefaultSupportedDocuments() {
    this.documentSubscription = this.httpClient.get(this.API + '/documents').subscribe(
      (response) => {
        const data = response;
        this.supportedDocuments = this.createFormArrayForDocuments(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }
  
  //pour le champs select
   /**
     * Create and FormArray of the given list of hero's
     * 
     * @param fetchedDocuments
     */
  
    createFormArrayForDocuments(fetchedDocuments: any): FormArray {
      let documents = new FormArray([]);
      console.log('fetchedDocuments length: ' + fetchedDocuments.length);
      for (let entry in fetchedDocuments) {
        console.log(fetchedDocuments[entry]);
        documents.push(new FormControl(fetchedDocuments[entry]));
      }
      return documents;
    }
    //pour le champs select
    get documents(): FormArray {
      return this.supportedDocuments as FormArray;
    }
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    } 
    reset(){
      this.document.num=null
      this.document.date=null
      this.document.date_prev=null
      this.document.designation=null
      this.document.client_id=null
     
    }


}
