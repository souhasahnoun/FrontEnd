import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OrdrepaiementsService } from 'src/app/SERVICES/service ordrepaiement/ordrepaiements.service';
import { HttpClient } from '@angular/common/http';
import { Ordrepaiement } from '../../../CLASSES/ordrepaiement';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
@Component({
  selector: 'app-imprimeretatordrepaiement',
  templateUrl: './imprimeretatordrepaiement.component.html',
  styleUrls: ['./imprimeretatordrepaiement.component.css'],
  providers: [DatePipe]
})
export class ImprimeretatordrepaiementComponent implements OnInit {
  id:number;
  API = 'http://localhost:8000/api';
  ordrepaiements: Ordrepaiement[];
  myDate = new Date();
  paiementfrss: Paiementfrs[];
  message:string;
  constructor(private paiementsfrsService :PaiementsfrsService,private ordrepaiementsService :OrdrepaiementsService, private httpClient:HttpClient,private datePipe: DatePipe) {  
   
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
   this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
    this.paiementfrss= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  }); 
   // pour afficher liste
    this.ordrepaiementsService.liste().subscribe( (data:Ordrepaiement[]) => {
      this.ordrepaiements= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}
    
    ngOnInit(): void {
    }

}

