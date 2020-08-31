import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/CLASSES/region';
import { RegionsService } from 'src/app/SERVICES/service region/regions.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service'
@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regions: Region[];


  region: Region ={
    libelle:"",

   };

   message:string;
modifiedtext:any;
  modif: boolean = false;
  id: number;
  term;
  allItems: any[];
  
  pager: any = {};

  constructor(private regionsService :RegionsService, private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.regionsService.liste().subscribe( (data:Region[]) => {
    this.regions= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}



ngOnInit() { 
  this.regionsService.liste().subscribe( (data:Region[]) => {
  
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
  this.regions = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 
ajouterR(){

    console.log(this.region);
      this.regionsService.ajouter(this.region).subscribe(data => {
      
        this.message='Region ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }






// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cet region')){
    this.regionsService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='region supprimée avec success';
    }, error =>{
      console.log(error);
    });
  }

}

reset(){
  this.region.libelle=null
 
}


}