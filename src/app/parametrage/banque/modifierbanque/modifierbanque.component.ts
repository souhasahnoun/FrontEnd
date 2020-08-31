import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {BanquesService } from 'src/app/SERVICES/service banque/banques.service';
import { Banque } from 'src/app/CLASSES/banque';

@Component({
  selector: 'app-modifierbanque',
  templateUrl: './modifierbanque.component.html',
  styleUrls: ['./modifierbanque.component.css']
})
export class ModifierbanqueComponent implements OnInit {
  banques: Banque[];
  banque: Banque ={
   
    libelle:null,
    rib:null,
    titulaire_cheque:null,
    titulaire_traite:null,
    adresse:null
   };


   message:string;
  modif: boolean = false;
  id: any;
  constructor(private banquesService :BanquesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.banquesService.liste().subscribe((data: Banque[]) =>{
        this.banques= data;
       this.banque = this.banques.find((m) => {return m.id == this.id});
       console.log(this.banque);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  

}


modifierBanque(){
  // fonction modifier
  if (this.modif){
    this.banquesService.modifier(this.banque).subscribe(data => {

      this.message='banque modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
  reset(){
    this.banque.libelle=null
    this.banque.adresse=null
    this.banque.titulaire_cheque=null
    this.banque.titulaire_traite=null
    
  }
}
