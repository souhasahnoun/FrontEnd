import { Component, OnInit } from '@angular/core';
import { Paiementpersonel } from 'src/app/CLASSES/paiementpersonel';
import { PaiementpersonelsService } from 'src/app/SERVICES/service paiementpersonel/paiementpersonels.service';
import { Personel } from 'src/app/CLASSES/personel';
import { PersonelsService } from 'src/app/SERVICES/service personel/personels.service';

@Component({
  selector: 'app-paiementpersonelexcel',
  templateUrl: './paiementpersonelexcel.component.html',
  styleUrls: ['./paiementpersonelexcel.component.css']
})
export class PaiementpersonelexcelComponent implements OnInit {

  message:string;
  paiementpersonels: Paiementpersonel[];
  id:number;
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

  constructor(private personelsService :PersonelsService,private paiementpersonelsService :PaiementpersonelsService) {  
    this.paiementpersonelsService.liste().subscribe( (data:Paiementpersonel[]) => {
    this.paiementpersonels= data;
  }, error => {
    console.log(error);
    this.message=' erreur';
  });
  this.personelsService.liste().subscribe( (data:Personel[]) => {
    this.personelss= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
}
  ngOnInit(): void {
  }


}
