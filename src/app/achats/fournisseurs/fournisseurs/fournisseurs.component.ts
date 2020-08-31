import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { Fournisseur } from '../../../CLASSES/fournisseur';
import { PagerService } from 'src/app/SERVICES/pager.service'


@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css'],

})

export class FournisseursComponent implements OnInit {


 
  term;
  allItems: any[];
 
  pager: any = {};
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


   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private fournisseursService :FournisseursService, private httpClient:HttpClient, private pagerService: PagerService) { 

   
  // pour afficher liste
  this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
    this.fournisseurs= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}


ngOnInit() { 
  this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
  
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
  this.fournisseurs = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ajouterF(){

    console.log(this.fournisseur);
      this.fournisseursService.ajouter(this.fournisseur).subscribe(data => {
      
        this.message='fournisseur ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer ce fournisseur')){
    this.fournisseursService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='fournisseur supprimee avec success';
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

archiver(fournisseur){
    
  this.fournisseursService.archiver(fournisseur).subscribe(data => {
    
    console.log(data);
    this.message='fournisseur archiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });
}
desarchiver(fournisseur){

  this.fournisseursService.desarchiver(fournisseur).subscribe(data => {
    
    console.log(data);
    this.message='fournisseur desarchiver avec success';
  }, error =>{
    console.log(error);
    this.message='Erreur';
  });

}
}