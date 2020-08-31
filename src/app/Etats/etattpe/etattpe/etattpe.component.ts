import { Component, OnInit } from '@angular/core';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';

@Component({
  selector: 'app-etattpe',
  templateUrl: './etattpe.component.html',
  styleUrls: ['./etattpe.component.css']
})
export class EtattpeComponent implements OnInit {
  reglementclts: Reglementclt[];
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
  constructor() { }

  ngOnInit(): void {
  }
  reset(){
    this.reglementclt.date=null
    this.reglementclt.date_echeance=null
  
    
  }
}
