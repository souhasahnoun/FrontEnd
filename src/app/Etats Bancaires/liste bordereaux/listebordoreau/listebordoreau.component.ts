import { Component, OnInit } from '@angular/core';
import { Lignebordereau } from 'src/app/CLASSES/lignebordereau';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { LignebordereauxService } from 'src/app/SERVICES/service bordereau/lignebordereaux.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { Bordereaux } from 'src/app/CLASSES/bordereaux';
import { BorderauxService } from 'src/app/SERVICES/service bordereau/borderaux.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listebordoreau',
  templateUrl: './listebordoreau.component.html',
  styleUrls: ['./listebordoreau.component.css']
})
export class ListebordoreauComponent implements OnInit {
  private supportedBanques: FormArray = new FormArray([]);
  private banqueSubscription: Subscription;
  borderaux: Bordereaux[];
  term;
  bordereau: Bordereaux ={
    num:null,
    type:null,
    banque_id:null,
    date:null,
    created:null,
    login:null,
   
   };
   API = 'http://localhost:8000/api';

   modif: boolean = false;
   id: number;
   
   allItems: any[];
   message:string;
   pager: any = {};
   reglementclts: Reglementclt[];
   reglementclt: Reglementclt ={
    date:null,
    mode:null,
    num:null,
    etat:0,
    montant:0,
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
   lignebordereaux: Lignebordereau[];
   lignebordereau: Lignebordereau ={
    
    reglementcls_id:null,
    source:null,
    source_id:null,
    montant:null,
    rs:null,
    num:null,
    type:null,
    banque:null,
    date:null,
    etat:null,
    type_ch:null,
    created:null,
    login:null,
    bordereaus_id:null,
   };
  constructor(private ligneborderauxService :LignebordereauxService,private reglementcltsService :ReglementcltsService,private borderauxService :BorderauxService,private httpClient:HttpClient, private pagerService: PagerService) { 
    this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
      this.reglementclts= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    // pour afficher liste
  this.borderauxService.liste().subscribe( (data:Bordereaux[]) => {
    this.borderaux= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  this.ligneborderauxService.liste().subscribe( (data:Lignebordereau[]) => {
    this.lignebordereaux= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  }

  ngOnInit(): void {
    this.fetchDefaultSupportedBanques();
    this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
  
      this.allItems=data;
        // initialize to page 1
        this.setPage(1);
    });
  }
  fetchDefaultSupportedBanques() {
    this.banqueSubscription = this.httpClient.get(this.API + '/banques').subscribe(
      (response) => {
        const data = response;
        this.supportedBanques = this.createFormArrayForBanques(data);
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

  createFormArrayForBanques(fetchedBanques: any): FormArray {
    let banques = new FormArray([]);
    console.log('fetchedBanques length: ' + fetchedBanques.length);
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
    this.reglementclts = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 

  search(){     
  
    let f=[];
    this.borderauxService.liste().subscribe( (data:Bordereaux[]) => {
     this.borderaux=data;
     for(var i:number = 1; i<this.borderaux.length; i++){
      if(
     
        this.borderaux[i].banque_id==this.bordereau.banque_id ||
        this.borderaux[i].date==this.bordereau.date 
       
      
  
        )      
        f.push(this.borderaux[i]);
        console.log(JSON.stringify(this.borderaux[i])); 
     }
     
     this.borderaux=f; 
    
    
      //prods=data;      
     
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    
    
    
      } 
      reset(){
        this.bordereau.banque_id=null
        this.bordereau.date=null
       
      
      
      }
  
}
