import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Casier } from 'src/app/CLASSES/casier';
import { CasiersService } from 'src/app/SERVICES/service casier/casiers.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service';

@Component({
  selector: 'app-casiers',
  templateUrl: './casiers.component.html',
  styleUrls: ['./casiers.component.css'],
})
export class CasiersComponent implements OnInit {
 
   // property which will hold the data for the <select> <option>
   private supportedMagasins: FormArray = new FormArray([]);
   private magasinSubscription: Subscription;
 
 
   API = 'http://localhost:8000/api';
   
   casiers: Casier[];
   term;
  
   allItems: any[];
   pager: any = {};
   casier: Casier ={
    
    num:null,
     date:null,
     login:"admin",
     magasin_id:null,
    };
    message:string;
   modif: boolean = false;
   id: any;
  
 
   
 constructor(private casiersService :CasiersService, private httpClient:HttpClient,private pagerService: PagerService ) { 
  
                   // pour afficher liste
                   this.casiersService.liste().subscribe( (data:Casier[]) => {
                       this.casiers= data;
                     }, error => {
                       console.log(error);
                       this.message='Erreur';
                     });
 
 }
 
 
  
 
 ngOnInit() { 
   // Fetch list of hero to be used in drop down and keep it as an instance veriable.
  //pour le champs select
  this.fetchDefaultSupportedMagasins();
  

    //pour le pagination
   this.casiersService.liste().subscribe( (data:Casier[]) => {
   
     this.allItems=data;
       // initialize to page 1
       this.setPage(1);
   });
 
 }
  //pour le champs select
  fetchDefaultSupportedMagasins() {
    this.magasinSubscription = this.httpClient.get(this.API + '/magasins').subscribe(
      (response) => {
        const data = response;
        this.supportedMagasins = this.createFormArrayForMagasins(data);
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
     * @param fetchedMagasins
     */
  
    createFormArrayForMagasins(fetchedMagasins: any): FormArray {
      let magasins = new FormArray([]);
      console.log('fetchedMagasins length: ' + fetchedMagasins.length);
      for (let entry in fetchedMagasins) {
        console.log(fetchedMagasins[entry]);
        magasins.push(new FormControl(fetchedMagasins[entry]));
      }
      return magasins;
    }
    //pour le champs select
    get magasins(): FormArray {
      return this.supportedMagasins as FormArray;
    }
    //pour le champs select
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    }
   
   
    //pour le pagination
 setPage(page: number) {
   if (page < 1 || page > this.pager.totalPages) {
       return;
   }
 
   // get pager object from service
   this.pager = this.pagerService.getPager(this.allItems.length, page);
 
   // get current page of items
   this.casiers = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
 } 
 
 ajouterCase(){
 
     console.log(this.casier);
      
       this.casiersService.ajouter(this.casier).subscribe(data => {
       
         this.message='casier ajoutée avec success';
         console.log(data);
       }, error =>{
         console.log(error);
 
         this.message='Erreur';
       });
     }
 
   
 
 
 
 
 
 // supprimer
 supprimer(id){
   if (confirm('vous etes sur de supprimer ce casier')){
     this.casiersService.supprimer(id).subscribe(data => {
       
       console.log(data);
       this.message='casier supprimee avec success';
     }, error =>{
       console.log(error);
       this.message='Erreur';
     });
   }
 
 }
 
 reset(){
   this.casier.num=null
   this.casier.date=null
   this.casier.magasin_id=null
 
   
 }
 
 
 }


