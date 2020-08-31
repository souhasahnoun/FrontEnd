import { Component, OnInit } from '@angular/core';
import { Rsc } from 'src/app/CLASSES/rsc';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { Societe } from 'src/app/CLASSES/societe';
import { ActivatedRoute } from '@angular/router';
import { SocietesService } from 'src/app/SERVICES/service societe/societes.service';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';
import { HttpClient } from '@angular/common/http';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { LignebordereauxService } from 'src/app/SERVICES/service bordereau/lignebordereaux.service';
import { Lignebordereau } from 'src/app/CLASSES/lignebordereau';

@Component({
  selector: 'app-saisiereglement3',
  templateUrl: './saisiereglement3.component.html',
  styleUrls: ['./saisiereglement3.component.css']
})
export class Saisiereglement3Component implements OnInit {

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

   lignebordereaux: Lignebordereau[];
   lignebordereau: Lignebordereau ={
    reglementcls_id:null,
    source:null,
    source_id:null,
    montant:null,
    rs:null,
    num:null,
    type:null,
    banque:null,
    date:null,
    etat:null,
    type_ch:null,
    created:null,
    login:null,
    bordereaus_id:null,
   };
    message:string;
  constructor(private lignebordereauxService :LignebordereauxService,private activatedRoute: ActivatedRoute,private societesService :SocietesService,private rscsService :RscsService, private httpClient:HttpClient,private reglementcltsService :ReglementcltsService) {
    this.id= this.activatedRoute.snapshot.params['id'];
    // pour afficher liste
    if(this.id){
      this.imp = true;
      this.reglementcltsService.liste().subscribe((data: Reglementclt[]) =>{
        this.reglementclts= data;
       this.reglementclt = this.reglementclts.find((m) => {return m.id == this.id});
       console.log(this.reglementclts);
      }, (error)=>{
        console.log(error);
        
      });
      this.lignebordereauxService.liste().subscribe( (data:Lignebordereau[]) => {
        this.lignebordereaux= data;
      }, error => {
        console.log(error);
        alert('il ya un erreur');
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
  }
}
