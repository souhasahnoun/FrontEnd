import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Tracabilitestock } from 'src/app/CLASSES/tracabilitestock';
import { Produit } from 'src/app/CLASSES/produit';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { TracabilitestocksService } from 'src/app/SERVICES/service tracabilitestock/tracabilitestocks.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imprimermvstock',
  templateUrl: './imprimermvstock.component.html',
  styleUrls: ['./imprimermvstock.component.css'],
  providers: [DatePipe]
})
export class ImprimermvstockComponent implements OnInit {

  
  myDate = new Date();
  tracabilitestocks: Tracabilitestock[];
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
  tracabilitestock: Tracabilitestock ={
   module:null,
   operation:null,
  qtestock:null,
  qte:null,
  created:this.myDate,
   login:null,
   produit_id:null,
   magasin_id:null
   
   };
   
  constructor(private produitsService :ProduitsService,private tracabilitestocksService :TracabilitestocksService, private httpClient:HttpClient,private datePipe: DatePipe) {  
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
    // pour afficher liste
    this.produitsService.liste().subscribe( (data:Produit[]) => {
      this.produits= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });
    
    this.tracabilitestocksService.liste().subscribe( (data:Tracabilitestock[]) => {
      this.tracabilitestocks= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}
    
    ngOnInit(): void {
    }

}
