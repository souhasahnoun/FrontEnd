import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/CLASSES/document';
import { Rsc } from 'src/app/CLASSES/rsc';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { BLClts } from 'src/app/CLASSES/BL_Clts';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { Client } from 'src/app/CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { PagerService } from 'src/app/SERVICES';
import { Rsf } from 'src/app/CLASSES/rsf';

@Component({
  selector: 'app-listeblc',
  templateUrl: './listeblc.component.html',
  styleUrls: ['./listeblc.component.css']
})
export class ListeblcComponent implements OnInit {

  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;

  private supportedUtilisateurs: FormArray = new FormArray([]);
  private utilisateurSubscription: Subscription;
  allItems: any[];
  
  pager: any = {};
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

   blcltss: BLClts[];
   blclts: BLClts ={
    disabled:null,
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
    rscs: Rsc[];
    rsc: Rsc ={
      date:null,
      taux:null,
      montant:null,
      rs:null,
      net:null,
      etat_pay:null,
      imp:null,

     client_id:null,
     reglementcls_id:null,
      
     };
  
    message: string;
  constructor(private clientsService :ClientsService,private rscsService :RscsService,private lignedocumentsService :LignedocumentsService,private httpClient:HttpClient, private documentsService:DocumentsService, private pagerService: PagerService) {
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


    this.documentsService.liste().subscribe( (data:Document[]) => {
      this.documents= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    this.rscsService.liste().subscribe( (data:Rsc[]) => {
      this.rscs= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });

   }

  ngOnInit(): void {
    this.fetchDefaultSupportedClients();
    this.fetchDefaultSupportedUtilisateurs();
    this.documentsService.liste().subscribe( (data:Document[]) => {
  
      this.allItems=data;
        // initialize to page 1
        this.setPage(1);
    });
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

  fetchDefaultSupportedUtilisateurs() {
    this.utilisateurSubscription = this.httpClient.get(this.API + '/utilisateurs').subscribe(
      (response) => {
        const data = response;
        this.supportedUtilisateurs = this.createFormArrayForUtilisateurs(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
  
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
  
    // get current page of items
    this.documents = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 




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
/**
     * Create and FormArray of the given list of hero's
     * 
     * @param fetchedUtilisateurs
     */
  
    createFormArrayForUtilisateurs(fetchedUtilisateurs: any): FormArray {
      let utilisateurs = new FormArray([]);
      console.log('fetchedUtilisateurslength: ' + fetchedUtilisateurs.length);
      for (let entry in fetchedUtilisateurs) {
        console.log(fetchedUtilisateurs[entry]);
        utilisateurs.push(new FormControl(fetchedUtilisateurs[entry]));
      }
      return utilisateurs;
    }
    //pour le champs select
    get utilisateurs(): FormArray {
      return this.supportedUtilisateurs as FormArray;
    }


    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    } 
    supprimer(id){
      if (confirm('vous etes sur de supprimer ce document')){
        this.documentsService.supprimer(id).subscribe(data => {
          
          console.log(data);
          this.message=' document supprimee avec success';
        }, error =>{
          console.log(error);
          this.message='Erreur';
        });
      }
}
search(){     
  
  let blc=[];
  this.documentsService.liste().subscribe( (data:Document[]) => {
   this.documents=data;
   for(var i:number = 1; i<this.documents.length; i++){
    if(
      this.documents[i].num==this.document.num ||
      this.documents[i].client_id==this.document.client_id ||
      this.documents[i].date==this.document.date ||
      this.documents[i].date_fin==this.document.date_fin ||
      this.documents[i].etat==this.document.etat ||
      this.documents[i].etat_pay==this.document.etat_pay ||
      this.documents[i].rs==this.document.rs ||
      this.documents[i].login==this.document.login 
      )      
      blc.push(this.documents[i]);
      console.log(JSON.stringify(this.documents[i])); 
   }
   
   this.documents=blc; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
}
