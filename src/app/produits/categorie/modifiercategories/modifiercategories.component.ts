import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/CLASSES/categorie';
import { CategoriesService } from 'src/app/SERVICES/service categorie/categories.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifiercategories',
  templateUrl: './modifiercategories.component.html',
  styleUrls: ['./modifiercategories.component.css']
})
export class ModifiercategoriesComponent implements OnInit {

  API = 'http://localhost:8000/api';
  
  categories: Categorie[];
 
message:string;
  categorie: Categorie ={
    libelle:"",
    etat:0,
   
   };

  id: any;
  modif: boolean = false;
  constructor(private categoriesService :CategoriesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.categoriesService.liste().subscribe((data: Categorie[]) =>{
        this.categories= data;
       this.categorie = this.categories.find((m) => {return m.id == this.id});
       console.log(this.categorie);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  

}


modifierCategorie(){
  // fonction modifier
  if (this.modif){
    this.categoriesService.modifier(this.categorie).subscribe(data => {

      this.message='categorie modifiée avc success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur'
    });
  }
  }

  reset(){
    this.categorie.libelle=null
   
  }

}
