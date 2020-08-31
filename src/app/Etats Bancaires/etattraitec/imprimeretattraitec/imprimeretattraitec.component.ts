import { Component, OnInit } from '@angular/core';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { DatePipe } from '@angular/common';
import { Lignebordereau } from 'src/app/CLASSES/lignebordereau';
import { Magasin } from 'src/app/CLASSES/magasin';
import { LignebordereauxService } from 'src/app/SERVICES/service bordereau/lignebordereaux.service';
import { MagasinsService } from 'src/app/SERVICES/service magasin/magasins.service';
import { HttpClient } from '@angular/common/http';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprimeretattraitec',
  templateUrl: './imprimeretattraitec.component.html',
  styleUrls: ['./imprimeretattraitec.component.css'],
  providers: [DatePipe]
})
export class ImprimeretattraitecComponent implements OnInit {

  id:number;
  source:string;
  datedeb:Date;
  datefin:Date;
  type_dat:string;
  type_traite:string;
  etat_traite:string;
  myDate = new Date();
  reglementclts: Reglementclt[];
  reglementclt: Reglementclt ={
    date:null,
    mode:null,
    num:null,
    etat:0,
    montant:0,
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
   imp;
   magasins: Magasin[];
   magasin: Magasin ={
   
    libelle:null,
    ordre:null,

    region_id:null,
   };
   message:string;
  constructor(private datePipe: DatePipe,private lignereglementsService :LignebordereauxService,private magasinsService :MagasinsService, private httpClient:HttpClient,private reglementcltsService :ReglementcltsService, private activatedRoute: ActivatedRoute) { 
    this.id= this.activatedRoute.snapshot.params['id'];
    this.source= this.activatedRoute.snapshot.params['source'];
    this.datedeb= this.activatedRoute.snapshot.params['date'];
    this.datefin= this.activatedRoute.snapshot.params['date_echeance'];
    this.type_dat= this.activatedRoute.snapshot.params['type_date'];
    this.type_traite= this.activatedRoute.snapshot.params['type_traite'];
    this.etat_traite= this.activatedRoute.snapshot.params['etat_traite'];
    // pour afficher liste
   // if(this.id && this.source && this.datedeb && this.datefin && this.type_dat && this.type_traite && this.etat_traite ){
     // this.imp = true;
      this.reglementcltsService.liste().subscribe((data: Reglementclt[]) =>{
        this.reglementclts= data;
      /* this.reglementclt = this.reglementclts.find((m) => {
         return m.id == this.id, 
            m.date== this.datedeb,
          m.date_echeance== this.datefin,
        m.type_date == this.type_dat,
        m.etat_traite== this.etat_traite,
        m.type_traite== this.type_traite
      });*/
      
       console.log(this.reglementclt);
      }, (error)=>{
        console.log(error);
        
      });

      this.lignereglementsService.liste().subscribe((data: Lignebordereau[]) =>{
        this.lignebordereaux= data;
       this.lignebordereau = this.lignebordereaux.find((m) => {
         return  
             m.source==this.source 
          
     
      });
      console.log(this.lignebordereau);
    }, (error)=>{
      console.log(error);
      
    });
    /*} else {
      this.imp = false;
    }*/
    
    
    
    
    
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
    this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
      this.reglementclts= data;
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
