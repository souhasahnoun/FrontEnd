import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Banque } from 'src/app/CLASSES/banque';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { Ordrepaiement } from 'src/app/CLASSES/ordrepaiement';
import { ActivatedRoute } from '@angular/router';
import { BanquesService } from 'src/app/SERVICES/service banque/banques.service';
import { HttpClient } from '@angular/common/http';
import { OrdrepaiementsService } from 'src/app/SERVICES/service ordrepaiement/ordrepaiements.service';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { MagasinsService } from 'src/app/SERVICES/service magasin/magasins.service';
import { Magasin } from 'src/app/CLASSES/magasin';

@Component({
  selector: 'app-imprimeretatchequef1',
  templateUrl: './imprimeretatchequef1.component.html',
  styleUrls: ['./imprimeretatchequef1.component.css'],
  providers: [DatePipe]
})
export class Imprimeretatchequef1Component implements OnInit {
  myDate = new Date();
  banc:string;
  
  banques: Banque[];
 
  message:string;
  paiementfrss: Paiementfrs[];
  paiementfrs: Paiementfrs ={
    date:null,
    mode:null,
    num:null,
    etat:null,
    montant:null,
    fournisseur:null,
    banque:null,
    date_echeance:null,
    solder:null,
    non_solder:null,
    impression:null,
    etat_ch:null,
    etat_traite:null,
    type_date:null,
    num_fact:null,
    ordrepaiement_id:null,
    type_ch:null,
    type_traite:null
   };
   ordrepaiements: Ordrepaiement[];
   ordrepaiement: Ordrepaiement ={
    
    num:null,
    date:null,
    login:null,
    created:null,
    montant:null,
   };
   banque: Banque ={
   
    libelle:null,
    rib:null,
    titulaire_cheque:null,
    titulaire_traite:null,
    adresse:null
   };
   magasins: Magasin[];
   magasin: Magasin ={
   
    libelle:null,
    ordre:null,

    region_id:null,
   };
  
  constructor(private paiementsfrsService :PaiementsfrsService,private magasinsService :MagasinsService,private ordrepaiementsService :OrdrepaiementsService,private datePipe: DatePipe,private banquesService :BanquesService,private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
    this.banquesService.liste().subscribe( (data:Banque[]) => {
      this.banques= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.ordrepaiementsService.liste().subscribe( (data:Ordrepaiement[]) => {
      this.ordrepaiements= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
      this.paiementfrss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.magasinsService.liste().subscribe( (data:Magasin[]) => {
      this.magasins= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
  }
  ngOnInit(): void {
  }


}
