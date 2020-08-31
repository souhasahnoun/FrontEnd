import { Component, OnInit } from '@angular/core';
import { Marque } from '../../../CLASSES/marque';
import { MarquesService } from 'src/app/SERVICES/service marque/marques.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifiermarques',
  templateUrl: './modifiermarques.component.html',
  styleUrls: ['./modifiermarques.component.css']
})
export class ModifiermarquesComponent implements OnInit {

  API = 'http://localhost:8000/api';
  
  marques: Marque[];
 
message:string;
  marque: Marque ={
    libelle:null,
    logo:null,
    etat:0,
   
   };
  id: any;
  modif: boolean = false;
  constructor(private marquesService :MarquesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.marquesService.liste().subscribe((data: Marque[]) =>{
        this.marques= data;
       this.marque = this.marques.find((m) => {return m.id == this.id});
       console.log(this.marque);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  

}


modifierMarque(){
  // fonction modifier
  if (this.modif){
    this.marquesService.modifier(this.marque).subscribe(data => {

     this.message='marque modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }

  reset(){
    this.marque.libelle=null,
    this.marque.logo=null
  }
}
