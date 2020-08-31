import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import {Document} from 'src/app/CLASSES/document';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { HttpClient } from '@angular/common/http';
import { BCFrs } from 'src/app/CLASSES/BC_Frs';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';

@Component({
  selector: 'app-lignecommandef',
  templateUrl: './lignecommandef.component.html',
  styleUrls: ['./lignecommandef.component.css']
})
export class LignecommandefComponent implements OnInit {
  private supportedFournisseurs: FormArray = new FormArray([]);
  private fournisseurSubscription: Subscription;

  private supportedProduits: FormArray = new FormArray([]);
  private produitSubscription: Subscription;

  private supportedTvas: FormArray = new FormArray([]);
  private tvaSubscription: Subscription;
  private supportedDocuments: FormArray = new FormArray([]);
  private documentSubscription: Subscription;
 ref_prod:string;

  API = 'http://localhost:8000/api';
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
   bcfrss: BCFrs[];
   bcfrs: BCFrs ={
    document_id:null,
    cloturer:null,


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
   id: any;
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
   modif: boolean = false;
   ajouter: boolean = false;


  constructor(private lignedocumentsService :LignedocumentsService,private documentsService :DocumentsService,private fournisseursService :FournisseursService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {
  
    this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
      this.fournisseurss= data;
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

  
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      
            this.documentsService.liste().subscribe((data: Document[]) =>{
        this.documentss= data;
       this.document = this.documentss.find((m) => {return m.id == this.id});
       console.log(this.document);
      }, (error)=>{
        console.log(error);
        
      });
  
    } else {
      this.modif = false;
    }
   }

  ngOnInit(): void {
    this.fetchDefaultSupportedFournisseurs();
    this.fetchDefaultSupportedProduits();
    this.fetchDefaultSupportedTvas();
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
  fetchDefaultSupportedFournisseurs() {
    this.fournisseurSubscription = this.httpClient.get(this.API + '/fournisseurs').subscribe(
      (response) => {
        const data = response;
        this.supportedFournisseurs = this.createFormArrayForFournisseurs(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }
  fetchDefaultSupportedProduits() {
    this.produitSubscription = this.httpClient.get(this.API + '/produits').subscribe(
      (response) => {
        const data = response;
        this.supportedProduits = this.createFormArrayForProduits(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }

  fetchDefaultSupportedTvas() {
    this.tvaSubscription = this.httpClient.get(this.API + '/tvas').subscribe(
      (response) => {
        const data = response;
        this.supportedTvas = this.createFormArrayForTvas(data);
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

 
  /**
     * Create and FormArray of the given list of hero's
     * 
     * @param fetchedFournisseurs
     */
  
    createFormArrayForFournisseurs(fetchedFournisseurs: any): FormArray {
      let fournisseurs = new FormArray([]);
      console.log('fetchedFournisseurs length: ' + fetchedFournisseurs.length);
      for (let entry in fetchedFournisseurs) {
        console.log(fetchedFournisseurs[entry]);
        fournisseurs.push(new FormControl(fetchedFournisseurs[entry]));
      }
      return fournisseurs;
    }
    //pour le champs select
    get fournisseurs(): FormArray {
      return this.supportedFournisseurs as FormArray;
    }


     /**
     * Create and FormArray of the given list of hero's
     * 
     * @param fetchedProduits
     */
  
    createFormArrayForProduits(fetchedProduits: any): FormArray {
      let produits = new FormArray([]);
      console.log('fetchedProduits length: ' + fetchedProduits.length);
      for (let entry in fetchedProduits) {
        console.log(fetchedProduits[entry]);
        produits.push(new FormControl(fetchedProduits[entry]));
      }
      return produits;
    }
    //pour le champs select
    get produits(): FormArray {
      return this.supportedProduits as FormArray;
    }

      /**
     * Create and FormArray of the given list of hero's
     * 
     * @param fetchedTvas
     */
  
    createFormArrayForTvas(fetchedTvas: any): FormArray {
      let tvas = new FormArray([]);
      console.log('fetchedTvas length: ' + fetchedTvas.length);
      for (let entry in fetchedTvas) {
        console.log(fetchedTvas[entry]);
        tvas.push(new FormControl(fetchedTvas[entry]));
      }
      return tvas;
    }
    //pour le champs select
    get tvas(): FormArray {
      return this.supportedTvas as FormArray;
    }
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    } 

    modifierCommande(){
      // fonction modifier
      if (this.modif){
        this.documentsService.modifier(this.document).subscribe(data => {
    
          this.message='document modifiée avec success';
          console.log(data);
        }, error =>{
          console.log(error);
          this.message='Erreur';
        });
      }
      }

      ajouterLigneDoc(){

        console.log(this.lignedocument);
          this.lignedocumentsService.ajouter(this.lignedocument).subscribe(data => {
          
            this.message='ligne document ajoutée avec success';
            this.ajouter = true;
            console.log(data);
          }, error =>{
            console.log(error);
    
            this.message='Erreur';
          });
      }
      reset(){
        this.lignedocument.prix=null
        this.lignedocument.produit_id=null
        this.lignedocument.qte=null
        this.lignedocument.remise=null
        this.lignedocument.tva=null
      }

      modifier(){
        this.modif = true;
      }

      modifierLigne(){
        this.modifier();
        if (this.modif){
          this.lignedocumentsService.modifier(this.lignedocument).subscribe(data => {
      
            this.message='ligne document modifiée avec success';
            console.log(data);
          }, error =>{
            console.log(error);
            this.message='Erreur';
          });
        }
      }

      // supprimer
    supprimer(id){
      if (confirm('vous etes sur de supprimer cet ligne document')){
        this.lignedocumentsService.supprimer(id).subscribe(data => {
          
          console.log(data);
          this.message='ligne document supprimee avec success';
        }, error =>{
          console.log(error);
          this.message='Erreur';
        });
      }
}
}
