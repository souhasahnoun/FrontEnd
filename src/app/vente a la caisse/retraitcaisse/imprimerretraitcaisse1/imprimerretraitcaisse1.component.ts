import { Component, OnInit } from '@angular/core';
import { Retraitcaisse } from 'src/app/CLASSES/retraitcaisse';
import { RetraitcaissesService } from 'src/app/SERVICES/service retraitcaisse/retraitcaisses.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprimerretraitcaisse1',
  templateUrl: './imprimerretraitcaisse1.component.html',
  styleUrls: ['./imprimerretraitcaisse1.component.css']
})
export class Imprimerretraitcaisse1Component implements OnInit {

  API = 'http://localhost:8000/api';
  
  id:number;
  imp: boolean = false;
  retraitcaisses: Retraitcaisse[];
  
  retraitcaisse: Retraitcaisse ={
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

  constructor(private retraitcaissesService :RetraitcaissesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {  
    this.id= this.activatedRoute.snapshot.params['id'];
    // pour afficher liste
    if(this.id){
      this.imp = true;
      this.retraitcaissesService.liste().subscribe((data: Retraitcaisse[]) =>{
        this.retraitcaisses= data;
       this.retraitcaisse = this.retraitcaisses.find((m) => {return m.id == this.id});
       console.log(this.retraitcaisse);
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
