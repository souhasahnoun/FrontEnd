import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/CLASSES/stock';
import { Produit } from 'src/app/CLASSES/produit';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { StocksService } from 'src/app/SERVICES/service stock/stocks.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-etatstock',
  templateUrl: './etatstock.component.html',
  styleUrls: ['./etatstock.component.css']
})
export class EtatstockComponent implements OnInit {
  private supportedProduits: FormArray = new FormArray([]);
  private produitSubscription: Subscription;
  
  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;
  
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
   stocks: Stock[];
  stock: Stock ={
   QteStock:null,
   produit_id:null,
   magasin_id:null
   
   };
   API = 'http://localhost:8000/api';

   message:string;
modifiedtext:any;
  modif: boolean = false;
  id: number;
  term;
  allItems: any[];
  
  pager: any = {};
  constructor(private produitsService :ProduitsService,private stocksService :StocksService, private httpClient:HttpClient, private pagerService: PagerService) { 

    this.produitsService.liste().subscribe( (data:Produit[]) => {
      this.produitss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
  // pour afficher liste
  this.stocksService.liste().subscribe( (data:Stock[]) => {
    this.stocks= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}



ngOnInit() { 
  this.fetchDefaultSupportedProduits();
  this.fetchDefaultSupportedMagasins();


  this.stocksService.liste().subscribe( (data:Stock[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

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
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
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

    
setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.stocks = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 







// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer ce stocks')){
    this.stocksService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='stock supprimée avec success';
    }, error =>{
      console.log(error);
    });
  }

}

search(){     
  
  let st=[];
  this.stocksService.liste().subscribe( (data:Stock[]) => {
   this.stocks=data;
   for(var i:number = 1; i<this.stocks.length; i++){
    if(
      this.stocks[i].magasin_id==this.stock.magasin_id ||
      this.stocks[i].produit_id==this.stock.produit_id 

      )      
      st.push(this.stocks[i]);
      console.log(JSON.stringify(this.stocks[i])); 
   }
   
   this.stocks=st; 
  
  
    //prods=data;      
   
  }, error => {
    console.log(error);
    this.message='il ya un erreur';
  });
  
  
  
    } 


}
