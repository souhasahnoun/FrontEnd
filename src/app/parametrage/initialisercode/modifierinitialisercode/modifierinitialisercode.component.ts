import { Component, OnInit } from '@angular/core';
import { Code } from 'src/app/CLASSES/code';
import { CodesService } from 'src/app/SERVICES/service code/codes.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifierinitialisercode',
  templateUrl: './modifierinitialisercode.component.html',
  styleUrls: ['./modifierinitialisercode.component.css']
})
export class ModifierinitialisercodeComponent implements OnInit {

  codes: Code[];
  code: Code ={
    num:null,
    annee:null,
    magasin_id:null,

   
   };
  
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private codesService :CodesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.codesService.liste().subscribe((data: Code[]) =>{
        this.codes= data;
       this.code = this.codes.find((m) => {return m.id == this.id});
       console.log(this.code);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  





modifierCode(){
  // fonction modifier
  if (this.modif){
    this.codesService.modifier(this.code).subscribe(data => {

      this.message='code modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
  reset(){
  
    this.code.num=null
    this.code.annee=null
    this.code.magasin_id=null
   
    
  }
  
  ngOnInit() { 
    

  }

}
