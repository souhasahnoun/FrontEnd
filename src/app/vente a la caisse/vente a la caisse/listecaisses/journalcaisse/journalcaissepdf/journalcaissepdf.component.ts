import { Component, OnInit } from '@angular/core';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-journalcaissepdf',
  templateUrl: './journalcaissepdf.component.html',
  styleUrls: ['./journalcaissepdf.component.css']
})
export class JournalcaissepdfComponent implements OnInit {
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
   message:string;
  constructor(private reglementcltsService :ReglementcltsService,private httpClient:HttpClient) { 

    this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
      this.reglementclts= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
   }
  

  ngOnInit(): void {
  }

}
