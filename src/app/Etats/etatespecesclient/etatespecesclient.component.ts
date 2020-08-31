import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { Lignebordereau } from 'src/app/CLASSES/lignebordereau';
import { HttpClient } from '@angular/common/http';
import { LignebordereauxService } from 'src/app/SERVICES/service bordereau/lignebordereaux.service';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { Entreecaisse } from 'src/app/CLASSES/entreecaisse';
import { EntreecaissesService } from 'src/app/SERVICES/service entreecaisse/entreecaisses.service';
import { Retraitcaisse } from 'src/app/CLASSES/retraitcaisse';
import { RetraitcaissesService } from 'src/app/SERVICES/service retraitcaisse/retraitcaisses.service';
import { ReceptionsService } from 'src/app/SERVICES/service reception/receptions.service';
import { Reception } from 'src/app/CLASSES/reception';

@Component({
  selector: 'app-etatespecesclient',
  templateUrl: './etatespecesclient.component.html',
  styleUrls: ['./etatespecesclient.component.css'],
  providers: [DatePipe]
})
export class EtatespecesclientComponent implements OnInit {
  myDate = new Date();
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
   lignebordereaux: Lignebordereau[];
   lignebordereau: Lignebordereau ={
    
    reglementcls_id:null,
    source:null,
    source_id:null,
    montant:null,
    rs:null,
    num:null,
    type:null,
    banque:null,
    date:null,
    etat:null,
    type_ch:null,
    created:null,
    login:null,
    bordereaus_id:null,
   };

   entreecaisses: Entreecaisse[];
  
  entreecaisse: Entreecaisse ={
    montant:null,
    type:null,
    date:null,
    designation:null,
    beneficiaire:null,
    num_cheque:null,
    banque:null,
    login:null,
    caisse_id:null,
   };

   retraitcaisses: Retraitcaisse[];
  
  retraitcaisse: Retraitcaisse ={
    montant:null,
    type:null,
    date:null,
    designation:null,
    beneficiaire:null,
    num_cheque:null,
    banque:null,
    login:null,
    caisse_id:null,
   };

   receptions: Reception[];
  
  reception: Reception ={
    num:null,
    date:null,
    piece:null,
    accessoire	:null,
    nom:null,
    tel:null,
    panne:null,
    tache:null,
    prix:null,
    recu_par:null,
    etat:0,
    login:null,
    magasin_id:null,
    code:null,
    avance:null,
    type:null,
    etat_pay:null,
    client_id:null,
    casier_id:null,
    contact_clt:null,
    affect:null,
    partde:null,
    frais:null,
    designation:null
   };
   
   message:string;
  constructor(private receptionsService :ReceptionsService, private retraitcaisseService :RetraitcaissesService,private entreecaissesService :EntreecaissesService,private datePipe: DatePipe,private ligneborderauxService :LignebordereauxService,private reglementcltsService :ReglementcltsService, private httpClient:HttpClient) {
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    
    this.receptionsService.liste().subscribe( (data:Reception[]) => {
      this.receptions= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    
    this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
      this.reglementclts= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    
    this.ligneborderauxService.liste().subscribe( (data:Lignebordereau[]) => {
      this.lignebordereaux= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.entreecaissesService.liste().subscribe( (data:Entreecaisse[]) => {
      this.entreecaisses= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.retraitcaisseService.liste().subscribe( (data:Retraitcaisse[]) => {
      this.retraitcaisses= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
   }

  ngOnInit(): void {
  }

}
