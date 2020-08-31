import { Component, OnInit } from '@angular/core';
import {Document} from 'src/app/CLASSES/document';
import { BCClts } from 'src/app/CLASSES/BC_Clts';
import { Client } from 'src/app/CLASSES/client';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';

@Component({
  selector: 'app-lignecommandec',
  templateUrl: './lignecommandec.component.html',
  styleUrls: ['./lignecommandec.component.css']
})
export class LignecommandecComponent implements OnInit {

  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;

  private supportedProduits: FormArray = new FormArray([]);
  private produitSubscription: Subscription;

  private supportedTvas: FormArray = new FormArray([]);
  private tvaSubscription: Subscription;
  ref_prod:string;
   nom:string;
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

   id: any;
  constructor(private clientsService :ClientsService,private lignedocumentsService :LignedocumentsService,private documentsService :DocumentsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {
    this.lignedocumentsService.liste().subscribe( (data:Lignedocument[]) => {
      this.lignedocuments= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.clientsService.liste().subscribe( (data:Client[]) => {
      this.clientss= data;
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
    this.fetchDefaultSupportedClients();
    this.fetchDefaultSupportedProduits();
    this.fetchDefaultSupportedTvas();
  }
  fetchDefaultSupportedClients() {
    this.clientSubscription = this.httpClient.get(this.API + '/clients').subscribe(
      (response) => {
        const data = response;
        this.supportedClients = this.createFormArrayForClients(data);
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
     * @param fetchedClients
     */
  
    createFormArrayForClients(fetchedClients: any): FormArray {
      let clients = new FormArray([]);
      console.log('fetchedClients length: ' + fetchedClients.length);
      for (let entry in fetchedClients) {
        console.log(fetchedClients[entry]);
        clients.push(new FormControl(fetchedClients[entry]));
      }
      return clients;
    }
    //pour le champs select
    get clients(): FormArray {
      return this.supportedClients as FormArray;
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
    
          this.message='commande modifiée avec success';
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
          
            this.message='ligne commande ajoutée avec success';
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
