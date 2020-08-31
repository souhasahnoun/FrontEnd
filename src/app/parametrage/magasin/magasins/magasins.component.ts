import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MagasinsService } from 'src/app/SERVICES/service magasin/magasins.service';
import { Magasin } from '../../../CLASSES/magasin';
import { Region } from '../../../CLASSES/region';
import { PagerService } from 'src/app/SERVICES/pager.service'

import { of, Subscription } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { select } from 'underscore';
@Component({
  selector: 'app-magasins',
  templateUrl: './magasins.component.html',
  styleUrls: ['./magasins.component.css']
})
export class MagasinsComponent implements OnInit {
    // property which will hold the data for the <select> <option>
  private supportedRegions: FormArray = new FormArray([]);
  private regionSubscription: Subscription;


  API = 'http://localhost:8000/api';
  magasins: Magasin[];
  term;
 
  allItems: any[];
  pager: any = {};
  magasin: Magasin ={
   
    libelle:null,
    ordre:null,

    region_id:null,
   };
   message:string;
  modif: boolean = false;
  id: any;
 

  
constructor(private magasinsService :MagasinsService, private httpClient:HttpClient,private pagerService: PagerService ) { 
 
                  // pour afficher liste
                  this.magasinsService.liste().subscribe( (data:Magasin[]) => {
                      this.magasins= data;
                    }, error => {
                      console.log(error);
                      this.message='Erreur';
                    });

}


 

ngOnInit() { 
  // Fetch list of hero to be used in drop down and keep it as an instance veriable.
 //pour le champs select
  this.fetchDefaultSupportedRegions();
 
  
   
  
  
   //pour le pagination
  this.magasinsService.liste().subscribe( (data:Magasin[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

}
 //pour le champs select
fetchDefaultSupportedRegions() {
  this.regionSubscription = this.httpClient.get(this.API + '/regions').subscribe(
    (response) => {
      const data = response;
      this.supportedRegions = this.createFormArrayForRegions(data);
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
   * @param fetchedRegions 
   */

  createFormArrayForRegions(fetchedRegions: any): FormArray {
    let regions = new FormArray([]);
    console.log('fetchedRegions length: ' + fetchedRegions.length);
    for (let entry in fetchedRegions) {
      console.log(fetchedRegions[entry]);
      regions.push(new FormControl(fetchedRegions[entry]));
    }
    return regions;
  }
  //pour le champs select
  get regions(): FormArray {
    return this.supportedRegions as FormArray;
  }
  //pour le champs select
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  }
  
  
   //pour le pagination
setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.magasins = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ajouterMag(){

    console.log(this.magasin);
     
      this.magasinsService.ajouter(this.magasin).subscribe(data => {
      
        this.message='magasin ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  





// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer ce magasin')){
    this.magasinsService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='magasin supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

}

reset(){
  this.magasin.libelle=null
  this.magasin.ordre=null
  this.magasin.region_id=null

  
}


}
