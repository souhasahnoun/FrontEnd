import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Produit } from 'src/app/CLASSES/produit';
import { HttpClient } from '@angular/common/http';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { Tva } from 'src/app/CLASSES/tva';
import { TvasService } from 'src/app/SERVICES/service tva/tvas.service';
import { Famille } from 'src/app/CLASSES/famille';
import { FamillesService } from 'src/app/SERVICES/service famille/familles.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

 
  private supportedCategories: FormArray = new FormArray([]);
  private categorieSubscription: Subscription;

  private supportedFamilles: FormArray = new FormArray([]);
  private familleSubscription: Subscription;

  private supportedMarques: FormArray = new FormArray([]);
  private marqueSubscription: Subscription;

  private supportedTvas: FormArray = new FormArray([]);
  private tvaSubscription: Subscription;

  private supportedUnites: FormArray = new FormArray([]);
  private uniteSubscription: Subscription;

  API = 'http://localhost:8000/api';
  tvass: Tva[];
  tva: Tva ={
    taux:null,   
   
   };
  taux:number;
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
   
   familless: Famille[];


   famille: Famille ={
     libelle:null,
     etat:0,
     merg_ben:null,
     categorie_id:null,
     prix:null,
    };
   message:string;
  modif: boolean = false;
  id: any;
  

  constructor(private famillesService :FamillesService,private tvasService :TvasService,private produitsService :ProduitsService, private httpClient:HttpClient) { 
    this.famillesService.liste().subscribe( (data:Famille[]) => {
      this.familless= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    this.tvasService.liste().subscribe(  (data:Tva[]) => {
      this.tvass= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
  // pour afficher liste
  this.produitsService.liste().subscribe( (data:Produit[]) => {
    this.produits= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}
/*
  //pour le champs select
  onSelectType1(htmlElement: any) {
    let element = htmlElement; 
    let i=0;
    let tva:Tva=this.tvass[i]; 
    console.log('tva',tva);
    while (tva.id!=this.tva.id){    
      i++;  
      tva=this.tvass[i]; 
      console.log('tva',tva);
    }    
    this.produit.tva_id=this.tva.id; 
    this.calculer();
  } 
*/
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  
  } 

  affect(){
    if(this.produit.categorie_id = this.famille.categorie_id){
      this.produit.famille_id = this.famille.id
    }
  }

calculer(){   
 
    if(!isNaN(this.tva.taux))
    this.produit.tva_id=this.tva.id;    
    if(!isNaN(this.produit.prix_achat))
    this.produit.prix_achat=this.produit.prix_achat;
    if(!isNaN(this.produit.mrg_ben_pub))
    this.produit.mrg_ben_pub=this.produit.mrg_ben_pub;
    if(!isNaN(this.produit.mrg_ben_rev))
  this.produit.mrg_ben_rev=this.produit.mrg_ben_rev;
     // this.produit.prixf =30*(1 +6.3/100)*(1 + 10/100);
  /**
   * isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true
   */
  if(!isNaN(this.produit.prix_achat)   && !isNaN(this.produit.mrg_ben_pub) && !isNaN(this.produit.mrg_ben_rev)){ 
    this.produit.prixf=this.produit.prix_achat*(1 +this.tva.taux/100)*(1 + this.produit.mrg_ben_pub/100);
    this.produit.prixfrev=this.produit.prix_achat*(1 +this.tva.taux/100)*(1 + this.produit.mrg_ben_rev/100);

    console.log('taux',this.tva.taux);
    console.log('prix_achat',this.produit.prix_achat);
    console.log('mrg_ben_pub',this.produit.mrg_ben_pub);
    console.log('mrg_ben_rev',this.produit.mrg_ben_rev);

    console.log('produit',this.produit);
  } 
 
}
/*calculer1(){   
 
  if(!isNaN(this.tva.taux))
  this.produit.tva_id=this.tva.id;    
  if(!isNaN(this.produit.prix_achat))
  this.produit.prix_achat=this.produit.prix_achat;
  if(!isNaN(this.produit.mrg_ben_rev))
  this.produit.mrg_ben_rev=this.produit.mrg_ben_rev;

if(!isNaN(this.produit.prix_achat)   && !isNaN(this.produit.mrg_ben_rev) ){ 
  this.produit.prixfrev=this.produit.prix_achat*(1 +this.tva.taux/100)*(1 + this.produit.mrg_ben_rev/100);
  console.log('taux',this.tva.taux);
  console.log('prix_achat',this.produit.prix_achat);
  console.log('mrg_ben_rev',this.produit.mrg_ben_rev);
 
  console.log('produit',this.produit);
} 

}*/
ngOnInit() { 
 
  this.fetchDefaultSupportedCategories();
  this.fetchDefaultSupportedMarques();
  this.fetchDefaultSupportedFamilles();
  this.fetchDefaultSupportedTvas();
  this.fetchDefaultSupportedUnites();

}

fetchDefaultSupportedCategories() {
  this.categorieSubscription = this.httpClient.get(this.API + '/categories').subscribe(
    (response) => {
      const data = response;
      this.supportedCategories = this.createFormArrayForCategories(data);
    },
    (error) => {
      console.log('error: ' + error);
    }
  );
}

fetchDefaultSupportedUnites() {
  this.uniteSubscription = this.httpClient.get(this.API + '/unites').subscribe(
    (response) => {
      const data = response;
      this.supportedUnites = this.createFormArrayForUnites(data);
    },
    (error) => {
      console.log('error: ' + error);
    }
  );
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
   * @param fetchedUnites
   */

  createFormArrayForUnites(fetchedUnites: any): FormArray {
    let unites = new FormArray([]);
    console.log('fetchedUnites length: ' + fetchedUnites.length);
    for (let entry in fetchedUnites) {
      console.log(fetchedUnites[entry]);
      unites.push(new FormControl(fetchedUnites[entry]));
    }
    return unites;
  }
  //pour le champs select
  get unites(): FormArray {
    return this.supportedUnites as FormArray;
  }


 //pour le champs select
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
   * @param fetchedCategories
   */

  createFormArrayForCategories(fetchedCategories: any): FormArray {
    let categories = new FormArray([]);
    console.log('fetchedCategories length: ' + fetchedCategories.length);
    for (let entry in fetchedCategories) {
      console.log(fetchedCategories[entry]);
      categories.push(new FormControl(fetchedCategories[entry]));
    }
    return categories;
  }
  //pour le champs select
  get categories(): FormArray {
    return this.supportedCategories as FormArray;
  }

  
  

 //pour le champs select
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


ajouterProd(){
 
    console.log(this.produit);
      this.produitsService.ajouter(this.produit).subscribe(data => {
     
        this.message='produit ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }

  

newunit(){
  var unit=prompt ("Saisir une nouvelle entrée");
}



// supprimer


reset(){
  
  this.produit.designation=null
  this.produit.ref_prod=null
  this.produit.code=null
  this.produit.nom_prod=null
  this.produit.mrg_ben_pub=null
  this.produit.stk_alert=null
  this.produit.unite_id=null
  this.produit.image=null
  this.produit.tva_id=null
  this.produit.ristourne=null
  
  this.produit.points=null
  this.produit.mrg_ben_rev=null
  this.produit.prixf=null
  this.produit.prixfrev=null
  this.produit.prixrispub=null
  this.produit.prixrisrev=null
  this.produit.prix_min=null
  this.produit.prix_revient=null
  this.produit.prix_achat=null
  this.produit.marque_id=null
  this.produit.categorie_id=null
  this.produit.famille_id=null
}


}
