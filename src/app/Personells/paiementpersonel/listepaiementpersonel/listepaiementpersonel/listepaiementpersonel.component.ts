import { Component, OnInit } from '@angular/core';
import { Paiementpersonel } from 'src/app/CLASSES/paiementpersonel';
import { PaiementpersonelsService } from 'src/app/SERVICES/service paiementpersonel/paiementpersonels.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Personel } from 'src/app/CLASSES/personel';
import { PersonelsService } from 'src/app/SERVICES/service personel/personels.service';

@Component({
  selector: 'app-listepaiementpersonel',
  templateUrl: './listepaiementpersonel.component.html',
  styleUrls: ['./listepaiementpersonel.component.css']
})
export class ListepaiementpersonelComponent implements OnInit {
  private supportedPersonels: FormArray = new FormArray([]);
  private personelSubscription: Subscription;
  term;
  allItems: any[];
  message:string;
  pager: any = {};
  API = 'http://localhost:8000/api';
  paiementpersonels: Paiementpersonel[];
  paiementpersonel: Paiementpersonel ={
    montant:null,
    date:null,
    date_salaire	:null,
    remarque:null,
    personnel_id:null,
    magasin_id:null,
    login:null,
   };
   personelss: Personel[];
  
   personel: Personel ={
     nom:null,
     prenom:null,
     tel:null,
     adresse:null,
     dateNaiss:null,
     salaire:null,
     cin:null,
     login:null,
     magasin_id:null,
     utilisateur_id:null
    };
  id:number;
  constructor(private personelsService :PersonelsService,private paiementpersonelsService :PaiementpersonelsService, private httpClient:HttpClient, private pagerService: PagerService) {  
    // pour afficher liste
    this.paiementpersonelsService.liste().subscribe( (data:Paiementpersonel[]) => {
      this.paiementpersonels= data;
    }, error => {
      console.log(error);
      this.message='erreur';
    });
    this.personelsService.liste().subscribe( (data:Personel[]) => {
      this.personelss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
  }

  ngOnInit(): void {
    this.fetchDefaultSupportedPersonels();
    this.paiementpersonelsService.liste().subscribe( (data:Paiementpersonel[]) => {
  
      this.allItems=data;
        // initialize to page 1
        this.setPage(1);
    });
  }

  fetchDefaultSupportedPersonels() {
    this.personelSubscription = this.httpClient.get(this.API + '/personels').subscribe(
      (response) => {
        const data = response;
        this.supportedPersonels = this.createFormArrayForPersonels(data);
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
     * @param fetchedPersonels
     */
  
    createFormArrayForPersonels(fetchedPersonels: any): FormArray {
      let personels = new FormArray([]);
      console.log('fetchedPersonels length: ' + fetchedPersonels.length);
      for (let entry in fetchedPersonels) {
        console.log(fetchedPersonels[entry]);
        personels.push(new FormControl(fetchedPersonels[entry]));
      }
      return personels;
    }
    //pour le champs select
    get personels(): FormArray {
      return this.supportedPersonels as FormArray;
    }

    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    } 
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
  
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
  
    // get current page of items
    this.paiementpersonels = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 

  supprimer(id){
    if (confirm('vous etes sur de supprimer cette paiement personel')){
      this.paiementpersonelsService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='paiement personel supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }
  search(){     
  
    let p=[];
    this.paiementpersonelsService.liste().subscribe( (data:Paiementpersonel[]) => {
     this.paiementpersonels=data;
     for(var i:number = 1; i<this.paiementpersonels.length; i++){
      if(
     
        this.paiementpersonels[i].personnel_id==this.paiementpersonel.personnel_id ||
        this.paiementpersonels[i].date==this.paiementpersonel.date 
       
  
        )      
        p.push(this.paiementpersonels[i]);
        console.log(JSON.stringify(this.paiementpersonels[i])); 
     }
     
     this.paiementpersonels=p; 
    
    
      //prods=data;      
     
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    
    
    
      } 
}

