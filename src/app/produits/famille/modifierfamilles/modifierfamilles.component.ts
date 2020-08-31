import { Component, OnInit } from '@angular/core';
import { FamillesService } from 'src/app/SERVICES/service famille/familles.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Famille } from 'src/app/CLASSES/famille';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-modifierfamilles',
  templateUrl: './modifierfamilles.component.html',
  styleUrls: ['./modifierfamilles.component.css']
})
export class ModifierfamillesComponent implements OnInit {
  private supportedCategories: FormArray = new FormArray([]);
  private categorieSubscription: Subscription;
  API = 'http://localhost:8000/api';
  
  familles: Famille[];


  famille: Famille ={
    libelle:null,
    etat:0,
    merg_ben:null,
    categorie_id:null,
    prix:null,
   };
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private famillesService :FamillesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.famillesService.liste().subscribe((data: Famille[]) =>{
        this.familles= data;
       this.famille = this.familles.find((m) => {return m.id == this.id});
       console.log(this.famille);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  this.fetchDefaultSupportedCategories();

}
fetchDefaultSupportedCategories() {
  this.categorieSubscription = this.httpClient.get(this.API + '/categories').subscribe(
    (response) => {
      const data = response;
      this.supportedCategories = this.createFormArrayForCategories(data);
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
   * @param fetchedCategories
   */

  createFormArrayForCategories(fetchedCategories: any): FormArray {
    let categories = new FormArray([]);
    console.log('fetchedCategories length: ' + fetchedCategories.length);
    for (let entry in fetchedCategories) {
      console.log(fetchedCategories[entry]);
      categories.push(new FormControl(fetchedCategories[entry]));
    }
    return categories;
  }
  //pour le champs select
  get categories(): FormArray {
    return this.supportedCategories as FormArray;
  }
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  } 
  

modifierFamille(){
  // fonction modifier
  if (this.modif){
    this.famillesService.modifier(this.famille).subscribe(data => {

      this.message='famille modifiée avc success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur'
    });
  }
  }

  reset(){
    this.famille.libelle=null
   this.famille.merg_ben=null
   this.famille.categorie_id=null
   this.famille.etat=null
   this.famille.prix=null
  }
  

}

