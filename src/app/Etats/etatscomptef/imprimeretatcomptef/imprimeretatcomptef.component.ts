import { Component, OnInit } from '@angular/core';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-imprimeretatcomptef',
  templateUrl: './imprimeretatcomptef.component.html',
  styleUrls: ['./imprimeretatcomptef.component.css'],
  providers: [DatePipe]
})
export class ImprimeretatcomptefComponent implements OnInit {

  top:number;
  myDate = new Date();
  imp;

  fournisseurs: Fournisseur[];  
  fournisseur: Fournisseur ={
    code_frs:"40000",
    raison_social:null,
    email:null,
    site_web:null,
    tel:null,
    gsm:null,
    personne_contacter:null,
    fax:null,
    adresse:null,
    date_aff: null,
    etat:0,
    mf:null,
    rc:null,
    archive:0
   };

  constructor(private fournisseursService :FournisseursService,private activatedRoute: ActivatedRoute,private datePipe: DatePipe) { 
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 

    this.top= this.activatedRoute.snapshot.params['top'];
    // pour afficher liste
    if(this.top){
      this.imp = true;
      this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
        this.fournisseurs= data;
       this.fournisseur = this.fournisseurs.find((m) => {return  m.id <= this.top });
       console.log(this.fournisseur);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.imp = false;
    }
  }
  

  ngOnInit(): void {
  }

}
