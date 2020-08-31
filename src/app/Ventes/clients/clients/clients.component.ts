import { Component, OnInit } from '@angular/core';
import { Client } from '../../../CLASSES/client';
import { HttpClient } from '@angular/common/http';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { PagerService } from 'src/app/SERVICES/pager.service'
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  
  term;
  message:string;
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



  modif: boolean = false;
  id: number;
  
  allItems: any[];
  
  pager: any = {};
  constructor(private clientsService :ClientsService, private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.clientsService.liste().subscribe( (data:Client[]) => {
    this.clients= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}


ngOnInit() { 
  this.clientsService.liste().subscribe( (data:Client[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

}
setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.clients = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 
ajouterC(){

    console.log(this.client);
      this.clientsService.ajouter(this.client).subscribe(data => {
      
        this.message='Client ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer ce client')){
    this.clientsService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='Client supprimée avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

}

reset(){
  this.client.type=null
  this.client.raison_social=null
  this.client.adresse=null
  this.client.tel=null
  this.client.fax=null
  this.client.gsm=null
  this.client.personne_contacter=null
  this.client.email=null
  this.client.site_web=null
  this.client.mf=null
  this.client.rc=null
  this.client.timbre=null
  this.client.plafond=null
}
archiver(client){
    
  this.clientsService.archiver(client).subscribe(data => {
    
    console.log(data);
    this.message='client archiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });
}
desarchiver(client){

  this.clientsService.desarchiver(client).subscribe(data => {
    
    console.log(data);
    this.message='client desarchiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });

}
}
