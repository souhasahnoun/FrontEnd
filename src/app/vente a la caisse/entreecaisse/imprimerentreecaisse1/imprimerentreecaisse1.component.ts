import { Component, OnInit } from '@angular/core';
import { Entreecaisse } from 'src/app/CLASSES/entreecaisse';
import { EntreecaissesService } from 'src/app/SERVICES/service entreecaisse/entreecaisses.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprimerentreecaisse1',
  templateUrl: './imprimerentreecaisse1.component.html',
  styleUrls: ['./imprimerentreecaisse1.component.css']
})
export class Imprimerentreecaisse1Component implements OnInit {

  API = 'http://localhost:8000/api';
  
  id:number;
  imp: boolean = false;
  entreecaisses: Entreecaisse[];
  
  entreecaisse: Entreecaisse ={
    montant:null,
    type:null,
    date:null,
    designation:null,
    beneficiaire:null,
    num_cheque:null,
    banque:null,
    login:null,
    caisse_id:null,
   };

  constructor(private entreecaissesService :EntreecaissesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {  
    this.id= this.activatedRoute.snapshot.params['id'];
    // pour afficher liste
    if(this.id){
      this.imp = true;
      this.entreecaissesService.liste().subscribe((data: Entreecaisse[]) =>{
        this.entreecaisses= data;
       this.entreecaisse = this.entreecaisses.find((m) => {return m.id == this.id});
       console.log(this.entreecaisse);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.imp = false;
    }


  }

  ngOnInit(): void {
  }

}

