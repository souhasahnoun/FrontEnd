import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MagasinsService } from 'src/app/SERVICES/service magasin/magasins.service';
import { Magasin } from '../../../CLASSES/magasin';
import { Region } from '../../../CLASSES/region';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-modifiermagasin',
  templateUrl: './modifiermagasin.component.html',
  styleUrls: ['./modifiermagasin.component.css']
})
export class ModifiermagasinComponent implements OnInit {
  // property which will hold the data for the <select> <option>
  private supportedRegions: FormArray = new FormArray([]);
  private regionSubscription: Subscription;
API = 'http://localhost:8000/api';
  magasins: Magasin[];
  magasin: Magasin ={
   
    libelle:null,
    ordre:null,
    region_id:null
   };
  
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private magasinsService :MagasinsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.magasinsService.liste().subscribe((data: Magasin[]) =>{
        this.magasins= data;
       this.magasin = this.magasins.find((m) => {return m.id == this.id});
       console.log(this.magasin);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  





modifierMagasin(){
  // fonction modifier
  if (this.modif){
    this.magasinsService.modifier(this.magasin).subscribe(data => {

      this.message='magasin modifiée avec success';
      console.log(data);
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
  ngOnInit() { 
    this.fetchDefaultSupportedRegions();

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
  
}


