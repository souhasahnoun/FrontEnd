import { Component, OnInit } from '@angular/core';
import { FournisseursService } from 'src/app/SERVICES/service fournisseur/fournisseurs.service';
import { Fournisseur } from '../../../CLASSES/fournisseur';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-imprimerfournisseur',
  templateUrl: './imprimerfournisseur.component.html',
  styleUrls: ['./imprimerfournisseur.component.css'],
  providers: [DatePipe]
})
export class ImprimerfournisseurComponent implements OnInit {
  API = 'http://localhost:8000/api';
  fournisseurs: Fournisseur[];
  myDate = new Date();
  id:number;
  constructor(private fournisseursService :FournisseursService, private httpClient:HttpClient,private datePipe: DatePipe) {  
   this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
    // pour afficher liste
    this.fournisseursService.liste().subscribe( (data:Fournisseur[]) => {
      this.fournisseurs= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}

  ngOnInit(): void {
  }

}
