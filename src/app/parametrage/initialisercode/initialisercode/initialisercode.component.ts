import { Component, OnInit } from '@angular/core';
import { Code } from 'src/app/CLASSES/code';
import { CodesService } from 'src/app/SERVICES/service code/codes.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-initialisercode',
  templateUrl: './initialisercode.component.html',
  styleUrls: ['./initialisercode.component.css']
})
export class InitialisercodeComponent implements OnInit {
  API = 'http://localhost:8000/api';

  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;
  codes: Code[];
  message:string;
  allItems: any[];
  
  pager: any = {};
  code: Code ={
    num:null,
    annee:null,
    magasin_id:null,

   
   };

   
modifiedtext:any;
  modif: boolean = false;
  id: number;
  term;

  constructor(private codesService :CodesService, private httpClient:HttpClient, private pagerService: PagerService) { 


  // pour afficher liste
  this.codesService.liste().subscribe( (data:Code[]) => {
    this.codes= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}



ngOnInit() { 
  this.fetchDefaultSupportedMagasins();

  this.codesService.liste().subscribe( (data:Code[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });
}

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
  
setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.codes = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 
ajouterT(){

    console.log(this.code);
      this.codesService.ajouter(this.code).subscribe(data => {
      
        this.message='code ajoutée avec success';
        console.log(data);
      }, error =>{
        console.log(error);

        this.message='Erreur';
      });
    }






// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer ce code')){
    this.codesService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='code supprimée avec success';
    }, error =>{
      console.log(error);
    });
  }

}

reset(){
  this.code.num=null
  this.code.annee=null
  this.code.magasin_id=null
}


}
