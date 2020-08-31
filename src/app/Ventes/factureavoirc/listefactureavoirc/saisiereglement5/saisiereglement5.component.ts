import { Component, OnInit } from '@angular/core';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Rsc } from 'src/app/CLASSES/rsc';
import { Societe } from 'src/app/CLASSES/societe';
import { ActivatedRoute } from '@angular/router';
import { SocietesService } from 'src/app/SERVICES/service societe/societes.service';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';
import { HttpClient } from '@angular/common/http';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';

@Component({
  selector: 'app-saisiereglement5',
  templateUrl: './saisiereglement5.component.html',
  styleUrls: ['./saisiereglement5.component.css']
})
export class Saisiereglement5Component implements OnInit {
  API = 'http://localhost:8000/api';
  private supportedBanques: FormArray = new FormArray([]);
  private banqueSubscription: Subscription;
 
  term;
  allItems: any[];
 id:number;
 imp;
  pager: any = {};
  

 
  reglementclts: Reglementclt[];
  reglementclt: Reglementclt ={
    date:null,
    mode:"null",
    num:"null",
    etat:0,
    montant:0,
    type_pay:null,
    client:"null",
    banque:"null",
    date_echeance:null,
    etat_ch:null,
    etat_traite:null,
    type_date:null,
    type_traite:null,
    solder:null,
    non_solder:null,
    impression:null,
    
    
   };
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
  constructor(private activatedRoute: ActivatedRoute,private societesService :SocietesService,private rscsService :RscsService, private httpClient:HttpClient,private reglementcltsService :ReglementcltsService) {
   
  
   
    this.id= this.activatedRoute.snapshot.params['id'];
    // pour afficher liste
    if(this.id){
      this.imp = true;
      this.reglementcltsService.liste().subscribe((data: Reglementclt[]) =>{
        this.reglementclts= data;
       this.reglementclt = this.reglementclts.find((m) => {return m.id == this.id});
       console.log(this.reglementclt);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.imp = false;
    }
   
    this.reglementcltsService.liste().subscribe((data: Reglementclt[]) =>{
      this.reglementclts= data;
     console.log(this.reglementclt);
    }, (error)=>{
      console.log(error);
      
    });
    this.rscsService.liste().subscribe( (data:Rsc[]) => {
      this.rscs= data;
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
      this.reglementcltsService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='Traite supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }

  ajouterTraite(){

    console.log(this.reglementclt);
      this.reglementcltsService.ajouter(this.reglementclt).subscribe(data => {
      
        this.message='traite ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

    ajouterReglement(){

      console.log(this.reglementclt);
        this.reglementcltsService.ajouter(this.reglementclt).subscribe(data => {
        
          this.message='reglement clt ajoutée avec success';
          console.log(data);
        }, error =>{
          console.log(error);
  
          this.message='Erreur';
        });
      }

      reset(){
        this.reglementclt.date= null
        this.reglementclt.date_echeance=null
        this.reglementclt.etat=null
        this.reglementclt.etat_ch=null
        this.reglementclt.etat_traite=null
        this.reglementclt.mode=null
        this.reglementclt.montant=null
        this.reglementclt.num=null
        this.reglementclt.type_traite=null
      }
  ngOnInit(): void {
    this.fetchDefaultSupportedBanques();
   
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

    
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    } 


}
