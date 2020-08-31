import { Component, OnInit } from '@angular/core';
import { Droit } from 'src/app/CLASSES/droit';
import { DroitsService } from 'src/app/SERVICES/service droit/droits.service';
import { HttpClient } from '@angular/common/http';
import { CategDroitsService } from 'src/app/SERVICES/sevice categ_droit/categ-droits.service';
import { CategDroit } from 'src/app/CLASSES/categ_droit';
import { Acces } from 'src/app/CLASSES/acces';
import { AccessService } from 'src/app/SERVICES/service acces/access.service';
import { UtilisateursService } from 'src/app/SERVICES/service utilisateur/utilisateurs.service';
import { Utilisateur } from 'src/app/CLASSES/utilisateur';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-droitaccees',
  templateUrl: './droitaccees.component.html',
  styleUrls: ['./droitaccees.component.css']
})
export class DroitacceesComponent implements OnInit {

  utilisateurs: Utilisateur[];
  utilisateur: Utilisateur ={
    designation:null,
    login:null,
    password:null,
    retaper_password:null,
     magasin_id:null,
    };
    categdroits:CategDroit[]
    categdroit:CategDroit ={
      categ:null
    }
    droits: Droit[];
   
    droit: Droit ={
      droit:null,
      catgdroit_id:null,
      libelle:null
     };
  access:Acces[];
acces: Acces ={
  droit_id:null,
  log_usr:null,
  utilisateur_id:null,

 };
 
   
   id: any;
   message:string;
acc: boolean = false;

  

  constructor(private utilisateursService :UtilisateursService,private droitsService :DroitsService,private accessService :AccessService, private httpClient:HttpClient, private categdroitsService: CategDroitsService, private activatedRoute: ActivatedRoute) { 
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.acc = true;
      this.utilisateursService.liste().subscribe((data: Utilisateur[]) =>{
        this.utilisateurs= data;
       this.utilisateur = this.utilisateurs.find((m) => {return m.id == this.id});
       console.log(this.utilisateur);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.acc = false;
    }
 


     this.utilisateursService.liste().subscribe( (data:Utilisateur[]) => {
      this.utilisateurs= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });

    this.accessService.liste().subscribe( (data:Acces[]) => {
      this.access= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    this.categdroitsService.liste().subscribe( (data:CategDroit[]) => {
      this.categdroits= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
   
  // pour afficher liste
  this.droitsService.liste().subscribe( (data:Droit[]) => {
    this.droits= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
  
}


ngOnInit() { 
  this.acces.droit_id = this.droit.id
  
  this.acces.log_usr=this.utilisateur.login

  this.acces.utilisateur_id=this.id;
 
}

AjouterAccess(){

  console.log(this.acces);
    this.accessService.ajouter(this.acces).subscribe(data => {
   
      this.message='access ajoutée avec success';
      console.log(data);
    }, error =>{
      console.log(error);

      this.message='Erreur';
    });
  }

  supprimer(id){
   
      this.accessService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='accees supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }

