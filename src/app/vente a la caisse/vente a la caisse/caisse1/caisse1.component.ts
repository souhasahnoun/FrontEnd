import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Caisse } from 'src/app/CLASSES/caisse';
import { Client } from 'src/app/CLASSES/client';
import { Produit } from 'src/app/CLASSES/produit';
import { Stock } from 'src/app/CLASSES/stock';
import { Tva } from 'src/app/CLASSES/tva';
import { TvasService } from 'src/app/SERVICES/service tva/tvas.service';
import { StocksService } from 'src/app/SERVICES/service stock/stocks.service';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { CaissesService } from 'src/app/SERVICES/service caisse/caisses.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse1.component.html',
  styleUrls: ['./caisse1.component.css']
})
export class Caisse1Component implements OnInit {

  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;
  private supportedProduits: FormArray = new FormArray([]);
  private produitSubscription: Subscription;
  API = 'http://localhost:8000/api';
  prod:string;
  code:string;
  caisses: Caisse[];
  
  caisse: Caisse ={
    date:null,
    cloture:0,
    montant_final:null,
    login:null,
    fond_caisse:null,
    utilisateur_id:null,
    magasin_id:null,
    client_id:null,
  
   };
   clientss: Client[];
   client: Client ={
     code_clt:"21100",
     raison_social:null,
     email:null,
     site_web:null,
     tel:null,
     gsm:null,
     personne_contacter:null,
     fax:null,
     adresse:null,
     date_aff: null,
     etat:0,
     mf:null,
     rc:null,
     archive:0,
     type:null,
     timbre:null,
     plafond:null,
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
  
     stocks: Stock[];
     stock: Stock ={
      QteStock:null,
      produit_id:null,
      magasin_id:null
      
      };
   message:string
   tvas: Tva[];
   tva: Tva ={
     taux:null,
     
    
    };
    constructor(private tvasService :TvasService,private stocksService :StocksService, private produitsService :ProduitsService,private clientsService :ClientsService,private caissesService :CaissesService,private httpClient:HttpClient) { 
      this.tvasService.liste().subscribe( (data:Tva[]) => {
        this.tvas= data;
      }, error => {
        console.log(error);
        this.message='Erreur';
      });
  
      
      this.caissesService.liste().subscribe( (data:Caisse[]) => {
        this.caisses= data;
      }, error => {
        console.log(error);
        this.message='Erreur';
      });
      this.clientsService.liste().subscribe( (data:Client[]) => {
        this.clientss= data;
      }, error => {
        console.log(error);
        this.message='Erreur';
      });
      this.produitsService.liste().subscribe( (data:Produit[]) => {
        console.log(data);
        this.produitss= data;
      }, error => {
        console.log(error);
        this.message='il ya un erreur';
      });
  
      this.stocksService.liste().subscribe( (data:Stock[]) => {
        this.stocks= data;
      }, error => {
        console.log(error);
        this.message='Erreur';
      });
    }
  
    ngOnInit(): void {
      this.fetchDefaultSupportedClients();
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
    fetchDefaultSupportedClients() {
      this.clientSubscription = this.httpClient.get(this.API + '/clients').subscribe(
        (response) => {
          const data = response;
          this.supportedClients = this.createFormArrayForClients(data);
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
       * @param fetchedClients
       */
    
      createFormArrayForClients(fetchedClients: any): FormArray {
        let clients = new FormArray([]);
        console.log('fetchedClients length: ' + fetchedClients.length);
        for (let entry in fetchedClients) {
          console.log(fetchedClients[entry]);
          clients.push(new FormControl(fetchedClients[entry]));
        }
        return clients;
      }
      //pour le champs select
      get clients(): FormArray {
        return this.supportedClients as FormArray;
      }
      onSelectType(htmlElement: any) {
        let element = htmlElement;
        console.log('element id: ' + element.value);
      } 

}
