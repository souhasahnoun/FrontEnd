import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Document} from '../../../CLASSES/document';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-etatfacturec',
  templateUrl: './etatfacturec.component.html',
  styleUrls: ['./etatfacturec.component.css']
})
export class EtatfacturecComponent implements OnInit {
  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;
  API = 'http://localhost:8000/api';
  documents: Document[];
  document: Document ={
    num:null,
    date:null,
    etat:0,
    fodec:null,
    etat_pay:0,
    type_pay:null,
    rs:null,
    etat_rs:null,
    login:null,
    date_retenu:null,
    type:10,
    date_prev:null,
    date_dec:null,
    timbre:null,
    date_fin:null,
    fournisseur_id:null,
    designation:null,
    client_id:null,
   };
   message:string;
  constructor(private router: Router,private httpClient:HttpClient,private documentsService:DocumentsService) {
    this.documentsService.liste().subscribe( (data:Document[]) => {
      this.documents= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
   }

  ngOnInit(): void {
    this.fetchDefaultSupportedClients();

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
    reset(){
      this.document.date=null
      this.document.client_id=null
      this.document.etat_pay=null

      
    }

   imprimer(){     
     
      let et=[];
      this.documentsService.liste().subscribe( (data:Document[]) => {
       this.documents=data;
       for(var i:number = 1; i<this.documents.length; i++){
        if(
          this.documents[i].date==this.document.date &&
          this.documents[i].etat_pay==this.document.etat_pay && 
          this.documents[i].client_id==this.document.client_id 
          )     
         // this.router.navigate(['imprimeretatfacturec']);
 
          et.push(this.documents[i]);
          console.log(JSON.stringify(this.documents[i])); 
       }
       
       this.documents=et; 
      
      
        //prods=data;      
       
      }, error => {
        console.log(error);
        this.message='il ya un erreur';
      });
      
      
      
        
  
    }
}
