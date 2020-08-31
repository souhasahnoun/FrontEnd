import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { SouchesService } from 'src/app/SERVICES/service souche/souches.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Souche } from 'src/app/CLASSES/souche';

@Component({
  selector: 'app-modifiersouches',
  templateUrl: './modifiersouches.component.html',
  styleUrls: ['./modifiersouches.component.css']
})
export class ModifiersouchesComponent implements OnInit {

  private supportedBanques: FormArray = new FormArray([]);
  private banqueSubscription: Subscription;
  API = 'http://localhost:8000/api';
  souches: Souche[];
  souche: Souche ={
    num:null,
    du:null,
    au:null,
    banque_id:null,
    etat:0,
   };
  
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private souchesService :SouchesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.souchesService.liste().subscribe((data: Souche[]) =>{
        this.souches= data;
       this.souche = this.souches.find((m) => {return m.id == this.id});
       console.log(this.souche);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  





modifierSouche(){
  // fonction modifier
  if (this.modif){
    this.souchesService.modifier(this.souche).subscribe(data => {

      this.message='souche modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
  reset(){
  
    this.souche.banque_id=null
    this.souche.etat=null
    this.souche.num=null
    this.souche.du=null
    this.souche.au=null
    
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
 //pour le champs select
 /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedBanques
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
  //pour le champs select
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  }
  ngOnInit() { 
    this.fetchDefaultSupportedBanques();

  }


}
