import { Component, OnInit } from '@angular/core';
import { Societe } from 'src/app/CLASSES/societe';
import { SocietesService } from 'src/app/SERVICES/service societe/societes.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { ActivatedRoute } from '@angular/router';
import { Magasin } from 'src/app/CLASSES/magasin';

import { of, Subscription } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { select } from 'underscore';





@Component({
  selector: 'app-societes',
  templateUrl: './societes.component.html',
  styleUrls: ['./societes.component.css']
})
export class SocietesComponent implements OnInit {

  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;
  API = 'http://localhost:8000/api';

  
  term;
  allItems: any[];

  pager: any = {};
  societes: Societe[];
  societe: Societe ={
    prefixe:null,
    nom:null,
    adresse:null,
    tel	:null,
    fax:null,
    gsm:null,
    email:null,
    site_web:null,
    mf:null,
    rc:null,
    rib:null,
    iban:null,
    cd:null,
    magasin_id:null,
   };
   

   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private societesService :SocietesService, private httpClient:HttpClient, private pagerService: PagerService) { 

   
  // pour afficher liste
  this.societesService.liste().subscribe( (data:Societe[]) => {
    this.societes= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}


ngOnInit() { 
 
  this.fetchDefaultSupportedMagasins();
  this.societesService.liste().subscribe( (data:Societe[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

}

fetchDefaultSupportedMagasins() {
  this.magasinSubscription = this.httpClient.get(this.API + '/magasins').subscribe(
    (response) => {
      const data = response;
      this.supportedMagasins = this.createFormArrayForMagasins(data);
    },
    (error) => {
      console.log('error: ' + error);
    }
  );
}
 //pour le champs select
 /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedMagasins
   */

  createFormArrayForMagasins(fetchedMagasins: any): FormArray {
    let magasins = new FormArray([]);
    console.log('fetchedMagasins length: ' + fetchedMagasins.length);
    for (let entry in fetchedMagasins) {
      console.log(fetchedMagasins[entry]);
      magasins.push(new FormControl(fetchedMagasins[entry]));
    }
    return magasins;
  }
  //pour le champs select
  get magasins(): FormArray {
    return this.supportedMagasins as FormArray;
  }
  //pour le champs select
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  }
  

 
setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.societes = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ajouterS(){
 
    console.log(this.societe);
      this.societesService.ajouter(this.societe).subscribe(data => {
     
        this.message='societe ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cette societe')){
    this.societesService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='societe supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

}

reset(){
  
  this.societe.tel=null
  this.societe.fax=null
  this.societe.email=null
  this.societe.site_web=null
  this.societe.gsm=null
  this.societe.iban=null
  this.societe.mf=null
  this.societe.rc=null
  this.societe.adresse=null
  this.societe.nom=null
  this.societe.prefixe=null
  this.societe.cd=null
  
}



}
