import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpClient } from '@angular/common/http';
import { Document } from 'src/app/CLASSES/document';
import { BCFrs } from 'src/app/CLASSES/BC_Frs';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
@Component({
  selector: 'app-listebcf',
  templateUrl: './listebcf.component.html',
  styleUrls: ['./listebcf.component.css']
})
export class ListebcfComponent implements OnInit {
  private supportedFournisseurs: FormArray = new FormArray([]);
  private fournisseurSubscription: Subscription;
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
   fournisseurss: Fournisseur[];
   fournisseur: Fournisseur ={
     code_frs:"40000",
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
     archive:0
    };
   bcfrss: BCFrs[];
   bcfrs: BCFrs ={
    document_id:null,
    cloturer:null,
  

   };
    message: string;
  constructor(private fournisseursService :FournisseursService, private httpClient:HttpClient, private documentsService:DocumentsService, private pagerService: PagerService) {
    this.documentsService.liste().subscribe((data: Document[]) =>{
      this.documents= data;
     
    }, (error)=>{
      console.log(error);
      
    });

    this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
      this.fournisseurss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
   }

  ngOnInit(): void {
    this.fetchDefaultSupportedFournisseurs();
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
    supprimer(id){
      if (confirm('vous etes sur de supprimer ce document')){
        this.documentsService.supprimer(id).subscribe(data => {
          this.message=' document supprimee avec success';
          console.log(data);
          
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
  
  let bcf=[];
  this.documentsService.liste().subscribe( (data:Document[]) => {
   this.documents=data;
   for(var i:number = 1; i<this.documents.length; i++){
    if(
      this.documents[i].fournisseur_id==this.document.fournisseur_id ||
      this.documents[i].date_prev==this.document.date_prev ||
      this.documents[i].date_fin==this.document.date_fin 

      )      
      bcf.push(this.documents[i]);
      console.log(JSON.stringify(this.documents[i])); 
   }
   
   this.documents=bcf; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
}
