import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import {Document} from '../../../CLASSES/document';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
@Component({
  selector: 'app-befournisseur',
  templateUrl: './befournisseur.component.html',
  styleUrls: ['./befournisseur.component.css']
})
export class BEFournisseurComponent implements OnInit {
  private supportedFournisseurs: FormArray = new FormArray([]);
  private fournisseurSubscription: Subscription;
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
    type:5,
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
    this.fetchDefaultSupportedFournisseurs();
  }
  ajouterBE(){

    console.log(this.document);
      this.documentsService.ajouter(this.document).subscribe(data => {
      
        this.message='BE ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
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
