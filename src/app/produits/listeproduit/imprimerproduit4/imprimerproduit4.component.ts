import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/CLASSES/produit';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Stock } from 'src/app/CLASSES/stock';
import { Marque } from 'src/app/CLASSES/marque';
import { Categorie } from 'src/app/CLASSES/categorie';
import { Famille } from 'src/app/CLASSES/famille';
import { Tva } from 'src/app/CLASSES/tva';
import { StocksService } from 'src/app/SERVICES/service stock/stocks.service';
import { TvasService } from 'src/app/SERVICES/service tva/tvas.service';
import { FamillesService } from 'src/app/SERVICES/service famille/familles.service';
import { CategoriesService } from 'src/app/SERVICES/service categorie/categories.service';
import { MarquesService } from 'src/app/SERVICES/service marque/marques.service';

@Component({
  selector: 'app-imprimerproduit4',
  templateUrl: './imprimerproduit4.component.html',
  styleUrls: ['./imprimerproduit4.component.css'],
  providers: [DatePipe]
})
export class Imprimerproduit4Component implements OnInit {

  myDate = new Date();
  id:number;
  API = 'http://localhost:8000/api';
  produits: Produit[];
  produit: Produit ={
    designation:null,
    ref_prod:null,
    code:null,
    nom_prod:null,
    mrg_ben_pub:null,
    stk_alert:null,
    unite_id:null,
    image:null,
    tva_id:null,
    ristourne:null,
    points:null,
    mrg_ben_rev:null,
    prixf:null,
    prixfrev:null,
    prixrispub:null,
    prixrisrev:null,
    prix_min:null,
    prix_revient:null,
    prix_achat:null,
    etat:0,
    marque_id:null,
    categorie_id:null,
    famille_id:null,
   };
   stocks: Stock[];
   stock: Stock ={
    QteStock:null,
    produit_id:null,
    magasin_id:null
    
    };
    marquess: Marque[];

    marque: Marque ={
      libelle:"",
      logo:null,
      etat:0,
     
     };
  
     categoriess: Categorie[];
  
  
     categorie: Categorie ={
       libelle:"",
       etat:0,
      
      };
      familless: Famille[];


    famille: Famille ={
      libelle:null,
      etat:0,
      merg_ben:null,
      categorie_id:null,
      prix:null,
     };

     tvass: Tva[];
     tva: Tva ={
       taux:null,
       
      
      };
      message:string;
      constructor(private stocksService :StocksService,private tvasService :TvasService,private famillesService :FamillesService,private categoriesService :CategoriesService,private marquesService :MarquesService,private produitsService :ProduitsService, private httpClient:HttpClient,private datePipe: DatePipe) {  
        this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
        // pour afficher liste
        this.tvasService.liste().subscribe( (data:Tva[]) => {
          this.tvass= data;
        }, error => {
          console.log(error);
          this.message='Erreur';
        });
        this.marquesService.liste().subscribe( (data:Marque[]) => {
      
          this.marquess=data;
        }, error => {
          console.log(error);
          this.message='Erreur';
        });
        this.produitsService.liste().subscribe( (data:Produit[]) => {
          console.log(data);
          this.produits= data;
        }, error => {
          console.log(error);
          this.message='il ya un erreur';
        });
     
      
        this.stocksService.liste().subscribe( (data:Stock[]) => {
          this.stocks= data;
        }, error => {
          console.log(error);
          this.message='Erreur';
        });}
    ngOnInit(): void {
    }

}
