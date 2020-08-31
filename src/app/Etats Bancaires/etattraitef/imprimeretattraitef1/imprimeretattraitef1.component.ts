import { Component, OnInit } from '@angular/core';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { Ordrepaiement } from 'src/app/CLASSES/ordrepaiement';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { OrdrepaiementsService } from 'src/app/SERVICES/service ordrepaiement/ordrepaiements.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imprimeretattraitef1',
  templateUrl: './imprimeretattraitef1.component.html',
  styleUrls: ['./imprimeretattraitef1.component.css']
})
export class Imprimeretattraitef1Component implements OnInit {

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
modifiedtext:any;
  modif: boolean = false;
  id: number;
  term;
  message:string;

  constructor(private paiementsfrsService :PaiementsfrsService,private ordrepaiementsService :OrdrepaiementsService,private httpClient:HttpClient) { 


  // pour afficher liste
  this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
    this.paiementfrss= data;
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
}
  ngOnInit(): void {
  }

}
