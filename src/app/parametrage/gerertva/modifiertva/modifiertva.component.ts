import { Component, OnInit } from '@angular/core';
import { Tva } from 'src/app/CLASSES/tva';
import { TvasService } from 'src/app/SERVICES/service tva/tvas.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifiertva',
  templateUrl: './modifiertva.component.html',
  styleUrls: ['./modifiertva.component.css']
})
export class ModifiertvaComponent implements OnInit {

  API = 'http://localhost:8000/api';
  
  tvas: Tva[];
  message:string;

  tva: Tva ={
    
    taux:null,
   
   };

  id: any;
  modif: boolean = false;
  constructor(private tvasService :TvasService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.tvasService.liste().subscribe((data: Tva[]) =>{
        this. tvas= data;
       this. tva = this. tvas.find((m) => {return m.id == this.id});
       console.log(this. tva);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  

}


modifierTva(){
  // fonction modifier
  if (this.modif){
    this.tvasService.modifier(this. tva).subscribe(data => {

      this.message='tva modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }

  reset(){
    this. tva.taux=null
   
  }
}
