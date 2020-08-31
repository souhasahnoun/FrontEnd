import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/CLASSES/categorie';
import { CategoriesService } from 'src/app/SERVICES/service categorie/categories.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imprimercategorie',
  templateUrl: './imprimercategorie.component.html',
  styleUrls: ['./imprimercategorie.component.css']
})
export class ImprimercategorieComponent implements OnInit {

  API = 'http://localhost:8000/api';
  categories: Categorie[];
 id:number;
  constructor(private categoriesService :CategoriesService, private httpClient:HttpClient) {  
 
    // pour afficher liste
    this.categoriesService.liste().subscribe( (data:Categorie[]) => {
      this.categories= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}
    
    ngOnInit(): void {
    }

}
