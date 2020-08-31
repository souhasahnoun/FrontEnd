import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
@Component({
  selector: 'app-imprimeretatcomptec',
  templateUrl: './imprimeretatcomptec.component.html',
  styleUrls: ['./imprimeretatcomptec.component.css'],
  providers: [DatePipe]
})
export class ImprimeretatcomptecComponent implements OnInit {
  top:number;
  myDate = new Date();
  imp;

  clients: Client[];
  client: Client ={
    code_clt:"21100",
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
    archive:0,
    type:null,
    timbre:null,
    plafond:null,
   };
  constructor(private clientsService :ClientsService,private activatedRoute: ActivatedRoute,private datePipe: DatePipe) { 
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 

    this.top= this.activatedRoute.snapshot.params['top'];
    // pour afficher liste
   // if(this.top){
      //this.imp = true;
      this.clientsService.liste().subscribe((data: Client[]) =>{
        
       this.client = this.clients.find((m) => {return  m.id <= this.top });
       this.clients= data;
       console.log(this.client);
      }, (error)=>{
        console.log(error);
        
      });
    //} else {
    //  this.imp = false;
    //}
  }
  

 
  ngOnInit(): void {
  }

}
