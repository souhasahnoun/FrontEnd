import { Component, OnInit } from '@angular/core';
import { RsfsService } from 'src/app/SERVICES/service rsf/rsfs.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { Rsf } from 'src/app/CLASSES/rsf';
import { Document } from 'src/app/CLASSES/document';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-imprimerrsf',
  templateUrl: './imprimerrsf.component.html',
  styleUrls: ['./imprimerrsf.component.css']
})
export class ImprimerrsfComponent implements OnInit {
debut:Date;
fin:Date;
  API = 'http://localhost:8000/api';
  rsfs: Rsf[];
  documents: Document[];
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
    debut:null,
    fin:null
   };
   document: Document ={
    num:null,
    date:null,
    etat:null,
    fodec:null,
    etat_pay:null,
    type_pay:null,
    rs:null,
    etat_rs:null,
    login:null,
    date_retenu:null,
    type:null,
    date_prev:null,
    date_dec:null,
    timbre:null,
    date_fin:null,
    fournisseur_id:null,
    designation:null,
    client_id:null,
   };
  id:number;
  imp;
  constructor(private rsfsService :RsfsService,private documentsService :DocumentsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {  
    this.debut= this.activatedRoute.snapshot.params['debut'];
    this.fin= this.activatedRoute.snapshot.params['fin'];
    // pour afficher liste
   
      this.rsfsService.liste().subscribe((data: Rsf[]) =>{
        this.rsfs= data;
       console.log(this.rsf);
      }, (error)=>{
        console.log(error);
        
      });
    
    this.documentsService.liste().subscribe( (data:Document[]) => {
      this.documents= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });

   
  }

  ngOnInit(): void {
  }


}
