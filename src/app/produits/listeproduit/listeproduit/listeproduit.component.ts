import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/CLASSES/produit';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { forEach, isEmpty } from 'underscore';
import { Marque } from 'src/app/CLASSES/marque';
import { MarquesService } from 'src/app/SERVICES/service marque/marques.service';
import { async } from '@angular/core/testing';
import { Categorie } from 'src/app/CLASSES/categorie';
import { CategoriesService } from 'src/app/SERVICES/service categorie/categories.service';
import { FamillesService } from 'src/app/SERVICES/service famille/familles.service';
import { Famille } from 'src/app/CLASSES/famille';
import { Tva } from 'src/app/CLASSES/tva';
import { TvasService } from 'src/app/SERVICES/service tva/tvas.service';
import { Stock } from 'src/app/CLASSES/stock';
import { StocksService } from 'src/app/SERVICES/service stock/stocks.service';

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.css']
})
export class ListeproduitComponent implements OnInit {
  private supportedFamilles: FormArray = new FormArray([]);
  private familleSubscription: Subscription;

  private supportedMarques: FormArray = new FormArray([]);
  private marqueSubscription: Subscription;

  private supportedTvas: FormArray = new FormArray([]);
  private tvaSubscription: Subscription;
  imgPath:string='./src/assets/img';
  term;
  allItems: any[];
  message:string;
  pager: any = {};
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
    stocks: Stock[];
    stock: Stock ={
     QteStock:null,
     produit_id:null,
     magasin_id:null
     
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
  id:number;
  constructor(private stocksService :StocksService,private tvasService :TvasService,private famillesService :FamillesService,private categoriesService :CategoriesService,private marquesService :MarquesService,private produitsService :ProduitsService, private httpClient:HttpClient, private pagerService: PagerService) {  
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
    this.categoriesService.liste().subscribe( (data:Categorie[]) => {
      this.categoriess= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    this.famillesService.liste().subscribe( (data:Famille[]) => {
      this.familless= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    this.stocksService.liste().subscribe( (data:Stock[]) => {
      this.stocks= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
  }

  ngOnInit(): void {
    this.fetchDefaultSupportedMarques();
    this.fetchDefaultSupportedFamilles();
    this.fetchDefaultSupportedTvas();
    this.produitsService.liste().subscribe( (data:Produit[]) => {  
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
    this.produits = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 

  supprimer(id){
    if (confirm('vous etes sur de supprimer ce produit')){
      this.produitsService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='produit supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      },
      );
    }
  
  }

  fetchDefaultSupportedFamilles() {
    this.familleSubscription = this.httpClient.get(this.API + '/familles').subscribe(
      (response) => {
        const data = response;
        this.supportedFamilles = this.createFormArrayForFamilles(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }
  
  fetchDefaultSupportedTvas() {
    this.tvaSubscription = this.httpClient.get(this.API + '/tvas').subscribe(
      (response) => {
        const data = response;
        this.supportedTvas = this.createFormArrayForTvas(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }
  
  fetchDefaultSupportedMarques() {
    this.marqueSubscription = this.httpClient.get(this.API + '/marques').subscribe(
      (response) => {
        const data = response;
        this.supportedMarques = this.createFormArrayForMarques(data);
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
   * @param fetchedTvas
   */

  createFormArrayForTvas(fetchedTvas: any): FormArray {
    let tvas = new FormArray([]);
    console.log('fetchedTvas length: ' + fetchedTvas.length);
    for (let entry in fetchedTvas) {
      console.log(fetchedTvas[entry]);
      tvas.push(new FormControl(fetchedTvas[entry]));
    }
    return tvas;
  }
  //pour le champs select
  get tvas(): FormArray {
    return this.supportedTvas as FormArray;
  }

   /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedFamilles
   */

  createFormArrayForFamilles(fetchedFamilles: any): FormArray {
    let familles = new FormArray([]);
    console.log('fetchedFamilles length: ' + fetchedFamilles.length);
    for (let entry in fetchedFamilles) {
      console.log(fetchedFamilles[entry]);
      familles.push(new FormControl(fetchedFamilles[entry]));
    }
    return familles;
  }
  //pour le champs select
  get familles(): FormArray {
    return this.supportedFamilles as FormArray;
  }

   /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedMarques
   */

  createFormArrayForMarques(fetchedMarques: any): FormArray {
    let marques = new FormArray([]);
    console.log('fetchedMarques length: ' + fetchedMarques.length);
    for (let entry in fetchedMarques) {
      console.log(fetchedMarques[entry]);
      marques.push(new FormControl(fetchedMarques[entry]));
    }
    return marques;
  }
  //pour le champs select
  get marques(): FormArray {
    return this.supportedMarques as FormArray;
  }
  //pour le champs select
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  } 
 archiver(produit){
    
      this.produitsService.archiver(produit).subscribe(data => {
        
        console.log(data);
        this.message='produit archiver avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
    desarchiver(produit){
    
      this.produitsService.desarchiver(produit).subscribe(data => {
        
        console.log(data);
        this.message='produit desarchiver avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
    
   
  
 exist( p:Produit, list:Produit[]){
 
   let i=0;
   while(i<list.length &&  list[i].id!=p.id) 
    i++;
   return i<list.length; 

 }
    search(){     //empList: Array<Custom> = [];
      //this.empList.push(customObj)
     /*
      this.produit.ref_prod="fdsffdf";
      this.produit.famille_id=1;
      this.produit.marque_id=1;
      this.produit.etat=1;
     */

    let prods=[];
      var criterias:string[]= this.produit.ref_prod.split("%");
     this.produitsService.liste().subscribe(  (data:Produit[]) => {
     this.produits=data;
     console.log('criterias',criterias);
     console.log('this.produits.length',this.produits.length);
     for(var i:number = 0; i<this.produits.length; i++){
       /*
      if(
        this.produits[i].ref_prod==this.produit.ref_prod ||
        this.produits[i].famille_id==this.produit.famille_id ||
        this.produits[i].marque_id==this.produit.marque_id ||
        this.produits[i].tva_id==this.produit.tva_id
        ) */
        
        for(var j:number = 0; j<criterias.length; j++){    
          
              console.log('produits['+i+']',JSON.stringify(this.produits[i]));     
              if(this.produits[i].famille_id.toString().indexOf(criterias[j].toString())!== -1){
                if(!this.exist(this.produits[i], prods))
                   prods.push(this.produits[i]);
              }
               
              if(this.produits[i].marque_id.toString().indexOf(criterias[j].toString())!== -1){
                if(!this.exist(this.produits[i], prods))
                  prods.push(this.produits[i]);
              }
              
              if(this.produits[i].etat.toString().indexOf(criterias[j].toString())!== -1){
                if(!this.exist(this.produits[i], prods))
                  prods.push(this.produits[i]); 
              }
                        
              if(this.produits[i].nom_prod.toString().indexOf(criterias[j].toString())!== -1){
                if(!this.exist(this.produits[i], prods))
                  prods.push(this.produits[i]); 
              }
    
            
        }  
       
        console.log('prods',JSON.stringify(prods)); 
     }
     
     this.produits=prods; 
   
  
      //prods=data;      
     
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
  
   
 
      } 

             
}

