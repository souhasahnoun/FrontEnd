import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProduitsService } from 'src/app/SERVICES/service produit/produits.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/CLASSES/produit';

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent implements OnInit {

  private supportedCategories: FormArray = new FormArray([]);
  private categorieSubscription: Subscription;

  private supportedFamilles: FormArray = new FormArray([]);
  private familleSubscription: Subscription;

  private supportedMarques: FormArray = new FormArray([]);
  private marqueSubscription: Subscription;

  private supportedTvas: FormArray = new FormArray([]);
  private tvaSubscription: Subscription;
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
   
  
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private produitsService :ProduitsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.produitsService.liste().subscribe((data: Produit[]) =>{
        this.produits= data;
       this.produit = this.produits.find((m) => {return m.id == this.id});
       console.log(this.produit);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  





modifierProduit(){
  // fonction modifier
  if (this.modif){
    this.produitsService.modifier(this.produit).subscribe(data => {

      this.message='produit modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
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
  
  
  ngOnInit() { 
    
    this.fetchDefaultSupportedCategories();
  this.fetchDefaultSupportedMarques();
  this.fetchDefaultSupportedFamilles();
  this.fetchDefaultSupportedTvas();
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
     * @param fetchedCategories
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
    //pour le champs select
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    } 

}

