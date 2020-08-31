
import { Component, OnInit } from '@angular/core';
import { Rsc } from 'src/app/CLASSES/rsc';
import { HttpClient } from '@angular/common/http';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { Document } from 'src/app/CLASSES/document';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Client } from 'src/app/CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
@Component({
  selector: 'app-listeretenuesourcec',
  templateUrl: './listeretenuesourcec.component.html',
  styleUrls: ['./listeretenuesourcec.component.css']
})
export class ListeretenuesourcecComponent implements OnInit {
  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;
  term;
  allItems: any[];
  message:string;
  pager: any = {};
  API = 'http://localhost:8000/api';

  
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
  id:number;
  constructor(private clientsService :ClientsService,private rscsService :RscsService,private documentsService :DocumentsService, private httpClient:HttpClient, private pagerService: PagerService) {  
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
      this.message='il ya un erreur';
    });
    // pour afficher liste
    this.rscsService.liste().subscribe( (data:Rsc[]) => {
      this.rscs= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });}

  ngOnInit(): void {
    this.fetchDefaultSupportedClients();
    this.rscsService.liste().subscribe( (data:Rsc[]) => {
  
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
  
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
  
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
  
    // get current page of items
    this.rscs = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 

  supprimer(id){
    if (confirm('vous etes sur de supprimer cette rsc')){
      this.rscsService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='rsc supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }
  search(){     
  
    let rs=[];
    this.rscsService.liste().subscribe( (data:Rsc[]) => {
     this.rscs=data;
     for(var i:number = 1; i<this.rscs.length; i++){
      if(
     
        this.rscs[i].client_id==this.rsc.client_id ||
        this.rscs[i].date==this.rsc.date 
      
      
  
        )      
        rs.push(this.rscs[i]);
        console.log(JSON.stringify(this.rscs[i])); 
     }
     
     this.rscs=rs; 
    
    
      //prods=data;      
     
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    
    
    
      } 
      reset(){
        this.rsc.client_id=null
        this.rsc.date=null
       
      
      }
}
