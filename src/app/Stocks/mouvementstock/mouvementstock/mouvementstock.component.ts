import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/SERVICES/service stock/stocks.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { HttpClient } from '@angular/common/http';
import { Stock } from 'src/app/CLASSES/stock';

@Component({
  selector: 'app-mouvementstock',
  templateUrl: './mouvementstock.component.html',
  styleUrls: ['./mouvementstock.component.css']
})
export class MouvementstockComponent implements OnInit {
  private supportedProduits: FormArray = new FormArray([]);
  private produitSubscription: Subscription;
  API = 'http://localhost:8000/api';
  stocks: Stock[];
  stock: Stock ={
   QteStock:null,
   produit_id:null,
   magasin_id:null
   
   };
   message:string;
  constructor(private stocksService :StocksService, private produitsService :ProduitsService,private httpClient:HttpClient) { 
    this.stocksService.liste().subscribe( (data:Stock[]) => {
      this.stocks= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
  }

  ngOnInit(): void {
    this.fetchDefaultSupportedProduits();

  }

  fetchDefaultSupportedProduits() {
    this.produitSubscription = this.httpClient.get(this.API + '/produits').subscribe(
      (response) => {
        const data = response;
        this.supportedProduits= this.createFormArrayForProduits(data);
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
}
