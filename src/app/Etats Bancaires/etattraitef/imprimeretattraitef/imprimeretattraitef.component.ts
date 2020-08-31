import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { Ordrepaiement } from 'src/app/CLASSES/ordrepaiement';
import { Magasin } from 'src/app/CLASSES/magasin';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MagasinsService } from 'src/app/SERVICES/service magasin/magasins.service';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { OrdrepaiementsService } from 'src/app/SERVICES/service ordrepaiement/ordrepaiements.service';

@Component({
  selector: 'app-imprimeretattraitef',
  templateUrl: './imprimeretattraitef.component.html',
  styleUrls: ['./imprimeretattraitef.component.css'],
  providers: [DatePipe]
})
export class ImprimeretattraitefComponent implements OnInit {

  id:number;
  datedeb:Date;
  datefin:Date;
  type_dat:string;
  etat_traite:string;
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
  constructor(private paiementsfrsService :PaiementsfrsService,private ordrepaiementsService :OrdrepaiementsService,private datePipe: DatePipe,private magasinsService :MagasinsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 
    this.id= this.activatedRoute.snapshot.params['id'];
    this.datedeb= this.activatedRoute.snapshot.params['date'];
    this.datefin= this.activatedRoute.snapshot.params['date_echeance'];
    this.type_dat= this.activatedRoute.snapshot.params['type_date'];
    this.etat_traite= this.activatedRoute.snapshot.params['etat_traite'];
    // pour afficher liste
    //if(this.id  && this.datedeb && this.datefin && this.type_dat  && this.etat_traite ){
     // this.imp = true;
      this.paiementsfrsService.liste().subscribe((data: Paiementfrs[]) =>{
        this.paiementfrss= data;
      // this.paiementfrs = this.paiementfrss.find((m) => {
        // return m.id == this.id, 
          //  m.date== this.datedeb,
         // m.date_echeance== this.datefin,
       // m.type_date == this.type_dat,
        //m.etat_traite== this.etat_traite
      
      //});
      
       console.log(this.paiementfrs);
      }, (error)=>{
        console.log(error);
        
      });

   // } else {
      //this.imp = false;
    //}
    
  
    
    
    
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
