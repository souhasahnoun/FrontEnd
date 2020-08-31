import { Component, OnInit } from '@angular/core';
import { Client } from '../../../CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifierclient',
  templateUrl: './modifierclient.component.html',
  styleUrls: ['./modifierclient.component.css']
})
export class ModifierclientComponent implements OnInit {
  message:string;
  
  clients: Client[];
  client: Client ={
    code_clt:null,
    raison_social:null,
    email:null,
    site_web:null,
    tel:null,
    gsm:null,
    personne_contacter:null,
    fax:null,
    adresse:null,
    date_aff: null,
    etat:null,
    mf:null,
    rc:null,
    archive:null,
    type:null,
    timbre:null,
    plafond:null,
   };

  id: any;
  modif: boolean = false;
  constructor(private clientsService :ClientsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.clientsService.liste().subscribe((data: Client[]) =>{
        this.clients= data;
       this.client = this.clients.find((m) => {return m.id == this.id});
       console.log(this.client);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  

}


modifierClient(){
  // fonction modifier
  if (this.modif){
    this.clientsService.modifier(this.client).subscribe(data => {

     this.message="client modifiée avec success";
      console.log(data);
    }, error =>{
      console.log(error);
      this.message="Erreur"
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
}
