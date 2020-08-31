import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/CLASSES/region';
import { RegionsService } from 'src/app/SERVICES/service region/regions.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modifierregion',
  templateUrl: './modifierregion.component.html',
  styleUrls: ['./modifierregion.component.css']
})
export class ModifierregionComponent implements OnInit {
  API = 'http://localhost:8000/api';
  
  regions: Region[];
 
message:string;
region: Region ={
    libelle:"",

   };

  id: any;
  modif: boolean = false;
  constructor(private regionsService :RegionsService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.regionsService.liste().subscribe((data: Region[]) =>{
        this.regions= data;
       this.region = this.regions.find((m) => {return m.id == this.id});
       console.log(this.region);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  

}


modifierRegion(){
  // fonction modifier
  if (this.modif){
    this.regionsService.modifier(this.region).subscribe(data => {

      this.message='region modifiée avc success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur'
    });
  }
  }

  reset(){
    this.region.libelle=null
   
  }

}
