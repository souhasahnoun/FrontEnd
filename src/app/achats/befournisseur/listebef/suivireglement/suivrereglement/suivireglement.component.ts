import { Component, OnInit } from '@angular/core';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suivireglement',
  templateUrl: './suivireglement.component.html',
  styleUrls: ['./suivireglement.component.css']
})
export class SuivireglementComponent implements OnInit {
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
    ordrepaiement_id:null,
    num_fact:null,
    date_echeance:null,
    solder:null,
    non_solder:null,
    impression:null,
    type_ch:null,
    etat_ch:null,
    type_date:null,
    etat_traite:null,
    type_traite:null,
   };
   id:number;
  constructor(private paiementsfrsService :PaiementsfrsService,private activatedRoute: ActivatedRoute) {
    this.id= this.activatedRoute.snapshot.params['id'];

    this.paiementsfrsService.liste().subscribe((data: Paiementfrs[]) =>{
      this.paiementfrss= data;
     console.log(this.paiementfrs);
    }, (error)=>{
      console.log(error);
      
    });
   }
   supprimer(id){
    if (confirm('vous etes sur de supprimer cet paiement')){
      this.paiementsfrsService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='paiement supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }
  ngOnInit(): void {
  }

}
