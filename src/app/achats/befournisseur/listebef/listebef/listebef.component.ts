import { Component, OnInit } from '@angular/core';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Document } from 'src/app/CLASSES/document';
import { BEFrs } from 'src/app/CLASSES/BE_Frs';
import { HttpClient } from '@angular/common/http';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';
import { LignedocumentsService } from 'src/app/SERVICES/service document/lignedocuments.service';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { Rsf } from 'src/app/CLASSES/rsf';
import { RsfsService } from 'src/app/SERVICES/service rsf/rsfs.service';
import { BefrsService } from 'src/app/SERVICES/service befrs/befrs.service';
@Component({
  selector: 'app-listebef',
  templateUrl: './listebef.component.html',
  styleUrls: ['./listebef.component.css']
})
export class ListebefComponent implements OnInit {
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

   befrss: BEFrs[];
   befrs: BEFrs ={
    import:null,
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
  
    message: string;
  constructor(private befrsService :BefrsService,private rsfsService :RsfsService,private fournisseursService :FournisseursService,private lignedocumentsService :LignedocumentsService,private httpClient:HttpClient, private documentsService:DocumentsService, private pagerService: PagerService) {
    this.lignedocumentsService.liste().subscribe( (data:Lignedocument[]) => {
      this.lignedocuments= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
      this.fournisseurss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.befrsService.liste().subscribe( (data:BEFrs[]) => {
      this.befrss= data;
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
    this.rsfsService.liste().subscribe( (data:Rsf[]) => {
      this.rsfs= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
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
          
          console.log(data);
          this.message=' document supprimee avec success';
        }, error =>{
          console.log(error);
          this.message='Erreur';
        });
      }
}

search(){     
  
  let bef=[];
  this.documentsService.liste().subscribe( (data:Document[]) => {
   this.documents=data;
   for(var i:number = 1; i<this.documents.length; i++){
    if(
      this.documents[i].num==this.document.num ||
      this.documents[i].fournisseur_id==this.document.fournisseur_id ||
      this.documents[i].date==this.document.date ||
      this.documents[i].date_fin==this.document.date_fin 

      )      
      bef.push(this.documents[i]);
      console.log(JSON.stringify(this.documents[i])); 
   }
   
   this.documents=bef; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 
}
