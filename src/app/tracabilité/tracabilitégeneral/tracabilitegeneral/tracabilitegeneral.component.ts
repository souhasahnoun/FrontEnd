import { Component, OnInit } from '@angular/core';
import { Tracabilite } from 'src/app/CLASSES/tracabilite';
import { TracabilitesService } from 'src/app/SERVICES/service tracabilite/tracabilites.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracabilitegeneral',
  templateUrl: './tracabilitegeneral.component.html',
  styleUrls: ['./tracabilitegeneral.component.css']
})
export class TracabilitegeneralComponent implements OnInit {

  private supportedTracabilites: FormArray = new FormArray([]);
  private tracabiliteSubscription: Subscription;
  allItems: any[];
  message:string;
  pager: any = {};
  API = 'http://localhost:8000/api';
  tracabilitess: Tracabilite[];
tracabilite:Tracabilite={
  login:null,
  date:null,
  time:null,
  objet:null,
  action:null
}
  id:number;
  constructor(private tracabilitesService :TracabilitesService, private httpClient:HttpClient, private pagerService: PagerService) {  
    // pour afficher liste
    this.tracabilitesService.liste().subscribe( (data:Tracabilite[]) => {
      this.tracabilitess= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });}

  ngOnInit(): void {
    this.fetchDefaultSupportedTracabilites();
    this.tracabilitesService.liste().subscribe( (data:Tracabilite[]) => {
  
      this.allItems=data;
        // initialize to page 1
        this.setPage(1);
    });
  }

  fetchDefaultSupportedTracabilites() {
    this.tracabiliteSubscription = this.httpClient.get(this.API + '/tracabilites').subscribe(
      (response) => {
        const data = response;
        this.supportedTracabilites = this.createFormArrayForTracabilites(data);
      },
      (error) => {
        console.log('error: ' + error);
      }
    );
  }
  /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedTracabilites
   */

  createFormArrayForTracabilites(fetchedTracabilites: any): FormArray {
    let tracabilites = new FormArray([]);
    console.log('fetchedTracabilites length: ' + fetchedTracabilites.length);
    for (let entry in fetchedTracabilites) {
      console.log(fetchedTracabilites[entry]);
      tracabilites.push(new FormControl(fetchedTracabilites[entry]));
    }
    return tracabilites;
  }
  //pour le champs select
  get tracabilites(): FormArray {
    return this.supportedTracabilites as FormArray;
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
    this.tracabilitess = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 

  search(){     
  
    let f=[];
    this.tracabilitesService.liste().subscribe( (data:Tracabilite[]) => {
     this.tracabilitess=data;
     for(var i:number = 1; i<this.tracabilitess.length; i++){
      if(
     
        this.tracabilitess[i].login==this.tracabilite.login ||
        this.tracabilitess[i].date==this.tracabilite.date ||
        this.tracabilitess[i].objet==this.tracabilite.objet 
      
  
        )      
        f.push(this.tracabilitess[i]);
        console.log(JSON.stringify(this.tracabilitess[i])); 
     }
     
     this.tracabilitess=f; 
    
    
      //prods=data;      
     
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });
    
    
    
      } 

}
