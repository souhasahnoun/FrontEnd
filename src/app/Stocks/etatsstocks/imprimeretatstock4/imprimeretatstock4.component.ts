import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Stock } from 'src/app/CLASSES/stock';
import { Produit } from 'src/app/CLASSES/produit';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { StocksService } from 'src/app/SERVICES/service stock/stocks.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-imprimeretatstock4',
  templateUrl: './imprimeretatstock4.component.html',
  styleUrls: ['./imprimeretatstock4.component.css'],
  providers: [DatePipe]
})
export class Imprimeretatstock4Component implements OnInit {

  myDate = new Date();
  stocks: Stock[];
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
  stock: Stock ={
   QteStock:null,
   produit_id:null,
   magasin_id:null
   
   };
   
  constructor(private produitsService :ProduitsService,private stocksService :StocksService, private httpClient:HttpClient,private datePipe: DatePipe) {  
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
    // pour afficher liste
    this.produitsService.liste().subscribe( (data:Produit[]) => {
      this.produits= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });
    
    this.stocksService.liste().subscribe( (data:Stock[]) => {
      this.stocks= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}
    
    ngOnInit(): void {
    }


}

