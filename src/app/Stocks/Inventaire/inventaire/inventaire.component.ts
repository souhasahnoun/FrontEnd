import { Component, OnInit } from '@angular/core';
import { Inventaire } from 'src/app/CLASSES/inventaire';
import { InventairesService } from 'src/app/SERVICES/service inventaire/inventaires.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { Produit } from 'src/app/CLASSES/produit';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Famille } from 'src/app/CLASSES/famille';
import { FamillesService } from 'src/app/SERVICES/service famille/familles.service';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.css']
})
export class InventaireComponent implements OnInit {
  private supportedMarques: FormArray = new FormArray([]);
  private marqueSubscription: Subscription;
  private supportedFamilles: FormArray = new FormArray([]);
  private familleSubscription: Subscription;
  private supportedProduits: FormArray = new FormArray([]);
  private produitSubscription: Subscription;
  
 nom_prod:string;
  inventaires: Inventaire[];
  inventaire: Inventaire ={
    QteStock:null,
    date:null,
    login:null,
    produit_id:null,
    magasin_id:null
    
    };
  produitss: Produit[];
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
   familless: Famille[];


  famille: Famille ={
    libelle:null,
    etat:0,
    merg_ben:null,
    categorie_id:null,
    prix:null,
   };

   message:string;
modifiedtext:any;
  modif: boolean = false;
  id: number;
  term;
  allItems: any[];
  
  pager: any = {};
  API = 'http://localhost:8000/api';

  constructor(private famillesService :FamillesService,private produitsService :ProduitsService,private inventairesService :InventairesService, private httpClient:HttpClient, private pagerService: PagerService) { 
    this.famillesService.liste().subscribe( (data:Famille[]) => {
      this.familless= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    this.produitsService.liste().subscribe( (data:Produit[]) => {
      this.produitss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
  // pour afficher liste
  this.inventairesService.liste().subscribe( (data:Inventaire[]) => {
    this.inventaires= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}



ngOnInit() { 
  this.fetchDefaultSupportedMarques();
  this.fetchDefaultSupportedFamilles();
  this.fetchDefaultSupportedProduits();
  this.inventairesService.liste().subscribe( (data:Inventaire[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

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
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  } 


  fetchDefaultSupportedProduits() {
    this.produitSubscription = this.httpClient.get(this.API + '/produits').subscribe(
      (response) => {
        const data = response;
        this.supportedProduits = this.createFormArrayForProduits(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }
   /**
     * Create and FormArray of the given list of hero's
     * 
     * @param fetchedProduits
     */
  
    createFormArrayForProduits(fetchedProduits: any): FormArray {
      let produits = new FormArray([]);
      console.log('fetchedProduits length: ' + fetchedProduits.length);
      for (let entry in fetchedProduits) {
        console.log(fetchedProduits[entry]);
        produits.push(new FormControl(fetchedProduits[entry]));
      }
      return produits;
    }
    //pour le champs select
    get produits(): FormArray {
      return this.supportedProduits as FormArray;
    }

setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.inventaires = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 







// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cet inventaire')){
    this.inventairesService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='inventaire supprimée avec success';
    }, error =>{
      console.log(error);
    });
  }

}
search(){     
  
  let inv=[];
  this.inventairesService.liste().subscribe( (data:Inventaire[]) => {
   this.inventaires=data;
   for(var i:number = 1; i<this.inventaires.length; i++){
    if(
      this.inventaires[i].produit_id==this.inventaire.produit_id 
      

      )      
      inv.push(this.inventaires[i]);
      console.log(JSON.stringify(this.inventaires[i])); 
   }
   
   this.inventaires=inv; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 



}
