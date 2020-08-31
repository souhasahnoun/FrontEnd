import { Component, OnInit } from '@angular/core';
import { Lignebordereau } from 'src/app/CLASSES/lignebordereau';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { LignebordereauxService } from 'src/app/SERVICES/service bordereau/lignebordereaux.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-imprimerlistebordereau',
  templateUrl: './imprimerlistebordereau.component.html',
  styleUrls: ['./imprimerlistebordereau.component.css']
})
export class ImprimerlistebordereauComponent implements OnInit {
num:string;
  id:number;
  API = 'http://localhost:8000/api';
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
   imp: boolean = false;
  reglementclts: Reglementclt[];
  message:string;
  constructor(private reglementcltsService :ReglementcltsService,private lignebordereauxService :LignebordereauxService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {  
    this.num= this.activatedRoute.snapshot.params['num'];
   
    this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
      this.reglementclts= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
   // pour afficher liste
   
    if(this.num){
      this.imp = true;
      this.lignebordereauxService.liste().subscribe((data: Lignebordereau[]) =>{
        this.lignebordereaux= data;
       this.lignebordereau = this.lignebordereaux.find((m) => {return m.num == this.num});
       console.log(this.lignebordereau);
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
