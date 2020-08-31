import { Component, OnInit } from '@angular/core';
import { Ordrepaiement } from 'src/app/CLASSES/ordrepaiement';
import { PagerService } from 'src/app/SERVICES/pager.service';
import { HttpClient } from '@angular/common/http';
import { OrdrepaiementsService } from 'src/app/SERVICES/service ordrepaiement/ordrepaiements.service';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
@Component({
  selector: 'app-etatordrepaiement',
  templateUrl: './etatordrepaiement.component.html',
  styleUrls: ['./etatordrepaiement.component.css']
})
export class EtatordrepaiementComponent implements OnInit {
  ordrepaiements: Ordrepaiement[];
  term;
  ordrepaiement: Ordrepaiement ={
    
    num:null,
    date:null,
    login:null,
    created:null,
    montant:null,
   };
   modif: boolean = false;
   id: number;
   
   allItems: any[];
   message:string;
   pager: any = {};
   paiementfrss: Paiementfrs[];

  constructor(private paiementsfrsService :PaiementsfrsService,private ordrepaiementsService :OrdrepaiementsService,private httpClient:HttpClient, private pagerService: PagerService) { 
    this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
      this.paiementfrss= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    // pour afficher liste
  this.ordrepaiementsService.liste().subscribe( (data:Ordrepaiement[]) => {
    this.ordrepaiements= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
  }

  ngOnInit(): void {
    this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
  
      this.allItems=data;
        // initialize to page 1
        this.setPage(1);
    });
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
  
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
  
    // get current page of items
    this.paiementfrss = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 

  ajouterOrdre(){

    console.log(this.ordrepaiement);
      this.ordrepaiementsService.ajouter(this.ordrepaiement).subscribe(data => {
      
        this.message='ordre paiement ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }
    search(){     
  
      let f=[];
      this.ordrepaiementsService.liste().subscribe( (data:Ordrepaiement[]) => {
       this.ordrepaiements=data;
       for(var i:number = 1; i<this.ordrepaiements.length; i++){
        if(
       
          this.ordrepaiements[i].date==this.ordrepaiement.date 
         
        
    
          )      
          f.push(this.ordrepaiements[i]);
          console.log(JSON.stringify(this.ordrepaiements[i])); 
       }
       
       this.ordrepaiements=f; 
      
      
        //prods=data;      
       
      }, error => {
        console.log(error);
        this.message='il ya un erreur';
      });
      
      
      
        } 
        reset(){
          this.ordrepaiement.date=null
         
        
        
        }
}
