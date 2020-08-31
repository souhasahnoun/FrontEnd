import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/CLASSES/document';
import { BCClts } from 'src/app/CLASSES/BC_Clts';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { PagerService } from 'src/app/SERVICES';
import { Client } from 'src/app/CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';

@Component({
  selector: 'app-listebcc',
  templateUrl: './listebcc.component.html',
  styleUrls: ['./listebcc.component.css']
})
export class ListebccComponent implements OnInit {

  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;
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
    message: string;
  constructor(private clientsService :ClientsService,private httpClient:HttpClient, private documentsService:DocumentsService, private pagerService: PagerService) 
  {
    this.documentsService.liste().subscribe((data: Document[]) =>{
    this.documents= data;
   
  }, (error)=>{
    console.log(error);
    
  });
  this.clientsService.liste().subscribe( (data:Client[]) => {
    this.clientss= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
}
  ngOnInit(): void {
    this.fetchDefaultSupportedClients();
    this.documentsService.liste().subscribe( (data:Document[]) => {
  
      this.allItems=data;
        // initialize to page 1
        this.setPage(1);
    });
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
archiver(document){
    
  this.documentsService.archiver(document).subscribe(data => {
    
    console.log(data);
    this.message='BC archiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });
}
desarchiver(document){

  this.documentsService.desarchiver(document).subscribe(data => {
    
    console.log(data);
    this.message='BC desarchiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });

}
search(){     
  
  let bcc=[];
  this.documentsService.liste().subscribe( (data:Document[]) => {
   this.documents=data;
   for(var i:number = 1; i<this.documents.length; i++){
    if(
   
      this.documents[i].client_id==this.document.client_id ||
      this.documents[i].date_prev==this.document.date_prev ||
      this.documents[i].date_fin==this.document.date_fin

      )      
      bcc.push(this.documents[i]);
      console.log(JSON.stringify(this.documents[i])); 
   }
   
   this.documents=bcc; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
}
