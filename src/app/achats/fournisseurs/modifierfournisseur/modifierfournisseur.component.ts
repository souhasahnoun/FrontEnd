import { Component, OnInit } from '@angular/core';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from '../../../CLASSES/fournisseur';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modifierfournisseur',
  templateUrl: './modifierfournisseur.component.html',
  styleUrls: ['./modifierfournisseur.component.css']
})
export class ModifierfournisseurComponent implements OnInit {

  API = 'http://localhost:8000/api';
  fournisseurs: Fournisseur[];
   fournisseur: Fournisseur ={
    code_frs:null,
    raison_social:null,
    email:null,
    site_web:null,
    tel:null,
    gsm:null,
    personne_contacter:null,
    fax:null,
    adresse:null,
    date_aff:null,
    etat:null,
    mf:null,
    rc:null,
    archive:null
   };
   message:string;
  id: any;
  modif: boolean = false;
  modifier: boolean = false;
  constructor(private fournisseursService :FournisseursService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.fournisseursService.liste().subscribe((data: Fournisseur[]) =>{
        this.fournisseurs= data;
       this.fournisseur = this.fournisseurs.find((m) => {return m.id == this.id});
       console.log(this.fournisseur);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  

}


modifierFournisseur(){
  // fonction modifier
  if (this.modif){
    this.fournisseursService.modifier(this.fournisseur).subscribe(data => {

      this.message='fournisseur modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
  reset(){
    this.fournisseur.raison_social=null
    this.fournisseur.tel=null
    this.fournisseur.fax=null
    this.fournisseur.email=null
    this.fournisseur.site_web=null
    this.fournisseur.gsm=null
    this.fournisseur.personne_contacter=null
    this.fournisseur.mf=null
    this.fournisseur.rc=null
    this.fournisseur.adresse=null
  }
}


