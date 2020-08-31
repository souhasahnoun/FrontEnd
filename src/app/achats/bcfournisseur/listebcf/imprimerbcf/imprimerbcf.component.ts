import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/CLASSES/document';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BCFrs } from 'src/app/CLASSES/BC_Frs';

@Component({
  selector: 'app-imprimerbcf',
  templateUrl: './imprimerbcf.component.html',
  styleUrls: ['./imprimerbcf.component.css']
})
export class ImprimerbcfComponent implements OnInit {
  prev:Date;
  fin:Date;
  nomfrs:number;
  documents: Document[];
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
   bcfrss: BCFrs[];
   bcfrs: BCFrs ={
    document_id:null,
    cloturer:null,
  

   };
   id:number;
   imp;
   message:string;
  constructor(private documentsService :DocumentsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 
    this.prev= this.activatedRoute.snapshot.params['date_prev'];
    this.fin= this.activatedRoute.snapshot.params['date_fin'];
    this.nomfrs= this.activatedRoute.snapshot.params['fournisseur_id'];
    // pour afficher liste

     
      this.documentsService.liste().subscribe((data: Document[]) =>{
        this.documents= data;
      }, (error)=>{
        console.log(error);
        this.message='Erreur';
      });
    } 

  ngOnInit(): void {
  }

}
