import { Component, OnInit } from '@angular/core';
import { Paiementpersonel } from 'src/app/CLASSES/paiementpersonel';
import { PaiementpersonelsService } from 'src/app/SERVICES/service paiementpersonel/paiementpersonels.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Personel } from 'src/app/CLASSES/personel';
import { PersonelsService } from 'src/app/SERVICES/service personel/personels.service';

@Component({
  selector: 'app-imprimerpaiementpersonel1',
  templateUrl: './imprimerpaiementpersonel1.component.html',
  styleUrls: ['./imprimerpaiementpersonel1.component.css']
})
export class Imprimerpaiementpersonel1Component implements OnInit {

  API = 'http://localhost:8000/api';
  personelss: Personel[];
  
   personel: Personel ={
     nom:null,
     prenom:null,
     tel:null,
     adresse:null,
     dateNaiss:null,
     salaire:null,
     cin:null,
     login:null,
     magasin_id:null,
     utilisateur_id:null
    };
  id:number;
  imp: boolean = false;
  paiementpersonels: Paiementpersonel[];
  
  paiementpersonel: Paiementpersonel ={
    montant:null,
    date:null,
    date_salaire	:null,
    remarque:null,
    personnel_id:null,
    magasin_id:null,
    login:null,
   };
   message:string;
  constructor(private personelsService :PersonelsService,private paiementpersonelsService :PaiementpersonelsService,  private httpClient:HttpClient, private activatedRoute: ActivatedRoute) {  
    this.id= this.activatedRoute.snapshot.params['id'];
    // pour afficher liste
    if(this.id){
      this.imp = true;
      this.paiementpersonelsService.liste().subscribe((data: Paiementpersonel[]) =>{
        this.paiementpersonels= data;
       this.paiementpersonel = this.paiementpersonels.find((m) => {return m.id == this.id});
       console.log(this.paiementpersonel);
      }, (error)=>{
        console.log(error);
        
      });
      this.personelsService.liste().subscribe( (data:Personel[]) => {
        this.personelss= data;
      }, error => {
        console.log(error);
        this.message='Erreur';
      });
    } else {
      this.imp = false;
    }


  }

  ngOnInit(): void {
  }

}

