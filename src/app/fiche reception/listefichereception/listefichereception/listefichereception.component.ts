import { Component, OnInit } from '@angular/core';
import { Reception } from 'src/app/CLASSES/reception';
import { ReceptionsService } from 'src/app/SERVICES/service reception/receptions.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-listefichereception',
  templateUrl: './listefichereception.component.html',
  styleUrls: ['./listefichereception.component.css']
})
export class ListefichereceptionComponent implements OnInit {
  private supportedCasiers: FormArray = new FormArray([]);
  private casierSubscription: Subscription;
  private supportedReceptions: FormArray = new FormArray([]);
  private receptionSubscription: Subscription;
 term;
  allItems: any[];
  message:string;
  pager: any = {};
  API = 'http://localhost:8000/api';
  receptionss: Reception[];
  reception: Reception={
  num:null,
  date:null,
  piece:null,
  accessoire:null,
  nom:null,
  tel:null,
  recu_par:null,
  panne:null,
  tache:null,
  prix:null,
  code:null,
  avance:null,
  type:null,
  etat_pay:null,
  etat:null,
  login:null,
  client_id:null,
  casier_id:null,
  magasin_id:null,
  contact_clt:null,
  affect:null,
  partde:null,
  frais:null,
  designation:null,
  
  }
  id:number;
  constructor(private receptionsService :ReceptionsService, private httpClient:HttpClient, private pagerService: PagerService) {  
    // pour afficher liste
    this.receptionsService.liste().subscribe( (data:Reception[]) => {
      this.receptionss= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });}

  ngOnInit(): void {
    this.fetchDefaultSupportedCasiers();
    this.fetchDefaultSupportedReceptions();
    this.receptionsService.liste().subscribe( (data:Reception[]) => {
  
      this.allItems=data;
        // initialize to page 1
        this.setPage(1);
    });
  }

  fetchDefaultSupportedCasiers() {
    this.casierSubscription = this.httpClient.get(this.API + '/casiers').subscribe(
      (response) => {
        const data = response;
        this.supportedCasiers = this.createFormArrayForCasiers(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }
  /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedCasiers
   */

  createFormArrayForCasiers(fetchedCasiers: any): FormArray {
    let casiers = new FormArray([]);
    console.log('fetchedCasiers length: ' + fetchedCasiers.length);
    for (let entry in fetchedCasiers) {
      console.log(fetchedCasiers[entry]);
      casiers.push(new FormControl(fetchedCasiers[entry]));
    }
    return casiers;
  }
  //pour le champs select
  get casiers(): FormArray {
    return this.supportedCasiers as FormArray;
  }


  fetchDefaultSupportedReceptions() {
    this.receptionSubscription = this.httpClient.get(this.API + '/receptions').subscribe(
      (response) => {
        const data = response;
        this.supportedReceptions = this.createFormArrayForReceptions(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }
  /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedReceptions
   */

  createFormArrayForReceptions(fetchedReceptions: any): FormArray {
    let receptions = new FormArray([]);
    console.log('fetchedReceptions length: ' + fetchedReceptions.length);
    for (let entry in fetchedReceptions) {
      console.log(fetchedReceptions[entry]);
      receptions.push(new FormControl(fetchedReceptions[entry]));
    }
    return receptions;
  }
  //pour le champs select
  get receptions(): FormArray {
    return this.supportedReceptions as FormArray;
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
    this.receptionss = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 

  supprimer(id){
    if (confirm('vous etes sur de supprimer cette fiche de reception')){
      this.receptionsService.supprimer(id).subscribe(data => {
        
        console.log(data);
        this.message='fiche de reception supprimee avec success';
      }, error =>{
        console.log(error);
        this.message='Erreur';
      });
    }
  
  }
  search(){     
  
    let f=[];
    this.receptionsService.liste().subscribe( (data:Reception[]) => {
     this.receptionss=data;
     for(var i:number = 1; i<this.receptionss.length; i++){
      if(
     
        this.receptionss[i].date==this.reception.date ||
        this.receptionss[i].casier_id==this.reception.casier_id || 
        this.receptionss[i].affect==this.reception.affect 
      
  
        )      
        f.push(this.receptionss[i]);
        console.log(JSON.stringify(this.receptionss[i])); 
     }
     
     this.receptionss=f; 
    
    
      //prods=data;      
     
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    
    
    
      } 
}





