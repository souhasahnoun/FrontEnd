import { Component, OnInit } from '@angular/core';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { Rsf } from 'src/app/CLASSES/rsf';
import { Societe } from 'src/app/CLASSES/societe';
import { ActivatedRoute } from '@angular/router';
import { SocietesService } from 'src/app/SERVICES/service societe/societes.service';
import { RsfsService } from 'src/app/SERVICES/service rsf/rsfs.service';
import { HttpClient } from '@angular/common/http';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import {Document } from 'src/app/CLASSES/document';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { Banque } from 'src/app/CLASSES/banque';
import { BanquesService } from 'src/app/SERVICES/service banque/banques.service';
import { Souche } from 'src/app/CLASSES/souche';
import { SouchesService } from 'src/app/SERVICES/service souche/souches.service';
@Component({
  selector: 'app-saisiereglement1',
  templateUrl: './saisiereglement1.component.html',
  styleUrls: ['./saisiereglement1.component.css']
})
export class Saisiereglement1Component implements OnInit {
  API = 'http://localhost:8000/api';
  private supportedBanques: FormArray = new FormArray([]);
  private banqueSubscription: Subscription;
  private supportedSouches: FormArray = new FormArray([]);
  private soucheSubscription: Subscription;
  term;
  allItems: any[];
 id:number;
 imp;
  pager: any = {};
  souchess: Souche[];
  souche: Souche ={
    num:null,
    du:null,
    au:null,
    banque_id:null,
    etat:0,
   };

 
  paiementfrss: Paiementfrs[];
  paiementfrs: Paiementfrs ={
    
    date:null,
    mode:null,
    num:"null",
    etat:0,
    montant:null,
    fournisseur:"null",
    banque:"null",
    ordrepaiement_id:null,
    num_fact:null,
    date_echeance:null,
    solder:null,
    non_solder:null,
    impression:null,
    type_ch:null,
    etat_ch:null,
    type_date:null,
    etat_traite:null,
    type_traite:null,
   };   rsfs: Rsf[];
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
    societes: Societe[];
  societe: Societe ={
    prefixe:null,
    nom:null,
    adresse:null,
    tel	:null,
    fax:null,
    gsm:null,
    email:null,
    site_web:null,
    mf:null,
    rc:null,
    rib:null,
    iban:null,
    cd:null,
    magasin_id:null,
   };
  
 
    message:string;
  constructor(private souchesService :SouchesService,private activatedRoute: ActivatedRoute,private societesService :SocietesService,private rsfsService :RsfsService, private httpClient:HttpClient,private paiementsfrsService :PaiementsfrsService) {
   
    this.souchesService.liste().subscribe( (data:Souche[]) => {
      this.souchess= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
   
    this.id= this.activatedRoute.snapshot.params['id'];
    // pour afficher liste
    if(this.id){
      this.imp = true;
      this.paiementsfrsService.liste().subscribe((data: Paiementfrs[]) =>{
        this.paiementfrss= data;
       this.paiementfrs = this.paiementfrss.find((m) => {return m.id == this.id});
       console.log(this.paiementfrs);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.imp = false;
    }
   
    this.paiementsfrsService.liste().subscribe((data: Paiementfrs[]) =>{
      this.paiementfrss= data;
     console.log(this.paiementfrs);
    }, (error)=>{
      console.log(error);
      
    });
    this.rsfsService.liste().subscribe( (data:Rsf[]) => {
      this.rsfs= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });

    this.societesService.liste().subscribe( (data:Societe[]) => {
      this.societes= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
   }

   supprimerTraite(id){
    if (confirm('vous etes sur de supprimer cet traite ')){
      this.paiementsfrsService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='Traite supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }

  ajouterTraite(){

    console.log(this.paiementfrs);
      this.paiementsfrsService.ajouter(this.paiementfrs).subscribe(data => {
      
        this.message='traite ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

    ajouterPaiement(){

      console.log(this.paiementfrs);
        this.paiementsfrsService.ajouter(this.paiementfrs).subscribe(data => {
        
          this.message='paiement frs ajoutée avec success';
          console.log(data);
        }, error =>{
          console.log(error);
  
          this.message='Erreur';
        });
      }

      reset(){
        this.paiementfrs.date= null
        this.paiementfrs.date_echeance=null
        this.paiementfrs.etat=null
        this.paiementfrs.etat_ch=null
        this.paiementfrs.etat_traite=null
        this.paiementfrs.mode=null
        this.paiementfrs.montant=null
        this.paiementfrs.num=null
        this.paiementfrs.type_ch=null
        this.paiementfrs.type_traite=null
      }
  ngOnInit(): void {
    this.fetchDefaultSupportedBanques();
    this.fetchDefaultSupportedSouches();
  }
  fetchDefaultSupportedBanques() {
    this.banqueSubscription = this.httpClient.get(this.API + '/banques').subscribe(
      (response) => {
        const data = response;
        this.supportedBanques = this.createFormArrayForBanques(data);
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
     * @param fetchedBnaques
     */
  
    createFormArrayForBanques(fetchedBanques: any): FormArray {
      let banques = new FormArray([]);
      console.log('fetchedBanques length: ' + fetchedBanques.length);
      for (let entry in fetchedBanques) {
        console.log(fetchedBanques[entry]);
        banques.push(new FormControl(fetchedBanques[entry]));
      }
      return banques;
    }
    //pour le champs select
    get banques(): FormArray {
      return this.supportedBanques as FormArray;
    }

    fetchDefaultSupportedSouches() {
      this.soucheSubscription = this.httpClient.get(this.API + '/souches').subscribe(
        (response) => {
          const data = response;
          this.supportedSouches = this.createFormArrayForSouches(data);
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
       * @param fetchedSouches
       */
    
      createFormArrayForSouches(fetchedSouches: any): FormArray {
        let souches = new FormArray([]);
        console.log('fetchedSouches length: ' + fetchedSouches.length);
        for (let entry in fetchedSouches) {
          console.log(fetchedSouches[entry]);
          souches.push(new FormControl(fetchedSouches[entry]));
        }
        return souches;
      }
      //pour le champs select
      get souches(): FormArray {
        return this.supportedSouches as FormArray;
      }
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    } 


}
