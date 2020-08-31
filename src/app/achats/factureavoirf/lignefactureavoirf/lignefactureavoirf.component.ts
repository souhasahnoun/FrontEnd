import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { Produit } from 'src/app/CLASSES/produit';
import { Subscription } from 'rxjs';
import { Facturefrs } from 'src/app/CLASSES/facture_frs';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Document} from 'src/app/CLASSES/document';
import { Factureavoirfrs } from 'src/app/CLASSES/factureavoirfrs';
@Component({
  selector: 'app-lignefactureavoirf',
  templateUrl: './lignefactureavoirf.component.html',
  styleUrls: ['./lignefactureavoirf.component.css']
})
export class LignefactureavoirfComponent implements OnInit {
  private supportedFournisseurs: FormArray = new FormArray([]);
  private fournisseurSubscription: Subscription;

  private supportedProduits: FormArray = new FormArray([]);
  private produitSubscription: Subscription;

  private supportedTvas: FormArray = new FormArray([]);
  private tvaSubscription: Subscription;
 ref_prod:string;
 nom_prod:string;
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
   factureavoirfrss: Factureavoirfrs[];
   factureavoirfrs: Factureavoirfrs ={
    
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
   message:string;
   modif: boolean = false;
   ajouter: boolean = false;

   id: number;
  constructor(private produitsService :ProduitsService,private lignedocumentsService :LignedocumentsService,private documentsService :DocumentsService,private fournisseursService :FournisseursService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {
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

    this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
      this.fournisseurss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

  
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.documentsService.liste().subscribe((data: Document[]) =>{
        this.documents= data;
       this.document = this.documents.find((m) => {return m.id == this.id});
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

    modifierFactureAvoirFrs(){
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
          
            this.message='ligne facture avoir ajoutée avec success';
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
      if (confirm('vous etes sur de supprimer cet ligne facture avoir')){
        this.lignedocumentsService.supprimer(id).subscribe(data => {
          
          console.log(data);
          this.message='ligne facture avoir supprimee avec success';
        }, error =>{
          console.log(error);
          this.message='Erreur';
        });
      }
}


}
