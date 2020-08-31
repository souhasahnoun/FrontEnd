import { Component, OnInit } from '@angular/core';
import {Document} from '../../../CLASSES/document';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blclient',
  templateUrl: './blclient.component.html',
  styleUrls: ['./blclient.component.css']
})
export class BLClientComponent implements OnInit {

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
    type:7,
    date_prev:null,
    date_dec:null,
    timbre:null,
    date_fin:null,
    fournisseur_id:null,
    designation:null,
    client_id:null,
   };
 
   message:string;
   modif: boolean = false;
   id: any;
  constructor(private documentsService :DocumentsService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.fetchDefaultSupportedClients();
  }
  ajouterBL(){

    console.log(this.document);
      this.documentsService.ajouter(this.document).subscribe(data => {
      
        this.message='BL ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
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

    reset(){
      this.document.num=null
      this.document.date=null
      this.document.type=null
      this.document.fournisseur_id=null
     
    }
}
