import { Component, OnInit } from '@angular/core';
import { Rsf } from 'src/app/CLASSES/rsf';
import { HttpClient } from '@angular/common/http';
import { RsfsService } from 'src/app/SERVICES/service rsf/rsfs.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { Document } from 'src/app/CLASSES/document';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
@Component({
  selector: 'app-listeretenuesourcef',
  templateUrl: './listeretenuesourcef.component.html',
  styleUrls: ['./listeretenuesourcef.component.css']
})
export class ListeretenuesourcefComponent implements OnInit {
  private supportedFournisseurs: FormArray = new FormArray([]);
  private fournisseurSubscription: Subscription;

  term;
  allItems: any[];
  message:string;
  pager: any = {};
  API = 'http://localhost:8000/api';
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
  
  rsfs: Rsf[];
  rsf: Rsf ={
    date:null,
    taux:null,
    montant:null,
    rs:null,
    net:null,
    etat_pay:null,
    imp:null,
    etat_imp:null,
    created:null,
    fournisseur_id:null,
    paiementfrs_id:null,
    
    
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
  id:number;
  constructor(private fournisseursService :FournisseursService,private rsfsService :RsfsService,private documentsService :DocumentsService, private httpClient:HttpClient, private pagerService: PagerService) {  
    this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
      this.fournisseurss= data;
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
    this.rsfsService.liste().subscribe( (data:Rsf[]) => {
      this.rsfs= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });}

  ngOnInit(): void {
    this.fetchDefaultSupportedFournisseurs();
    this.rsfsService.liste().subscribe( (data:Rsf[]) => {
  
      this.allItems=data;
        // initialize to page 1
        this.setPage(1);
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
  
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
  
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
  
    // get current page of items
    this.rsfs = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 

  supprimer(id){
    if (confirm('vous etes sur de supprimer cette rsf')){
      this.rsfsService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='rsf supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }
  search(){     
  
    let rs=[];
    this.rsfsService.liste().subscribe( (data:Rsf[]) => {
     this.rsfs=data;
     for(var i:number = 1; i<this.rsfs.length; i++){
      if(
        this.rsfs[i].fournisseur_id==this.rsf.fournisseur_id ||
        this.rsfs[i].date==this.document.date 
      
     
  
        )      
        rs.push(this.rsfs[i]);
        console.log(JSON.stringify(this.rsfs[i])); 
     }
     
     this.rsfs=rs; 
    
    
      //prods=data;      
     
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    
    
    
      } 
      reset(){
  
        this.document.fournisseur_id=null
        this.document.date=null
      
      }
}
