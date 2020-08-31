import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Inventaire } from 'src/app/CLASSES/inventaire';
import { Produit } from 'src/app/CLASSES/produit';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { InventairesService } from 'src/app/SERVICES/service inventaire/inventaires.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-imprimerinventaire2',
  templateUrl: './imprimerinventaire2.component.html',
  styleUrls: ['./imprimerinventaire2.component.css'],
  providers: [DatePipe]
})
export class Imprimerinventaire2Component implements OnInit {

  myDate = new Date();
  inventaires: Inventaire[];
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
  inventaire: Inventaire ={
   QteStock:null,
   date:null,
   login:null,
   produit_id:null,
   magasin_id:null
   
   };
   
  constructor(private produitsService :ProduitsService,private inventairesService :InventairesService, private httpClient:HttpClient,private datePipe: DatePipe) {  
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
    // pour afficher liste
    this.produitsService.liste().subscribe( (data:Produit[]) => {
      this.produits= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });
    
    this.inventairesService.liste().subscribe( (data:Inventaire[]) => {
      this.inventaires= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}
    
    ngOnInit(): void {
    }

}
