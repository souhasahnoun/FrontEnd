import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Caisse } from 'src/app/CLASSES/caisse';
import { CaissesService } from 'src/app/SERVICES/service caisse/caisses.service';
import { Client } from 'src/app/CLASSES/client';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { Produit } from 'src/app/CLASSES/produit';
import { Ligneticket } from 'src/app/CLASSES/ligneticket';
import { LigneticketsService } from 'src/app/SERVICES/service ticket/lignetickets.service';
import { Stock } from 'src/app/CLASSES/stock';
import { StocksService } from 'src/app/SERVICES/service stock/stocks.service';
import { Tva } from 'src/app/CLASSES/tva';
import { TvasService } from 'src/app/SERVICES/service tva/tvas.service';
import { Ticket } from 'src/app/CLASSES/ticket';
import { TicketsService } from 'src/app/SERVICES/service ticket/tickets.service';
import { DatePipe } from '@angular/common';
import { Utilisateur } from 'src/app/CLASSES/utilisateur';
import { UtilisateursService } from 'src/app/SERVICES/service utilisateur/utilisateurs.service';
import { any } from 'underscore';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.css'],
  providers: [DatePipe]
})
export class CaisseComponent implements OnInit {
  myDate = new Date();

private supportedClients: FormArray = new FormArray([]);
private clientSubscription: Subscription;
private supportedProduits: FormArray = new FormArray([]);
private produitSubscription: Subscription;
private supportedBanques: FormArray = new FormArray([]);
private banqueSubscription: Subscription;
API = 'http://localhost:8000/api';
prod:string;
code:string;
totalttc:number;
utilisateurs: Utilisateur[];

utilisateur: Utilisateur ={
 designation:null,
 login:null,
 password:null,
 retaper_password:null,
  magasin_id:null,
 };
caisses: Caisse[];

caisse: Caisse ={
  date:null,
  cloture:0,
  montant_final:0,
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
  searchList: Array<Produit>=[]; 
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

  tickets: Ticket[];
  
  ticket: Ticket ={
    code:0,
    date:this.myDate,
    recu:null,
    rendre:0,
    login:null,
    magasin_id:0,
    document_id:0,
    caisse_id:0,
    type_reg:null,
    date_reception:this.myDate,
    etat:0,
   };
   reglementclts: Reglementclt[];

   reglementclt: Reglementclt ={
     date:null,
     mode:null,
     num:null,
     etat:null,
     montant:null,
     type_pay:null,
     client:null,
     banque:null,
     date_echeance:null,
     etat_ch:null,
     etat_traite:null,
     type_date:null,
     type_traite:null,
     solder:null,
     non_solder:null,
     impression:null,
     
     
    };
 nbrtotal=0;
  constructor(private reglementcltsService :ReglementcltsService,private utilisateursService :UtilisateursService,private datePipe: DatePipe,private ticketsService :TicketsService,private tvasService :TvasService,private stocksService :StocksService, private produitsService :ProduitsService,private clientsService :ClientsService,private caissesService :CaissesService,private httpClient:HttpClient) { 
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh:mm:ss'); 
    this.utilisateursService.liste().subscribe( (data:Utilisateur[]) => {
      this.utilisateurs= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
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
  calculerRendre(){   
 
    if(!isNaN(this.ticket.recu)  )
    this.ticket.recu=this.ticket.recu;    
  
   
  
  if(!isNaN(this.ticket.recu) ){ 
    this.ticket.rendre=this.ticket.recu - this.prixTTC;
  
  } 
  
  }

  //pour le champs select
  get produits(): FormArray {
    return this.supportedProduits as FormArray;
  }
 
 
   
     
  produit_ids:String[] =[]; 
  quantites:Stock[] =[]; 
  prixTTC:number=0; 
calculer(){
if(this.prod){
  this.produit_ids.push(this.prod.toString() );
 
  let ids="";
  if(this.produit_ids.length==0){
    ids=this.produit_ids[0].toString();
  }else {   
    ids+=this.produit_ids[0].toString();
     for (let i = 1; i < this.produit_ids.length; i++) {
      ids+="_"+this.produit_ids[i].toString();       
     }
  }

  console.log('ids :',ids);
  console.log('this.produitss[k].id :',this.produitss[0].id);  
  this.prixTTC=0;
  for (let k = 0; k < this.produitss.length; k++) {
      if(this.produit_ids.includes(this.produitss[k].id.toString())){
        this.searchList[k]=this.produitss[k]; 
        for (let f = 0; f < this.stocks.length; f++) {
          if(this.produitss[k].id==this.stocks[f].produit_id){
            this.quantites[k]=this.stocks[k]; 
            this.prixTTC+= this.quantites[k].QteStock* this.produitss[k].prix_achat;
          }
      }
            
    } 
  }
}
  if (this.code) {
    this.produit_ids.push(this.code.toString() );
 
  let ids="";
  if(this.produit_ids.length==0){
    ids=this.produit_ids[0].toString();
  }else {   
    ids+=this.produit_ids[0].toString();
     for (let i = 1; i < this.produit_ids.length; i++) {
      ids+="_"+this.produit_ids[i].toString();       
     }
  }

  console.log('ids :',ids);
  console.log('this.produitss[k].code :',this.produitss[0].code);  
  this.prixTTC=0;
  for (let k = 0; k < this.produitss.length; k++) {
      if(this.produit_ids.includes(this.produitss[k].code.toString())){
        this.searchList[k]=this.produitss[k]; 
        for (let f = 0; f < this.stocks.length; f++) {
          if(this.produitss[k].id==this.stocks[f].produit_id){
            this.quantites[k]=this.stocks[k]; 
            this.prixTTC+= this.quantites[k].QteStock* this.produitss[k].prix_achat;
          }
      }
            
    } 
  }
  }

} 
listToDelerte:number[]=[]; 
prod_checked:Boolean=false;
 updataListToDelete(i){ 
  console.log('listToDelerte',this.listToDelerte);
  if(this.prod_checked){
    this.listToDelerte = this.listToDelerte.filter(obj => obj !== i);    
    console.log('listToDelerte',this.listToDelerte);
  }
 
 
 }
 
removeFromList(){ 
 this.listToDelerte.forEach(index => {
  this.listToDelerte.splice(index, 1);
  this.quantites.splice(index, 1);
  this.produitss.splice(index, 1);
 });
  console.log('listToDelerte',this.listToDelerte);
}

 

  /*
  if(!isNaN(this.stock.QteStock)  )
  this.stock.QteStock=this.stock.QteStock;    

  if(!isNaN(this.produit.prix_achat)  )
  this.produit.prix_achat=this.produit.prix_achat; 

if(!isNaN(this.totalttc) && !isNaN(this.stock.QteStock) && !isNaN(this.produit.prix_achat)){ 

  this.totalttc=this.stock.QteStock*this.produit.prix_achat;
  this.caisse.montant_final= this.caisse.montant_final+this.totalttc;
  console.log(this.caisse.montant_final);
  //this.nbrtotal= this.caisse.montant_final;
} */


  ValiderTicket(){
 
    console.log(this.ticket);
      this.ticketsService.ajouter(this.ticket).subscribe(data => {
     
        alert('ticket ajoutée avec success');
        console.log(data);
      }, error =>{
        console.log(error);

        alert('Erreur');
      });
    }
    ValiderReg(){
 
      console.log(this.reglementclt);
        this.reglementcltsService.ajouter(this.reglementclt).subscribe(data => {
       
          console.log('reglement ajoutée avec success');
          console.log(data);
        }, error =>{
          console.log(error);
  
          alert('Erreur');
        });
      }
  ngOnInit(): void {

  this.ticket.code = this.ticket.code+1;
    this.fetchDefaultSupportedClients();
    this.fetchDefaultSupportedProduits();
    this.fetchDefaultSupportedBanques();
  }
  fetchDefaultSupportedBanques() {
    this.banqueSubscription = this.httpClient.get(this.API + '/banques').subscribe(
      (response) => {
        const data = response;
        this.supportedBanques= this.createFormArrayForBanques(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
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
     * @param fetchedBanques
     */
  
    createFormArrayForBanques(fetchedBanques: any): FormArray {
      let banques = new FormArray([]);
      console.log('fetchedProduits length: ' + fetchedBanques.length);
      for (let entry in fetchedBanques) {
        console.log(fetchedBanques[entry]);
        banques.push(new FormControl(fetchedBanques[entry]));
      }
      return banques;
    }
    //pour le champs select
    get banques(): FormArray {
      return this.supportedBanques as FormArray;
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
