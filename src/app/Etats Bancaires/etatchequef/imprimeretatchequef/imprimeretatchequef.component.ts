import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Ordrepaiement } from 'src/app/CLASSES/ordrepaiement';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { Magasin } from 'src/app/CLASSES/magasin';
import { MagasinsService } from 'src/app/SERVICES/service magasin/magasins.service';
import { HttpClient } from '@angular/common/http';
import { OrdrepaiementsService } from 'src/app/SERVICES/service ordrepaiement/ordrepaiements.service';
import { ActivatedRoute } from '@angular/router';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';

@Component({
  selector: 'app-imprimeretatchequef',
  templateUrl: './imprimeretatchequef.component.html',
  styleUrls: ['./imprimeretatchequef.component.css'],
  providers: [DatePipe]
})
export class ImprimeretatchequefComponent implements OnInit {

  id:number;
  datedeb:Date;
  datefin:Date;
  type_dat:string;
  etat_ch:string;
  myDate = new Date();
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
   imp;
   magasins: Magasin[];
   magasin: Magasin ={
   
    libelle:null,
    ordre:null,

    region_id:null,
   };
   message:string;
  constructor(private datePipe: DatePipe,private magasinsService :MagasinsService, private paiementsfrsService :PaiementsfrsService,private ordrepaiementsService :OrdrepaiementsService,private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 
    this.id= this.activatedRoute.snapshot.params['id'];
    this.datedeb= this.activatedRoute.snapshot.params['date'];
    this.datefin= this.activatedRoute.snapshot.params['date_echeance'];
    this.type_dat= this.activatedRoute.snapshot.params['type_date'];
    this.etat_ch= this.activatedRoute.snapshot.params['etat_ch'];
    // pour afficher liste
   
      this.paiementsfrsService.liste().subscribe((data: Paiementfrs[]) =>{
        this.paiementfrss= data;
       
   
      
       console.log(this.paiementfrs);
      }, (error)=>{
        console.log(error);
        
      });

   
    
    
    
    
    
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
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
