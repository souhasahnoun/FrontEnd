import { Component, OnInit } from '@angular/core';
import { Tva } from 'src/app/CLASSES/tva';
import { TvasService } from 'src/app/SERVICES/service tva/tvas.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES/pager.service'
@Component({
  selector: 'app-gerertva',
  templateUrl: './gerertva.component.html',
  styleUrls: ['./gerertva.component.css']
})
export class GerertvaComponent implements OnInit {

  
  message:string;
  allItems: any[];
  
  pager: any = {};
  tvas: Tva[];
  tva: Tva ={
    taux:null,
    
   
   };

   
modifiedtext:any;
  modif: boolean = false;
  id: number;
  term;

  constructor(private tvasService :TvasService, private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.tvasService.liste().subscribe( (data:Tva[]) => {
    this.tvas= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}



ngOnInit() { 
  
  this.tvasService.liste().subscribe( (data:Tva[]) => {
  
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
  this.tvas = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 
ajouterT(){

    console.log(this.tva);
      this.tvasService.ajouter(this.tva).subscribe(data => {
      
        this.message='tva ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }






// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer ce tva')){
    this.tvasService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='tva supprimée avec success';
    }, error =>{
      console.log(error);
    });
  }

}

reset(){
  this.tva.taux=null
 
}


}
