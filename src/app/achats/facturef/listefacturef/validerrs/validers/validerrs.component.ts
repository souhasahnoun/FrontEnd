import { Component, OnInit } from '@angular/core';
import { Rsf } from 'src/app/CLASSES/rsf';
import { RsfsService } from 'src/app/SERVICES/service rsf/rsfs.service';

@Component({
  selector: 'app-validerrs',
  templateUrl: './validerrs.component.html',
  styleUrls: ['./validerrs.component.css']
})
export class ValiderrsComponent implements OnInit {
  rsfs: Rsf[];
   rsf: Rsf ={
     date:null,
     taux:null,
     montant:null,
     rs:null,
     net:null,
     etat_pay:null,
     imp:null,
     etat_imp:null,
     created:null,
     fournisseur_id:null,
     paiementfrs_id:null,
     
    };
    message:string;
  constructor(private rsfsService :RsfsService) { 
    this.rsfsService.liste().subscribe( (data:Rsf[]) => {
      this.rsfs= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
  }

  ngOnInit(): void {
  }

}
