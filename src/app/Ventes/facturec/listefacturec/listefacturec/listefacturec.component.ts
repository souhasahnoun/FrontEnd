import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/CLASSES/document';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Factureclts } from 'src/app/CLASSES/factureclts';
import { Client } from 'src/app/CLASSES/client';
import { Rsc } from 'src/app/CLASSES/rsc';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { PagerService } from 'src/app/SERVICES';

@Component({
  selector: 'app-listefacturec',
  templateUrl: './listefacturec.component.html',
  styleUrls: ['./listefacturec.component.css']
})
export class ListefacturecComponent implements OnInit {

  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;
  private supportedRscs: FormArray = new FormArray([]);
  private rscSubscription: Subscription;
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

   facturecltss: Factureclts[];
   factureclts: Factureclts ={
    
    document_id:null,
    avoir:null,
    dateavoir:null
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
    rscss: Rsc[];
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
    message: string;
  constructor(private clientsService :ClientsService,private lignedocumentsService :LignedocumentsService,private rscsService :RscsService,private httpClient:HttpClient, private documentsService:DocumentsService, private pagerService: PagerService) { 
    this.documentsService.liste().subscribe( (data:Document[]) => {
      this.documents= data;
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
    this.clientsService.liste().subscribe( (data:Client[]) => {
      this.clientss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });



  this.rscsService.liste().subscribe( (data:Rsc[]) => {
    this.rscss= data;
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });


 }

ngOnInit(): void {
  

  this.documentsService.liste().subscribe( (data:Document[]) => {

    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });
  this.fetchDefaultSupportedClients();
  this.fetchDefaultSupportedRscs();
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

fetchDefaultSupportedRscs() {
  this.rscSubscription = this.httpClient.get(this.API + '/rscs').subscribe(
    (response) => {
      const data = response;
      this.supportedRscs = this.createFormArrayForRscs(data);
    },
    (error) => {
      console.log('error: ' + error);
    }
  );
}

  
   /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedRscs
   */

  createFormArrayForRscs(fetchedRscs: any): FormArray {
    let rscs = new FormArray([]);
    console.log('fetchedRscs length: ' + fetchedRscs.length);
    for (let entry in fetchedRscs) {
      console.log(fetchedRscs[entry]);
      rscs.push(new FormControl(fetchedRscs[entry]));
    }
    return rscs;
  }
  //pour le champs select
  get rscs(): FormArray {
    return this.supportedRscs as FormArray;
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
  
  let f=[];
  this.documentsService.liste().subscribe( (data:Document[]) => {
   this.documents=data;
   for(var i:number = 1; i<this.documents.length; i++){
    if(
   
      this.documents[i].num==this.document.num ||
      this.documents[i].client_id==this.document.client_id ||
      this.documents[i].etat_pay==this.document.etat_pay ||
      this.documents[i].date==this.document.date ||
      this.documents[i].date_dec==this.document.date_dec

      )      
      f.push(this.documents[i]);
      console.log(JSON.stringify(this.documents[i])); 
   }
   
   this.documents=f; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
    reset(){
      this.document.num=null
      this.document.client_id=null
      this.document.etat_pay=null
      this.document.date_dec=null
      this.document.date=null
    
    }

}
