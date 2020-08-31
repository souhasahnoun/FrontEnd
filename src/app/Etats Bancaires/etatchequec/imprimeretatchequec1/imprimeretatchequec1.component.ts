import { Component, OnInit } from '@angular/core';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { Banque } from 'src/app/CLASSES/banque';
import { BorderauxService } from 'src/app/SERVICES/service bordereau/borderaux.service';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { BanquesService } from 'src/app/SERVICES/service banque/banques.service';
import { HttpClient } from '@angular/common/http';
import { Bordereaux } from 'src/app/CLASSES/bordereaux';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprimeretatchequec1',
  templateUrl: './imprimeretatchequec1.component.html',
  styleUrls: ['./imprimeretatchequec1.component.css']
})
export class Imprimeretatchequec1Component implements OnInit {
  banc:string;
  reglementclts: Reglementclt[];
  banques: Banque[];
  borderaux: Bordereaux[];
  message:string;
  reglementclt: Reglementclt ={
    date:null,
    mode:null,
    num:null,
    etat:null,
    montant:null,
    type_pay:null,
    client:null,
    banque:null,
    date_echeance:null,
    etat_ch:null,
    etat_traite:null,
    type_date:null,
    type_traite:null,
    solder:null,
    non_solder:null,
    impression:null,
    
    
   };
   bordereau: Bordereaux ={
    num:null,
    type:null,
    banque_id:null,
    date:null,
    created:null,
    login:null,
   
   };

   banque: Banque ={
   
    libelle:null,
    rib:null,
    titulaire_cheque:null,
    titulaire_traite:null,
    adresse:null
   };

   imp;
  constructor(private borderauxService :BorderauxService,private reglementcltsService :ReglementcltsService,private banquesService :BanquesService,private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {
    this.banquesService.liste().subscribe( (data:Banque[]) => {
      this.banques= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.borderauxService.liste().subscribe( (data:Bordereaux[]) => {
      this.borderaux= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.banc= this.activatedRoute.snapshot.params['banque'];
    // pour afficher liste
    if(this.banc){
      this.imp = true;
      this.reglementcltsService.liste().subscribe((data: Reglementclt[]) =>{
        this.reglementclts= data;
       this.reglementclt = this.reglementclts.find((m) => {
         return m.banque == this.banc  
      });
      
       console.log(this.reglementclt);
      }, (error)=>{
        console.log(error);
        
      });
} else {
  this.imp = false;
}
  }
  ngOnInit(): void {
  }

}
