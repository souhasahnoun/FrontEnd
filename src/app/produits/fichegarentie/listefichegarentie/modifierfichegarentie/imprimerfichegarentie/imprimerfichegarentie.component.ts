import { Component, OnInit } from '@angular/core';
import { Garentie } from 'src/app/CLASSES/garentie';
import { GarentiesService } from 'src/app/SERVICES/service fichegarentie/garenties.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprimerfichegarentie',
  templateUrl: './imprimerfichegarentie.component.html',
  styleUrls: ['./imprimerfichegarentie.component.css']
})
export class ImprimerfichegarentieComponent implements OnInit {

  API = 'http://localhost:8000/api';
  garenties: Garentie[];  
  id:number;
  imp: boolean = false;
  garentie: Garentie ={
    num:null,
    nom:null,
    date:null,
    tel	:null,
    piece:null,
    accessoire:null,
    panne:null,
    tache:null,
    prix:null,
    recu_par:null,
    etat:0,
    utilisateur_id:null,
    login:null,
    magasin_id:null,
   };

  constructor(private garentiesService :GarentiesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {  
    this.id= this.activatedRoute.snapshot.params['id'];
    // pour afficher liste
    if(this.id){
      this.imp = true;
      this.garentiesService.liste().subscribe((data: Garentie[]) =>{
        this.garenties= data;
       this.garentie = this.garenties.find((m) => {return m.id == this.id});
       console.log(this.garentie);
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



